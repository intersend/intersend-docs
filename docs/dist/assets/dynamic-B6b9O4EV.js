import{u as r,j as e}from"./index-BPPGhjdf.js";const a={title:"Dynamic Integration",description:"Add your Dynamic-powered app to Intersend.",layout:"docs",showSidebar:!0};function s(i){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"dynamic-integration",children:["Dynamic Integration",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#dynamic-integration",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"prerequisite",children:["Prerequisite",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prerequisite",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Your existing web app is powered by ",e.jsx(n.a,{href:"https://dynamic.xyz",children:"Dynamic"})," for authentication and embedded wallet management."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"integration-steps",children:["Integration Steps",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#integration-steps",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"1-install-intersend-evm-wallet-connector",children:["1. Install Intersend EVM Wallet Connector",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-install-intersend-evm-wallet-connector",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Install the Dynamic Intersend EVM wallet connector with the following command:"}),`
`,e.jsx(n.p,{children:"For Dynamic v3:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" @dynamic-labs-connectors/intersend-evm@3.2.4"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# or"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"yarn"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" add"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" @dynamic-labs-connectors/intersend-evm@3.2.4"})]})]})})}),`
`,e.jsx(n.p,{children:"For Dynamic v4:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" @dynamic-labs-connectors/intersend-evm@4.0.0"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# or"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"yarn"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" add"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" @dynamic-labs-connectors/intersend-evm@4.0.0"})]})]})})}),`
`,e.jsxs(n.h3,{id:"2-import-the-intersend-connector",children:["2. Import the Intersend Connector",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-import-the-intersend-connector",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"In your project import the IntersendEvmWalletConnectors:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { IntersendEvmWalletConnectors } "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '@dynamic-labs-connectors/intersend-evm'"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]})})})}),`
`,e.jsxs(n.h3,{id:"3-configure-dynamic-provider",children:["3. Configure Dynamic Provider",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-configure-dynamic-provider",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Add the Intersend EVM wallet connector to your DynamicContextProvider:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"DynamicContextProvider"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"  settings"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:"{"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    walletConnectors: [EthereumWalletConnectors, IntersendEvmWalletConnectors]"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:"}"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:"  {"}),e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"/* Your app code here */"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:"}"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"</"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"DynamicContextProvider"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]})]})})}),`
`,e.jsxs(n.h3,{id:"4-whitelist-intersend-domain",children:["4. Whitelist Intersend Domain",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-whitelist-intersend-domain",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Add Intersend domains to your Dynamic dashboard's allowed origins:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://app.intersend.io",children:"https://app.intersend.io"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://intersend.io",children:"https://intersend.io"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://docs.dynamic.xyz/developer-dashboard/security#adding-an-origin",children:"Configure Allowed Origins →"})}),`
`,e.jsxs(n.h3,{id:"5-verify-app-behavior-inside-intersend",children:["5. Verify App Behavior Inside Intersend",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#5-verify-app-behavior-inside-intersend",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Open ",e.jsx(n.a,{href:"https://app.intersend.io/apps/sandbox",children:"Sandbox"})]})," and paste your web app's URL into the address bar of the Intersend browser."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Auto-connect"})," should kick in; Intersend will inject the user's wallet data into your app."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test transaction or signing flows"})," to confirm everything relays properly."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"6-get-listed",children:["6. Get Listed",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#6-get-listed",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Once integrated submit your app for review:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Email: ",e.jsx(n.a,{href:"mailto:hello@intersend.io",children:"hello@intersend.io"})]}),`
`,e.jsx(n.li,{children:"Telegram: @erturkarda"}),`
`]}),`
`,e.jsxs(n.h2,{id:"need-help",children:["Need Help?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#need-help",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"mailto:hello@intersend.io",children:"Contact Intersend Support"})}),`
`]})]})}function l(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{l as default,a as frontmatter};
