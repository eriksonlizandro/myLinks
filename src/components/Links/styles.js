import styled, { keyframes } from "styled-components"

const shakeIt = keyframes` 0% { transform: translate(1px, 1px) rotate(0deg); }
10% { transform: translate(-1px, -2px) rotate(-1deg); }
20% { transform: translate(-3px, 0px) rotate(1deg); }
30% { transform: translate(3px, 2px) rotate(0deg); }
40% { transform: translate(1px, -1px) rotate(1deg); }
50% { transform: translate(-1px, 2px) rotate(-1deg); }
60% { transform: translate(-3px, 1px) rotate(0deg); }
70% { transform: translate(3px, 1px) rotate(-1deg); }
80% { transform: translate(-1px, -1px) rotate(1deg); }
90% { transform: translate(1px, 2px) rotate(0deg); }
100% { transform: translate(1px, -2px) rotate(-1deg); }`

export const LinkWrapper = styled.div`
  display: block;
  margin-bottom: 1rem;
`
export const Button = styled.button`
  padding: 16px;
  width: 50%;
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
export const FadeButtons = styled.div`
  animation: 1s ${shakeIt} ;
  animation-delay: 0.5s; 
  animation-iteration-count: 5; 

 

`
