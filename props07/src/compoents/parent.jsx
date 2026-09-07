import react from 'react';
import child from './child';
import { nameContext } from '../App';
import { useContext } from 'react';

const parent = () => {
    const name = useContext(nameContext);
    return (
        <div>
            <child />
        </div>
    )
}
export default parent;  