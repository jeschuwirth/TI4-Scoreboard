import styles from "./style.module.css"
import ExpansionSelector from "../ExpansionSelector"
import Counter from "../Counter"
import PlayerInput from "../PlayerInput"
import { useState } from "react"


export default function GameSetup() {
    // Acá va el react
    const [players, setPlayers] = useState(3)
    const [points, setPoints] = useState(10)

    return (
        <form className={styles.container}>
            <ExpansionSelector />

            <div className={styles.nplayerscontainer}>
                <p className={styles.nplayersFont}> Puntos: </p>
                <Counter count={points} setCount={setPoints} min={10} max={14} />
            </div>

            <div className={styles.nplayerscontainer}>
                <p className={styles.nplayersFont}> N° Jugadores: </p>
                <Counter count={players} setCount={setPlayers} min={3} max={6} />
            </div>
            
            <PlayerInput count={players} />
            <button type="submit" 
                    className={styles.button}> Start Game </button>
        </form>
    )
}

