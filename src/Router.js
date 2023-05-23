import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { JournalRoutes } from "./journal/routes/JournalRoutes";
import { AuthRoutes } from "./auth/routes/AuthRoutes";
import { useCheckAuth } from "./hooks/useCheckAuth";
import { CheckingAuth } from "./ui/CheckingAuth";

const Router = () => {

  const {status} = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />
  }

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