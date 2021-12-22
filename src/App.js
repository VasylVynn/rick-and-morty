import React from "react";
import Header from "./UI/header";
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Episodes from "./pages/Episodes/Episodes";
import Location from "./pages/Locations/Location";
import WatchList from "./pages/WatchList/WatchList";
import CardDetails from "./pages/Characters/components/CardDetails";
import Characters from "./pages/Characters/Characters"


function App() {
  return (
    <Router>
      <div className="App"></div>
      <Header  />
      
      <Routes>
      <Route exact path="/" element={<Characters />}>
      </Route> 
        <Route path="/home" element={<Characters />} />
        <Route path="/home/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />

        <Route path="/locations" element={<Location />} />

        <Route path="/watch-list" element={<WatchList />} />


      </Routes>

    </Router>
  )
}




  


export default App;
