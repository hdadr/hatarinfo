import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store";

function BorderInfoApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default BorderInfoApp;
