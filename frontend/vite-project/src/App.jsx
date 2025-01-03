import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/Login';
import {Create} from "@mui/icons-material";
import Creation from './components/Creation.jsx'
import DataPage from "./components/DataPage.jsx"; 
function App() {
    return (
        <div className="App">

           <BrowserRouter>
               <Routes>
                   <Route index={<Login/>} />
                   <Route path="/Login" element={<Login/>}/>
                   <Route path="/Creation" element={<Creation/>}/>
                   <Route path={'/Data'} element={<DataPage/>}/>
               </Routes>
           </BrowserRouter>
        </div>
    );
}

export default App;