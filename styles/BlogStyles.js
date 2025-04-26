import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  color: #666;
`;

export const BackLink = styled.a`
  color: #0070f3;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  margin-top: 2rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
