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
  gitTimestamp: function useGitTimestamp({ timestamp }) {
    const format = new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })
    return (
      <span>{ format.format(timestamp) } 最終更新</span>
    )
  }
}

export default config
