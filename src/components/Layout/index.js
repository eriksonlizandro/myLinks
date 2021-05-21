import React from "react"
import { LayoutWrapper } from "./styles"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background: linear-gradient(to left, #ddd6f3 0%, #faaca8 100%);
    display:block;
  
  }
`
export function Layout({ children }) {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <main>{children}</main>
    </LayoutWrapper>
  )
}
