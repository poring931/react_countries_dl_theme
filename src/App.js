import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ALL_COUNTRIES } from "./config";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";


function App() {

  const [contries, setContries] = useState([]);
  console.log(contries)

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(
      ({data})=> setContries(data))
  }, [])
  

  return (
    <BrowserRouter>
      <Header/>
      <Main>
        <Routes> 
          <Route path="/" element={<HomePage countries={contries} setCountries={setContries} />}/>
          <Route path="/country/:name" element={ <Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
