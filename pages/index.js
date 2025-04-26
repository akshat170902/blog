import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store";
import Link from "next/link";

// This page is rendered on the server by default in Next.js (SSR).
// If you add getServerSideProps, you can fetch data at request time.

export default function BlogHome() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Travmigoz Blog</title>
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
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            Travmigoz Blog
          </h1>
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
            No blog posts yet.
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
          &copy; {new Date().getFullYear()} Travmigoz Blog
        </footer>
      </div>
    </>
  );
}
