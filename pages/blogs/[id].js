import Link from "next/link";
import { Container, Title, Desc, BackLink } from "../../styles/BlogStyles";
import Head from "next/head";

// Fetch a single blog by ID (SSR)
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://680cbd742ea307e081d4e50f.mockapi.io/blogs/getBlogById/${params.id}`
  );
  const blog = await res.json();
  return { props: { blog } };
}

// Blog detail page
export default function BlogDetail({ blog }) {
  if (!blog || !blog.id) {
    return (
      <Container>
        <p>Blog not found.</p>
        <Link href="/blogs" legacyBehavior>
          <BackLink>Back to Blogs</BackLink>
        </Link>
      </Container>
    );
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.desc || blog.description,
    url: `https://yourdomain.com/blogs/${blog.id}`,
    articleBody: blog.content,
  };

  return (
    <>
      <Head>
        <title>{blog.title} | Akshat Blog</title>
        <meta name="description" content={blog.desc || blog.description} />
        <meta property="og:title" content={blog.title} />
        <meta
          property="og:description"
          content={blog.desc || blog.description}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://yourdomain.com/blogs/${blog.id}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Container>
        <Title>{blog.title}</Title>
        <Desc>{blog.desc || blog.description}</Desc>
        <div style={{ margin: "2rem 0" }}>
          <p>{blog.content}</p>
        </div>
        <Link href="/blogs" legacyBehavior>
          <BackLink>← Back to Blogs</BackLink>
        </Link>
      </Container>
    </>
  );
}
