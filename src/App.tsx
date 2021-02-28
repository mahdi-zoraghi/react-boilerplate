import styled, { css } from "styled-components";

import "./App.scss";

export interface IWrapperProps {
  top?: string;
}

const Wrapper = styled.section`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  padding: 7px;
  line-height: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  ${(props: IWrapperProps) =>
    props.top &&
    css`
      top: ${props.top}%;
    `}
`;

const App = () => {
  return (
    <>
      <Wrapper>
        <h2>
          Edit File <code>./src/App</code>
        </h2>
      </Wrapper>
      <Wrapper top="56">
        <p>Create By Mahdi zoraghi</p>
      </Wrapper>
    </>
  );
};

export default App;
