// pages/_app.js
import 'normalize.css';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
