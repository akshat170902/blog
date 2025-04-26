import Link from "next/link";

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
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
      <h1>All Blogs</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <li
              key={blog.id}
              style={{
                marginBottom: "1.5rem",
                borderBottom: "1px solid #eee",
                paddingBottom: "1rem",
              }}
            >
              <Link href={`/blogs/${blog.id}`} legacyBehavior>
                <a
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#0070f3",
                  }}
                >
                  {blog.title}
                </a>
              </Link>
              <p style={{ color: "#666" }}>
                {blog.desc || blog.description || ""}
              </p>
            </li>
          ))
        ) : (
          <li>No blogs found.</li>
        )}
      </ul>
    </div>
  );
}
