import { useRouter } from "next/router";
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
} from "../../components/blogs/BlogPage.styled";
import Divider from "../../components/blogs/Divider";

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://680cbd742ea307e081d4e50f.mockapi.io/blogs/getBlogById/${params.id}`
  );
  const blog = await res.json();
  return { props: { blog } };
}

export default function BlogPage({ blog }) {
  const router = useRouter();

  const popularBlogs = [
    {
      id: "popular-1",
      title: "Travel Tips - How I Plan My Trips",
      author: "Bhawna Sharma",
      desc: "A slow journey through Himachal’s tea stalls and trails.",
      image:
        "/woman-hand-holding-camera-standing-top-rock-nature-travel-concept.jpg",
    },
    {
      id: "popular-2",
      title: "Boatman Punting in Kyoto",
      author: "Akshat",
      desc: "Experience the autumn season along the river in Kyoto, Japan.",
      image:
        "/boatman-punting-boat-river-arashiyama-autumn-season-along-river-kyoto-japan.jpg",
    },
    {
      id: "popular-3",
      title: "Viewpoint at Koh Nangyuan",
      author: "Bhawna Sharma",
      desc: "Beautiful girl standing at the viewpoint, Koh Nangyuan Island.",
      image:
        "/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand.jpg",
    },
  ];

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
      <BlogHero
        title={blog.title}
        subtitle={`By ${blog.author || "Unknown"}${
          blog.date ? ` | ${new Date(blog.date).toLocaleDateString()}` : ""
        }`}
        brand="Travmigoz"
        scrollAnimate={true}
      />
      <BlogMainSection>
        <BlogMainWrapper>
          <BlogContentCol>
            <BlogContentTitle>{blog.title}</BlogContentTitle>
            <BlogContentBody>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like).(injected humour and the like).(injected humour and
              {/* {blog.content || blog.desc || blog.description} */}
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
              <BlogCard key={b.id} blog={b} image={b.image} />
            ))}
          </BlogSidebar>
        </BlogMainWrapper>

        {blog?.sections?.map((section, index) => (
          <div key={index}>
            <BlogContentTitle>{section.title}</BlogContentTitle>
            <BlogContentBody>
              {section.content || section.desc || section.description}
            </BlogContentBody>
          </div>
        ))}
      </BlogMainSection>
    </>
  );
}
