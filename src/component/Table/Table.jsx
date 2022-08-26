import React, { useState } from "react";
import AddForm from "../AddBook/AddForm";
import { Pagination } from "../Pagination/Pagination";
import "./table.css"


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
        const [showAdd , setShowAdd] = useState(false)
        const close = ()=> setShowAdd(false)
    function filter(e) {
        if(e.target.value === 'emprunt'){
            setEmprunt(true)
            setHead(true)
        }
        else{
            setEmprunt(false)
            setHead(false)
        }
    }
    return(
        <>
        {
            showAdd ? <AddForm close={close} showAdd={showAdd} /> : <></>
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
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                        <td className="p-2">item4</td>
                        {
                                emprunt ? <td>1</td> : <td><button className="button3">Emprunter</button><button className="button2">Rendre</button></td>
                            }
                    </tr>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                        <td className="p-2">item4</td>
                        {
                                emprunt ? <td>1</td> : <td><button className="button3">Emprunter</button><button className="button2">Rendre</button></td>
                            }
                    </tr>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                        <td className="p-2">item4</td>
                        {
                                emprunt ? <td>1</td> : <td><button className="button3">Emprunter</button><button className="button2">Rendre</button></td>
                            }
                    </tr>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                        <td className="p-2">item4</td>
                        {
                                emprunt ? <td>1</td> : <td><button className="button3">Emprunter</button><button className="button2">Rendre</button></td>
                            }
                    </tr>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                        <td className="p-2">item4</td>
                        {
                                emprunt ? <td>1</td> : <td><button className="button3">Emprunter</button><button className="button2">Rendre</button></td>
                            }
                    </tr>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                        <td className="p-2">item4</td>
                        {
                                emprunt ? <td>1</td> : <td><button className="button3">Emprunter</button><button className="button2">Rendre</button></td>
                            }
                    </tr>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                        <td className="p-2">item4</td>
                        {
                                emprunt ? <td>1</td> : <td><button className="button3">Emprunter</button><button className="button2">Rendre</button></td>
                            }
                    </tr>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                        <td className="p-2">item4</td>
                        {
                                emprunt ? <td>1</td> : <td><button className="button3">Emprunter</button><button className="button2">Rendre</button></td>
                            }
                    </tr>
                </tbody>
            </table>
            <Pagination />
           </div>
        </>
    )
}