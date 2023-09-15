import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} onLoad={window.scrollTo(0, 150)} />;
}

export default MyApp;
