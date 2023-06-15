import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "../../Layout"
import { Home, Pets } from "../../components/pages"
import Details from "../../Details"
import { ContenidoContext } from "../../context/ContenidoContext"
import { useState } from "react"

export const JournalRoutes = () => {

  const [content, setContent] = useState([]);
  const [movements, setMovements] = useState([]);

  return (
    <ContenidoContext.Provider value={{content, setContent, movements, setMovements}}>
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
    </ContenidoContext.Provider>
  )
}
