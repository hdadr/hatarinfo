import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store";
import { initializeFirebase } from "../firebase";

function BorderInfoApp({ Component, pageProps }) {
  initializeFirebase();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default BorderInfoApp;
