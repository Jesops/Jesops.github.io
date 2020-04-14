// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Tag extends React.Component {
  render() {
    const { data } = this.props
    const { tag } = this.props.pageContext
    const { edges } = data.allMarkdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={tag} />
        <div>
          <h2>#{tag}</h2>
          <ul className="blog-list">
            {edges.map(({ node }) => {
              const { title, date } = node.frontmatter
              const { slug } = node.fields
              return (
                <li key={slug}>
                  <h3>
                    <AniLink fade duration={0.15} to={`/${slug}`}>
                      {title}
                    </AniLink>
                  </h3>
                  <small>{date}</small>
                </li>
              )
            })}
          </ul>
          <AniLink fade duration={0.2} to="/tags">
            All tags
          </AniLink>
        </div>
      </Layout>
    )
  }
}

export default Tag

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
