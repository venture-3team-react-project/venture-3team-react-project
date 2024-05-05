import MainPage from "./layouts/MainPage";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { getPartsList } from "./apis/PartsAPI";
function App() {
  
  return (
    <>
      <Header/>
      <MainPage/>
      <Footer/>

    </>
  );
}

export default App;
