import { Container } from "react-bootstrap";
import NavBar from "./componnents/NavBar";
import MoviesList from "./componnents/MoviesList";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import MovieDetalse from "./componnents/MovieDetalse";


function App() {
    return (
      <div className="font color-body" >
        <NavBar />
        <Container>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<MoviesList/>} />
        <Route path="/movie/:id" element={<MovieDetalse/>} />
        </Routes>
        </BrowserRouter>
        </Container>
      </div>
    );
  }

  export default App;
