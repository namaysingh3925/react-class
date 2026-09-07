import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex justify-between p-2 m-2 bg-green-300"  >
            <div> <img className='h-15' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTda3wOqfoiSoEvKxRRweR_X47YLHTCDRVUhQ&s" alt="img" />
                <h1> </h1>



            </div>




            <div className="flex gap-3 pt-3 text-xl"     >
                <NavLink to='/'> home</NavLink>
                <NavLink to='/about'> about </NavLink>
                <NavLink to='/services'>  services </NavLink>
                <NavLink to='/contact'> contact </NavLink>
            </div>




            <div className='gap-3 pt-3 text-xl'>
                <button> Login    </button>

            </div>

        </div>

    )
}
export default Header       