import React from "react";
import "./pagination.css"


export function Pagination() {
    return(
        <>
            <div id="pagination">
            <ul className="pagination">
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                    <span>&laquo;</span>
                </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                    <span>&raquo;</span>
                </a>
                </li>
            </ul>
            </div>
        </>
    )
}