import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CharacterCreator from "./pages/CharacterCreator";
import Adventue from "./pages/Adventure"

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CharacterCreator />} />
        <Route path="/adventure" element={<Adventue />} />
      </Routes>
    </BrowserRouter>
  );
}