import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeAdmin from './admin/Home';
import ProfileDetails from './admin/profile-component/ProfileDetails';
import MainScreenpage from './admin/MenuPages/MainScreenpage';
import Aboutpages from './admin/MenuPages/AboutPage';
import Mission from './admin/MenuPages/mission';
import Testomonial from './admin/MenuPages/Testomonial';
import ServicePage from './admin/MenuPages/ServicePage';
import TeamPage from './admin/MenuPages/TeamPage';
import EventPage from './admin/MenuPages/EventPage';
import WebinarPage from './admin/MenuPages/WebinarPage';
import Work3dPage from './admin/MenuPages/work3dPage';
import WorkSimulation from './admin/MenuPages/workSimulation';
import WorkFabrication from './admin/MenuPages/workFabrication';
import Design_3D from './admin/MenuPages/design_3d';
import Design_Simula from './admin/MenuPages/design_Simula';
import Faqpage from './admin/MenuPages/Faqpage';
import HirePage from './admin/MenuPages/HirePage';
import Subscribe from './admin/MenuPages/Subscribe';
import ContactMessage from './admin/MenuPages/Contact';
import Designer from './admin/MenuPages/Designer';


  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    
    <Route path="*" element={<App/>}/>
    <Route path="/admin" element={<HomeAdmin/>}/>
    <Route path='/admin/profile' element={<ProfileDetails/>} />
    <Route path='/admin/main' element={<MainScreenpage/>}/>
    <Route path='/admin/about' element={<Aboutpages/>}/>
    <Route path='/admin/mission' element={<Mission/>}/>
    <Route path='/admin/testomonial' element={<Testomonial/>}/>
    <Route path='/admin/services' element={<ServicePage/>}/>
    <Route path='/admin/team' element={<TeamPage/>}/>
    <Route path='/admin/designer' element={<Designer/>}/>
    {/* <Route path='/admin/event' element={<EventPage/>}/> */}
    <Route path='/admin/event' element={<EventPage/>}/>
    <Route path='/admin/webinar' element={<WebinarPage/>}/>
    <Route path='/admin/work3d' element={<Work3dPage/>}/>
    <Route path='/admin/simulation' element={<WorkSimulation/>}/>
    <Route path='/admin/fabrication' element={<WorkFabrication/>}/>
    <Route path='/admin/design_3d' element={<Design_3D/>}/>
    <Route path='/admin/design_simula' element={<Design_Simula/>}/>
    <Route path='/admin/faq' element={<Faqpage/>}/>
    <Route path='/admin/hire' element={<HirePage/>}/>
    <Route path='/admin/subscribe' element={<Subscribe/>}/>
    <Route path='/admin/contact' element={<ContactMessage/>}/>

    
  </Routes>
    
  </BrowserRouter>
);


