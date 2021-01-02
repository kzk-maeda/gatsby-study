import React from 'react';
import { graphql, Link, PageProps } from 'gatsby'
import { css } from '@emotion/react'
import { rhythm } from '../utils/typography'
import Layout from '../components/layout'

const Home:React.FC<PageProps<GatsbyTypes.BlogListQuery>> = ({ data }) => {
  // console.log(data)
  const styles: {[key: string]: React.CSSProperties} = {
    title: {
      display: 'inline-block',
      borderBottom: '1px solid' 
    },
    link: {
      textDecoration: 'node',
      color: 'ingerit'
    },
    postTitle: {
      marginBottom: `${rhythm(1 / 4)}`
    },
    postDate: {
      color: '#bbb'
    },
  }

  return (
    <Layout>
      <div>
        <h1 style={styles.title}>
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>
            <Link to={node.fields!.slug!} style={styles.link}>
              <h3 style={styles.postTitle}>
                {node.frontmatter!.title}{" "}
                <span style={styles.postDate} >
                  — {node.frontmatter!.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Home

export const query = graphql`
query BlogList {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        totalCount
        edges {
            node {
                id
                frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                }
                fields {
                    slug
                }
                excerpt
            }
        }
    }
}
`