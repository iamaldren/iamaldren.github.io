(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{197:function(e,t,A){"use strict";A.r(t);A(38);var a=A(0),r=A.n(a),n=A(202),i=A(201),s=A(203),o=A(281),l=A(226),c=function(){var e=o.data;return r.a.createElement("section",{id:"experience",className:"container"},r.a.createElement(l.a,{data:e}))},d=A(282),m=A(220),p=A(205),u=function(){var e=d.data;return e.allMarkdownRemark.edges.length>0?r.a.createElement("section",{id:"blog",className:"container"},r.a.createElement("div",{className:"section-title"},r.a.createElement(p.a,{title:"BLOG"})),r.a.createElement(m.a,{data:e})):r.a.createElement(r.a.Fragment,null)},E=A(227);A(283);A.d(t,"query",function(){return g});var h=function(e){var t,A;function a(t){var A;return(A=e.call(this,t)||this).state={winHeight:0},A}A=e,(t=a).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A;var o=a.prototype;return o.createSVGElement=function(e,t){for(var A in e=document.createElementNS("http://www.w3.org/2000/svg",e),t)e.setAttributeNS(null,A,t[A]);return e},o.componentDidMount=function(){this.setWindowHeight();var e=this;window.addEventListener("resize",function(){e.setWindowHeight()});var t=this.svg.clientWidth,A=this.svg.querySelector("text"),a=A.getBoundingClientRect().width;if(a>t){var r=A.innerHTML;if(r.split(" ").length>1)A.innerHTML="",r.split(" ").forEach(function(t,a){var r=e.createSVGElement("tspan",{dy:0===a?"0em":".8em",x:"50"});r.innerHTML=t,A.appendChild(r)}),setTimeout(function(){e.svg.style.height=A.getBoundingClientRect().height+70,e.svg.style.margin="15px auto"},250);else for(;a>t;){var n=parseInt(window.getComputedStyle(A,null).getPropertyValue("font-size"));A.style.fontSize=n-1+"px",a=A.getBoundingClientRect().width}}},o.setWindowHeight=function(){this.setState({winHeight:window.innerHeight})},o.render=function(){var e=this;return r.a.createElement(n.a,{placeholder:!1},r.a.createElement(i.a,{lang:"en",title:this.props.data.site.siteMetadata.title}),r.a.createElement("div",{className:"wall",style:{height:this.state.winHeight+"px"}},r.a.createElement("div",{className:"intro container"},r.a.createElement("div",{className:"main-title text-primary"},r.a.createElement("svg",{width:"90%",height:"220px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice",ref:function(t){return e.svg=t}},this.props.data.site.siteMetadata.capitalizeTitleOnHome?this.props.data.site.siteMetadata.title.toUpperCase():this.props.data.site.siteMetadata.title,r.a.createElement("pattern",{id:"wallPattern",patternUnits:"userSpaceOnUse",width:"100",height:"100"},r.a.createElement("rect",{x:"0",y:"0",className:"fill-primary",width:"100",height:"100"}),r.a.createElement("image",{xlinkHref:"/images/wall.jpg",height:"100",width:"100",y:"0",preserveAspectRatio:"none"})),r.a.createElement("text",{fill:"url(#wallPattern)",textAnchor:"middle",x:"50",y:"50"},this.props.data.site.siteMetadata.capitalizeTitleOnHome?this.props.data.site.siteMetadata.title.toUpperCase():this.props.data.site.siteMetadata.title))),r.a.createElement("p",{className:"tag-line text-secondary"},this.props.data.site.siteMetadata.introTag),r.a.createElement("p",{className:"caption text-tertiary"},this.props.data.site.siteMetadata.description),r.a.createElement("a",{href:"#experience",className:"btn"},"SEE WORKS")),r.a.createElement("div",{className:"social-buttons"},r.a.createElement(s.a,null))),r.a.createElement(c,null),r.a.createElement(u,null),r.a.createElement(E.a,null))},a}(r.a.Component),g=(t.default=h,"3407157170")},205:function(e,t,A){"use strict";var a=A(0),r=A.n(a);function n(e,t){for(var A=0;A<t.length;A++){var a=t[A];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var i=function(e){var t,A;function a(t){var A;return(A=e.call(this,t)||this).state={colorPrimary:"#00",colorSecondary:"#00"},A._id=a.counter,A}A=e,(t=a).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A;var i,s,o,l=a.prototype;return l.componentDidMount=function(){this.setState({colorPrimary:window.getComputedStyle(this.cp,null).getPropertyValue("color"),colorSecondary:window.getComputedStyle(this.cs,null).getPropertyValue("color")})},l.render=function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{ref:function(t){return e.cp=t},className:"color-primary"}),r.a.createElement("span",{ref:function(t){return e.cs=t},className:"color-secondary"}),r.a.createElement("svg",{width:"100%",height:"150",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice"},r.a.createElement("linearGradient",{id:"primaryGradient"+this._id,x1:"0",x2:"100%",y1:"0",y2:"0",gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:this.state.colorPrimary,offset:"0%"}),r.a.createElement("stop",{stopColor:this.state.colorSecondary,offset:"100%"})),r.a.createElement("text",{textAnchor:"middle",x:"50",y:"52",fill:"url(#primaryGradient"+this._id+")"},this.props.title)))},i=a,o=[{key:"counter",get:function(){return a._counter=(a._counter||0)+1,a._counter}}],(s=null)&&n(i.prototype,s),o&&n(i,o),a}(r.a.Component);t.a=i},213:function(e,t,A){"use strict";var a=A(0),r=A.n(a);t.a=function(e){var t=e.data,A=new Date(t),a=A.getDate(),n=A.getMonth(),i=A.getFullYear();return r.a.createElement("span",null,a," ",["January","February","March","April","May","June","July","August","September","October","November","December"][n]," ",i)}},214:function(e,t,A){var a;e.exports=(a=A(222))&&a.default||a},220:function(e,t,A){"use strict";var a=A(0),r=A.n(a),n=A(215),i=A.n(n),s=A(213),o=A(200);A(224);var l=function(e){var t,A;function a(){return e.apply(this,arguments)||this}A=e,(t=a).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A;var n=a.prototype;return n.componentDidMount=function(){this.color=window.getComputedStyle(this.textSecondary,null).getPropertyValue("color"),this.textSecondary.querySelector("path").setAttribute("fill",this.color)},n.render=function(){var e=this;return r.a.createElement("div",{className:"item col s12 m6"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"image"},r.a.createElement(i.a,{fluid:this.props.data.node.frontmatter.image.childImageSharp.fluid}),r.a.createElement("a",{href:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title,"aria-label":this.props.data.node.frontmatter.title,className:"overlay-link",style:{opacity:0}},this.props.data.node.frontmatter.title)),r.a.createElement("div",{className:"content"},r.a.createElement("h3",{className:"text-primary"},r.a.createElement("a",{href:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title},this.props.data.node.frontmatter.title)),r.a.createElement("p",{className:"text-tertiary"},this.props.data.node.frontmatter.description),r.a.createElement("p",{className:"date text-secondary",ref:function(t){return e.textSecondary=t}},r.a.createElement("span",{className:"icon"},r.a.createElement(o.a,null)),r.a.createElement(s.a,{data:this.props.data.node.frontmatter.date})))))},a}(r.a.Component);t.a=function(e){var t=e.data.allMarkdownRemark.edges,A=[];return t.forEach(function(t,a){e.remove&&t.node.id===e.remove||A.push(r.a.createElement(l,{key:t.node.id,data:t}))}),r.a.createElement("div",{className:"row"},A)}},221:function(e,t,A){"use strict";A.d(t,"b",function(){return l});var a=A(0),r=A.n(a),n=A(66),i=A.n(n);A.d(t,"a",function(){return i.a});A(214),A(7).default.enqueue;var s=r.a.createContext({});function o(e){var t=e.staticQueryData,A=e.data,a=e.query,n=e.render,i=A?A.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,i&&n(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,A=e.query,a=e.render,n=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(o,{data:t,query:A,render:a||n,staticQueryData:e})})}},222:function(e,t,A){"use strict";A.r(t);A(18);var a=A(0),r=A.n(a),n=A(92);t.default=function(e){var t=e.location,A=e.pageResources;return A?r.a.createElement(n.a,Object.assign({location:t,pageResources:A},A.json)):null}},226:function(e,t,A){"use strict";var a=A(0),r=A.n(a),n=A(215),i=A.n(n);A(231);var s=function(e){var t,A;function a(){return e.apply(this,arguments)||this}return A=e,(t=a).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,a.prototype.render=function(){return r.a.createElement("div",{className:"item col s12"},r.a.createElement("div",{className:"row flex"},r.a.createElement("div",{className:"col m6 image"},r.a.createElement(i.a,{fluid:this.props.data.node.frontmatter.image.childImageSharp.fluid}),r.a.createElement("a",{href:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title,"aria-label":this.props.data.node.frontmatter.title,className:"overlay-link",style:{opacity:0}},this.props.data.node.frontmatter.title)),r.a.createElement("div",{className:"col m6 content"},r.a.createElement("h2",{className:"text-primary pseudo-divider"},r.a.createElement("a",{href:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title,"aria-label":this.props.data.node.frontmatter.title},this.props.data.node.frontmatter.title)),r.a.createElement("p",{className:"text-tertiary"},this.props.data.node.frontmatter.description))))},a}(r.a.Component);t.a=function(e){var t=e.data.allMarkdownRemark.edges,A=[];return t.forEach(function(e,t){A.push(r.a.createElement(s,{key:e.node.id,data:e}))}),r.a.createElement("div",{className:"row"},A)}},227:function(e,t,A){"use strict";var a=A(228),r=A(0),n=A.n(r),i=A(205),s=A(221),o=A(200),l=A(203);A(243);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){var t,A;function a(t){var A;return(A=e.call(this,t)||this).state={submitDisabled:!1},A.textAreaInput=A.textAreaInput.bind(c(A)),A.handleSubmit=A.handleSubmit.bind(c(A)),A.showContactForm=!0,""===A.props.contact.api_url&&(A.showContactForm=!1),A}A=e,(t=a).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A;var r=a.prototype;return r.textAreaInput=function(e){e.target.style.height="auto",e.target.style.height=e.target.scrollHeight+"px"},r.handleSubmit=function(e){var t=this;if(e.preventDefault(),!this.state.submitDisabled){this.setState({submitDisabled:!0});var A=encodeURI(this.dataName.value),a=encodeURI(this.dataEmail.value),r=encodeURI(this.dataMessage.value);fetch("http://localhost/local/test.json",{method:"post",body:"name="+A+"&email="+a+"&message="+r}).then(function(e){return e.json()}).then(function(e){t.setState({submitDisabled:!1}),t.resMessage.style.opacity=1,"error"===e.response?(t.resMessage.innerHTML="There was an error in sending the message",t.resMessage.classList.add("color-error")):(t.resMessage.innerHTML="Message sent succesfully",t.resMessage.classList.remove("color-error")),t.dataName.value="",t.dataEmail.value="",t.dataMessage.value="";var A=t;setTimeout(function(){A.resMessage.style.opacity=0},5e3)},function(e){t.resMessage.innerHTML="Message sent succesfully",t.resMessage.classList.remove("color-error"),t.setState({submitDisabled:!1});var A=t;setTimeout(function(){A.resMessage.style.opacity=0},5e3)})}},r.componentDidMount=function(){if(this.showContactForm){var e=window.getComputedStyle(this.btn,null).getPropertyValue("color");this.btn.querySelector("path").setAttribute("fill",e)}this.contactArea.querySelectorAll(".item").forEach(function(e,t){var A=e.querySelector("path");A&&A.setAttribute("fill",window.getComputedStyle(e,null).getPropertyValue("color"))})},r.render=function(){var e=this;return n.a.createElement("section",{id:"contact",className:"container"},n.a.createElement("div",{className:"section-title"},n.a.createElement(i.a,{title:"CONTACT"})),n.a.createElement("div",{className:"row"+(this.showContactForm?"":" no-form"),ref:function(t){return e.contactArea=t}},this.showContactForm&&n.a.createElement("div",{className:"col s12 m6"},n.a.createElement("form",null,n.a.createElement("div",{className:"field"},n.a.createElement("label",null,n.a.createElement("span",{className:"label text-tertiary"},"Name"),n.a.createElement("div",{className:"input-border"},n.a.createElement("input",{type:"text",ref:function(t){return e.dataName=t},className:"field-box",name:"name",id:"name",required:!0})))),n.a.createElement("div",{className:"field"},n.a.createElement("label",null,n.a.createElement("span",{className:"label text-tertiary"},"Email"),n.a.createElement("div",{className:"input-border"},n.a.createElement("input",{type:"email",ref:function(t){return e.dataEmail=t},className:"field-box",name:"email",id:"email",required:!0})))),n.a.createElement("div",{className:"field"},n.a.createElement("label",null,n.a.createElement("span",{className:"label text-tertiary"},"Message"),n.a.createElement("div",{className:"input-border"},n.a.createElement("textarea",{style:{overflowY:"hidden"},ref:function(t){return e.dataMessage=t},className:"field-box",onChange:this.textAreaInput,name:"message",id:"message",required:!0})))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"ib"},n.a.createElement("button",{className:"btn"+(this.state.submitDisabled?" disabled":""),onClick:this.handleSubmit,id:"submit",ref:function(t){return e.btn=t}},"SEND ",n.a.createElement("span",{className:"icon paper-plane",style:{display:this.state.submitDisabled?"none":"inline-block"}},n.a.createElement(o.i,null)),n.a.createElement("span",{className:"icon loading",style:{display:this.state.submitDisabled?"inline-block":"none"}},n.a.createElement(o.f,null)))),n.a.createElement("label",null,n.a.createElement("p",{className:"res-message",ref:function(t){return e.resMessage=t}}))))),n.a.createElement("div",{className:this.showContactForm?"col s12 m6 details":"col s12 details"},this.props.contact.description&&n.a.createElement("p",{className:"text-tertiary"},this.props.contact.description),n.a.createElement("ul",null,this.props.contact.mail&&n.a.createElement("li",{className:"text-secondary item"},n.a.createElement("span",{className:"icon"},n.a.createElement(o.d,null)),n.a.createElement("a",{href:"mailto:"+this.props.contact.mail},this.props.contact.mail)),this.props.contact.phone&&n.a.createElement("li",{className:"text-secondary item"},n.a.createElement("span",{className:"icon"},n.a.createElement(o.h,null)),n.a.createElement("a",{href:"tel:"+this.props.contact.phone},this.props.contact.phone)),this.props.contact.address&&n.a.createElement("li",{className:"text-tertiary item",style:{whiteSpace:"pre"}},n.a.createElement("span",{className:"icon"},n.a.createElement(o.g,null)),this.props.contact.address),n.a.createElement("li",null,n.a.createElement(l.a,null))))))},a}(n.a.Component);t.a=function(){return n.a.createElement(s.b,{query:"2503414151",render:function(e){return n.a.createElement(d,{contact:e.site.siteMetadata.contact})},data:a})}},228:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"contact":{"api_url":"./test.json","description":"Feel free to reach out.","mail":"aldrenbobiles@gmail.com","phone":"000-000-0000","address":"Singapore"}}}}}')},281:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"9bdc7f0b-08f0-5a0f-ab97-80001dce8471","frontmatter":{"title":"Skills","description":"Tech Stack","image":{"publicURL":"/static/image-78f94840818f17b18b912c87a1f0e3a7.jpg","childImageSharp":{"fluid":{"srcSet":"/static/78f94840818f17b18b912c87a1f0e3a7/6ece9/image.jpg 480w,\\n/static/78f94840818f17b18b912c87a1f0e3a7/2024d/image.jpg 536w","base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDAgT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQMC/9oADAMBAAIQAxAAAAGLU2chQMVmaV5mRz//xAAbEAACAgMBAAAAAAAAAAAAAAABAgARAxIhMf/aAAgBAQABBQJRsXFJFaptat6cpnRLaKOMeT//xAAZEQACAwEAAAAAAAAAAAAAAAAAAwIQIRH/2gAIAQMBAT8BYve1Iw//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPwEY/8QAHBAAAgICAwAAAAAAAAAAAAAAAREAEDFhMkGB/9oACAEBAAY/Ai89wqi8qHdcnNX7X//EABwQAQACAwADAAAAAAAAAAAAAAEAESExYUFRof/aAAgBAQABPyFKxoVb3C8kSufYmQmMsqLso0NTHMNROFRwvqVlDNroS6WZ/9oADAMBAAIAAwAAABC8xnz/xAAcEQACAgIDAAAAAAAAAAAAAAAAARExIVFhcYH/2gAIAQMBAT8Qoleq84MKzJS1HRA//8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREEH/2gAIAQIBAT8QioV8Fn//xAAhEAACAQMEAwEAAAAAAAAAAAABEQAhMUFRcYGhYZGx4f/aAAgBAQABPxA9qHIQ0flX2j5JIKw1G0cpBgEDDhGG8jBg1NEailXs+oQQYUttDbmaEkBDqNYqGBZj9gFEoWoIipSg1cbFW+xHu5n/2Q==","aspectRatio":0.6658385093167701,"src":"/static/78f94840818f17b18b912c87a1f0e3a7/2024d/image.jpg","sizes":"(max-width: 536px) 100vw, 536px"},"id":"2d162d61-f14a-539c-a5e3-8a0267716e14"}}},"fields":{"slug":"/experience/skills/"}}},{"node":{"id":"f47215cd-ce2e-5b29-8081-d4aba261fb64","frontmatter":{"title":"Concerts","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","image":{"publicURL":"/static/image-6d4db0a02ba350c67407eca43ae35704.jpg","childImageSharp":{"fluid":{"srcSet":"/static/6d4db0a02ba350c67407eca43ae35704/6ece9/image.jpg 480w,\\n/static/6d4db0a02ba350c67407eca43ae35704/06996/image.jpg 658w","base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAQADBAX/xAAXAQEBAQEAAAAAAAAAAAAAAAABAwIE/9oADAMBAAIQAxAAAAE83qwty8807DnGmIf/xAAcEAABAwUAAAAAAAAAAAAAAAABAAIQAxESIDH/2gAIAQEAAQUCqtAREPfkTF0eaf/EABcRAAMBAAAAAAAAAAAAAAAAAAEQEQL/2gAIAQMBAT8BwIov/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAIR/9oACAECAQE/AaNP/8QAFBABAAAAAAAAAAAAAAAAAAAAMP/aAAgBAQAGPwJP/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAERIRAxQVH/2gAIAQEAAT8hlMUHWHqx7PQ3TmssZ//aAAwDAQACAAMAAAAQ2DmO/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQEf/aAAgBAwEBPxBBC45f/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAREP/aAAgBAgEBPxBDYcbf/8QAHhABAAICAQUAAAAAAAAAAAAAAQARITFBUWFxgaH/2gAIAQEAAT8QLLUwtYIzaHLjrDypSxhTDBYsh55jU2LX3l1v7CJdzb0T/9k=","aspectRatio":0.7144408251900108,"src":"/static/6d4db0a02ba350c67407eca43ae35704/06996/image.jpg","sizes":"(max-width: 658px) 100vw, 658px"},"id":"32a12320-1bf9-500c-8e41-4454dddb4a48"}}},"fields":{"slug":"/experience/concerts/"}}}]}}}')},282:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"faab795b-3846-5edc-9754-ee93f19f6b76","frontmatter":{"title":"Something Cool","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","date":"2019-06-29T00:00:00.000Z","image":{"publicURL":"/static/image-980080b6929d3f5a440cd0d25b2bf587.jpg","childImageSharp":{"fluid":{"srcSet":"/static/980080b6929d3f5a440cd0d25b2bf587/96cba/image.jpg 449w","base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIEAQMF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB7bEDYCNYLQP/xAAYEAADAQEAAAAAAAAAAAAAAAAAARACEv/aAAgBAQABBQKs7TjMqf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABUQAQEAAAAAAAAAAAAAAAAAACAx/9oACAEBAAY/AhT/AP/EABgQAQADAQAAAAAAAAAAAAAAAAEAEBFx/9oACAEBAAE/IbWQVhaQ9K//2gAMAwEAAgADAAAAEDMHAP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/EGP/xAAbEAEAAgIDAAAAAAAAAAAAAAABABEhMRBBUf/aAAgBAQABPxB5EFoW7Y3tI09QcQiA+wWl7Muswn//2Q==","aspectRatio":0.9977777777777778,"src":"/static/980080b6929d3f5a440cd0d25b2bf587/96cba/image.jpg","sizes":"(max-width: 449px) 100vw, 449px"},"id":"ce423abe-a9e0-520a-9e47-1f193d9ea571"}}},"fields":{"slug":"/blog/something-cool/"}}},{"node":{"id":"6e9f7969-271e-52bc-808d-9e30d72c0734","frontmatter":{"title":"Something Hot","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","date":"2019-06-29T00:00:00.000Z","image":{"publicURL":"/static/image-a0c9f6305e57141929d2b648047baeef.jpg","childImageSharp":{"fluid":{"srcSet":"/static/a0c9f6305e57141929d2b648047baeef/6ece9/image.jpg 480w,\\n/static/a0c9f6305e57141929d2b648047baeef/50f69/image.jpg 897w","base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBQL/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGyc/uL0GcamwzukB//xAAcEAEAAgIDAQAAAAAAAAAAAAABAAIREwMQISL/2gAIAQEAAQUCOabWbWVtmI5Tqvpf5f/EABcRAAMBAAAAAAAAAAAAAAAAAAABEhD/2gAIAQMBAT8BhEb/AP/EABcRAAMBAAAAAAAAAAAAAAAAAAABEhD/2gAIAQIBAT8Btl7/AP/EABsQAAEEAwAAAAAAAAAAAAAAAAABAhARITFB/9oACAEBAAY/Ao0Oowh2aQ//xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhUUFhkcH/2gAIAQEAAT8hVL+Qkbvk3UuVmWKOIQE7Ljc/MbeNVc//2gAMAwEAAgADAAAAEHAIgv/EABgRAQEAAwAAAAAAAAAAAAAAAAABEUFR/9oACAEDAQE/ENkYdRX/xAAZEQABBQAAAAAAAAAAAAAAAAAAARARQVH/2gAIAQIBAT8QSwlj/wD/xAAgEAEAAgIBBAMAAAAAAAAAAAABABEhMWFBUXGBkfDx/9oACAEBAAE/EA5cJ2RO8eAYk2c/uNcECAGl3iNRQZS6v3c2SE+JS2yTz9YYHdKUw4YPGQyerP/Z","aspectRatio":0.9988864142538976,"src":"/static/a0c9f6305e57141929d2b648047baeef/50f69/image.jpg","sizes":"(max-width: 897px) 100vw, 897px"},"id":"89aa36f1-22a0-5e2d-8ecb-136aa2aaceab"}}},"fields":{"slug":"/blog/something-hot/"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-a5e9675c56e2b0ebd092.js.map