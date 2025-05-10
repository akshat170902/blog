import Head from "next/head";
import BlogHeader from "../../components/blogs/BlogHeader";
import BlogList from "../../components/blogs/BlogList";

export async function getServerSideProps() {
  const res = await fetch(
    "https://680cbd742ea307e081d4e50f.mockapi.io/blogs/getBlogById"
  );
  const blogs = await res.json();
  // Filter for general category if available
  const filtered = blogs.filter(
    (b) => !b.category || b.category.toLowerCase() === "general"
  );
  return { props: { blogs: filtered } };
}

export default function GeneralBlogs({ blogs }) {
  return (
    <>
      <Head>
        <title>General Blogs | Akshat Blogs</title>
      </Head>
      <BlogHeader activeCategory="general" />
      <BlogList blogs={blogs} />
    </>
  );
}
