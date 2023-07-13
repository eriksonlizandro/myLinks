import uuidv1 from "uuid/v1"

//HEADDATA
export const headData ={
  title: "forespiritnon",
}

//PROFILE NAME
export const profileData = {
  profileName: "Jenny Zhao",
  userName: "@forespiritnon",
  img: "profile.jpeg",
}

//LINKS DATA
export const linksData = {
  myLinks: [
    {
      id: uuidv1(),
      name: `Onlychans`,
      url: "https://onlyfans.com/forespiritnon",
    },
    {
      id: uuidv1(),
      name: `TikTok`,
      url: "https://www.tiktok.com/@foresfaiiry",
    },
    {
      id: uuidv1(),
      name: `Twitter`,
      url: "https://twitter.com/forespiritnon1 ",
    },
    {
      id: uuidv1(),
      name: `Instagram`,
      url: "https://www.instagram.com/forespiritnon/",
    },
    {
      id: uuidv1(),
      name: `Facebook`,
      url: "https://www.facebook.com/jennyzzhao/",
    },
  ],
}
