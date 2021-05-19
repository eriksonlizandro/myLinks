import React, { useContext } from "react"
import MyLinksContext from "../../context/context"
import { LinkWrapper, Button, ShakeButton } from "./styles"
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart"

export function Links() {
  const { links } = useContext(MyLinksContext)
  const { myLinks } = links

  return (
    <section id="links">
      {myLinks &&
        myLinks.map((link, idx) =>
          idx === 0 ? (
            <LinkWrapper>
              <ShakeButton
                key={`link-${link.id}`}
                href={link.url}
                rel="noopener noreferrer"
                className="myLinks"
                target="_blank"
                aria-label={`link-${link.name}`}
              >
                <Button>
                  <FaRegHeart />
                  {` `}
                  {link.name}
                </Button>
              </ShakeButton>
            </LinkWrapper>
          ) : (
            <LinkWrapper>
              <a
                key={`link-${link.id}`}
                href={link.url}
                rel="noopener noreferrer"
                className="myLinks"
                target="_blank"
                aria-label={`link-${link.name}`}
              >
                <Button>
                  <FaRegHeart />
                  {` `}
                  {link.name}
                </Button>
              </a>
            </LinkWrapper>
          )
        )}
    </section>
  )
}
