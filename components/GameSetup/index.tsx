import styles from "./style.module.css"
import ExpansionSelector from "../ExpansionSelector"
import Counter from "../Counter"
import { useState } from "react"
import { useRouter } from "next/navigation"
import PlayerInput from "../PlayerInput"



export default function GameSetup() {
    // Acá va el react
    const [players, setPlayers] = useState(3);
    const [points, setPoints] = useState(10);
    const [playerInfo, setPlayerInfo]  = useState([{
        faction: "Arborek",
        color: "red",
        name: ""
    },
    {
        faction: "Arborek",
        color: "red",
        name: ""
    },
    {
        faction: "Arborek",
        color: "red",
        name: ""
    }]);

    const router = useRouter();

    function handleSubmit( e:React.FormEvent ){
        e.preventDefault();
        router.push("/game")
    }

    return (
        <form className={styles.container} onSubmit = { handleSubmit }>
            <ExpansionSelector />

            <div className={styles.nplayerscontainer}>
                <p className={styles.nplayersFont}> Puntos: </p>
                <Counter count={points} setCount={setPoints} min={10} max={14} />
            </div>

            <div className={styles.nplayerscontainer}>
                <p className={styles.nplayersFont}> N° Jugadores: </p>
                <Counter count={players} setCount={setPlayers} min={3} max={6} />
            </div>
            
            {// la clase de abajo es el html de PlayerInput, pero no logré pasar la data
             // del hijo al padre. Como hotfix escribí el código en el padre
            }

            <div className={styles.container}> { Array.from(Array(players).keys()).map((_) => 
                <PlayerInput key = {_}  playerInfo = {playerInfo} setPlayerInfo={setPlayerInfo}/>

                )}
            </div>


            <button type="submit" 
                    className={styles.button}> Start Game </button>
        </form>
    )
}

