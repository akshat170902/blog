import Head from "next/head";
import BlogHeader from "../../components/blogs/BlogHeader";
import BlogList from "../../components/blogs/BlogList";

export async function getServerSideProps() {
  const res = await fetch(
    "http://localhost:4000/blogs"
  );
  const blogs = await res.json();
  const filtered = blogs.data.filter(
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
