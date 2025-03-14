import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Intersend',
  description: 'Documentation for Intersend',
  logoUrl: {
    light: 'https://app.intersend.io/favicon.ico',
    dark: 'https://app.intersend.io/favicon.ico',
  },
  // OG Image configuration with the provided logo URL directly embedded
  ogImageUrl: 'https://vocs.dev/api/og?logo=https://storage.googleapis.com/external-assets-intersend/logo-square.png&title=Intersend&description=Developer Documentation', 
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
        { text: 'Quickstart', link: '/waas/quickstart' }
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
      link: 'https://app.intersend.io'
    }
  ]
})
