import Link from "next/link";

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
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
        <p>Blog not found.</p>
        <Link href="/blogs" legacyBehavior>
          <a>Back to Blogs</a>
        </Link>
      </div>
    );
  }
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
      <h1>{blog.title}</h1>
      <p style={{ color: "#666" }}>{blog.desc || blog.description}</p>
      <div style={{ margin: "2rem 0" }}>
        <p>{blog.content}</p>
      </div>
      <Link href="/blogs" legacyBehavior>
        <a>← Back to Blogs</a>
      </Link>
    </div>
  );
}
