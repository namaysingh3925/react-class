import react from 'react'
import { nameContext } from '../App';
import { useContext } from 'react';

const grandchild = () => {
    const name = useContext(nameContext);
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}
export default grandchild;                                    
