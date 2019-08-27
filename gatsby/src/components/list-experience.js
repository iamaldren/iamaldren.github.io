import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ExperienceItems from "./items-experience"

export default function() {

	const query = useStaticQuery(graphql `
		query experienceList{
			allMarkdownRemark(
				filter: { fileAbsolutePath: {regex : "\/experience/"} },
				limit: 6,
		 		sort: {fields: [frontmatter___date], order: DESC}
			){
				edges{
					node{
						id
						frontmatter{
							title
							description
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
	`)

	return (
		<section id="experience" className="container">
			<ExperienceItems data={query}/>
		</section>
	)

}
