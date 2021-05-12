import React, { useContext } from "react"
import MyLinksContext from "../../context/context"
import { LinkWrapper, Button } from "./styles"

export function Links() {
  const { links } = useContext(MyLinksContext)
  const { myLinks } = links
  return (
    <section id="links">
      {myLinks &&
        myLinks.map(myLink => {
          const { id, name, url } = myLink
          return (
            <LinkWrapper>
              <a
                key={id}
                href={url || ""}
                rel="noopener noreferrer"
                className='myLinks'
                target="_blank"
                aria-label={name}
              >
                <Button>{name}</Button>
              </a>
            </LinkWrapper>
          )
        })}
    </section>
  )
}
