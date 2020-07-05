import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-white overflow-y-scroll">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}