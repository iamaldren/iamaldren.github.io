(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{198:function(A,e,a){"use strict";a.r(e);var t=a(0),r=a.n(t),n=a(215),o=a.n(n),i=a(202),c=a(254),l=a(220),s=function(A){var e=c.data;return e.allMarkdownRemark.edges.length>0?r.a.createElement("section",{id:"latest-blogposts",className:"container"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h2",null,"Latest Blogposts")),r.a.createElement(l.a,{data:e,remove:A.id})):r.a.createElement(r.a.Fragment,null)},d=a(201),m=a(213);a(255);a.d(e,"query",function(){return E});e.default=function(A){var e=A.data;return r.a.createElement(i.a,null,r.a.createElement(d.a,{lang:"en",title:e.markdownRemark.frontmatter.title,description:e.markdownRemark.frontmatter.description,image:e.markdownRemark.frontmatter.image.publicURL}),r.a.createElement("div",{className:"container"},r.a.createElement("article",{className:"blog-post"},null!=e.markdownRemark.frontmatter.banner&&r.a.createElement("div",{className:"banner"},r.a.createElement(o.a,{fluid:e.markdownRemark.frontmatter.banner.childImageSharp.fluid})),r.a.createElement("div",{className:"head text-primary"},r.a.createElement("h1",null,e.markdownRemark.frontmatter.title),r.a.createElement("p",{className:"post-date"},r.a.createElement(m.a,{data:e.markdownRemark.frontmatter.date}))),r.a.createElement("div",{className:"content row flex"},r.a.createElement("div",{className:"col s12 m11 l10",dangerouslySetInnerHTML:{__html:e.markdownRemark.html}}))),r.a.createElement(s,{id:e.markdownRemark.id})))};var E="1784941203"},213:function(A,e,a){"use strict";var t=a(0),r=a.n(t);e.a=function(A){var e=A.data,a=new Date(e),t=a.getDate(),n=a.getMonth(),o=a.getFullYear();return r.a.createElement("span",null,t," ",["January","February","March","April","May","June","July","August","September","October","November","December"][n]," ",o)}},220:function(A,e,a){"use strict";var t=a(0),r=a.n(t),n=a(215),o=a.n(n),i=a(213),c=a(200);a(224);var l=function(A){var e,a;function t(){return A.apply(this,arguments)||this}a=A,(e=t).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var n=t.prototype;return n.componentDidMount=function(){this.color=window.getComputedStyle(this.textSecondary,null).getPropertyValue("color"),this.textSecondary.querySelector("path").setAttribute("fill",this.color)},n.render=function(){var A=this;return r.a.createElement("div",{className:"item col s12 m6"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:this.props.data.node.frontmatter.image.childImageSharp.fluid}),r.a.createElement("a",{href:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title,"aria-label":this.props.data.node.frontmatter.title,className:"overlay-link",style:{opacity:0}},this.props.data.node.frontmatter.title)),r.a.createElement("div",{className:"content"},r.a.createElement("h3",{className:"text-primary"},r.a.createElement("a",{href:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title},this.props.data.node.frontmatter.title)),r.a.createElement("p",{className:"text-tertiary"},this.props.data.node.frontmatter.description),r.a.createElement("p",{className:"date text-secondary",ref:function(e){return A.textSecondary=e}},r.a.createElement("span",{className:"icon"},r.a.createElement(c.a,null)),r.a.createElement(i.a,{data:this.props.data.node.frontmatter.date})))))},t}(r.a.Component);e.a=function(A){var e=A.data.allMarkdownRemark.edges,a=[];return e.forEach(function(e,t){A.remove&&e.node.id===A.remove||a.push(r.a.createElement(l,{key:e.node.id,data:e}))}),r.a.createElement("div",{className:"row"},a)}},254:function(A){A.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"6e9f7969-271e-52bc-808d-9e30d72c0734","frontmatter":{"title":"Something Hot","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","date":"2019-06-29T00:00:00.000Z","image":{"publicURL":"/static/image-a0c9f6305e57141929d2b648047baeef.jpg","childImageSharp":{"fluid":{"srcSet":"/static/a0c9f6305e57141929d2b648047baeef/6ece9/image.jpg 480w,\\n/static/a0c9f6305e57141929d2b648047baeef/50f69/image.jpg 897w","base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBQL/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGyc/uL0GcamwzukB//xAAcEAEAAgIDAQAAAAAAAAAAAAABAAIREwMQISL/2gAIAQEAAQUCOabWbWVtmI5Tqvpf5f/EABcRAAMBAAAAAAAAAAAAAAAAAAABEhD/2gAIAQMBAT8BhEb/AP/EABcRAAMBAAAAAAAAAAAAAAAAAAABEhD/2gAIAQIBAT8Btl7/AP/EABsQAAEEAwAAAAAAAAAAAAAAAAABAhARITFB/9oACAEBAAY/Ao0Oowh2aQ//xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhUUFhkcH/2gAIAQEAAT8hVL+Qkbvk3UuVmWKOIQE7Ljc/MbeNVc//2gAMAwEAAgADAAAAEHAIgv/EABgRAQEAAwAAAAAAAAAAAAAAAAABEUFR/9oACAEDAQE/ENkYdRX/xAAZEQABBQAAAAAAAAAAAAAAAAAAARARQVH/2gAIAQIBAT8QSwlj/wD/xAAgEAEAAgIBBAMAAAAAAAAAAAABABEhMWFBUXGBkfDx/9oACAEBAAE/EA5cJ2RO8eAYk2c/uNcECAGl3iNRQZS6v3c2SE+JS2yTz9YYHdKUw4YPGQyerP/Z","aspectRatio":0.9988864142538976,"src":"/static/a0c9f6305e57141929d2b648047baeef/50f69/image.jpg","sizes":"(max-width: 897px) 100vw, 897px"},"id":"89aa36f1-22a0-5e2d-8ecb-136aa2aaceab"}}},"fields":{"slug":"/blog/something-hot/"}}},{"node":{"id":"faab795b-3846-5edc-9754-ee93f19f6b76","frontmatter":{"title":"Something Cool","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","date":"2019-06-29T00:00:00.000Z","image":{"publicURL":"/static/image-980080b6929d3f5a440cd0d25b2bf587.jpg","childImageSharp":{"fluid":{"srcSet":"/static/980080b6929d3f5a440cd0d25b2bf587/96cba/image.jpg 449w","base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIEAQMF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB7bEDYCNYLQP/xAAYEAADAQEAAAAAAAAAAAAAAAAAARACEv/aAAgBAQABBQKs7TjMqf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABUQAQEAAAAAAAAAAAAAAAAAACAx/9oACAEBAAY/AhT/AP/EABgQAQADAQAAAAAAAAAAAAAAAAEAEBFx/9oACAEBAAE/IbWQVhaQ9K//2gAMAwEAAgADAAAAEDMHAP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/EGP/xAAbEAEAAgIDAAAAAAAAAAAAAAABABEhMRBBUf/aAAgBAQABPxB5EFoW7Y3tI09QcQiA+wWl7Muswn//2Q==","aspectRatio":0.9977777777777778,"src":"/static/980080b6929d3f5a440cd0d25b2bf587/96cba/image.jpg","sizes":"(max-width: 449px) 100vw, 449px"},"id":"ce423abe-a9e0-520a-9e47-1f193d9ea571"}}},"fields":{"slug":"/blog/something-cool/"}}}]}}}')}}]);
//# sourceMappingURL=component---src-templates-blog-js-0f68b46ef5f9e791db43.js.map