import React, { useEffect, useState } from "react";
import './Historique.css';
import '../bootstrap/bootstrap.css';
import { Menu } from "../Navigation/menu";
import axios from "axios";
import { BASE_URL } from "../script/BaseUrl";
import { Pagination } from "../Pagination/Pagination";

function Historique(){
    const [data, setData] = useState([]);
    const [book, setBook] = useState([]);
    const [header, setHeader] = useState([]);

    useEffect(()=>{
        const promise = axios.get(BASE_URL+"/books?page=0&page_size=20");
        promise.then((res) => {
            setBook(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    })
    const info = (id, arr) => {
        setHeader(arr);
            const promis = axios.get(BASE_URL+"/borrows/history/"+id);
            promis.then((res) => {
                setData(res.data);
                console.log(data);
            })
            .catch((err)=>{
                console.error(err);
            })
    }
    return (
        <>
        <Menu />
        <div className="text-center">
            {book.map((elt, key) => (
                <button className="button" onClick={() => info(elt?.id,[elt?.name,elt?.auteur])}>{elt?.name}</button>
            ))}
        </div>
        <div className="contain">
        <h2 className="history text-center">Historique des emprunts</h2>
          <div className="Containing">
            <div className="left">
                {
                    <>
                        <p className="ttle">Title : {header[0]}</p>
                        <p className="ttle">Auteur : {header[1]}</p>
                    </>
                 
                }
              
            </div>
            <div className="right">
              <table className="history-table">
                <tbody>
                    {
                     data.map((el,k)=> (
                        <tr>
                            <td className="text-light pr-2">{el}</td>
                        </tr>
                     ))   
                    }
                </tbody>
            </table>
            </div>
          </div>   
        </div>
          <div className="text-center">
          <Pagination />
          </div>
        </>
    )
}

export default Historique;