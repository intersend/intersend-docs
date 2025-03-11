import{u as i,j as e}from"./index-BPPGhjdf.js";const r={title:"Overview - For Auth Providers",description:"Make your ecosystem apps instantly embeddable",layout:"docs",showSidebar:!0};function a(s){const n={a:"a",blockquote:"blockquote",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"auth-providers-overview",children:["Auth Providers Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#auth-providers-overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.strong,{children:"This guide is for you if:"}),`
`,e.jsx(n.p,{children:"You provide authentication/wallet management infrastructure (e.g Privy, Dynamic) and want to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Make client apps portable across Web3 interfaces (Worlcoin, Frames, Telegram, Safe)"}),`
`,e.jsx(n.li,{children:"Offer embeddable apps as a value-add feature"}),`
`,e.jsx(n.li,{children:"Expand ecosystem reach without additional work"}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Turn every app using your SDK into an embeddable component for Intersend-integrated wallets and platforms."}),`
`,e.jsxs(n.h2,{id:"integration-benefits",children:["Integration Benefits",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#integration-benefits",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ecosystem Growth"}),`
Client apps become instantly available to all Intersend partner wallets`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Zero Client Changes"}),`
Add Intersend connector at SDK layer - no app modifications needed`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Universal Compatibility"}),`
Works with any partner wallet - making it easy to integrate apps with a few lines of code`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"how-it-works",children:["How It Works",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-it-works",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Below is a simplified flow describing how an app (built with your auth SDK) interacts with a user's wallet through Intersend."}),`
`,e.jsxs(n.h2,{id:"example",children:["Example",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`A wallet infrastructure provider (let's call this CoinPace Wallet) uses Intersend SDK to add "App X" into their explore page. `,e.jsx(n.em,{children:"App X is built with your authentication SDK."})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Users click App X within CoinPace Wallet's interface. The app loads in an iframe."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Your Authentication SDK automatically injects Intersend's connector to App X at initial page load."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Intersend's iframe middleware facilitates sharing user's account with the app and automatically connects to it with SIWE (Sign in with Ethereum)"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"When transactions occur:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"App X constructs transaction data"}),`
`,e.jsx(n.li,{children:"Intersend relays payload to CoinPace Wallet"}),`
`,e.jsx(n.li,{children:"User approves/declines in native wallet UI"}),`
`,e.jsx(n.li,{children:"Result propagates back to the app"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"end-result",children:["End Result",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#end-result",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The app is fully functional automatically connected to the user's wallet/account"}),`
`,e.jsx(n.li,{children:"Transactions signatures chain switching etc. flow through Intersend's secure layer"}),`
`]}),`
`,e.jsxs(n.h2,{id:"flow-diagram",children:["Flow Diagram",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#flow-diagram",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"sequenceDiagram"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    participant User"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    participant Wallet as Wallet"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    participant Intersend as Intersend"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    participant App as dApp"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Note over User,Wallet: Load & Browse Apps"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    User->>Wallet: Opens Explore Tab of the Wallet"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Wallet->>Intersend: Fetch list of available apps"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Intersend-->>Wallet: Returns app list"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Note over User,App: Launch Selected App"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    User->>Wallet: Selects an app"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Wallet->>Intersend: Loads app in iframe"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Intersend->>App: Wraps dApp within Intersend interface"})}),`
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
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    App-->>User: Shows success/fail message"})})]})})})]})}function t(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{t as default,r as frontmatter};
