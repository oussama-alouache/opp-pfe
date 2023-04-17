
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'; 

import Home from './page/Home';
import Navbar from './page/utilities/Navbar';

import Marque from './page/marque/show';
import Add_T from './page/type/add';
import Add_M from './page/marque/add';
import Type from './page/type/show';
import Reservation from './page/reservation/show';
import Add_V from './page/voiture/add';

import MT from './page/MT';
import Edit_T from './page/type/edit';
import VoitureAdmine from './page/voiture/show';
import Edit_j from './page/voiture/edit';
import Edit_M from './page/marque/edit';
export default function App() {
  
  return (
    <div className=""  >

  <BrowserRouter>
  <Navbar/>
        <Routes>
  
          <Route index element={<Home/>} />
          <Route path="/Reservation" element={ <Reservation/>} />
          <Route path="/marqueettype" element={ <MT/>} />

          <Route path="/voiture" element={ <VoitureAdmine/>} />
          <Route path="/type" element={ <Type/>} />
          <Route path="/marque" element={ <Marque/>} />
     
          <Route path="/addtype" element={ <Add_T/>} />
          <Route path="/addvoiture" element={ <Add_V/>} />
          <Route path="/addmarque" element={ <Add_M/>} />
      



          <Route path="/edittype/:id/" element={ <Edit_T/>} />
        
          <Route path="/editvoiture/:id/" element={ <Edit_j/>} />
          <Route path="/editmarque/:id/" element={ <Edit_M/>} />
       


        </Routes>
      </BrowserRouter>


    </div>
      
   
  )
}