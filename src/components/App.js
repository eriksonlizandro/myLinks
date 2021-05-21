import React, { useState, useEffect } from "react"
import { Layout, Links, Profile, Bubbles } from "../components"
import { MyLinksProvider } from "../context/context"

import { linksData, profileData } from "../components/mock/data"

function App() {
  const [links, setLinks] = useState([])
  const [profile, setProfile] = useState({})

  useEffect(() => {
    setLinks({ ...linksData })
    setProfile({ ...profileData })
  }, [])

  return (
    <Layout>
      <MyLinksProvider value={{ links, profile }}>
        <Profile />
        <Links />
        <Bubbles />
      </MyLinksProvider>
    </Layout>
  )
}

export default App
