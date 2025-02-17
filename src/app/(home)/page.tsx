import { Suspense } from "react";
import { Home } from "./components/Home";

function HomePage() {
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
      <Home />
    </Suspense>
  );
}

export default HomePage;
