import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile-pic.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1),
      }}
      className="bio"
    >
      <div
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2),
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="jisop" />
      </div>

      <div>
        <a href="/">Jisop</a>
        <p style={{ maxWidth: 180 }}>Hi there !</p>
        <div className="social-links">
          <a
            href="https://github.com/JiSop"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>{" "}
          &bull;{" "}
          <a
            href="mailto:jisop.shin@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            e-mail
          </a>
        </div>
      </div>
    </div>
  )
}

export default Bio
