import {
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  Brand,
  CategoryTabs,
  Tab,
} from "./BlogHeader.styled";

const categories = [
  { key: "general", label: "General", href: "/blogs/general" },
  { key: "travel-tip", label: "Travel Tip", href: "/blogs/travel-tip" },
  { key: "travel-guide", label: "Travel Guide", href: "/blogs/travel-guide" },
];

export default function BlogHeader({ activeCategory }) {
  return (
    <>
      <HeroSection>
        <HeroOverlay />
        <Brand>Akshat</Brand>
        <HeroContent>
          <HeroTitle>Akshat Blogs</HeroTitle>
          <HeroSubtitle>
            The best part of traveling isn’t the destination, it’s the people
            you meet along the way.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      <CategoryTabs>
        {categories.map((cat) => (
          <Tab
            key={cat.key}
            href={cat.href}
            $active={cat.key === activeCategory}
          >
            {cat.label}
          </Tab>
        ))}
      </CategoryTabs>
    </>
  );
}
