(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{191:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return p});var r=a(0),n=a.n(r),o=a(202),l=a(220),c=a(205),i=a(225),s=a(201);var u=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.datas;return e.allMarkdownRemark.edges.length>0?n.a.createElement("section",{id:"blog",className:"container"},n.a.createElement("div",{className:"section-title"},n.a.createElement(c.a,{title:"BLOG"})),n.a.createElement(l.a,{data:e}),n.a.createElement(i.a,{pathContext:this.props.pathContext,type:"blog"})):n.a.createElement(n.a.Fragment,null)},r}(n.a.Component);t.default=function(e){var t=e.data,a=e.pathContext;return n.a.createElement(o.a,null,n.a.createElement(s.a,{lang:"en",title:"Blog"}),n.a.createElement(u,{datas:t,pathContext:a}))};var p="507480532"},205:function(e,t,a){"use strict";var r=a(0),n=a.n(r);function o(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={colorPrimary:"#00",colorSecondary:"#00"},a._id=r.counter,a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l,c,i,s=r.prototype;return s.componentDidMount=function(){this.setState({colorPrimary:window.getComputedStyle(this.cp,null).getPropertyValue("color"),colorSecondary:window.getComputedStyle(this.cs,null).getPropertyValue("color")})},s.render=function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{ref:function(t){return e.cp=t},className:"color-primary"}),n.a.createElement("span",{ref:function(t){return e.cs=t},className:"color-secondary"}),n.a.createElement("svg",{width:"100%",height:"150",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice"},n.a.createElement("linearGradient",{id:"primaryGradient"+this._id,x1:"0",x2:"100%",y1:"0",y2:"0",gradientUnits:"userSpaceOnUse"},n.a.createElement("stop",{stopColor:this.state.colorPrimary,offset:"0%"}),n.a.createElement("stop",{stopColor:this.state.colorSecondary,offset:"100%"})),n.a.createElement("text",{textAnchor:"middle",x:"50",y:"52",fill:"url(#primaryGradient"+this._id+")"},this.props.title)))},l=r,i=[{key:"counter",get:function(){return r._counter=(r._counter||0)+1,r._counter}}],(c=null)&&o(l.prototype,c),i&&o(l,i),r}(n.a.Component);t.a=l},213:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.data,a=new Date(t),r=a.getDate(),o=a.getMonth(),l=a.getFullYear();return n.a.createElement("span",null,r," ",["January","February","March","April","May","June","July","August","September","October","November","December"][o]," ",l)}},220:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(215),l=a.n(o),c=a(213),i=a(200);a(224);var s=function(e){var t,a;function r(){return e.apply(this,arguments)||this}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=r.prototype;return o.componentDidMount=function(){this.color=window.getComputedStyle(this.textSecondary,null).getPropertyValue("color"),this.textSecondary.querySelector("path").setAttribute("fill",this.color)},o.render=function(){var e=this;return n.a.createElement("div",{className:"item col s12 m6"},n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"image"},n.a.createElement(l.a,{fluid:this.props.data.node.frontmatter.image.childImageSharp.fluid}),n.a.createElement("a",{href:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title,"aria-label":this.props.data.node.frontmatter.title,className:"overlay-link",style:{opacity:0}},this.props.data.node.frontmatter.title)),n.a.createElement("div",{className:"content"},n.a.createElement("h3",{className:"text-primary"},n.a.createElement("a",{href:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title},this.props.data.node.frontmatter.title)),n.a.createElement("p",{className:"text-tertiary"},this.props.data.node.frontmatter.description),n.a.createElement("p",{className:"date text-secondary",ref:function(t){return e.textSecondary=t}},n.a.createElement("span",{className:"icon"},n.a.createElement(i.a,null)),n.a.createElement(c.a,{data:this.props.data.node.frontmatter.date})))))},r}(n.a.Component);t.a=function(e){var t=e.data.allMarkdownRemark.edges,a=[];return t.forEach(function(t,r){e.remove&&t.node.id===e.remove||a.push(n.a.createElement(s,{key:t.node.id,data:t}))}),n.a.createElement("div",{className:"row"},a)}},225:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(200);a(230);t.a=function(e){var t=e.pathContext,a=e.type;if(console.log(t,a),t.numPages>1){for(var r=[],l=1;l<=t.numPages;l++)r.push(n.a.createElement("li",{className:l===t.currentPage?"active":"",key:"PaginationItem"+l},n.a.createElement("a",{href:"/"+a+"/"+(1===l?"":l),title:a.charAt(0).toUpperCase()+a.slice(1)+" - Page "+l,key:"PaginationItemA"+l},l)));return n.a.createElement("div",{className:"pagination"},n.a.createElement("ul",null,1!==t.currentPage&&n.a.createElement("li",null,n.a.createElement("a",{href:"/"+a+"/"+(t.currentPage-1==1?"":t.currentPage-1),title:"Previous Page"},n.a.createElement("span",{className:"icon"},n.a.createElement(o.b,null)))),r,t.currentPage!==t.numPages&&n.a.createElement("li",null,n.a.createElement("a",{href:"/"+a+"/"+(t.currentPage+1),title:"Next Page"},n.a.createElement("span",{className:"icon"},n.a.createElement(o.c,null))))))}return n.a.createElement(n.a.Fragment,null)}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-44200d7a254c92d1b03f.js.map