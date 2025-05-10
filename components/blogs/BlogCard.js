import {
  BlogCardBox,
  CardOverlay,
  CardContent,
  CardCategory,
  CardTitle,
  CardAuthor,
  CardDesc,
  CardCTA,
  CardMeta,
} from "./BlogCard.styled";

export default function BlogCard({ blog, image }) {
  return (
    <BlogCardBox image={image}>
      <CardOverlay />
      <CardCategory>{blog.title}</CardCategory>
      <CardContent>
        <CardMeta>
          <CardTitle>{blog.title}</CardTitle>
          <CardAuthor>By {blog.author || "Bhawna Sharma"}</CardAuthor>
          <CardDesc>
            {blog.desc ||
              blog.description ||
              "A slow journey through Himachal’s tea stalls and trails."}
          </CardDesc>
          <CardCTA href={`/blogs/${blog.id}`}>Read More</CardCTA>
        </CardMeta>
      </CardContent>
    </BlogCardBox>
  );
}
