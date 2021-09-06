import React from "react";
import Cuadrado from "./Cuadrado";

const Tablero = ({squares, onClick}) => (
    <div className="tablero">
        {squares.map((square, i) =>(
            <Cuadrado key={i} value={square} onClick={()=>onClick(i)}></Cuadrado>
        ))}
    </div>
    );
export default Tablero;