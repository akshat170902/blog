import {
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  Brand,
  HeaderScrollWrapper,
} from "./BlogHeader.styled";
import { useRef, useEffect } from "react";

export default function BlogHero({
  title = "Akshat Blogs",
  subtitle = "The best part of traveling isn’t the destination, it’s the people you meet along the way.",
  brand = "Akshat",
  scrollAnimate = true,
}) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!scrollAnimate) return;
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const scrollY = window.scrollY;
      if (scrollY > 0 && scrollY < window.innerHeight) {
        wrapperRef.current.classList.add("scroll-animate");
      } else if (scrollY === 0) {
        wrapperRef.current.classList.remove("scroll-animate");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollAnimate]);

  return (
    <HeaderScrollWrapper ref={wrapperRef}>
      <HeroSection>
        <HeroOverlay />
        <Brand>{brand}</Brand>
        <HeroContent>
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
        </HeroContent>
      </HeroSection>
    </HeaderScrollWrapper>
  );
}
