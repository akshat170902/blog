import { Provider } from "react-redux";
import store from "../store";
import "../styles/globals.css";

// This file customizes the root App component to provide Redux store to all pages.
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
