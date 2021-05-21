import styled from "styled-components"

export const LinkWrapper = styled.div`
  display: block;
  margin-bottom: 1rem;
`
export const Button = styled.button`
  padding: 16px;
  width: 50%;
  background-color: white;
  text-decoration: none;
  font-weight: 450;
  border: solid black;

  :hover {
    background-color: black;
    color: white;
    transform: scale(1.05);
    border: solid black;
  }

  @media screen and (max-width: 730px) {
    width: 95%;
  }
`
