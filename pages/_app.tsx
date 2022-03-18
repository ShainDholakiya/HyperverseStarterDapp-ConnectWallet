import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initialize, Provider, Network } from "@decentology/hyperverse";
import { Ethereum } from "@decentology/hyperverse-ethereum";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  const hyperverse = initialize({
    blockchain: Ethereum,
    network: Network.Testnet,
    modules: [],
  });
  return (
    <Provider initialState={hyperverse}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
