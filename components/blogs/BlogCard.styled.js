import styled from "styled-components";
import Link from "next/link";

export const BlogCardBox = styled.div`
  position: relative;
  width: 420px;
  height: 315px;
  border-radius: 24px;
  background: ${({ image }) => `url(${image}) center/cover no-repeat`};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 400px;
    height: 220px;
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 40%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 1.5rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CardCategory = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px 0 0 0;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

export const CardTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

export const CardAuthor = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-style: italic;
  font-weight: 700;
  color: #fff;
  opacity: 0.9;
`;

export const CardDesc = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  color: #fff;
  opacity: 0.85;
`;

export const CardCTA = styled(Link)`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 2rem;
  border: 1px solid #fafafa;
  border-radius: 40px;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #fafafa;
  background: transparent;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #8dd3bb;
    color: #000;
    border-color: #8dd3bb;
  }
`;
