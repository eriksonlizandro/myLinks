import uuidv1 from "uuid/v1"

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
      name: `OnlyFans`,
      url: "https://onlyfans.com/forespiritnon",
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
