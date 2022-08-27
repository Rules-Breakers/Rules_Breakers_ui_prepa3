import React from "react";
import './Historique.css';
import '../bootstrap/bootstrap.css';

function Historique(){
    return (
        <>
        <div className="contain">
        <h2 className="history text-center">Historique des emprunts</h2>
          <div className="Containing">
            <div className="left">
              <p className="ttle">Title</p>
              <p className="ttle">Auteur</p>
            </div>
            <div className="right">
              <table className="history-table">
                <tbody>
                    <tr>
                        <td className="p-2 tab">2022-06-11</td>
                        <td className="p-2 tab">20h30</td>
                    </tr>
                    <tr>
                        <td className="p-2 tab">2022-06-11</td>
                        <td className="p-2 tab">20h30</td>
                    </tr>
                    <tr>
                        <td className="p-2 tab">2022-06-11</td>
                        <td className="p-2 tab">20h30</td>
                    </tr>
                    <tr>
                        <td className="p-2 tab">2022-06-11</td>
                        <td className="p-2 tab">20h30</td>
                    </tr>
                    <tr>
                        <td className="p-2 tab">2022-06-11</td>
                        <td className="p-2 tab">20h30</td>
                    </tr>
                    <tr>
                        <td className="p-2 tab">2022-06-11</td>
                        <td className="p-2 tab">20h30</td>
                    </tr>
                    <tr>
                        <td className="p-2 tab">2022-06-11</td>
                        <td className="p-2 tab">20h30</td>
                    </tr>
                </tbody>
            </table>
            </div>
          </div>   
        </div>
          
        </>
    )
}

export default Historique;