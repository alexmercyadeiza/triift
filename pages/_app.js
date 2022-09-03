import { Toaster } from 'react-hot-toast';
import '../styles/globals.css'
import MessengerCustomerChat from "react-messenger-customer-chat";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
      <MessengerCustomerChat
        pageId="334278140487721"
        appId="813855139747675"
        // htmlRef="<REF_STRING>"
      />
    </>
  );
}

export default MyApp
