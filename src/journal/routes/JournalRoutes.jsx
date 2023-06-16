import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "../../Layout"
import { Home, Pets } from "../../components/pages"
import Details from "../../Details"

export const JournalRoutes = () => {

  return (
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
  )
}
