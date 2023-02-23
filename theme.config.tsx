import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - murasan'
      }
    }
  },
  logo: <span>murasan</span>,
  search: {
    placeholder: '検索する',
    emptyResult: (
      <span className='nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400'>
        何も見つけることができませんでした...
      </span>
    ),
    loading: '検索中...',
    error: 'エラーが発生してしまいました'
  },
  primaryHue: 210,
  footer: {
    text: <span>
      ©{new Date().getFullYear()} murasan
    </span>,
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
