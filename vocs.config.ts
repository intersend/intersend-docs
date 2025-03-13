import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Intersend',
  description: 'Documentation for Intersend',
  logoUrl: {
    light: 'https://app.intersend.io/favicon.ico',
    dark: 'https://app.intersend.io/favicon.ico',
  },
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
        { text: 'Overview', link: '/waas/overview-waas' },
        { text: 'Quickstart', link: '/waas/quickstart-waas' }
      ]
    },
    {
      text: 'For Auth Providers',
      collapsed: false,
      items: [
        { text: 'Overview ', link: '/auth-providers/overview-auth' },
        { text: 'Integration', link: '/auth-providers/integration-auth' }
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
      link: 'https://app.intersend.io'
    }
  ]
})
