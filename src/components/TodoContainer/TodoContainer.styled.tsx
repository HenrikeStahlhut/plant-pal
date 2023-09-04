import styled from "styled-components";

// TODO: add media query for desktop view

// ! old design

export const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  margin: 20px 0px;
  padding: 30px 30px;

  @media (max-width: 600px) {
    margin: 20px 50px;
  }
`;

export const TodoLabel = styled.label`
  color: black;
  position: relative;
  cursor: pointer;
  display: grid;
  align-items: center;
  width: fit-content;
  transition: color 0.3s ease;
  &::before,
  &::after {
    content: "";
    position: absolute;
  }
  &::before {
    height: 2px;
    width: 8px;
    left: -27px;
    background: black;
    border-radius: 2px;
    transition: background 0.3s ease;
  }
  &:after {
    height: 4px;
    width: 4px;
    top: 8px;
    left: -25px;
    border-radius: 50%;
  }
`;

export const TodoInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  height: 15px;
  width: 15px;
  outline: none;
  border: 0;
  margin: 0 15px 0 0;
  cursor: pointer;
  background: var(--white);
  display: grid;
  align-items: center;
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    top: auto;
    background: var(--highlight-green);
    border-radius: 2px;
  }
  &::before {
    width: 0px;
    right: 60%;
    transform-origin: right bottom;
  }
  &::after {
    width: 0px;
    left: 40%;
    transform-origin: left bottom;
  }
  &:checked {
    &::before {
      animation: check-01 0.4s ease forwards;
    }
    &::after {
      animation: check-02 0.4s ease forwards;
    }
    + label {
      color: lightgray;
      animation: move 0.3s ease 0.1s forwards;
      &::before {
        background: lightgray;
        animation: slice 0.4s ease forwards;
      }
      &::after {
        animation: firework 0.5s ease forwards 0.1s;
      }
    }
  }

  @keyframes move {
    50% {
      padding-left: 8px;
      padding-right: 0px;
    }
    100% {
      padding-right: 4px;
    }
  }

  @keyframes slice {
    60% {
      width: 100%;
      left: 4px;
    }
    100% {
      width: 100%;
      left: -2px;
      padding-left: 0;
    }
  }

  @keyframes check-01 {
    0% {
      width: 4px;
      top: auto;
      transform: rotate(0);
    }
    50% {
      width: 0px;
      top: auto;
      transform: rotate(0);
    }
    51% {
      width: 0px;
      top: 8px;
      transform: rotate(45deg);
    }
    100% {
      width: 5px;
      top: 8px;
      transform: rotate(45deg);
    }
  }

  @keyframes check-02 {
    0% {
      width: 4px;
      top: auto;
      transform: rotate(0);
    }
    50% {
      width: 0px;
      top: auto;
      transform: rotate(0);
    }
    51% {
      width: 0px;
      top: 8px;
      transform: rotate(-45deg);
    }
    100% {
      width: 10px;
      top: 8px;
      transform: rotate(-45deg);
    }
  }
  @keyframes firework {
    0% {
      opacity: 1;
      box-shadow: 0 0 0 -2px var(--highlight-green),
        0 0 0 -2px var(--highlight-green), 0 0 0 -2px var(--highlight-green),
        0 0 0 -2px var(--highlight-green), 0 0 0 -2px var(--highlight-green),
        0 0 0 -2px var(--highlight-green);
    }
    30% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      box-shadow: 0 -15px 0 0px var(--highlight-green),
        14px -8px 0 0px var(--highlight-green),
        14px 8px 0 0px var(--highlight-green),
        0 15px 0 0px var(--highlight-green),
        -14px 8px 0 0px var(--highlight-green),
        -14px -8px 0 0px var(--highlight-green);
    }
  }
`;
