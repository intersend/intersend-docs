import{u as r,j as e}from"./index-BPPGhjdf.js";const l={title:"Overview - For Wallets & WaaS",description:"Embed and manage dApps without maintenance overhead",layout:"docs",showSidebar:!0};function a(s){const n={a:"a",blockquote:"blockquote",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"wallets--waas-overview",children:["Wallets & WaaS Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wallets--waas-overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.strong,{children:"This guide is for you if:"}),`
`,e.jsx(n.p,{children:"You provide wallet infrastructure (MPC, custodial, non-custodial) (e.g., UniversalX, MetaMask, Phantom) and want to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Offer curated dApps without maintaining it yourself"}),`
`,e.jsx(n.li,{children:"Keep full control over security and UX"}),`
`,e.jsx(n.li,{children:"Automatically integrate new apps added to Intersend"}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"demo",children:["Demo",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#demo",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"See a demo of an Intersend-powered wallet:"}),`
`,e.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/tb8bpSt_qAY?si=CrAPF8gv57AiUIkd",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/intersend/demo-wallet",children:"Github Repo"})}),`
`,e.jsx(n.p,{children:"Turn your wallet into a Web3 gateway using Intersend's universal connector. Embed dApps directly into your interface while maintaining full control over security and user experience."}),`
`,e.jsxs(n.h2,{id:"why-intersend",children:["Why Intersend?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-intersend",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Zero Maintenance"}),`
New apps become automatically available to your users - no integration work required`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Security First"}),`
All transactions use your existing signing infrastructure - keys never leave your environment`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customizable Curation"}),`
Choose which apps to display and control their presentation`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"how-it-works",children:["How It Works",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-it-works",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Under the hood, Intersend provides an iframe-based connector that mediates communication between your wallet and apps available on Intersend. Your wallet remains in control of signing, transaction approvals, and chain selection while Intersend relays messages securely via ",e.jsx(n.code,{children:"postMessage"}),"."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"sequenceDiagram"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    participant User"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    participant Wallet as Wallet"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    participant Intersend as Intersend"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    participant App as dApp"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Note over User,Wallet: Load & Browse Apps"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    User->>Wallet: Opens Explore Tab of the Wallet"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Wallet->>Intersend: Fetch list of available apps"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Intersend-->>Wallet: Returns app list"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Note over User,App: Launch Selected App"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    User->>Wallet: Selects an app"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Wallet->>Intersend: Loads app in iframe"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Intersend->>App: Wraps the app within Intersend interface"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Intersend->>Wallet: REQUEST_WALLET_INFO"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Intersend->>App: WALLET_INFO (address chainId)"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Note over User,App: Transaction Flow"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    User->>App: Initiates transaction (e.g. purchase swap)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    App->>Intersend: eth_sendTransaction (RPC request)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Intersend->>Wallet: Constructs and sends tx data"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Wallet->>User: Prompts user to approve transaction"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    User->>Wallet: Approves"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Wallet->>Wallet: Signs & broadcasts to blockchain"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Wallet->>Intersend: Returns txHash (RPC response)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Intersend->>App: Send success or fail"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    App-->>User: Shows success/fail message"})})]})})}),`
`,e.jsxs(n.h2,{id:"security-architecture",children:["Security Architecture",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#security-architecture",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The SDK implements a secure messaging protocol between the embedded app and your wallet:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Isolated Iframes:"}),`
All third-party dApps are sandboxed within an iframe managed by Intersend. This prevents unauthorized access to your code or your users' private keys.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"No Private Key Exposure:"}),`
Any signature or transaction request is forwarded to your wallet's internal signing logic. Keys never leave your environment.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Origin Validation:"}),`
The Intersend SDK verifies the origin of incoming messages. Suspicious or unknown sources are ignored.`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"contact-us",children:["Contact Us",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contact-us",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Email: ",e.jsx(n.a,{href:"mailto:hello@intersend.io",children:"hello@intersend.io"})]}),`
`,e.jsx(n.li,{children:"Telegram: @erturkarda"}),`
`]})]})}function t(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{t as default,l as frontmatter};
