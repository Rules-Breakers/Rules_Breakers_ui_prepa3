import React from "react";
import { Pagination } from "../Pagination/Pagination";
import "./table.css"


export function Table() {
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
    return(
        <>
           <div className="container">
           <div className="btn-toolbar mb-2 mb-md-0 my-2" id="table-action">
            <div className="btn-group me-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <select name="" id="" className="btn btn-sm btn-outline-secondary">
                <option value="">Filter</option>
                <option value="">Filter</option>
                <option value="">Filter</option>
                <option value="">Filter</option>
            </select>
            </div>
            <table className="table-striped rounded-2 shadow text-center" id="pdfdiv">
                <thead>
                    <th className="p-2">title1</th>
                    <th className="p-2">title2</th>
                    <th className="p-2">title3</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                    </tr>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                    </tr>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                    </tr>
                    <tr>
                        <td className="p-2">item1</td>
                        <td className="p-2">item2</td>
                        <td className="p-2">item3</td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
           </div>
        </>
    )
}