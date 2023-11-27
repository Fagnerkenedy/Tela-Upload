import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "antd/lib/layout/layout";
import Home from "./pages/Home";
import Fields from "./pages/Field/teste";
import React from "react";
import { MainProvider } from "./providers/MainContext";
import Mapping from "./pages/Mapping";
import Processing from "./pages/Processing";
import NotFound from "./pages/NotFound";
import Result from "./pages/Result";
import wikiImg from "./images/wiki.png";
import "./styles.css"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Col } from "antd";


function App() {
  return (
    <MainProvider>
      <ToastContainer
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Header className="custom-header">
        <a href="#"><img src={wikiImg} alt="logo Wiki" width={"90px"} /></a>
      </Header>

        <HashRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/fields" element={<Fields></Fields>}></Route>
            <Route path="/mapping" element={<Mapping></Mapping>}></Route>
            <Route path="/processing/:filename" element={<Processing></Processing>}></Route>
            <Route path="/result" element={<Result></Result>}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </HashRouter>

    </MainProvider>
  );
}

export default App;
