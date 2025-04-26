import Link from "next/link";
import Head from "next/head";
import {
  Container,
  BlogList,
  BlogItem,
  BlogLink,
  BlogDesc,
} from "../../styles/BlogsListStyles";

// Fetch all blogs from the API on each request (SSR)
export async function getServerSideProps() {
  const res = await fetch(
    "https://680cbd742ea307e081d4e50f.mockapi.io/blogs/getBlogById"
  );
  const blogs = await res.json();
  return { props: { blogs } };
}

// Blog list page
export default function BlogsPage({ blogs }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "All Blogs",
    url: "https://yourdomain.com/blogs",
    blogPost: blogs?.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.desc || blog.description || "",
      url: `https://yourdomain.com/blogs/${blog.id}`,
    })),
  };

  return (
    <>
      <Head>
        <title>All Blogs | Akshat Blog</title>
        <meta
          name="description"
          content="Browse all blog posts on Akshat Blog."
        />
        <meta property="og:title" content="All Blogs | Akshat Blog" />
        <meta
          property="og:description"
          content="Browse all blog posts on Akshat Blog."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/blogs" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Container>
        <h1>All Blogs</h1>
        <BlogList>
          {blogs && blogs.length > 0 ? (
            blogs.map((blog) => (
              <BlogItem key={blog.id}>
                <Link href={`/blogs/${blog.id}`} legacyBehavior>
                  <BlogLink>{blog.title}</BlogLink>
                </Link>
                <BlogDesc>{blog.desc || blog.description || ""}</BlogDesc>
              </BlogItem>
            ))
          ) : (
            <BlogItem>No blogs found.</BlogItem>
          )}
        </BlogList>
      </Container>
    </>
  );
}
