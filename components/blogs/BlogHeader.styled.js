import styled from "styled-components";
import Link from "next/link";

export const HeroSection = styled.section`
  position: relative;

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/beautiful-shot-udaipur-from-window-city-palace.jpg")
    center/cover no-repeat;
  @media (max-width: 900px) {
    height: 300px;
    min-height: 300px;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const HeroTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 700;
  margin: 0;
`;

export const HeroSubtitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 500;
  margin: 0;
`;

export const Brand = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  z-index: 2;
  @media (max-width: 600px) {
    font-size: 1.2rem;
    top: 1rem;
    left: 1rem;
  }
`;

export const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 48px 48px 0 0;
  margin-top: -48px;
  padding-top: 5%;

  position: relative;
  z-index: 2;
  @media (max-width: 900px) {
    border-radius: 24px 24px 0 0;
    padding-top: 1rem;
    margin-top: -24px;
  }
`;

export const Tab = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 40px;
  background: ${({ $active }) => ($active ? "#8DD3BB" : "#000")};
  color: ${({ $active }) => ($active ? "#000" : "#8DD3BB")};
  cursor: pointer;
  position: relative;
  z-index: 1;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  &:not(:first-child) {
    margin-left: -1rem;
  }
`;
