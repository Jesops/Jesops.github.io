import React from "react"
import { graphql, Link } from "gatsby"

import { kebabCase } from "lodash"
import Bio from "../components/bio"
import SEO from "../components/seo"
import Layout from "../components/layout"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const author = data.site.siteMetadata.author
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle} author={author}>
        <SEO title="Home" />
        <Bio />
        <div className="all-tags">
          <Link to="/tags">All tags</Link>
        </div>
        <div className="blog-list">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <small>{node.frontmatter.date}</small>
                  <h2>
                    <Link to={`/${node.fields.slug}`}>{title}</Link>
                  </h2>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.spoiler || node.excerpt,
                    }}
                  />
                  {node.frontmatter.tags ? (
                    <ul className="tags">
                      {node.frontmatter.tags.map(tag => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}`}>#{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              </article>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM YYYY")
            title
            spoiler
            tags
          }
        }
      }
    }
  }
`
