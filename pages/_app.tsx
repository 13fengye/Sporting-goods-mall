import { get } from "components/fetch";
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
  const [belongings, setBelongings] = useState<{belonging: string,img: string}[]>([]);
  const [types, setTypes] = useState<{ [x: string]: [] }[]>([]);
  useEffect(() => {
    setAuthState(JSON.parse(currState));
  }, [currState])

  const authUsername = authState.username || false as string | false;
  
  useEffect(() => {
    const a: { [x: string]: [] }[] = [];
    const loadBelongings = async() => {
      await get('/Product/getbelongings/').then(data => {
        const belongingsData = data.belongs.sort((a: { belonging: string }, b: { belonging: string }) => b.belonging.localeCompare(a.belonging))
        setBelongings(belongingsData);
        belongingsData.flatMap((belonging: { belonging: string; }) => {
          let b: {[x: string]: []}[] = [];
          const loadType = async () => {
            await get(`/Product/gettype/${belonging.belonging}/`).then(data => {
              a.push({[belonging.belonging]: data.types});
              b = [...a];
            })
            setTypes(b);
          };
          loadType();
          
        });
      });
      
    }
    loadBelongings();
    
  }, []);

  if (types.length === 0) return<div></div>;
  // console.log(belongings);
  
  return(
    <AuthContext.Provider value={[authState, setAuthState]}>
      <Header authUsername={authUsername} currState={currState} setAuthState={setAuthState} belongings={belongings} types={types}/>
      <Component {...pageProps} />
      <Footer authUsername={authUsername} currState={currState} setAuthState={setAuthState} belongings={belongings} types={types}/>
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