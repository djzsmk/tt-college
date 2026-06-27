import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Home from "./pages/Home";
import CharacterCreator from "./pages/CharacterCreator";
import CharacterCard from "./pages/CharacterCard"
import Adventue from "./pages/Adventure"
import Navbar from "./components/Navbar";

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CharacterCreator />} />
        {/*<Route path="/character" element={<CharacterCard />} /> */}
        <Route path="/adventure" element={<Adventue />} />
      </Routes>
      <Navbar/>
    </BrowserRouter>
  );
}