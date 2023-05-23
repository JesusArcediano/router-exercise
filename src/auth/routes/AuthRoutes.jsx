import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"
import { LayoutPage } from "../pages/LayoutPage"

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="login" element={<LoginPage />}/>
          <Route path="register" element={<RegisterPage />}/>
          
          <Route path="/*" element={<Navigate to="/auth/login" />}/>
        </Route>
    </Routes>
  )
}
