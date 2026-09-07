import react, { useContext } from "react"
import { countContext } from "./App"

const button = () => {
    const count = useContext(countContext)
    return (
        <div>

            <button> onClick={count.setCount(count.count + 1)}
                increase
            </button>
            <button> onClick={count.setCount(count.count - 1)}
                decrease
            </button>
        </div>
    )
}

export default button