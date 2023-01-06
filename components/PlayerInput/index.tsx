import styles from "./style.module.css"
import factions from "../../public/factions.json"
import colors from "../../public/playerColors.json"
import { forwardRef, useImperativeHandle, useRef, RefObject } from "react"
import { Dispatch, SetStateAction, useState } from "react"

type Props = {
    setplayerinfo:Dispatch<SetStateAction<any>>
}

type refHandler = {
    refSel:RefObject<HTMLSelectElement>,
    refInp:RefObject<HTMLInputElement>
}

const PlayerInput = ({setplayerinfo}:Props) => {
    // Acá va el react

    const refSelect = useRef<HTMLSelectElement>(null);
    const refInput = useRef<HTMLInputElement>(null);

    const [faction, setFaction] = useState("Arborec");
    const [color, setcolor] = useState("red");
    const [text, settext] = useState("");

    return (
        //Acá el html
        <div className={styles.playerinputcontainer}>
            <select onChange={(e) => setFaction(e.target.value)} ref={refSelect} name="factions" className={styles.playerinputFont}> {factions.factions.map( (factionName:string, index:number) =>
                <option key={index} value = {factionName}> {factionName} </option>
            )}
            </select>

            <select onChange={(e) => setcolor(e.target.value)} ref={refSelect} name="color" className={styles.playerinputFont} > {colors.colors.map( (color:string, index:number) =>
                <option key={index} value = {color}> {color} </option>
            )}
            </select>

            <input onChange={(e) => settext(e.target.value)} ref={refInput} type="text" className={styles.playerinputFont}/>
        </div>
    )
}
export default PlayerInput;
