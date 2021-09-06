import React,{useState} from "react";
import { ganador } from "./ayudante";
import Tablero from "./Tablero";

const Tictac = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]); //Se crea un array vacio de largo  9
    const [stepNumber, setStepNumber] = useState(0); //Se setea el primer paso en 0
    const [xIsNext, setXisNext] = useState(true); //Se define el jugador actual
    const winner=ganador(history[stepNumber]); //Se calcula el ganador utilizando la funcion calculateWinner desde helper.js
    const xO= xIsNext?"X":"O"; //Se define una constante que tendra dos valores dependiendo del valor de xIsNext

    const handleClick=(i)=>{ //Funcion para el clikc del usuario
        const historyPoint=history.slice(0,stepNumber+1); //Se crea un array contemplado entre el paso 0 al paso actual + 1
        const current = historyPoint[stepNumber]; //Se define el valor actual de paso
        const squares=[...current]; //se define un array igual a current
        if(winner||squares[i]) return;
        squares[i]=xO;
        setHistory([...historyPoint,squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);         
    };

    return (
        <>
        <h1>Tic Tac</h1>
        <Tablero squares={history[stepNumber]} onClick={handleClick}/>
        <div className="contenedor">            
            <h3>{winner?"Winner: "+winner:"Next Player: "+xO}</h3>
        </div>
        </>
      );
}
 
export default Tictac;