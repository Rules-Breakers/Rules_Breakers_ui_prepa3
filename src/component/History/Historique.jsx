import React from "react";
import './Historique.css';
import '../bootstrap/bootstrap.css';

function Historique(){
    return (
        <>
          <div className="Container2">
            <div className="Containercontainer2">
              <div className="before">
                <p className="ttle">Title - Auteur</p>
                <h3>Historique des emprunts</h3>
              </div>
             <div className="Timing">
                <p className="time">2022-04-12 10h30</p>
                <p className="time">2022-04-13 10h20</p>
                <p className="time">2022-04-12 10h30</p>
                <p className="time">2022-04-13 10h20</p>
                <p className="time">2022-04-12 10h30</p>
                <p className="time">2022-04-13 10h20</p>
                <p className="time">2022-04-12 10h30</p>
                <p className="time">2022-04-13 10h20</p>
             </div>
          </div>
            </div>
             
        </>
    )
}

export default Historique;