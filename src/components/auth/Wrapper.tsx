import styled from "styled-components";

const Wrapper = styled.div<{ withBackground?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: ${({ theme, withBackground }) =>
    withBackground
      ? `linear-gradient(180deg, ${theme.displayTheme === "dark" ? "#26126f" : "#E3D8F6"} 0%, ${theme.displayTheme === "dark" ? "#111" : "#FFF"} ${theme.displayTheme === "dark" ? "150px" : "34.57%"});`
      : "transparent"};
`;

export default Wrapper;
