import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const darkTheme = {
  fontColor: "white",
  bgColor: "#28323f",
  shadow: "3px 2px 5px 1px #0b121c",

  // options style
  optBgColor: "#354254",
  optColor: "#8a97a8",
  optBgColorHover: "#1F2937",
  optColorHover: "white",

  // loading bar style
  loadingBgColor: "#b5b5b5",
  barState: "#606060"
}

export const ligthTheme = {
  fontColor: "#1F2937",
  bgColor: "#fcfaf4",
  shadow: "3px 2px 5px 1px rgba(0,0,0,0.45)",

  // options style
  optBgColor: "#ededed",
  optColor: "#6d6d6d",
  optBgColorHover: "#ffffff",
  optColorHover: "#1F2937",

  // loading bar style
  loadingBgColor: "#F8F9FA",
  barState: "#ffda91"
}

export const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100%;
    box-sizing: border-box;
    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.bgColor};
    user-select: none;
  }
`