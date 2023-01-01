import styles from "./style.module.css"


export default function ExpansionSelector() {
    // Acá va el react

    return (
        //Acá el html
        <div className={styles.container}>

            <p className={styles.expansionFont}> POK </p>
            <input type="checkbox" id="switch" className={styles.checkbox} />
            <p className={styles.warningFont}> Actualmente no implementado </p>

        </div>
    )
}
