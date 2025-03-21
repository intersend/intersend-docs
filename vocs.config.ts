import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Interspace',
  description: 'Documentation for Interspace',
  logoUrl: {
    light: 'https://interspace.fi/favicon.ico',
    dark: 'https://interspace.fi/favicon.ico',
  },
  // OG Image configuration with the provided logo URL directly embedded
  ogImageUrl: 'https://vocs.dev/api/og?logo=https://storage.googleapis.com/external-assets-intersend/Emblem%20(1).png&title=Intersend&description=Developer Documentation', 
  sidebar: [
    // {
    //   text: 'Introduction',
    //   link: '/'
    // },
    // {
    //   text: 'Overview',
    //   link: '/overview'
    // },
    {
      text: 'For Apps',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/apps/overview' },
        { text: 'Safe Integration', link: '/apps/safe' },
        { text: 'Privy Integration', link: '/apps/privy' },
        { text: 'Dynamic Integration', link: '/apps/dynamic' }
      ]
    },
    {
      text: 'For Wallet Providers/ WaaS',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/waas/overview' },
        { text: 'Quickstart', link: '/waas/quickstart' },
        { text: 'Demo', link: '/waas/demo' }
      ]
    },
    {
      text: 'For Auth Providers',
      collapsed: false,
      items: [
        { text: 'Overview ', link: '/auth/overview' },
        { text: 'Integration', link: '/auth/integration' }
      ]
    }
  ],
  theme: {
    accentColor: '#3B82F6'
  },
  topNav: [
    {
      text: 'Support',
      link: 'mailto:hello@intersend.io'
    },
    {
      text: 'Dashboard →',
      link: 'https://interspace.fi'
    }
  ]
})
