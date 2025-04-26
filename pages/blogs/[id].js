import Link from "next/link";
import { Container, Title, Desc, BackLink } from "../../styles/BlogStyles";

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
  return (
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
  );
}
