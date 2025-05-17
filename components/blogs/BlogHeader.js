import {
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  Brand,
  CategoryTabs,
  Tab,
  HeaderScrollWrapper,
} from "./BlogHeader.styled";
import { useRef, useEffect } from "react";

const categories = [
  { key: "general", label: "General", href: "/blogs/general" },
  
  { key: "travel-tip", label: "Travel Tip", href: "/blogs/travel-tip" },
  { key: "travel-guide", label: "Travel Guide", href: "/blogs/travel-guide" },
];

export default function BlogHeader({ activeCategory }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const scrollY = window.scrollY;
      // Only animate if we're within the header (100vh)
      if (scrollY > 0 && scrollY < window.innerHeight) {
        wrapperRef.current.classList.add("scroll-animate");
      } else if (scrollY === 0) {
        wrapperRef.current.classList.remove("scroll-animate");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeaderScrollWrapper ref={wrapperRef}>
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
      </HeaderScrollWrapper>
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
