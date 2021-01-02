import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default function Layout({ children }: {children: any}) {
  // const data = useStaticQuery(SiteTitleQuery)

  const styles: {[key: string]: React.CSSProperties} = {
    siteTop: {
      margin: `0 auto`,
      maxWidth: `700px`,
      padding: `${rhythm(2)}`,
      paddingTop: `${rhythm(1.5)}`
    },
    siteTitle: {
      marginBottom: `${rhythm(2)}`,
      display: `inline-block`,
      fontStyle: `normal`,
    },
    aboutLink: {
      float: `right`,
    },
    filesLink: {
      float: `right`,
      marginRight: `20px`,
    }
  }
  return (
    <div style={styles.siteTop} >
      <Link to={`/`}>
        <h3 style={styles.siteTitle} >
          {/* {data.site.siteMetadata.title} */}
          Site Title
        </h3>
      </Link>
      <Link to={`/about/`} style={styles.aboutLink}>
        About
      </Link>
      <Link to={`/my-files/`} style={styles.filesLink}>
        Index
      </Link>
      {children}
    </div>
  )
}