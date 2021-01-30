import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

const description = "This is a clone of reddit";
const title = "Reddit Clone";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
            crossOrigin="anonymous"
          />
          <link rel="icon" type="image/svg+xml" href="/images/reddit.svg" />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="twitter:description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="twitter:title" content={title} />
          <meta property="og:site_name" content="Clonedit" />
          <meta property="og:image" content="Clonedit" />
          {/* <meta property="twitter:site_name" content="@Clonedit"/> */}
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/reddit.svg`}
          />
        </Head>
        <body className="font-body" style={{ backgroundColor: "#DAE0E6" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
