import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store";
import { Provider } from "react-redux";
import { AuthProvider } from "../hooks/useAuth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default wrapper.withRedux(MyApp);
