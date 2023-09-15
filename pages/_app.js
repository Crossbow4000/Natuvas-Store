import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} onLoad={"window.scrollTo(0, 300)"} />;
}

export default MyApp;
