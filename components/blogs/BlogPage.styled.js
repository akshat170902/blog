import styled from "styled-components";

export const BlogHero = styled.section`
  position: relative;
  width: 100vw;
  height: 52.08vw;
  max-height: 56vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const BlogHeroImage = styled.img`
  position: absolute;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  left: 0;
  top: 0;
  z-index: 1;
`;

export const BlogHeroOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

export const BlogHeroContent = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 61.3vw; /* 1059/1728 */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
`;

export const BlogHeroTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 5rem;
  line-height: 120%;
  color: #fff;
  text-align: center;
  margin: 10% 0 1% 0;
  width: 100%;
  max-width: 100%;
  @media (max-width: 900px) {
    font-size: 2.5rem;
    margin-top: 20%;
  }
`;

export const BlogHeroMeta = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 120%;
  color: #fff;
  text-align: center;
  width: 100%;
  max-width: 100%;
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

export const BlogBrand = styled.div`
  position: relative;
  z-index: 4;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #fff;
  margin-left: 2.2%;
  margin-top: 2.2%;
  align-self: flex-start;
  letter-spacing: 0.05em;
`;

export const BlogMainSection = styled.section`
  min-height: 100vh;
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

  padding: 5% 9%;
  @media (max-width: 900px) {
    border-radius: 24px 24px 0 0;
    padding-top: 1rem;
    margin-top: -24px;
  }
`;

export const BlogMainWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 2rem;
    align-items: stretch;
  }
`;

export const BlogContentCol = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  align-items: flex-start;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

export const BlogContentTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 3.5rem;
  color: #252525;
  margin-bottom: 2%;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;
export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 2% 0;
  @media (max-width: 900px) {
  }
`;

export const BlogContentBody = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  color: #000;
  line-height: 150%;
  text-align: justify;
  margin-bottom: 2%;
  @media (max-width: 900px) {
    font-size: 1.1rem;
  }
`;

export const BlogSidebar = styled.aside`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    min-width: 0;
    flex-direction: row;
    gap: 1rem;
    justify-content: flex-start;
    margin-top: 2rem;
  }
`;

export const BlogSidebarTitle = styled.div`
  width: 15.7vw; /* 271/1728 */
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  color: #000;
  text-align: center;
  margin-bottom: 1%;
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

export const BlogSidebarCard = styled.div`
  width: 100%;
  height: 12.7vw; /* 220/1728 */
  min-height: 120px;
  border-radius: 0.8rem;
  background: ${({ bg }) => `url(${bg}) center/cover no-repeat`};
  position: relative;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-end;
  @media (max-width: 1200px) {
    width: 30vw;
    min-width: 180px;
    height: 10vw;
    min-height: 80px;
  }
`;

export const BlogSidebarCardInfo = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  padding: 4% 7%;
  border-radius: 0 0 0.8rem 0.8rem;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    padding: 2% 4%;
  }
`;
