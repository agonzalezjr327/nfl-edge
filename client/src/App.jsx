import {
  Routes,
  Route
} from "react-router-dom";

import {
  ToastContainer
} from "react-toastify";

import Header
  from "./components/Header";

import Dashboard
  from "./pages/Dashboard";

import Games
  from "./pages/Games";

import Suggestions
  from "./pages/Suggestions";

import ParlayBuilder
  from "./pages/ParlayBuilder";

import MyBets
  from "./pages/MyBets";

import Performance
  from "./pages/Performance";


function App() {

  return (

    <>

      <Header />


      <main
        className="
          container
          py-4
        "
      >

        <Routes>

          <Route
            path="/"
            element={
              <Dashboard />
            }
          />


          <Route
            path="/games"
            element={
              <Games />
            }
          />


          <Route
            path="/suggestions"
            element={
              <Suggestions />
            }
          />


          <Route
            path="/parlay"
            element={
              <ParlayBuilder />
            }
          />


          <Route
            path="/bets"
            element={
              <MyBets />
            }
          />


          <Route
            path="/performance"
            element={
              <Performance />
            }
          />

        </Routes>

      </main>


      <ToastContainer
        position="bottom-right"
      />

    </>

  );
}


export default App;