import{u as r,j as e}from"./index-BPPGhjdf.js";const l={title:"Safe Integration",description:"Add your Safe App to Intersend.",layout:"docs",showSidebar:!0};function i(n){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"safe-integration",children:["Safe Integration",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#safe-integration",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.h2,{id:"prerequisite",children:["Prerequisite",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prerequisite",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Your dApp uses ",e.jsx(s.strong,{children:"Wagmi"})," for wallet interactions."]}),`
`,e.jsx(s.li,{children:"If using an auth provider (e.g. Privy, Dynamic) refer to its dedicated Intersend guide."}),`
`]}),`
`,e.jsxs(s.h2,{id:"integration-steps-wagmi--safe-example",children:["Integration Steps (Wagmi + Safe Example)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#integration-steps-wagmi--safe-example",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Below is the most common scenario: ",e.jsx(s.strong,{children:"you already use Wagmi"})," and need to ensure the Safe Connector is present so Intersend can auto-connect. If your app relies on Privy or Dynamic for auth, please see those guides."]}),`
`,e.jsxs(s.h3,{id:"1-add-or-confirm-safe-connector",children:["1. Add (or Confirm) Safe Connector",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-add-or-confirm-safe-connector",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Add the Safe connector to your Wagmi config. If your app already uses the Safe connector, you can skip this step."}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { createConfig, http } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'wagmi'"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { mainnet, sepolia, polygon } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'wagmi/chains'"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { createClient } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'viem'"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { safe } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'wagmi/connectors'"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" config"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" createConfig"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  chains: [mainnet, sepolia, polygon],"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  connectors: ["})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"    safe"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Add Safe connector"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    // other connectors..."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  ],"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  transports: {"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    [mainnet.id]: "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"http"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(),"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    [sepolia.id]: "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"http"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(),"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    [polygon.id]: "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"http"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(),"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})})]})})}),`
`,e.jsxs(s.h3,{id:"2-verify-integration",children:["2. Verify Integration",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-verify-integration",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Once your app has the Safe connector configured:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Test in ",e.jsx(s.a,{href:"https://app.intersend.io/apps/sandbox",children:"Sandbox"})]})," - Load your app URL in the Intersend sandbox environment"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Auto-connect"})," should happen automatically - Intersend detects Safe connector and injects wallet data"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Test key functions"})," - Ensure signing requests and transactions work properly"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"3-get-listed",children:["3. Get Listed",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-get-listed",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Once integrated, submit your app for review:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Email: ",e.jsx(s.a,{href:"mailto:hello@intersend.io",children:"hello@intersend.io"})]}),`
`,e.jsx(s.li,{children:"Telegram: @erturkarda"}),`
`]}),`
`,e.jsxs(s.h2,{id:"need-help",children:["Need Help?",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#need-help",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"mailto:hello@intersend.io",children:"Contact Intersend Support"})}),`
`]})]})}function d(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{d as default,l as frontmatter};
