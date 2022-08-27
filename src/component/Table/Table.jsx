import React, { useState, useEffect } from "react";
import axios from "axios";
import AddForm from "../AddBook/AddForm";
import { Pagination } from "../Pagination/Pagination";
import "./table.css"
import UpdateForm from "../UpdateBook/UpdateForm";
import { Button } from "../Button/Button";


export function Table({children, setHead}) {
    const [emprunt, setEmprunt] = useState(false);
    /*function printDocument() {  
        const input = document.getElementById('pdfdiv');  
        html2canvas(input)  
          .then((canvas) => {  
            var imgWidth = 210;    
            var imgHeight = canvas.height * imgWidth / canvas.width;    
            const imgData = canvas.toDataURL('image/png');  
            const pdf = new jsPDF();
            var position = 0;    
            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
            pdf.save("download.pdf");  
          });  
      } */
        const [update, setUpdateData] = useState({});
        const [showAdd , setShowAdd] = useState(false);
        const [showUpdate, setShowUpdate] = useState(false);
        const [data, setData] = useState([]);
        const close = ()=> setShowAdd(false);
        const [page, setPage] = useState(0);
        const closeUpdate = ()=> setShowUpdate(false);
    function filter(e) {
        if(e.target.value === 'emprunt'){
            setEmprunt(true);
            setHead(true);
        }
        else{
            setEmprunt(false);
            setHead(false);
        }
    }
    
    useEffect(()=>{
        const promise = axios.get("https://virtserver.swaggerhub.com/Oniitsiky/librairies/1.0.1/books?page="+page+"&page_size=10")
        promise.then((res)=>{
            setData([res.data]);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [page])
    return(
        <>
        {
            showAdd ? <AddForm close={close} showAdd={showAdd} /> : <></>
        }
            {
                showUpdate ? <UpdateForm closeUpdate={closeUpdate} showUpdate={showUpdate}/>: <></>
            }
           <div className="container" >
           <div className="btn-toolbar mb-2 mb-md-0 my-2" id="table-action">
            <div className="btn-group me-2" >
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>setShowAdd(true)} >Add</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <select name="" id="" className="btn btn-sm btn-outline-secondary" onChange={filter}>
                <option value="titre">Titre</option>
                <option value="auteur">Auteur</option>
                <option value="emprunt">Emprunt</option>
                <option value="category">Category</option>
                <option value="page">Page</option>
            </select>
            </div>
            <table className="table-striped rounded-2 shadow text-center" id="pdfdiv">
                <thead>
                    { children }
                </thead>
                <tbody>
                    {
                        data.map((elt, key) => (
                            <tr key={key}>
                                <td className="p-2" onClick={() => setShowUpdate(true)}>{elt?.name}</td>
                                <td className="p-2" onClick={() => setShowUpdate(true)}>{elt?.auteur}</td>
                                <td className="p-2" onClick={() => setShowUpdate(true)}>{elt?.category.map((e,k) => (
                                    <p key={k}>{e.type}</p>
                                ))}</td>
                                <td className="p-2" onClick={() => setShowUpdate(true)}>{elt?.page_size}</td>
                                {
                                        emprunt ? <td>1</td> : <td><Button attribut="button3" title = "Emprunter" id={elt?.id} setUpdateData={setUpdateData}/><button className="button2">Rendre</button></td>
                                    }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination />
           </div>
        </>
    )
}