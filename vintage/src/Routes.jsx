import { BrowserRouter, Routes as RoutesWrapper, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Vinicola from "./pages/Vinicola";
import Vinhos from "./pages/Vinhos";
import DetalheVinho from "./pages/DetalheVinho";

function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/vinicola" element={<Vinicola />} />
        <Route path="/vinhos" element={<Vinhos />} />
        <Route path="/vinhos/:id" element={<DetalheVinho />} />
      </RoutesWrapper>
    </BrowserRouter>
  );
}

export default Routes;
