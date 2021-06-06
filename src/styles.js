import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const darkTheme = {
  fontColor: "#eadfd7",
  bgColor: "#28323f",
  shadow: "3px 2px 5px 1px #0b121c",

  // options style
  optBgColor: "#354254",
  optColor: "#8a97a8",
  optBgColorHover: "#1F2937",
  optColorHover: "#eadfd7",

  // loading bar style
  loadingBgColor: "#F8F9FA",
  barState: "#eadfd7",
  barText: "#6A4424",

  // result rayout
  resultColor: "#6A4424",
  resultBorderColor: "#eadfd7",
  resultBoxShadow: "7px 7px 0px 1px #93755D",

  // btn 
  btnBgColor: "#eadfd7",
  btnColor: "#6A4424",

  // nav icon
  iconColor: "#eadfd7",

  // status Bar
  barBgColor: "#eadfd7"
}

export const ligthTheme = {
  fontColor: "#6A4424",
  bgColor: "#fcfaf4",
  shadow: "3px 2px 5px 1px rgba(0,0,0,0.45)",

  // options style
  optBgColor: "#ededed",
  optColor: "#8c8c8c",
  optBgColorHover: "#ffffff",
  optColorHover: "#6A4424",

  // loading bar style
  loadingBgColor: "#F8F9FA",
  barState: "#6A4424",
  barText: "#FCFAF4",

  // result rayout
  resultColor: "#eadfd7",
  resultBorderColor: "#6A4424",
  resultBoxShadow: "7px 7px 0px 1px #c9a891",

  // btn 
  btnBgColor: "#6A4424",
  btnColor: "#eadfd7",

  // nav icon
  iconColor: "#6A4424",

  // status Bar
  barBgColor: "#6A4424"
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