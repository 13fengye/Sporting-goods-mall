import Footer from 'components/footer'
import Header from 'components/header'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com/" />
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin=""/>
          <link href="/static/css/css2.css" rel="stylesheet"/>
          <link href="/static/css/bootstrap.min.css" rel="stylesheet"/>
          <link href="/static/css/font-awesome.min.css" rel="stylesheet"/>
          <link href="/static/css/pe-icon-7-stroke.css" rel="stylesheet"/>
          <link href="/static/css/swiper.min.css" rel="stylesheet"/>
          <link href="/static/css/fancybox.min.css" rel="stylesheet"/>
          <link href="/static/css/aos.min.css" rel="stylesheet"/>
          <link href="/static/css/style.css" rel="stylesheet"/>
          <link href="/static/css/mystyle.css" rel="stylesheet"/>
          <script src="/static/js/modernizr.js"></script>
          <script src="/static/js/jquery-main.js"></script>
          <script src="/static/js/jquery-migrate.js"></script>
          <script src="/static/js/popper.min.js"></script>
          <script src="/static/js/bootstrap.min.js"></script>
          <script src="/static/js/jquery-ui.min.js"></script>
          <script src="/static/js/swiper.min.js"></script>
          <script src="/static/js/fancybox.min.js"></script>
          <script src="/static/js/waypoint.js"></script>
          <script src="/static/js/parallax.min.js"></script>
          <script src="/static/js/aos.min.js"></script>
          <script src="/static/js/custom.js"></script>
          <meta http-equiv="Access-Control-Allow-Origin" content="*"></meta>
        </Head>
        <body>
          <div className="wrapper">
              <Main />
              <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument