import styles from "./style.module.css"
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { Dispatch, SetStateAction } from "react"

type Props = {
    count:number,
    setCount:Dispatch<SetStateAction<number>>
    max:number,
    min:number
}

export default function Counter( {count, setCount, max, min}:Props ) {
    function handleCount( value:number ){
        if (count + value < min) return;
        if (count + value > max) return;
        setCount( (count) => count + value )
    }

    return (
        //Acá el html
        <div className={styles.container}>

            <button type="button" 
                    className={styles.button}
                    onClick={() => handleCount(-1)}> <AiOutlineMinus/> </button>

            <p className={styles.expansionFont}> {count} </p>

            <button type="button" 
                    className={styles.button}
                    onClick={() => handleCount(+1)}> <AiOutlinePlus/> </button>

        </div>
    )
}

