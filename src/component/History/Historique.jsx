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
                    {
                        
                    }
                </tbody>
            </table>
            </div>
          </div>   
        </div>
          
        </>
    )
}

export default Historique;