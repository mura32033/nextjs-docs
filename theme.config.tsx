import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>murasan</span>,
  search: {
    placeholder: '検索する',
  },
  primaryHue: 210,
  footer: {
    text: 'murasan',
  },
  toc: {
    title: 'このページに書かれていること',
  },
  editLink: {
    text: null
  },
  feedback: {
    content: null
  },
  gitTimestamp: null
}

export default config
