import styled from "styled-components";

export const MainSection = styled.section`
  background: #fff;
  border-radius: 48px 48px 0 0;
  padding: 2rem 2rem 2rem 2rem;
  min-height: 60vh;
  @media (max-width: 900px) {
    border-radius: 24px 24px 0 0;
    padding: 1rem 0.5rem 1rem 0.5rem;
  }
`;

export const BlogGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 1200px) {
    gap: 1rem;
  }
`;

export const ShowMoreBtn = styled.button`
  display: block;
  margin: 2.5rem auto 0 auto;
  padding: 0.75rem 2.5rem;
  background: #8dd3bb;
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #6cc7a1;
  }
`;
