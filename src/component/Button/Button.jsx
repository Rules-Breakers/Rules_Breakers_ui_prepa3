import axios from "axios";
import React from "react";
import { BASE_URL } from "../script/BaseUrl";


export function Button({title, attribut, id}) {
    function storeData() {
        let data = {
            id_book : id,
            borrowing_date : new Date().toISOString().split('T')[0].replaceAll('/','-'),
            giving_back_date: ""
        }
        const promise = axios.post(BASE_URL+"/borrows", data)
        console.log(data);
        promise.then((res)=>{
            console.log(res);
            alert("Livre emprunté ")
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <>
            <button className={attribut} onClick={storeData}>{title}</button>
        </>
    )
}