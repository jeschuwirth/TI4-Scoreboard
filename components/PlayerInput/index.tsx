import styles from "./style.module.css"
import factions from "../../public/factions.json"
import colors from "../../public/playerColors.json"
import { Dispatch, SetStateAction, useState } from "react"

type Props = {
    setplayerinfo:Dispatch<SetStateAction<any>>
}


const PlayerInput = () => {
    // Acá va el react

    const [faction, setFaction] = useState("Arborec");
    const [color, setColor] = useState("red");
    const [text, setText] = useState("");

    return (
        //Acá el html
        <div className={styles.playerinputcontainer}>
            <select onChange={(e) => setFaction(e.target.value)} name="factions" className={styles.playerinputFont}> {factions.factions.map( (factionName:string, index:number) =>
                <option key={index} value = {factionName}> {factionName} </option>
            )}
            </select>

            <select onChange={(e) => setColor(e.target.value)} name="color" className={styles.playerinputFont} > {colors.colors.map( (color:string, index:number) =>
                <option key={index} value = {color}> {color} </option>
            )}
            </select>

            <input onChange={(e) => setText(e.target.value)} type="text" className={styles.playerinputFont}/>
        </div>
    )
}
export default PlayerInput;
