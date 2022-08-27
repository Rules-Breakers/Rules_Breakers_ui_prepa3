import React from "react";
import './message.css';


export function MessageModal() {
    return (
        <div className="card bg-dark text-center shadow position-absolute">
            <div className="border rounded-circle text-success text-center my-3">OK</div>
            <p className="my-2 text-white">Successfully created !</p>
        </div>
    )
}