import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Headroom from "react-headroom"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class Header extends React.Component {
  render() {
    const { siteTitle } = this.props
    return (
      <header>
        <Headroom>
          <div className="navbar">
            <h1>
              <Link to="/">{siteTitle}</Link>
            </h1>
            <div className="nav-side">
              <div></div>
              {/* <h1>DayLog</h1> */}
              {/* <h1>Resume</h1> */}
              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <label className="tog">
                    <input
                      type="checkbox"
                      onChange={e =>
                        toggleTheme(e.target.checked ? "dark" : "light")
                      }
                      checked={theme === "dark"}
                    />
                    {theme === "dark" ? (
                      <div className="on">L</div>
                    ) : (
                      <div className="off">D</div>
                    )}
                  </label>
                )}
              </ThemeToggler>
            </div>
          </div>
        </Headroom>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
