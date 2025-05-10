import BlogCard from "./BlogCard";
import { MainSection, BlogGrid, ShowMoreBtn } from "./BlogList.styled";

function getCardImage(blog, idx) {
  if (blog.image) return blog.image;
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
            <BlogCard
              key={blog.id}
              blog={blog}
              image={getCardImage(blog, idx)}
            />
          ))
        ) : (
          <div>No blogs found.</div>
        )}
      </BlogGrid>
      <ShowMoreBtn>Show More</ShowMoreBtn>
    </MainSection>
  );
}
