import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import OddsRoute from "./routes/api/odds/odds";
import TournamentsRoute from "./routes/api/tournaments/tournaments";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/odds" element={ <OddsRoute />}/>
          <Route path="/tournaments" element={ <TournamentsRoute />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
