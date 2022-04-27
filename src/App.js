import "./App.css";
import React from "react";
import Authtorization from "./components/containers/Auth/Authtorization";
import CategoriesList from "./components/Categories/CategoriesList";
import BackDrop from "./components/Backdrop/BackDrop"
import ButtonAppBar from './components/AppBar/index';
//test app netifly
function App() {
    return (
        <>
            <ButtonAppBar />
            <BackDrop />
            <Authtorization />
            <CategoriesList />
        </>
    );
}

export default App;
