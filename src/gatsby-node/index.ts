import { GatsbyNode, Actions } from "gatsby"
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql<{ allMarkdownRemark: Pick<GatsbyTypes.Query["allMarkdownRemark"], 'edges'> }>(`
        query {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                fields {
                    slug
                }
                }
            }
            }
        }
    `)

    result!.data!.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node!.fields!.slug || "",
            component: path.resolve(`./src/templates/blog-post.tsx`),
            context: {
                slug: node!.fields!.slug,
            },
        })
    })
}