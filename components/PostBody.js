import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import html from 'remark-html'
import highlight from 'remark-highlight.js'

export default function PostBody({ markdown }) {
    return (
      <div className="">
        <div
          className="markdown"
        >
            {
                unified()
                .use(parse)
                .use(highlight)
                .use(html)
                .use(remark2react)
                .processSync(markdown).result
            }
        </div>
      </div>
    )
  }