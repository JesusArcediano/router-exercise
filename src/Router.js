import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import {Pets, Home} from "./components/pages";
import Details from './Details';

const Router = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="pets" element={<Pets />} />
            <Route path="pets/:id" element={<Details />} />
            {/* <Route path="*" element={<h1>404</h1>} /> */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;