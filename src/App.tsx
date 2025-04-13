import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./pages/dashboard";
import { Header } from "./layouts/header";

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
