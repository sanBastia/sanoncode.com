/* eslint-disable react/no-array-index-key */
import Markdoc, { Tag, RenderableTreeNode } from '@markdoc/markdoc'

import React from 'react'

import { useState, useEffect } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import type {
  Language as PrismLanguage,
  PrismTheme,
} from 'prism-react-renderer'
import defaultTheme from 'prism-react-renderer/themes/github'

interface FenceProps {
  theme?: PrismTheme
  language: PrismLanguage
  children: string
}

export const Fence = ({ children, language }: FenceProps) => {
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language || 'javascript'}
      theme={defaultTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`pl-8 my-8 ${className}`} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

/**
 * Markdoc Client
 *
 * Examples:
 * https://markdoc.io/docs/examples#syntax-highlighting
 */

const markdocComponents = {
  components: {
    Fence,
  },
}

export const markdocRenderHTML = (content: Tag) => {
  const html = Markdoc.renderers.html(content)
  return html
}

export const markdocRenderReact = (content: RenderableTreeNode) => {
  const reactComponent = Markdoc.renderers.react(
    content,
    React,
    markdocComponents
  )
  return reactComponent
}
