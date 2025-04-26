import Link from "next/link";
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
  return (
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
  );
}
