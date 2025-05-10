import styled from "styled-components";
import Link from "next/link";

export const CardMeta = styled.div`
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, max-height;
  
  padding: 3%;
  flex-direction: row;
  gap: 0.5rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 100%,
    rgba(0, 0, 0, 0.7) 100%
  );
`;
export const CardContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: flex-start;
`;
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
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 16px rgba(80, 80, 80, 0.08);
  &:hover {
    transform: scale(1.035) translateY(-6px);
    box-shadow: 0 8px 32px rgba(80, 80, 80, 0.18);
    z-index: 2;
  }
  animation: fadeInCard 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  @keyframes fadeInCard {
    from {
      opacity: 0;
      transform: scale(0.98);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  &:hover ${CardMeta} {
    opacity: 1;
    max-height: 500px;
    pointer-events: auto;
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;

  z-index: 1;
  animation: fadeInOverlay 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  @keyframes fadeInOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 2;
  
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${CardMeta} {
    opacity: 0;
    max-height: 0;
    pointer-events: none;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const CardCategory = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px 0 16px 0;
  padding: 3% 4%;
  font-size: 1.4rem;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  text-shadow: 0px 1px 7.7px rgba(0, 0, 0, 0.6);
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
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 700;
  color: #fff;
  opacity: 0.95;
`;

export const CardDesc = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  color: #fff;
  opacity: 0.85;
  line-height: 1.25;
`;

export const CardCTA = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2% 5%;
  gap: 2%;
  margin-top: 0.5rem;
  border: 1px solid #fafafa;
  border-radius: 40px;
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fafafa;
  background: transparent;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  text-align: center;
  &:hover {
    background: #8dd3bb;
    color: #000;
    border-color: #8dd3bb;
  }
`;
