import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const ScrollLoading = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  z-index: 10;
  background-color: rgb(var(--dark-color));
  & span {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border-top: 4px solid rgba(var(--primary-color), 1);
    border-left: 4px solid rgba(var(--primary-color), 1);
    border-right: 4px solid rgba(var(--primary-color), 0);
    animation: ${spinnerAnimation} 0.6s linear infinite;
  }
`;

export default function Loading() {
  return (
    <ScrollLoading>
      <span></span>
    </ScrollLoading>
  );
}
