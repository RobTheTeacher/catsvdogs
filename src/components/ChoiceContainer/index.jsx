import styles from './ChoiceContainer.module.css'
import Button from '../Button'

const ChoiceContainer = ({updateFunction}) => {
   return (
    <div className={styles.container}>
        <Button name="cats" updatePage={updateFunction} />
        <Button name="dogs" updatePage={updateFunction} />
    </div>
   )
}

export default ChoiceContainer