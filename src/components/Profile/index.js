import React, { useContext } from "react"
import MyLinksContext from "../../context/context"
import ProfileImg from "../ProfileImg/index"

export function Profile() {
  const { profile } = useContext(MyLinksContext)
  const { profileName, img, userName } = profile
  return (
    <div>
      <ProfileImg alt="profile-picture" filename={img}/>
      <h1>{profileName || "Loading..."}</h1>
      <h4>{userName}</h4>
    </div>
  )
}
