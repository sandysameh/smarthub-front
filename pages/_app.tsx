import ButtonAppBar from "@/components/global/navbar/NavBar";
import Sidebar from "@/components/global/sidebar/SideBar";
import type { AppProps } from "next/app";
import "../assets/styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "../services/redux/app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Navbar />
      <Sidebar isOpen={false} /> */}
      <Provider store={store}>
        <ButtonAppBar />

        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;
