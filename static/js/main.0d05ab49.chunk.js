(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,function(e,t,a){e.exports={container:"projects_container__2bY3P",moveInRight:"projects_moveInRight__2a8L4",card:"projects_card___0fhB",image:"projects_image__3wvAZ",content:"projects_content__1v3lC",header:"projects_header__1QWAT",tags:"projects_tags__2Hz5E",actions:"projects_actions__3zHwX",link:"projects_link__2RyAi",fadeIn:"projects_fadeIn__16qZo",moveInLeft:"projects_moveInLeft__3PMs7",moveInBottom:"projects_moveInBottom__IuOyC"}},function(e,t,a){e.exports={headerText:"home_headerText__2n_z2",moveInLeft:"home_moveInLeft__3O8ir",title:"home_title__2lrKX",subtitle:"home_subtitle__14NBl",about:"home_about__1ijwJ",moveInBottom:"home_moveInBottom__1E5sG",header:"home_header__RkmIs",content:"home_content__1aiwk",center:"home_center__WoFm2",button:"home_button__2q1CS",fadeIn:"home_fadeIn__ObRNV",moveInRight:"home_moveInRight__1m8Ju"}},,,function(e,t,a){e.exports={container:"resume_container__1vVLE",moveInBottom:"resume_moveInBottom__WqlLX",center:"resume_center__2fLrJ",fadeIn:"resume_fadeIn__1WBBc",moveInLeft:"resume_moveInLeft__27BwH",moveInRight:"resume_moveInRight__2PKCe"}},function(e,t,a){e.exports={navContainer:"nav_navContainer__1yVoM",transparentNav:"nav_transparentNav__Z4hMW",opaqueNav:"nav_opaqueNav__33t-9",nav:"nav_nav__2JIqu",fadeIn:"nav_fadeIn__1j1rl",moveInRight:"nav_moveInRight__2yNZ3",moveInLeft:"nav_moveInLeft__1XW-v",moveInBottom:"nav_moveInBottom__3aGdi"}},function(e,t,a){e.exports={bg:"app_bg__3AbEe",app:"app_app__5wXNi",container:"app_container__1lZ1J"}},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/resume.fb7c32b1.png"},function(e,t,a){e.exports=a.p+"static/media/resume.5c8a31ef.pdf"},function(e,t,a){e.exports=a.p+"static/media/glipher.999c2a24.png"},function(e,t,a){e.exports=a.p+"static/media/hwa.e0470f62.png"},,function(e,t,a){e.exports={footer:"footer_footer__Cczs0"}},,function(e,t,a){e.exports=a(35)},,,,,,,,,,function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(17),r=a.n(l),o=a(10),i=a.n(o),m=a(5),s=a.n(m),C=function(){return n.a.createElement("div",{className:s.a.header},n.a.createElement("section",{className:s.a.headerText},n.a.createElement("h1",{className:s.a.title},"Mubtasim Mahmud"),n.a.createElement("h1",{className:s.a.subtitle},"Full Stack Developer")),n.a.createElement("section",{className:s.a.about},n.a.createElement("h2",{className:s.a.header},"About Me"),n.a.createElement("p",{className:s.a.content},"I have experience in creating full stack apps using a variety of web technologies. I consider myself to be language agnostic, and am used to learning a new language or framework on the job.",n.a.createElement("br",null),n.a.createElement("br",null),"I like to upskill myself regularly with emerging technologies such as PWAs, GraphQL, Natural Language Processing and hybrid-native mobile app development using web technologies. As a software developer, I believe in continuously improving myself, as I believe that in this profession, lifelong learning is an inescapable part of the lifestyle.")))},p=a(18),d=a.n(p),u=a(19),h=a.n(u),E=a(8),f=a.n(E),_=function(){return n.a.createElement("div",{className:f.a.container},n.a.createElement("div",{className:f.a.center},n.a.createElement("img",{className:f.a.image,src:d.a,alt:"Resume"})),n.a.createElement("div",{className:f.a.center},n.a.createElement("button",{onClick:function(){var e=document.createElement("a");e.href=h.a,e.download="Resume.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)}},"Download my Resume")))},v=a(4),B=a.n(v),g=function(e){var t=e.title,a=e.description,c=e.image,l=e.links,r=e.tags;return n.a.createElement("div",{className:B.a.card},n.a.createElement("img",{className:B.a.image,src:c,alt:t}),n.a.createElement("div",{className:B.a.content},n.a.createElement("h2",{className:B.a.header},t),n.a.createElement("p",{className:B.a.description},a),n.a.createElement("ul",{className:B.a.tags},r.map((function(e){return n.a.createElement("li",null,e)})))),n.a.createElement("div",{className:B.a.actions},l.map((function(e){return n.a.createElement("button",{onClick:function(){return t=e.url,void window.open(t,"_blank").focus();var t},className:B.a.link},e.text)}))))},w=a(20),M=a.n(w),b=a(21),z=a.n(b),x=[{image:M.a,title:"Glipher",description:"A Chrome extension to clip sections of YouTube videos and create animated GIFs from them",links:[{text:"View Code",url:"https://github.com/mub2332/glipher"}],tags:["jQuery","AWS Lambda","API Gateway"]},{image:z.a,title:"Monash HWA Calculator",description:"A Chrome extension to help honors students calculate their honors weighted average mark easily",links:[{text:"View Code",url:"https://github.com/mub2332/monash-hwa-calculator"}],tags:["jQuery"]}],I=function(){return n.a.createElement("div",{className:B.a.container},x.map((function(e){return n.a.createElement(g,e)})))},L=a(24),k=a(9),N=a.n(k),y=a(6),j=function(){var e=Object(c.useState)("transparent"),t=Object(L.a)(e,2),a=t[0],l=t[1];return Object(c.useEffect)((function(){var e=function(){0===window.pageYOffset?l("transparent"):l("opaque")};return window.addEventListener("scroll",e,{passive:!0}),function(){window.removeEventListener("scroll",e)}}),[a]),n.a.createElement("div",{className:N.a.navContainer+" "+("transparent"===a?N.a.transparentNav:N.a.opaqueNav)},n.a.createElement("nav",null,n.a.createElement("ul",{className:N.a.nav},n.a.createElement("li",null,n.a.createElement(y.b,{exact:!0,activeStyle:{color:"#c8a2c8",borderBottom:"2px solid #c8a2c8"},to:"/portfolio"},"Home")),n.a.createElement("li",null,n.a.createElement(y.b,{exact:!0,activeStyle:{color:"#c8a2c8",borderBottom:"2px solid #c8a2c8"},to:"/portfolio/resume"},"Resume")),n.a.createElement("li",null,n.a.createElement(y.b,{exact:!0,activeStyle:{color:"#c8a2c8",borderBottom:"2px solid #c8a2c8"},to:"/portfolio/projects"},"Projects")))))},D=a(23),R=a.n(D),Z=function(){return n.a.createElement("svg",{viewBox:"0 0 256 250",width:"30",height:"30",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid"},n.a.createElement("g",null,n.a.createElement("path",{d:"M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z",fill:"#fff"})))},A=function(){return n.a.createElement("svg",{viewBox:"0 0 72 72",width:"30",height:"30",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},n.a.createElement("title",null,"Linkedin"),n.a.createElement("desc",null,"Created with Sketch."),n.a.createElement("defs",null),n.a.createElement("g",{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n.a.createElement("g",{id:"Social-Icons---Rounded",transform:"translate(-376.000000, -267.000000)"},n.a.createElement("g",{id:"Linkedin",transform:"translate(376.000000, 267.000000)"},n.a.createElement("path",{d:"M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z",id:"Rounded",fill:"#007EBB"}),n.a.createElement("path",{d:"M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z",fill:"#FFFFFF"})))))},F=function(){return n.a.createElement("svg",{"enable-background":"new 0 0 512 512",id:"Layer_1",version:"1.1",width:"30",height:"30",viewBox:"0 0 512 512",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},n.a.createElement("g",null,n.a.createElement("path",{d:"M461.1,70.3c4.5-2.7,9.1-1.2,13.5,0c17.1,4.7,29.2,20.4,29.5,38.3c0.1,4.5-0.1,9-0.1,13.4   c-1.3,0-2.1,0.8-3.1,1.5c-12.6,9-25.4,18-37.9,27.1c-5.1,3.7-10.7,6.6-15,11.3c-1.8,0-3.1,1.2-4.4,2.1   c-41.6,28.7-83.2,57.3-124.7,86c-20.6,14.2-41.2,28.6-61.8,42.9c-0.6,0-1.2,0-1.7,0c-0.9-0.7-1.7-1.6-2.6-2.2   c-50.7-35.3-101.4-70.6-152.1-105.9c-10.4-7.2-20.8-14.5-31.2-21.7c-1.2-0.8-2.3-2.5-3.8-1.6c-1.4,0.8-0.5,2.7-0.7,4.2   c-0.1,0.5,0,1,0,1.5c0,83.5,0,167,0,250.5c0,1.8,0.1,3.7,0.2,5.5c0,1-0.1,1.9-0.1,2.9c-19,2.3-36.3-0.3-48.2-17.5   c-4.3-6.3-6.8-13.3-6.8-21.1c0-93.3-0.1-186.5,0.1-279.8c0-19,15.4-35.8,34.3-38.5c3-0.4,6-0.8,8.6,1.2c0.6,0.6,1.1,1.2,1.8,1.7   c66.1,49,132.2,98,198.3,147.1c2.6,1.9,4.3,1.8,6.9-0.1c52.8-39,105.7-77.9,158.5-116.8C432.6,91.6,446.8,80.9,461.1,70.3z",fill:"#E65A4D"}),n.a.createElement("path",{d:"M461.1,70.3c-14.3,10.6-28.5,21.3-42.8,31.9C365.5,141.2,312.6,180,259.8,219c-2.6,1.9-4.2,2-6.9,0.1   C186.9,170,120.8,121.1,54.7,72c-0.7-0.5-1.2-1.1-1.8-1.7c1.2-2,3.3-1.3,5-1.3c132.7,0,265.5,0,398.2,0   C457.8,69,459.8,68.3,461.1,70.3z",fill:"#F6F4EC"}),n.a.createElement("path",{d:"M65,423c-0.1-1.8-0.2-3.7-0.2-5.5c0-83.5,0-167,0-250.5c0-0.5-0.1-1,0-1.5c0.2-1.4-0.7-3.3,0.7-4.2   c1.5-0.9,2.7,0.8,3.8,1.6c10.4,7.2,20.8,14.5,31.2,21.7c50.7,35.3,101.4,70.6,152.1,105.9c0.9,0.7,1.8,1.5,2.6,2.2   c-0.4,0.4-0.9,0.7-1.3,1.1c-0.3,0.3-0.7,0.7-1,1c-0.8,0-1.6,0.2-2,1c-0.3,0.3-0.7,0.7-1,1c-0.1,0.2-0.3,0.3-0.4,0.5   c0.2-0.1,0.3-0.3,0.5-0.4c0.3-0.3,0.7-0.7,1-1c0.8,0,1.6-0.2,2-1c0.3-0.3,0.7-0.7,1-1c1,0,2-0.1,3-0.1c13.9,9.7,27.9,19.3,41.8,29   c41.4,28.7,82.8,57.3,124.1,86.2c7.4,5.2,15.5,9.7,22.1,16c-1.8,1.7-4,0.6-6,0.9c0.1-2.3-1.9-2.9-3.4-3.9   c-7.6-5.3-15.4-10.4-22.8-15.9c-12.4-9.1-25-17.8-37.6-26.6c-10.5-7.3-20.9-14.9-31.7-21.8c-9.4-6-18.1-13.2-27.5-19.3   c-10.6-6.8-20.6-14.4-31.1-21.3c-8.7-5.7-17.2-11.8-25.7-17.8c-1.7-1.2-3.2-1.7-5-0.5c-3.6,2.6-8.2,4.3-11.2,7.1   c-8.6,7.9-19.1,13-28.1,20.2c-11.5,9.1-23.9,17.2-36.2,25.3c-20.4,13.5-40.2,28.1-60.5,41.7c-12.1,8.1-24.1,16.3-35.7,25.2   c-3.2,2.4-7.5,3.5-9.5,7.5c-2-0.2-4.2,0.6-6.1-0.7c35.8-25,71.6-49.9,107.3-74.9c4.7-3.3,10-5.9,13.9-10.3c0.7-0.2,1.6-0.3,1.5-1.3   c0-0.1-0.2-0.3-0.3-0.3c-1-0.1-1.2,0.7-1.4,1.4c-3.6,0.2-5.8,3-8.5,4.8C141.3,370.8,103.1,396.9,65,423z M237,306   c0.3-0.3,0.7-0.7,1-1c0.8,0,1.6-0.2,2-1c0.3-0.3,0.7-0.7,1-1c0.8,0,1.6-0.2,2-1c0.1-0.2,0.3-0.3,0.4-0.5c-0.2,0.1-0.3,0.3-0.5,0.4   c-0.8,0-1.6,0.2-2,1c-0.3,0.3-0.7,0.7-1,1c-0.8,0-1.6,0.2-2,1C237.6,305.3,237.3,305.6,237,306c-0.2,0.1-0.4,0.2-0.5,0.4   C236.7,306.3,236.9,306.2,237,306z M224,314.9c-0.8,0-1.6,0.2-2,1c-0.6,0.1-1.4,0.1-1.5,1c0,0.2,0.4,0.6,0.6,0.6   c0.8-0.1,0.9-0.8,1-1.4C222.9,316,223.6,315.9,224,314.9c0.4-0.2,0.8-0.6,1.1-0.9c0.8,0,1.6-0.2,2-1c0.3-0.3,0.7-0.7,1-1   c0.8,0,1.6-0.2,2-1c0.1-0.2,0.3-0.3,0.4-0.5c-0.2,0.1-0.3,0.3-0.5,0.4c-0.8,0-1.6,0.2-2,1c-0.3,0.3-0.7,0.7-1,1c-0.8,0-1.6,0.2-2,1   C224.6,314.3,224.3,314.6,224,314.9z M211,324c-0.8,0-1.6,0.2-2,1c-0.8,0.1-1.6,0.2-1.5,1.3c0,0.1,0.2,0.3,0.3,0.3   c1.1,0.1,1.2-0.7,1.3-1.5C209.9,325,210.6,324.8,211,324c0.4-0.2,0.7-0.6,1.1-0.9c0.8,0,1.6-0.2,2-1c0.3-0.3,0.7-0.7,1-1   c0.8,0,1.6-0.2,2-1c0.1-0.2,0.3-0.3,0.4-0.5c-0.2,0.1-0.3,0.3-0.5,0.4c-0.8,0-1.6,0.2-2,1c-0.3,0.3-0.7,0.7-1,1c-0.8,0-1.6,0.2-2,1   C211.6,323.3,211.3,323.6,211,324z M201,331.1c0.8-0.1,1.6-0.2,1.5-1.3c0-0.1-0.2-0.3-0.3-0.3c-1.1-0.1-1.2,0.7-1.3,1.5   c-0.8,0-1.5,0.2-2,1c-1.4,0.1-2.4,0.8-3,2c-0.7,0.2-1.6,0.2-1.5,1.3c0,0.1,0.2,0.3,0.3,0.3c1,0.1,1.2-0.7,1.3-1.5   c1.4,0,2.8-0.1,3-2C199.9,332,200.6,331.8,201,331.1z M233.8,307.4c-0.1,0.3-0.3,0.6-0.4,0.8c0.3,0.1,0.6,0.4,0.8,0.3   c0.2-0.1,0.3-0.5,0.4-0.8C234.3,307.6,234,307.5,233.8,307.4z M205.7,328.1c-0.1-0.3-0.2-0.7-0.4-0.7c-0.2-0.1-0.7,0.1-0.8,0.3   c-0.3,0.4-0.1,0.9,0.4,0.9C205.2,328.6,205.4,328.3,205.7,328.1z M247.3,299.6c0.1-0.3,0.2-0.6,0.4-0.8c-0.3-0.1-0.6-0.4-0.8-0.3   c-0.2,0.1-0.3,0.5-0.4,0.8C246.7,299.4,247,299.5,247.3,299.6z M192.7,337c-0.2-0.3-0.4-0.6-0.5-0.7c-0.2,0-0.7,0.2-0.7,0.4   c-0.2,0.5,0.1,0.9,0.6,0.8C192.3,337.5,192.5,337.2,192.7,337z",fill:"#E6E3D6"}),n.a.createElement("path",{d:"M445,425.1c-6.6-6.4-14.6-10.8-22.1-16c-41.3-28.8-82.7-57.5-124.1-86.2c-13.9-9.7-27.9-19.3-41.8-29   c0-0.3-0.1-0.7-0.1-1c20.6-14.3,41.2-28.6,61.8-42.9c41.6-28.7,83.2-57.3,124.7-86c1.3-0.9,2.6-2.1,4.4-2.1c0,88,0,176,0,264.1   C447,425.7,446,425.4,445,425.1z",fill:"#B6B5AC"}),n.a.createElement("path",{d:"M73,426c1.9-4,6.3-5.1,9.5-7.5c11.6-8.8,23.6-17.1,35.7-25.2c20.3-13.7,40.1-28.2,60.5-41.7   c12.3-8.1,24.7-16.2,36.2-25.3c9.1-7.2,19.5-12.3,28.1-20.2c3.1-2.8,7.6-4.5,11.2-7.1c1.7-1.3,3.2-0.8,5,0.5   c8.5,6,17,12.1,25.7,17.8c10.5,6.9,20.5,14.6,31.1,21.3c9.4,6,18.1,13.2,27.5,19.3c10.8,6.9,21.2,14.5,31.7,21.8   c12.6,8.8,25.3,17.5,37.6,26.6c7.5,5.5,15.2,10.6,22.8,15.9c1.4,1,3.5,1.6,3.4,3.9C317,426,195,426,73,426z",fill:"#E6E3D6"}),n.a.createElement("path",{d:"M448,426c0-88,0-176,0-264.1c4.3-4.7,9.9-7.6,15-11.3c12.6-9.2,25.3-18.1,37.9-27.1   c0.9-0.7,1.8-1.5,3.1-1.5c0.1,1.7,0.2,3.3,0.2,5c0,85.1,0,170.3,0.1,255.4c0,5.8-0.2,11.6-1.6,17.4c-2.5,10.7-8.9,18.1-19.3,21.8   C471.9,425.6,460,426.7,448,426z",fill:"#B1392F"}),n.a.createElement("path",{d:"M188.1,340.1c-3.9,4.4-9.2,7-13.9,10.3c-35.7,25-71.5,50-107.3,74.9c-0.7,0.2-1.3,0.4-2,0.6   c0-1,0.1-1.9,0.1-2.9c38.2-26.1,76.3-52.2,114.5-78.3c2.7-1.8,4.8-4.7,8.5-4.8L188.1,340.1z",fill:"#BEBDB3"}),n.a.createElement("path",{d:"M257,292.9c0,0.3,0,0.7,0.1,1c-1,0-2,0.1-3,0.1c0,0,0,0,0,0c0.4-0.4,0.9-0.7,1.3-1.1   C255.8,292.9,256.4,292.9,257,292.9z",fill:"#C7C5BB"}),n.a.createElement("path",{d:"M195.9,333.9c0.6-1.2,1.6-1.9,3-2l0.1,0.1c-0.2,1.9-1.6,2-3,2L195.9,333.9z",fill:"#BEBDB3"}),n.a.createElement("path",{d:"M233.8,307.4c0.3,0.1,0.6,0.2,0.8,0.3c-0.1,0.3-0.2,0.7-0.4,0.8c-0.2,0.1-0.5-0.2-0.8-0.3   C233.5,308,233.6,307.7,233.8,307.4z",fill:"#C4C2B8"}),n.a.createElement("path",{d:"M200.9,330.9c0.1-0.8,0.3-1.5,1.3-1.5c0.1,0,0.3,0.2,0.3,0.3c0,1.1-0.8,1.1-1.5,1.3   C201,331.1,200.9,330.9,200.9,330.9z",fill:"#BEBDB3"}),n.a.createElement("path",{d:"M205.7,328.1c-0.2,0.2-0.5,0.5-0.7,0.4c-0.5,0-0.7-0.5-0.4-0.9c0.1-0.2,0.6-0.3,0.8-0.3   C205.5,327.4,205.5,327.9,205.7,328.1z",fill:"#BEBDB3"}),n.a.createElement("path",{d:"M247.3,299.6c-0.3-0.1-0.6-0.2-0.8-0.4c0.1-0.3,0.2-0.7,0.4-0.8c0.2-0.1,0.5,0.2,0.8,0.3   C247.5,299,247.4,299.3,247.3,299.6z",fill:"#C7C5BB"}),n.a.createElement("path",{d:"M209.1,325.1c-0.1,0.8-0.3,1.5-1.3,1.5c-0.1,0-0.3-0.2-0.3-0.3c0-1.1,0.8-1.1,1.5-1.3   C209,325,209.1,325.1,209.1,325.1z",fill:"#BEBDB3"}),n.a.createElement("path",{d:"M222.1,316.1c-0.1,0.7-0.2,1.3-1,1.4c-0.2,0-0.6-0.4-0.6-0.6c0.1-0.8,0.8-0.9,1.5-1   C222,316,222.1,316.1,222.1,316.1z",fill:"#C2C0B6"}),n.a.createElement("path",{d:"M196.1,334.1c-0.2,0.8-0.3,1.5-1.3,1.5c-0.1,0-0.3-0.2-0.3-0.3c-0.1-1.1,0.8-1.1,1.5-1.3   C195.9,333.9,196.1,334.1,196.1,334.1z",fill:"#BEBDB3"}),n.a.createElement("path",{d:"M192.7,337c-0.2,0.2-0.4,0.5-0.6,0.5c-0.6,0.1-0.8-0.3-0.6-0.8c0.1-0.2,0.5-0.4,0.7-0.4   C192.3,336.4,192.5,336.8,192.7,337z",fill:"#BEBDB3"}),n.a.createElement("path",{d:"M187.9,339.9c0.2-0.8,0.3-1.5,1.4-1.4c0.1,0,0.3,0.2,0.3,0.3c0.1,1.1-0.8,1.1-1.5,1.3   C188.1,340.1,187.9,339.9,187.9,339.9z",fill:"#BEBDB3"}),n.a.createElement("path",{d:"M240,304c-0.4,0.8-1.2,1-2,1c0,0-0.1-0.1-0.1-0.1C238.4,304.2,239.1,304,240,304L240,304z",fill:"#C4C2B8"}),n.a.createElement("path",{d:"M199,331.9c0.4-0.8,1.2-1,2-1c0,0,0.1,0.1,0.1,0.1c-0.4,0.8-1.2,1-2,1C199.1,332.1,199,331.9,199,331.9z",fill:"#BEBDB3"}),n.a.createElement("path",{d:"M228,312c0.4-0.8,1.2-1,2-1l0.1,0.1C229.6,311.8,228.9,312,228,312L228,312z",fill:"#C2C0B6"}),n.a.createElement("path",{d:"M227,313c-0.4,0.8-1.2,1-2,1L225,314C225.4,313.2,226.1,313,227,313C227,313,227,313,227,313z",fill:"#C2C0B6"}),n.a.createElement("path",{d:"M215,321c0.4-0.8,1.2-1,2-1l0.1,0.1C216.6,320.8,215.9,321,215,321C215,321,215,321,215,321z",fill:"#BEBDB3"}),n.a.createElement("path",{d:"M214,322c-0.4,0.8-1.2,1-2,1L212,323C212.4,322.1,213.1,322,214,322L214,322z",fill:"#BEBDB3"}),n.a.createElement("path",{d:"M211,324c-0.4,0.8-1.2,1-2,1c0,0-0.1-0.1-0.1-0.1C209.4,324.2,210.1,324,211,324C211,324,211,324,211,324z",fill:"#BEBDB3"}),n.a.createElement("path",{d:"M253,295c-0.4,0.8-1.2,1-2,1c0,0-0.1-0.1-0.1-0.1C251.4,295.2,252.1,295,253,295C253,295,253,295,253,295z",fill:"#C7C5BB"}),n.a.createElement("path",{d:"M241,303c0.4-0.8,1.2-1,2-1l0,0C242.6,302.8,241.9,303,241,303C241,303,241,303,241,303z",fill:"#C4C2B8"}),n.a.createElement("path",{d:"M224,315c-0.4,0.8-1.2,1-2,1c0,0-0.1-0.1-0.1-0.1C222.4,315.2,223.1,315,224,315C224,314.9,224,315,224,315   z",fill:"#C2C0B6"}),n.a.createElement("path",{d:"M214,322c0.3-0.3,0.7-0.7,1-1c0,0,0.1,0.1,0.1,0.1C214.7,321.4,214.4,321.7,214,322   C214,322,214,322,214,322z",fill:"#BEBDB3"}),n.a.createElement("path",{d:"M225,314c-0.3,0.3-0.7,0.7-1,1c0,0-0.1-0.1-0.1-0.1C224.3,314.6,224.6,314.3,225,314   C225,314,225,314,225,314z",fill:"#C2C0B6"}),n.a.createElement("path",{d:"M237,306c0.3-0.3,0.7-0.7,1-1c0,0,0.1,0.1,0.1,0.1C237.7,305.4,237.4,305.7,237,306L237,306z",fill:"#C4C2B8"}),n.a.createElement("path",{d:"M230,311c0.2-0.1,0.3-0.3,0.5-0.4C230.3,310.7,230.2,310.9,230,311C230,311,230,311,230,311z",fill:"#C2C0B6"}),n.a.createElement("path",{d:"M243,302c0.2-0.1,0.3-0.3,0.5-0.4C243.3,301.7,243.2,301.9,243,302C243,302,243,302,243,302z",fill:"#C4C2B8"}),n.a.createElement("path",{d:"M250,297c-0.2,0.1-0.3,0.3-0.5,0.4C249.7,297.3,249.8,297.1,250,297C250,297,250,297,250,297z",fill:"#C7C5BB"}),n.a.createElement("path",{d:"M250,297c0.3-0.3,0.7-0.7,1-1c0,0,0.1,0.1,0.1,0.1C250.7,296.4,250.4,296.7,250,297   C250,297,250,297,250,297z",fill:"#C7C5BB"}),n.a.createElement("path",{d:"M240,304c0.3-0.3,0.7-0.7,1-1c0,0,0.1,0.1,0.1,0.1C240.7,303.4,240.4,303.7,240,304   C240,304,240,304,240,304z",fill:"#C4C2B8"}),n.a.createElement("path",{d:"M254,294c-0.3,0.3-0.7,0.7-1,1c0,0-0.1-0.1-0.1-0.1C253.3,294.6,253.6,294.3,254,294   C254,294,254,294,254,294z",fill:"#C7C5BB"}),n.a.createElement("path",{d:"M237,306c-0.2,0.1-0.3,0.3-0.5,0.4C236.7,306.3,236.8,306.1,237,306C237,306,237,306,237,306z",fill:"#C4C2B8"}),n.a.createElement("path",{d:"M217,320c0.2-0.1,0.3-0.3,0.5-0.4C217.3,319.7,217.2,319.9,217,320C217,320,217,320,217,320z",fill:"#BEBDB3"}),n.a.createElement("path",{d:"M228,312c-0.3,0.3-0.7,0.7-1,1c0,0-0.1-0.1-0.1-0.1C227.3,312.6,227.6,312.3,228,312   C228,312,228,312,228,312z",fill:"#C2C0B6"}),n.a.createElement("path",{d:"M212,323c-0.3,0.3-0.7,0.7-1,1c0,0-0.1-0.1-0.1-0.1C211.3,323.6,211.6,323.3,212,323   C212,323,212,323,212,323z",fill:"#BEBDB3"})))},S=function(){return n.a.createElement("div",{className:R.a.footer},n.a.createElement("h3",null,"Get in touch"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{target:"blank",href:"https://github.com/mub2332"},n.a.createElement(Z,null))),n.a.createElement("li",null,n.a.createElement("a",{target:"blank",href:"https://www.linkedin.com/in/mubtasim-mahmud-7b426318b/"},n.a.createElement(A,null))),n.a.createElement("li",null,n.a.createElement("a",{href:"mailto:mubtasimmahmud20@gmail.com"},n.a.createElement(F,null)))))},W=a(1);var q=function(){return n.a.createElement("div",{className:i.a.app},n.a.createElement("div",{className:i.a.bg}),n.a.createElement(j,null),n.a.createElement("div",{className:i.a.container},n.a.createElement(W.c,null,n.a.createElement(W.a,{exact:!0,path:"/",component:C}),n.a.createElement(W.a,{exact:!0,path:"/portfolio",component:C}),n.a.createElement(W.a,{exact:!0,path:"/portfolio/resume",component:_}),n.a.createElement(W.a,{exact:!0,path:"/portfolio/projects",component:I}))),n.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y.a,null,n.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.0d05ab49.chunk.js.map