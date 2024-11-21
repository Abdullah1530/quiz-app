// pages/_app.js
import '../src/styles/globals.css'; // Import your global CSS here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
