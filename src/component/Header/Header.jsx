import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Form } from "../Form/Form";
import { Menu } from "../Navigation/menu"
import { Table } from "../Table/Table";
import "./header.css"


export const Header = ()=>{
    const [modal, setModal] = useState(false);
    
    function modalfunc() {
        setModal(true)
    }


    return(
        <>
            <Menu />
            <header className="container navbar bg-dark d-flex-norwap my-5">
                <div className="text-white">Rules Breakers</div>
                <input type="text" className="form-control search rounded-0" placeholder="Search" style={{width : "80%"}}/>
                <div className="bg-danger"><button className="btn btn-danger" onClick={modalfunc}><Link to="/" style={{color: "white"}}>Sign out</Link></button></div>
            </header>
            <Table />
            <Footer />
            {
                modal && <Form />
            }
        </>
    )
}