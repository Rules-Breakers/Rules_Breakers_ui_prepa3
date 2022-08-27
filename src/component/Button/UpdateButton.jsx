import axios from "axios";
import React from "react";
import { BASE_URL } from "../script/BaseUrl";


export function UpdateButton({title, attribut, id}) {
    function storeData(params) {
        let data = {
            id_book : id,
            borrowing_date :"",
            giving_back_date:  new Date().toISOString().split('T')[0].replaceAll('/','-')
        }
        const promise = axios.put(BASE_URL+"/books", data)
        promise.then((res)=>{
            console.log(res);
            alert("Livre rendu ")
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