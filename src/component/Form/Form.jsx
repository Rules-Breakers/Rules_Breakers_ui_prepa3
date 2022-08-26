import axios from "axios";
import React, { useEffect, useState } from "react";
import { MessageModal } from "../Modal/MessageModal";
import "./style.css"


export function Form() {
    const [nom, setNom] = useState("");
    const [prix, setPrix] = useState("");
    const [category, setCategory] = useState(1);
    const [categoryList, setCategoryList] = useState([]);
    const [state, setState] = useState(false);
    

    function message() {
        setState(true);
        setTimeout(() => {
            setState(false)
        }, 1000);
    }
   
    function createDrinks() {
        message()
        const data = {
            name : nom,
            price : prix,
            category : category
        }
        const promise = axios.post("http://localhost:8080/drinks", [data])
        promise.then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    useEffect(()=>{
        const promise = axios.get("http://localhost:8080/category")
        promise.then((res)=>{
            setCategoryList(res.data);
            console.log(categoryList);
        })
        .catch((err)=>{
            console.error(err);
        })
    })
    return (
        <>
            {
                state && <MessageModal />
            }
            <form className="create-form">
                <span className="close text-danger" id="close">&times;</span>
                <h1 style={{textAlign: "center", fontSize: 20}}>Boisson</h1>
                <div>
                    <label htmlFor="">Nom :</label>
                    <input className="form-control" type="text" placeholder="Coca cola" value={nom} required onChange={(e)=>setNom(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Prix:</label>
                    <input type="text" className="form-control" placeholder="XXXX MGA" value={prix} onChange={(e)=>setPrix(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="">Category: </label>
                    <select className="form-control" name="" id="select" value={category} onChange={(e)=>setCategory(e.target.value)}>
                        {
                            categoryList.map((elt, k)=>(
                                <option key={k} value={elt.id}>{elt.name}</option>
                            ))
                        }
                    </select>
                </div>
                <button className="create" onClick={createDrinks}>Create</button>
            </form>
        </>
    )
}