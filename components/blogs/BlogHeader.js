import { HeaderScrollWrapper } from "./BlogHeader.styled";
import { useRef, useEffect } from "react";
import BlogHero from "./BlogHero";
import BlogCategoryTabs from "./CategoryTabs";

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
        <BlogHero />
      </HeaderScrollWrapper>
      <BlogCategoryTabs activeCategory={activeCategory} />
    </>
  );
}
