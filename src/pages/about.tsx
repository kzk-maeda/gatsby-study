import { graphql, PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const About:React.FC<PageProps<GatsbyTypes.SiteTitleQuery>> = ({ data }) => {
  return (
    <Layout>
      <h1>About {data.site!.siteMetadata!.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export default About

export const query = graphql`
query SiteTitle {
    site {
        siteMetadata {
            title
        }
    }
}
`