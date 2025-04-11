import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import ButtonGradient from "./assets/svg/ButtonGradient";
import ChatPage from "./pages/ChatPage";

function App() {
  const location = useLocation();
  const isChatPage = location.pathname === "/chat";

  return (
    <>
      {!isChatPage && <Header />}

      <div className={isChatPage ? "" : "pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>

        {!isChatPage && (
          <>
            <Benefits />
            <Collaboration />
            <Services />
            <ButtonGradient />
          </>
        )}
      </div>
    </>
  );
}

export default App;
