import * as React from "react"
import App from "../components/App"
import { Helmet } from "react-helmet"
import { headData } from "../components/mock/data"

const IndexPage = () => {
  const { title } = headData
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <App />
    </>
  )
}

export default IndexPage
