const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)


exports.onCreateNode = ({ node, getNode, actions }) => {
  	const { createNodeField } = actions;
  	if (node.internal.type === `MarkdownRemark`) {
	    const slug = createFilePath({ node, getNode, basePath: `basepages` })
	    createNodeField({
	      node,
	      name: `slug`,
	      value: slug,
	    })
  	}
}

exports.createPages = ({ graphql, actions }) => {
  	const { createPage } = actions

  	return graphql(`
    	{
      		blog: allMarkdownRemark(
				filter: { fileAbsolutePath: {regex : "\/blog/"} }
			) {
        		edges {
          			node {
						frontmatter{
							template
						}
            			fields {
              				slug
            			}
          			}
        		}
      		}
			experience: allMarkdownRemark(
				filter: { fileAbsolutePath: {regex : "\/experience/"} }
			) {
        		edges {
          			node {
						frontmatter{
							template
						}
            			fields {
              				slug
            			}
          			}
        		}
      		}
			basepages: allMarkdownRemark(
				filter: { fileAbsolutePath: {regex : "\/basepages/"} }
			) {
        		edges {
          			node {
						frontmatter{
							template
						}
            			fields {
              				slug
            			}
          			}
        		}
      		}
			limitPost: site{
				siteMetadata{
					blogItemsPerPage
					experienceItemsPerPage
				}
			}
    	}
  `).then(result => {

	  	const blogPosts = result.data.blog.edges

	  	const blogPostsPerPage = result.data.limitPost.siteMetadata.blogItemsPerPage;
	  	const numBlogPages = Math.ceil(blogPosts.length / blogPostsPerPage)

		Array.from({ length: numBlogPages }).forEach((_, i) => {
			createPage({
		  		path: i === 0 ? `/blog` : `/blog/${i + 1}`,
		  		component: path.resolve("./src/templates/blog-list.js"),
		  		context: {
					limit: blogPostsPerPage,
					skip: i * blogPostsPerPage,
					numPages: numBlogPages,
					currentPage: i + 1,
		  		},
			})
	  	})

		const ExperienceItems = result.data.experience.edges
	  	const ExperienceItemsPerPage = result.data.limitPost.siteMetadata.experienceItemsPerPage;
	  	const numExperienceItems = Math.ceil(ExperienceItems.length / ExperienceItemsPerPage)

		Array.from({ length: numExperienceItems }).forEach((_, i) => {
			createPage({
		  		path: i === 0 ? `/experience` : `/experience/${i + 1}`,
		  		component: path.resolve("./src/templates/experience-list.js"),
		  		context: {
					limit: blogPostsPerPage,
					skip: i * blogPostsPerPage,
					numPages: numExperienceItems,
					currentPage: i + 1,
		  		},
			})
	  	})

		result.data.blog.edges.forEach(({ node }) => {
			let template = node.frontmatter.template === undefined ? "blog" : node.frontmatter.template;
	      	createPage({
		        path: node.fields.slug,
		        component: path.resolve("./src/templates/"+template+".js"),
		        context: {
		          	slug: node.fields.slug
		        },
	      	})
    	})

		result.data.experience.edges.forEach(({ node }) => {
			let template = node.frontmatter.template === undefined ? "experience" : node.frontmatter.template;
	      	createPage({
		        path: node.fields.slug,
		        component: path.resolve("./src/templates/"+template+".js"),
		        context: {
		          	slug: node.fields.slug
		        },
	      	})
    	})

		result.data.basepages.edges.forEach(({node}) => {
			let template = node.frontmatter.template === undefined ? "basepage" : node.frontmatter.template;
	      	createPage({
		        path: node.fields.slug,
		        component: path.resolve("./src/templates/"+template+".js"),
		        context: {
		          	slug: node.fields.slug
		        },
	      	})
		})

  	})
}
