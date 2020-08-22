import './markdown-styles.css'

export default function PostBody({ content }) {
    return (
      <div className="">
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    )
  }