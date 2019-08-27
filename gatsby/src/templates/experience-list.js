import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ExperienceItems from "../components/items-experience"
import SectionTitle from "../components/sectiontitle"
import Pagination from "../components/pagination"
import SEO from "../components/seo"

class ExperienceList extends React.Component {
	render(){
		const query = this.props.datas;
		if(query.allMarkdownRemark.edges.length > 0){
			return (
				<section id="experience" className="container">
					<div className="section-title">
						<SectionTitle title="EXPERIENCE"/>
					</div>
					<ExperienceItems data={query}/>
					<Pagination pathContext={this.props.pathContext} type="experience"/>
				</section>
			)
		}else{
			return(
				<React.Fragment></React.Fragment>
			)
		}
	}

}


export default function({ data, pathContext }){
	return(
		<Layout>
			<SEO lang="en" title="Experience"/>
			<ExperienceList datas={data} pathContext={pathContext}/>
		</Layout>
	)
}

export const query = graphql `
	query experienceListPage($skip: Int!, $limit: Int!){
		allMarkdownRemark(
			filter: { fileAbsolutePath: {regex : "\/experience/"} }
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		){
			edges{
				node{
					id
					frontmatter{
						title
						description
						date
						image{
							publicURL
							childImageSharp {
								fluid(maxWidth: 1920) {
								  srcSet
								  ...GatsbyImageSharpFluid
								}
								id
							}
						}
					}
					fields {
						slug
					}
				}
			}
		}
	}
`
