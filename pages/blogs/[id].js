import { useRouter } from "next/router";
import BlogHero from "../../components/blogs/BlogHero";
import {
  BlogMainSection,
  BlogMainWrapper,
  BlogContentCol,
  BlogContentTitle,
  BlogContentBody,
  BlogSidebar,
  BlogSidebarTitle,
  BlogSidebarCard,
  BlogSidebarCardInfo,
} from "../../components/blogs/BlogPage.styled";

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://680cbd742ea307e081d4e50f.mockapi.io/blogs/getBlogById/${params.id}`
  );
  const blog = await res.json();
  return { props: { blog } };
}

export default function BlogPage({ blog }) {
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
              {blog.content || blog.desc || blog.description}
            </BlogContentBody>
          </BlogContentCol>
          <BlogSidebar>
            <BlogSidebarTitle>Most Popular</BlogSidebarTitle>
            <BlogSidebarCard bg="/woman-hand-holding-camera-standing-top-rock-nature-travel-concept.jpg">
              <BlogSidebarCardInfo>
                Travel Tips - How I Plan My Trips
              </BlogSidebarCardInfo>
            </BlogSidebarCard>
            <BlogSidebarCard bg="/boatman-punting-boat-river-arashiyama-autumn-season-along-river-kyoto-japan.jpg">
              <BlogSidebarCardInfo>
                Travel Tips - How I Plan My Trips
              </BlogSidebarCardInfo>
            </BlogSidebarCard>
            <BlogSidebarCard bg="/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand.jpg">
              <BlogSidebarCardInfo>
                Travel Tips - How I Plan My Trips
              </BlogSidebarCardInfo>
            </BlogSidebarCard>
          </BlogSidebar>
        </BlogMainWrapper>
      </BlogMainSection>
    </>
  );
}
