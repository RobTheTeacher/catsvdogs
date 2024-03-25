import styles from './Button.module.css'

const Button = ( {name, updatePage} ) => { 
    const handleClick = () => {
        {name === "again" ? updatePage(null) : updatePage(name)}
    }

    return (
        <div className={styles.button} onClick={handleClick}>
            <p>Choose {name}</p>
        </div>
    )
}

export default Button