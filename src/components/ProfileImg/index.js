import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const StyledImg = styled(Img)`
  clip-path: circle(42.8% at 50% 39%);
  margin-top: 3rem; 
  margin-bottom: -2rem; 
`;
const ProfileImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 180) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })

      if (!image) return null

      const imageFixed = image.node.childImageSharp.fixed
      return <StyledImg alt={alt} fixed={imageFixed} />
    }}
  />
)

ProfileImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
}

export default ProfileImg
