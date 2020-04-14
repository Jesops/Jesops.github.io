import React from "react"
import Header from "./header"

class Layout extends React.Component {
  render() {
    const { title, author, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // let header

    // if (location.pathname === rootPath) {
    //   header = (
    //     <h1
    //       style={{
    //         ...scale(1.5),
    //         marginBottom: rhythm(1.5),
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: `Montserrat, sans-serif`,
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // }
    return (
      <div className="container">
        <div className="content">
          <Header siteTitle={title} />
          <main>{children}</main>
        </div>
        <footer>
          <p>
            © {author} &bull; Powered by{" "}
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>{" "}
            and Theme based on{" "}
            <a
              href="https://www.gatsbyjs.org/starters/teaware/gatsby-starter-point/"
              target="_blank"
              rel="noopener noreferrer"
            >
              gatsby-starter-point
            </a>
          </p>
        </footer>
      </div>
    )
  }
}

export default Layout
