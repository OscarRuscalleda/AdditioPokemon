import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 30px;
  padding-bottom: 10px;
  margin-top: 2rem;
  align-items: center;
  background: #000000;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 80px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 70px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  text-align: center;
`;

export const Link = styled.a`
  font-size: 30px;
  color: #fff;
  font-family: fantasy;
  text-decoration: none;
  &:hover {
      color: grey;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;

