import React from 'react'
import { useContext } from 'react'
import button from './button'


const displaybtn = () => {


    const count = useContext(countContext)
    return (
        <div>

            <h2>{count}</h2>
        </div>
    )
}

export default displaybtn
