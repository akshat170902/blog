import Head from "next/head";
import BlogHeader from "../../components/blogs/BlogHeader";
import BlogList from "../../components/blogs/BlogList";

export async function getServerSideProps() {
  const res = await fetch(
    "https://680cbd742ea307e081d4e50f.mockapi.io/blogs/getBlogById"
  );
  
  const blogs = await res.json();
  const filtered = blogs.filter(
    (b) => (b.category || "").toLowerCase() === "travel guide"
  );
  return { props: { blogs: filtered } };
}

export default function TravelGuideBlogs({ blogs }) {
  return (
    <>
      <Head>
        <title>Travel Guide Blogs | Akshat Blogs</title>
      </Head>
      <BlogHeader activeCategory="travel-guide" />
      <BlogList blogs={blogs} />
    </>
  );
}
