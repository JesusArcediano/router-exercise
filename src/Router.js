import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { JournalRoutes } from "./journal/routes/JournalRoutes";
import { AuthRoutes } from "./auth/routes/AuthRoutes";

const Router = () => {

  const status = 'not-authenticated';

  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            (status === 'authenticated')
              ? <Route path="/*" element={<JournalRoutes />} />
              : <Route path="/auth/*" element={<AuthRoutes />} />
          }
          
          <Route path="/*" element={<Navigate to="/auth/login"/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;