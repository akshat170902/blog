import { useRouter } from "next/router";
import {
  BlogHero,
  BlogHeroImage,
  BlogHeroOverlay,
  BlogHeroContent,
  BlogHeroTitle,
  BlogHeroMeta,
  BlogBrand,
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
      <BlogHero>
        <BlogHeroOverlay />
        <BlogHeroContent>
          <BlogHeroTitle>Loading...</BlogHeroTitle>
        </BlogHeroContent>
      </BlogHero>
    );
  }

  if (!blog || blog?.message === "Not found") {
    return (
      <BlogHero>
        <BlogHeroOverlay />
        <BlogHeroContent>
          <BlogHeroTitle>Blog not found.</BlogHeroTitle>
        </BlogHeroContent>
      </BlogHero>
    );
  }

  return (
    <>
      <BlogHero>
        <BlogHeroImage
          src={
            blog.image ||
            "/backpacker-explores-intricate-alleyways-jodhpur39s-blue-city-india-experiencing-vibrant-colors-cultural-richness.jpg"
          }
          alt={blog.title}
        />
        <BlogHeroOverlay />
        <BlogBrand>Travmigoz</BlogBrand>
        <BlogHeroContent>
          <BlogHeroTitle>{blog.title}</BlogHeroTitle>
          <BlogHeroMeta>
            By {blog.author || "Unknown"}
            {blog.date && ` | ${new Date(blog.date).toLocaleDateString()}`}
          </BlogHeroMeta>
        </BlogHeroContent>
      </BlogHero>
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
