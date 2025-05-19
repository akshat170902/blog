import {
  BlogCardBox,
  CardOverlay,
  CardContent,
  CardCategory,
  CardAuthor,
  CardDesc,
  CardCTA,
  CardMeta,
  CardContentBox,
} from "./BlogCard.styled";

export default function BlogCard({ blog, image }) {
  return (
    <BlogCardBox image={blog.avatar || image}>
      <CardOverlay />
      <CardCategory>{blog.seo.title}</CardCategory>
      <CardContent>
        <CardMeta>
          <CardContentBox>
            <CardAuthor>By {blog.author || "Akshat Garg"}</CardAuthor>
            <CardDesc>
              {blog.desc ||
              
                blog.seo.description ||
                "A slow journey through Himachal’s tea stalls and trails."}
            </CardDesc>
          </CardContentBox>
          <CardCTA href={`/blogs/${blog._id}`}>Read</CardCTA>
        </CardMeta>
      </CardContent>
    </BlogCardBox>
  );
}
