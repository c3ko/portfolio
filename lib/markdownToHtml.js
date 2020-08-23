import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import highlight from 'remark-highlight.js'

export default async function markdownToHtml(markdown) {

  return unified()
        .use(parse)
        .use(highlight)
        .use(remark2react)
        .processSync(markdown).result
}

/*

import remark from 'remark'
import html from 'remark-html'
import highlight from 'remark-highlight.js'

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html)
    .use(highlight)
    .process(markdown)
  return result.toString()
}

*/