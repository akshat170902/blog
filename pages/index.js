import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store";
import Link from "next/link";
import { useEffect, useState } from "react";

// This page is rendered on the server by default in Next.js (SSR).
// If you add getServerSideProps, you can fetch data at request time.

export default function BlogHome() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // Blog list state
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(`/api/blogs?page=${page}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.data || []);
        setTotal(data.pagination?.total || 0);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load blogs.");
        setLoading(false);
      });
  }, [page, limit]);

  return (
    <>
      <Head>
        <title>Akshat Blog</title>
      </Head>
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "2rem",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <header style={{ marginBottom: "2rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700 }}>Akshat Blog</h1>
          <p style={{ color: "#666", fontSize: "1.2rem" }}>
            Discover stories, guides, and travel inspiration.
          </p>
          <hr style={{ margin: "2rem 0" }} />
        </header>
        <main>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            Latest Posts
          </h2>
          <div
            style={{
              background: "#f9f9f9",
              borderRadius: "8px",
              padding: "2rem",
              minHeight: "200px",
              textAlign: "center",
              color: "#aaa",
            }}
          >
            {/* Blog list */}
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div style={{ color: "red" }}>{error}</div>
            ) : blogs.length === 0 ? (
              <div>No blog posts yet.</div>
            ) : (
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {blogs.map((blog) => (
                  <li
                    key={blog.id}
                    style={{
                      marginBottom: "1.5rem",
                      textAlign: "left",
                    }}
                  >
                    <Link
                      href={`/blogs/${blog.slug || blog.id}`}
                      legacyBehavior
                    >
                      <a
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          color: "#333",
                        }}
                      >
                        {blog.seo?.title || blog.title}
                      </a>
                    </Link>
                    <div
                      style={{
                        color: "#666",
                        fontSize: "1rem",
                        margin: "0.3rem 0",
                      }}
                    >
                      {blog.seo?.description || blog.excerpt}
                    </div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        color: "#888",
                      }}
                    >
                      Status: {blog.status || "draft"} | Created:{" "}
                      {blog.createdAt &&
                        new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {/* Pagination */}
            {total > limit && (
              <div style={{ marginTop: "1rem" }}>
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  style={{ marginRight: "1rem" }}
                >
                  Prev
                </button>
                <span>
                  Page {page} of {Math.ceil(total / limit)}
                </span>
                <button
                  onClick={() => setPage((p) => p + 1)}
                  disabled={page * limit >= total}
                  style={{ marginLeft: "1rem" }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
          {/* Redux counter example */}
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <p>Redux Counter: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
          </div>
          {/* Router example */}
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <Link href={`/blogs`} legacyBehavior>
              Go to blog Page
            </Link>
          </div>
        </main>
        <footer
          style={{ marginTop: "3rem", textAlign: "center", color: "#aaa" }}
        >
          &copy; {new Date().getFullYear()} Akshat Blog
        </footer>
      </div>
    </>
  );
}
