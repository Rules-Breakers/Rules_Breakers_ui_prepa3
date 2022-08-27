import { useState } from "react";
import { Footer } from "../component/Footer/Footer";
import { Header } from "../component/Header/Header";
import { Menu } from "../component/Navigation/menu";
import { Table } from "../component/Table/Table";


export default function HomePage () {
    const [head, setHead] = useState(false)
    return (
    <>
        <Menu />
        <Table setHead={setHead}>
            <th className="p-2">Titre</th>
            <th className="p-2">Auteur</th>
            <th className="p-2">Category</th>
            <th className="p-2">Status</th>
            <th className="p-2">Nombre de pages</th>
            {
                head ? <th className="p-2">Nombres d'emprunt</th> : <th className="p-2">Actions</th>
            }
        </Table>
        <Footer />
    </>
    )
}