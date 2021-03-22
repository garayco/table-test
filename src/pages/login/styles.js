import styled from "@emotion/styled";

import background from "./loginBackground.jpg";

export const LoginBackground = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  clip-path: ellipse(44% 87% at 33% 0%);

  @media (max-width: 1000px) {
    clip-path: ellipse(58% 82% at 26% 0%);
  }
  @media (max-width: 700px) {
    clip-path: ellipse(93% 77% at 0% 10%);
  }
  @media (max-width: 550px) {
    clip-path: none;
  }
`;

export const LoginForm = styled.div`
  position: absolute;
  right: 150px;
  left: auto;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  -webkit-box-shadow: 0px 0px 22px -3px rgba(0, 0, 0, 0.48);
  box-shadow: 0px 0px 27px -8px rgba(0, 0, 0, 0.48);
  padding: 2.5em 2.7em;
  width: 24em;
  height: 23.5em;
  border-radius: 35px;

  @media (max-width: 620px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
