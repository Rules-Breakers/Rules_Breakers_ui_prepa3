import React, { useEffect, useState } from "react";
import './List.css';
import { useNavigate } from "react-router";
import { Pagination } from "../Pagination/Pagination";
import axios from "axios";

function List(){
    const navigate = useNavigate();
    const [showAdd , setShowAdd] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [emprunt, setEmprunt] = useState(false);
    const [data, setData] = useState();
    const close = ()=> setShowAdd(false);
    const [page, setPage] = useState(0);
    const getBack = ()=>{
        navigate('/')
    }
    useEffect(()=>{
        const promise = axios.get("http://localhost:8080/books/?page="+page+"&page_size=10")
        promise.then((res)=>{
            setData([res.data]);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [page])
    return(
        <>
          <div className="list">
            <div><h2 className="book">Book List</h2></div>
            <div className="list1">
            <table className="table-striped rounded-2 shadow text-center">
                <thead>
                   <th>Titre</th>
                   <th>Auteur</th>
                   <th>Catégorie</th>
                   <th>Nombre de page</th>
                   <th>Nombre d'emprunts</th>
                </thead>
                <tbody>
                {
                        data?.map((elt, key) => (
                            <tr key={key}>
                                <td className="p-2" onClick={() => setShowUpdate(true)}>{elt?.name}</td>
                                <td className="p-2" onClick={() => setShowUpdate(true)}>{elt?.auteur}</td>
                                <td className="p-2" onClick={() => setShowUpdate(true)}>{elt?.category?.map((e,k) => (
                                    <p key={k}>{e?.type}</p>
                                ))}</td>
                                <td className="p-2" onClick={() => setShowUpdate(true)}>{elt?.page_size}</td>
                                {
                                        emprunt ? <td>1</td> : <td><button className="button3" >Emprunter</button><button className="button2">Rendre</button></td>
                                    }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination/>
            <button onClick={()=>getBack()} className='button1 btn2'>Terminé</button>
            </div>
          </div>
        </>
    )
}

export default List;