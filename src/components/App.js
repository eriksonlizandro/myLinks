import React, { useState, useEffect } from "react"
import { Links, Layout, Profile, Bubbles } from "../components"
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
    <MyLinksProvider value={{ links, profile }}>
      <Layout>
        <Profile />
        <Links />
      </Layout>
      <Bubbles />
    </MyLinksProvider>
  )
}

export default App
