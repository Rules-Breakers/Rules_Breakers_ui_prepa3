import React from "react";


export function Button({title, attribut, setUpdateData, id}) {
    function storeData(params) {
        let data = {
            id_book : id,
            borrowing_date : new Date().toLocaleDateString(),
            giving_back_date: ""
        }
        setUpdateData(data)
        console.log(data);

    }
    return(
        <>
            <button className={attribut} onClick={storeData}>{title}</button>
        </>
    )
}