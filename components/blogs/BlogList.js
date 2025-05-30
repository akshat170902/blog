import BlogCard from "./BlogCard";
import {
  MainSection,
  BlogGrid,
  ShowMoreBtn,
  BlogCardContainer,
} from "./BlogList.styled";

function getCardImage(blog, idx) {
  if (blog.blogImage) return blog.blogImage;
  const fallback = [
    "/woman-hand-holding-camera-standing-top-rock-nature-travel-concept.jpg",
    "/backpacker-explores-intricate-alleyways-jodhpur39s-blue-city-india-experiencing-vibrant-colors-cultural-richness.jpg",
    "/indian-city-buildings-scene (2).jpg",
    "/building-decorated-indian-republic-day.jpg",
    "/beautiful-shot-udaipur-from-window-city-palace.jpg",
    "/indian-city-buildings-scene (1).jpg",
  ];
  return fallback[idx % fallback.length];
}

export default function BlogList({ blogs }) {
  return (
    <MainSection>
      <BlogGrid>
        {blogs && blogs.length > 0 ? (
          blogs.map((blog, idx) => (
            <BlogCardContainer key={blog.id}>
              <BlogCard
                key={blog.id}
                blog={blog}
                image={getCardImage(blog, idx)}
              />
            </BlogCardContainer>
          ))
        ) : (
          <div>No blogs found.</div>
        )}
      </BlogGrid>
      <ShowMoreBtn>Show More</ShowMoreBtn>
    </MainSection>
  );
}
