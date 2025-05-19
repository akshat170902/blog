import { useRouter } from "next/router";
import Head from "next/head";
import BlogHero from "../../components/blogs/BlogHero";
import BlogCard from "../../components/blogs/BlogCard";
import {
  BlogMainSection,
  BlogMainWrapper,
  BlogContentCol,
  BlogContentTitle,
  BlogContentBody,
  BlogSidebar,
  BlogSidebarTitle,
  SectionContainer,
} from "../../components/blogs/BlogPage.styled";
import Divider from "../../components/blogs/Divider";
import Image from "next/image";
import React from "react";

function ImageSlider({ images }) {
  const [current, setCurrent] = React.useState(0);
  const total = images.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  if (!Array.isArray(images) || total === 0) return null;

  return (
    <div style={{ width: "100%", position: "relative", aspectRatio: 3 }}>
      <Image
        src={images[current]}
        alt={`blog-image-${current}`}
        width={100}
        height={100}
        style={{ width: "100%", height: "100%" }}
      />
      {total > 1 && (
        <>
          <button
            onClick={prev}
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.7)",
              border: "none",
              borderRadius: "50%",
              width: 32,
              height: 32,
              cursor: "pointer",
            }}
            aria-label="Previous image"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.7)",
              border: "none",
              borderRadius: "50%",
              width: 32,
              height: 32,
              cursor: "pointer",
            }}
            aria-label="Next image"
          >
            &#8594;
          </button>
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(0,0,0,0.4)",
              color: "#fff",
              borderRadius: 8,
              padding: "2px 8px",
              fontSize: 12,
            }}
          >
            {current + 1} / {total}
          </div>
        </>
      )}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:4000/blogs/${params.id}`);
  const blog = await res.json();

  const resPopular = await fetch("http://localhost:4000/blogs");
  const allBlogs = await resPopular.json();

  const blogArray = Array.isArray(allBlogs.data) ? allBlogs.data : [];
  const popularBlogs = blogArray.slice(0, 3);

  return { props: { blog, popularBlogs } };
}

export default function BlogPage({ blog, popularBlogs }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <BlogHero
        title="Loading..."
        subtitle=""
        brand="Travmigoz"
        scrollAnimate={true}
      />
    );
  }

  if (!blog || blog?.message === "Not found") {
    return (
      <BlogHero
        title="Blog not found."
        subtitle=""
        brand="Travmigoz"
        scrollAnimate={true}
      />
    );
  }

  return (
    <>
      <Head>
        <title>{blog?.seo?.title || "Blog"}</title>
        <meta
          name="description"
          content={blog?.seo?.description || "Travmigoz Blog"}
        />
      </Head>
      <BlogHero
        title={blog?.seo?.title}
        subtitle={`By ${blog.author || "Unknown"}${
          blog.date ? ` | ${new Date(blog.date).toLocaleDateString()}` : ""
        }`}
        brand="Travmigoz"
        scrollAnimate={true}
        image={blog?.hero?.image}
        imageAlt={blog?.hero?.imageAlt || blog?.seo?.title || "Blog Hero Image"}
      />
      <BlogMainSection>
        <BlogMainWrapper>
          <BlogContentCol>
            <BlogContentTitle>{blog.hero?.h1 || blog.title}</BlogContentTitle>
            <BlogContentBody>
              {blog.hero?.description || blog.desc}
            </BlogContentBody>
          </BlogContentCol>
          <Divider
            direction="vertical"
            height="auto"
            width="1px"
            color="#AFAFAF"
            margin="0 5%"
            style={{ minHeight: "200px" }}
          />
          <BlogSidebar>
            <BlogSidebarTitle>Most Popular</BlogSidebarTitle>
            <Divider
              direction="horizontal"
              width="120px"
              height="0px"
              color="#AFAFAF"
              margin="0 auto"
            />
            {popularBlogs.map((b) => (
              <BlogCard key={b._id || b.id} blog={b} image={b.image} />
            ))}
          </BlogSidebar>
        </BlogMainWrapper>

        <SectionContainer>
          {blog?.sections?.map((section, index) => (
            <React.Fragment key={index}>
              <BlogContentTitle>
                {section.h1 || "Why do we use it?"}
              </BlogContentTitle>
              <BlogContentBody>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      section.content ||
                      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                  }}
                />
              </BlogContentBody>
              <div
                style={{
                  color: "transparent",
                  aspectRatio: 3,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {Array.isArray(section?.images) && section.images.length > 0 ? (
                  <ImageSlider images={section.images} />
                ) : (
                  <></>
                )}
              </div>
            </React.Fragment>
          ))}
        </SectionContainer>
      </BlogMainSection>
    </>
  );
}
