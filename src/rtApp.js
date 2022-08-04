import * as React from 'react';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Container from '@mui/material/Container';
import Home from './components/pages/Home'
import Movie from './components/pages/Movie'
import Series from './components/pages/Series'



export default function App() {
  return (
    <BrowserRouter>
    <Container maxWidth="xl">
      
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/movie/:id" element={<Movie />} />
          <Route exact path="/series/:id" element={<Series />} />
        </Routes>
      
    </Container>
    </BrowserRouter>
  );
}
