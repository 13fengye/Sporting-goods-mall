import Footer from "components/footer"
import Header from "components/header"
import { AppProps } from "next/app"
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext<any>(null);

function MyApp({ Component, pageProps }: AppProps) {
  let currState: string = '{ "jwt": "", "username": "", "email": ""}';
  if (typeof window !== "undefined") {
    currState = localStorage.getItem('auth') || currState;
  }

  const [authState, setAuthState] = useState(JSON.parse(currState));

  useEffect(() => {
    setAuthState(JSON.parse(currState));
  }, [currState])

  const authUsername = authState.username || false as string | false;
  
  return(
    <AuthContext.Provider value={[authState, setAuthState]}>
      <Header authUsername={authUsername} currState={currState} setAuthState={setAuthState}/>
      <Component {...pageProps} />
      <Footer authUsername={authUsername} currState={currState} setAuthState={setAuthState}/>
    </AuthContext.Provider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp