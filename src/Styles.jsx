import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
      font-family: "Roboto", sans-serif;
      color: white;
  }
  body{
      margin: 0;
      padding: 0;
    background: linear-gradient(to right, #000000, #3533cd); 
  }
  p {
    width: 800px;
    margin: auto;
    text-align: justify;
  }
`;

export const StyledNavBar = styled.nav`
  position: fixed;
  top: 0;
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
  background: linear-gradient(to right, #000000, #3533cd);
  a {
    position: relative;
    display: inline-block;
    width: 65px;
    overflow: hidden;
    border: 1px solid rgb(50, 137, 227);
    border-radius: 50px;
    padding: 0.75rem 2rem;
    text-align: center;
    text-decoration: none;
    background-color: transparent;
    span.background-span {
      position: absolute;
      top: 0px;
      left: 0px;
      bottom: 0px;
      width: 2px;
      background-color: rgb(50, 137, 227);
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    span.content-span {
      position: relative;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;
      color: rgb(50, 137, 227);
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
  }
  a:hover span.background-span {
    width: 100%;
  }
  a:hover span.content-span {
    color: white;
  }
  a:active span.background-span {
    background-color: rgb(50, 137, 227);
  }
  a:focus {
    outline: none;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
`;

export const StyledHome = styled.div`
  padding: 20px 230px 0;
  section {
    margin-top: 75px;
    display: flex;
    align-items: center;
    gap: 30px;
    img {
      width: 100px;
      height: 100px;
      border: 2px solid white;
      border-radius: 100%;
    }
  }
`;

export const Technologies = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  div img {
    height: 30px;
  }
  img {
    margin-right: 20px;
    height: 60px;
  }
`;

export const StyledExperience = styled.div`
  padding: 60px 230px 0;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  img {
    height: 30px;
  }
  h3 {
    margin-left: 50px;
  }
`;

export const StyledProjects = styled.div`
  padding: 60px 230px 0;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  img {
    height: 30px;
  }
  section {
    margin-left: 50px;
  }
  section ~ span {
    display: block;
    width: 90%;
    margin: auto;
    margin-top: 20px;
    border: 1px solid rgb(50, 137, 227);
  }
  section img {
    margin-left: 250px;
    width: 50%;
    height: auto;
  }
  video {
    margin-left: 380px;
    border-radius: 30px;
  }
  h4 {
    display: flex;
    gap: 10px;
  }
`;

export const StyledContact = styled.div`
  margin-bottom: 50px;
  padding: 60px 230px 0;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  img {
    height: 30px;
  }
  section {
    display: inline-block;
    width: 470px;
    height: 200px;
    padding-top: 30px;
    margin-left: 50px;
  }
  h3 {
    margin: 10px 50px;
  }
`;
