import React from "react";
import "./message.css";


export function MessageModal() {
    return (
        <div className="card text-center shadow position-absolute">
            <div className="border rounded-circle text-success text-center">OK</div>
            <p className="my-2">Successfully created !</p>
        </div>
    )
}