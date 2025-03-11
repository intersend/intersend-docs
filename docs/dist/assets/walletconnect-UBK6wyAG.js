import{u as i,j as e}from"./index-BPPGhjdf.js";const l={title:"Intersend App Store Technical Documentation",description:"Start building your app on Intersend"};function a(n){const s={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"brief-overview",children:["Brief Overview",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#brief-overview",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Intersend App Store is a non-custodial app marketplace that provides users with modular applications connected through a unified wallet."}),`
`,e.jsx(s.p,{children:"Developers can leverage Intersend APIs, Iframe, and, soon, an SDK to obtain necessary permissions and connect to users' dedicated wallets. Intersend facilitates easy transactions for both Web3 and Web2 users, enabling them to send or receive any cryptocurrency seamlessly and onboard into the ecosystem efficiently."}),`
`,e.jsxs(s.h2,{id:"main-use-cases",children:["Main Use Cases",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#main-use-cases",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Easy Onboarding"}),": Simplifies the process for users to make single-click payments by connecting their wallets."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Unified Wallet Management"}),": Centralized control and management of crypto assets through a single wallet interface."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Omnichain Compatibility"}),": Supports multiple blockchain networks, enabling seamless cross-chain transactions."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Gas-Free Transactions"}),": Allows certain transactions to be conducted without gas fees, improving user experience."]}),`
`]}),`
`,e.jsxs(s.h2,{id:"ways-to-integrate",children:["Ways to Integrate",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ways-to-integrate",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"1-your-web-application-hosted-by-yourself-such-as-iframe",children:["1. Your Web Application Hosted by Yourself (such as iframe)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-your-web-application-hosted-by-yourself-such-as-iframe",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Your component (this could be an iframe or a webpage directly) will be hosted by you and accessed through the Intersend App Store."}),`
`,e.jsx(s.p,{children:"The iframe sends events, such as making a transaction with details to the deposit address. We capture and process these events on the backend and send the response back to the developer's iframe or web app, which then displays the details to the frontend."}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"User                  Developer's App (Accessed via Intersend)       Intersend Backend"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                                   |                                   |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |-- Access App on Store ----------->|                                   |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                                   |                                   |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                                   |- Send Event (e.g., transaction) ->|"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                                   |                                   |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                                   |                                   |-- Process Event ------------------>|"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                                   |                                   |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                                   |                                   |<-- Transaction Result -------------|"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                                   |<-- Receive Event Result ----------|"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                                   |                                   |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |<-- Display Result ----------------|                                   |"})})]})})}),`
`,e.jsxs(s.h3,{id:"2-intersend-iframe-integration",children:["2. Intersend Iframe Integration",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-intersend-iframe-integration",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"You can utilize our iframe component that you can add to your website."}),`
`,e.jsx(s.p,{children:"Our iframe is a light version of Intersend. It essentially provides a button that opens a pop-up window where users can log in, see their balance, approve transactions, and more."}),`
`,e.jsx(s.p,{children:"For each event, your app and our app will constantly share these events with each other and execute relevant functions. These events include obtaining certain permissions, creating payment records, processing transactions, and more."}),`
`,e.jsxs(s.h4,{id:"example-code-snippet",children:["Example code snippet",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-code-snippet",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"### Intersend Iframe Integration Snippet"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"```html"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"<iframe"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  width="375"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  height="667"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  src="https://embed.intersend.io/?ref=your_referral_id&utm_source=intersend_demo&theme=your_theme"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  sandbox="allow-same-origin allow-popups allow-scripts allow-forms"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"/>"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"<script>"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  window.onmessage = function(e) {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    if (e.origin !== 'https://embed.intersend.io') {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      return;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    }"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    const {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      event,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      data"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    } = e.data;"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    switch(event) {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      case 'request_permission':"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"        // Handle permission request with `"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"data"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"        break;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      case 'payment_intent':"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"        // Handle payment intent with `"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"data"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"        break;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      case 'create_user':"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"        // Handle user creation with `"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"data"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"        break;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      case 'generate_wallet_address':"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"        // Handle wallet address generation with `"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"data"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"        break;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      default:"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"        break;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    }"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  }"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  // Example of sending an event to the iframe"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  const iframe = document.querySelector('iframe');"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  iframe.contentWindow.postMessage({"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    event: 'init',"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    data: {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      userId: 'your_user_id',"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      sessionId: 'your_session_id'"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  }, 'https://embed.intersend.io');"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"<\/script>"})})]})})}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"User                   Web App                Intersend Iframe            Intersend Wallet"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                        |                         |                           |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |-- Access Web App ----->|                         |                           |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                        |-- Open Iframe --------->|                           |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                        |                         |                           |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                        |                         |-- Log In User ----------->|"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                        |                         |                           |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                        |                         |<-- Display Balance -------|"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                        |                         |                           |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                        |                         |-- Approve Transaction --->|"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                        |                         |                           |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                        |                         |<-- Share Event -----------|"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                        |                         |                           |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |<-- Transaction Result--|                         |                           |"})})]})})}),`
`,e.jsxs(s.h2,{id:"apis",children:["APIs",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#apis",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"With our APIs, you can create user wallets and enable them to receive any cryptocurrency on any chain, including EVM, Bitcoin, Solana, and many others."}),`
`,e.jsxs(s.h3,{id:"create-user-wallet",children:["Create User Wallet",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-user-wallet",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-code",children:`curl -X POST https://node.intersend.io/v1/appstore/create-user \\
-H "Authorization: Bearer authToken" \\
-H "Content-Type: application/json" \\
-d '{
  "email": "user@example.com"
  // or "walletAddress"
}'
`})}),`
`,e.jsx(s.p,{children:"This endpoint returns a link for the user to log in to the Intersend dashboard."}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"Developer              Intersend API              Intersend Database"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                        |                           |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |-- Create User Request->|                           |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                        |                           |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |<-- User Login Link ----|                           |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                        |                           |"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:" |                        |-- Store User Data ------->|"})})]})})}),`
`,e.jsxs(s.h3,{id:"generate-wallet-address",children:["Generate Wallet Address",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#generate-wallet-address",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-code",children:`curl -X POST https://node.intersend.io/v1/appstore/generate-wallet-address \\
-H "Authorization: Bearer authToken" \\
-H "Content-Type: application/json" \\
-d '{
 "email": "user@example.com",
 "chain": "BTC",
 "crypto": "BTC"
}'
`})}),`
`,e.jsx(s.p,{children:"This endpoint returns a wallet address of the selected currency and a payment URI. If the user deposits funds to this address, their Intersend account will be deposited with the equivalent amount of USDT."}),`
`,e.jsx(s.p,{children:"The user can sign into their Intersend account and access the funds."}),`
`,e.jsxs(s.h2,{id:"event-types",children:["Event Types",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#event-types",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"request_permission",children:["request_permission",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#request_permission",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"This is the very initial step your app needs to ask the user. Typically, this is a one-time event for each user depending on your use case. You'd pass some security parameters such as:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"max_limit"}),": The maximum amount limit your app will use."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"access_expiry"}),": The expiration time for the access."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"user_wallet_address"}),": The wallet address of the user."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"domain_whitelist"}),": The list of domains that are allowed to access the permissions. (Your originating domain)"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"payment_intent",children:["payment_intent",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#payment_intent",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"You can pass the information for payment such as the target wallet, amount, chain, and cryptocurrency (chain-agnostic). We then validate your permissions, process the transaction, and send the details through an event callback."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"target_wallet"}),": The wallet address where the payment will be sent."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"amount"}),": The amount of cryptocurrency to be sent."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"chain"}),": The blockchain network (e.g., Ethereum, Bitcoin)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"crypto"}),": The type of cryptocurrency (e.g., BTC, ETH)."]}),`
`]}),`
`,e.jsxs(s.h3,{id:"create_user",children:["create_user",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create_user",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Initiate the process to create a new user within the Intersend ecosystem. This event sets up the necessary user profile."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"email"}),": The email address of the user."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"wallet_address"}),": The wallet address of the user (optional if email is provided)."]}),`
`]}),`
`,e.jsxs(s.h3,{id:"generate_wallet_address",children:["generate_wallet_address",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#generate_wallet_address",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Generate a new wallet address for the user on a specified blockchain. This event returns a wallet address and a payment URI."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"email"}),": The email address of the user."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"chain"}),": The blockchain network for the wallet (e.g., BTC, ETH)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"crypto"}),": The type of cryptocurrency for the wallet (e.g., BTC, ETH)."]}),`
`]}),`
`,e.jsxs(s.h3,{id:"transaction_status",children:["transaction_status",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction_status",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Check the status of a previously initiated transaction. This event provides updates on whether the transaction was successful, pending, or failed."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"transaction_id"}),": The unique identifier of the transaction."]}),`
`]}),`
`,e.jsxs(s.h3,{id:"revoke_permission",children:["revoke_permission",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#revoke_permission",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Revoke previously granted permissions from a user. This event can be used to ensure security and compliance with user requests."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"user_wallet_address"}),": The wallet address of the user."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"permission_id"}),": The identifier of the permission to be revoked."]}),`
`]}),`
`,e.jsx(s.p,{children:"These events provide a comprehensive set of interactions that developers can use to build robust applications within the Intersend App Store ecosystem."}),`
`,e.jsxs(s.h3,{id:"smart-contracts",children:["Smart Contracts",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#smart-contracts",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"We use ERC-4337 smart contracts to facilitate secure and efficient transactions within the Intersend ecosystem."}),`
`,e.jsxs(s.h2,{id:"contact-information",children:["Contact Information",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contact-information",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["For further questions, please reach out to ",e.jsx(s.a,{href:"mailto:arda@intersend.io",children:"arda@intersend.io"})," or @erturkarda on Telegram."]})]})}function t(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{t as default,l as frontmatter};
