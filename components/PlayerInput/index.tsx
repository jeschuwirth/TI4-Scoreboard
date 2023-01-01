import styles from "./style.module.css"
import factions from "../../public/factions.json"
import colors from "../../public/playerColors.json"

type Props = {
    count:number
}

export default function PlayerInput( {count}:Props ) {
    // Acá va el react

    return (
        //Acá el html
        <div className={styles.container}> { Array.from(Array(count).keys()).map((_) => 
            
            <div className={styles.playerinputcontainer}>
                <select name="factions" className={styles.playerinputFont}> {factions.factions.map( (factionName:string) =>
                    <option value = {factionName}> {factionName} </option>
                )}
                </select>

                <select name="color" className={styles.playerinputFont} > {colors.colors.map( (color:string) =>
                    <option value = {color}> {color} </option>
                )}
                </select>

                <input type="text" className={styles.playerinputFont}/>
            </div>

        )}

        </div>
    )
}
