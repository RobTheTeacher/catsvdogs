import Header from "../Header"
import Button from "../Button"

const DogContainer = ({updateFunction}) => {
    return (
        <div>
            <Header name="Dogs" subtitle="Woof Woof" />
            <div>
                Dogs are the best!
                Whos a good boy?
                Grrr
            </div>
            <Button name="again" updatePage={updateFunction} />
        </div>
    )
}

export default DogContainer