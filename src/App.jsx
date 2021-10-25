import "./App.css"
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
function App() {
  return <>
  <Header/>
   <Main>
    <Home/>
    <Home/>
    <Home/>
   </Main>
  <Footer/>
  </>;

}

export default App
