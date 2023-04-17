import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './bottun'
import { Bars3Icon } from '@heroicons/react/24/solid'
export default function Navbar() {
    let link =[
        {name:"tableau de bord" , link :"/"},
        {name:"ajouter une voiture" , link :"/addvoiture"},
        {name:"ajouter une marque/type" , link :"/marqueettype"},
       

    ]
    const [open, setOpen] = useState(false)
  return (
    <div className='shadow-md  w-full fixed top-0 left-0           bg-gradient-to-r from-blue-500 to-green-500' >
        <div className='md:flex items-center  justify-between bg-white py-4 md: px-10 '>
            <div>
                <span>
                 
                </span>
                Navbar
            </div>
            <div onClick={()=>setOpen(!open)} className=' w-10  absolute right-8 top-6 cursor-pointer md:hidden'>
<Bars3Icon name={open ? 'close': 'menu'} />
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>                
                        {link.map((link)=>(

                         <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                             <Link to={link.link} className='text-blue-700 hover:text-blue-300'   > 
                             
                             {link.name}</Link> </li>
                        ))}
                      
                    </ul>

        </div>
      
    
    </div>
  )
}
