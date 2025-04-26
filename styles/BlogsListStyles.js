import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const BlogList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const BlogItem = styled.li`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
`;

export const BlogLink = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  color: #0070f3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const BlogDesc = styled.p`
  color: #666;
`;
