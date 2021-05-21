import React, { useContext } from "react"
import {Title} from './styles'
import MyLinksContext from "../../context/context"
import ProfileImg from "../ProfileImg/index"

export function Profile() {
  const { profile } = useContext(MyLinksContext)
  const { profileName, img, userName } = profile
  return (
    <div>
      <ProfileImg alt="profile-picture" filename={img}/>
      <Title>{profileName}</Title>
      <h4>{userName}</h4>
    </div>
  )
}
