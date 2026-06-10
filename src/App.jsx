import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Landing from "@/pages/Landing";
import Admin from "@/pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Toaster richColors position="top-right" />
    </BrowserRouter>
  );
}

export default App;
