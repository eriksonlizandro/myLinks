import * as React from "react"
import App from '../components/App'
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

const IndexPage = () => {
  return(
    <div>
    <GlobalStyle/>
    <App/>
    </div>
  )
}

export default IndexPage
