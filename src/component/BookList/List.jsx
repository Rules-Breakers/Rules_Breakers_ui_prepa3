import React from "react";
import './List.css';
import { useNavigate } from "react-router";
import { Pagination } from "../Pagination/Pagination";

function List(){
    const navigate = useNavigate();
    const getBack = ()=>{
        navigate('/')
    }
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
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                        <td className="p-2">item4</td>
                        <td className="p-2">item5</td>
                    </tr>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                        <td className="p-2">item4</td>
                        <td className="p-2">item5</td>
                    </tr>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                        <td className="p-2">item4</td>
                        <td className="p-2">item5</td>
                    </tr>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                        <td className="p-2">item4</td>
                        <td className="p-2">item5</td>
                    </tr>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                        <td className="p-2">item4</td>
                        <td className="p-2">item5</td>
                    </tr>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                        <td className="p-2">item4</td>
                        <td className="p-2">item5</td>
                    </tr>
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