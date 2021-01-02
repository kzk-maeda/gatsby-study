import { PageProps, graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout'

const BlogPost:React.FC<PageProps<GatsbyTypes.BlogHTMLQuery>> = ({ data }) => {
    const post = data.markdownRemark
    
    return (
        <Layout>
            <div>
                <h1>{post!.frontmatter!.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post!.html || "" }} />
            </div>
        </Layout>
    )
}

export default BlogPost

// export const query = BlogHTMLQuery
export const query = graphql`
query BlogHTML ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        html
        frontmatter {
            title
        }
    }
}
`