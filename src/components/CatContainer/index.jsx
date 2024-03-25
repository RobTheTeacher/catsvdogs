import styles  from './CatContainer.module.css'
import Header from '../Header';
import Button from '../Button';

const CatContainer = ({updateFunction}) => {
    return (
        <div className={styles.catContainer}>
            <Header name="Cats" subtitle ="Miaow miaow" />
            <div>
                Cats are the best!
            </div>
            <Button name="again" updatePage={updateFunction} />
        </div>
    )
}

export default CatContainer;