import React from "react"
import { getCurrentLanguageString, createPath, transitionBackground } from "../../utility/helper"
import { connect } from "react-redux"
import { AboutSideNavbar, AboutNavItem, AboutNavItemLink } from "./about.styles"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

const AboutNavbar = props => {
  const { allWordpressPage } = useStaticQuery(
    graphql`
      {
        allWordpressPage(
          filter: { parent_element: { slug: { eq: "about" } } }
        ) {
          edges {
            node {
              wordpress_id
              slug
              acf {
                EN_row {
                  description
                }
                DE_row {
                  description
                  german_page_slug
                }
                DE {
                  title
                }
                template
                EN {
                  title
                }
              }
            }
          }
        }
      }
    `
  )
  let items = []
  items.push({
    slug: "about",
    EN: {
      title: "About",
      slug: "about"
    },
    DE: {
      title: "About",
      slug: "uber"
    },
  });

  allWordpressPage.edges.forEach(edge => {
    let object = {
      slug: edge.node.slug,
      EN: {
        title: edge.node.acf.EN.title ? edge.node.acf.EN.title : edge.node.slug,
        slug: `about/${edge.node.slug}`
      },
      DE: {
        title: edge.node.acf.DE.title ? edge.node.acf.DE.title : edge.node.slug,
        slug: `about/${edge.node.acf.DE_row.german_page_slug}`
      },
    }
    items.push(object);
  })
  const language = getCurrentLanguageString(props.languages)

  const isCurrentPage = index => {
    return `/${items[index][language].slug}` === props.currentPage
  }

  return (
    <AboutSideNavbar>
      {items.map((item, index) => (
        <AboutNavItemLink cover direction="down" bg={transitionBackground} to={createPath(language, item['EN'].slug)} key={index}>
          <AboutNavItem current={isCurrentPage(index)}>
            {item[language].title.toLowerCase()}
          </AboutNavItem>
        </AboutNavItemLink>
      ))}
    </AboutSideNavbar>
  )
}

const navbarItems = [
  {
    slug: "about",
    EN: {
      title: "About",
    },
    DE: {
      title: "About",
    },
  },
  {
    slug: "about",
    EN: {
      title: "About",
    },
    DE: {
      title: "About",
    },
  },
]

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

AboutNavbar.propTypes = {
  currentPage: PropTypes.string,
}

export default connect(
  mapStateToProps,
  null
)(AboutNavbar)
