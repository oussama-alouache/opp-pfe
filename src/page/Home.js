import React, { useEffect, useState } from 'react'
import Reservation from './reservation/show'
import axios from 'axios'

export default function Home() {
const [voiture, setVoiture] = useState([]);
const [type, setTypee] = useState([]);
const [marque, setMarque] = useState([]);
const [res, setRES] = useState([]);

useEffect(() => {
  Getvoiture();
  Gettype();
  Getmarque();
  Getres();
}, [])

                         async function Getvoiture (){

                                      await axios.get('http://localhost/Rest/voiture/count.php').then(function(response){
                                                            console.log(response.data)
                                                            setVoiture(response.data)
                                                        

                                                        });

                                      }
                                      async function Gettype (){

                                        await axios.get('http://localhost/Rest/modele/count.php').then(function(response){
                                                              console.log(response.data)
                                                              setTypee(response.data)
                                                          
  
                                                          });
  
                                        }
                                        async function Getmarque (){

                                          await axios.get('http://localhost/Rest/marque/count.php').then(function(response){
                                                                console.log(response.data)
                                                                setMarque(response.data)
                                                            
    
                                                            });
    
                                          }
                                          async function Getres (){

                                            await axios.get('http://localhost/Rest/reservation/count.php').then(function(response){
                                                                  console.log(response.data)
                                                                  setRES(response.data)
                                                              
      
                                                              });
      
                                            }
            



  return (
  
    <div className='flex flex-row justify-center items-center' >
    
    
      <div className='flex flex-col  space-y-7 p-9'>
      <div className='flex flex-row spa space-x-7' >
          <div className=' flex flex-col rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 h-[200px] w-[200px]  items-center justify-center'>
        <svg className="transform transition-all cursor-pointer  h-24 w-24 text-indigo-500 hover:scale-125 h-36 w-36 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" /></svg>

        <h1 className=' text-6xl text-white font-bold' > {voiture}</h1>
        </div>
        <div className=' flex flex-col rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 h-[200px] w-[200px]  items-center justify-center'>
      <svg className=" transform transition-all cursor-pointer  h-24 w-24 text-yellow-500 hover:scale-125"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="4 7 4 4 20 4 20 7" />  <line x1="9" y1="20" x2="15" y2="20" />  <line x1="12" y1="4" x2="12" y2="20" /></svg>
      <h1 className=' text-6xl text-white font-bold ' > {type}</h1>
        </div>
      </div>
        <div className='flex flex-row spa space-x-7' >
        <div className=' flex flex-col rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 h-[200px] w-[200px]  items-center justify-center'>
      <svg className="transform transition-all cursor-pointer   h-24 w-24 text-green-500 hover:scale-125"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />  <line x1="8" y1="21" x2="16" y2="21" />  <line x1="12" y1="17" x2="12" y2="21" /></svg>
      <h1 className=' text-6xl text-white font-bold ' > {res}</h1>
      </div>
      <div className=' flex flex-col rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 h-[200px] w-[200px]  items-center justify-center'>
      <svg className=" transform transition-all cursor-pointer  h-24 w-24 text-red-500 hover:scale-125 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6-6a6 6 0 0 1 -8 -8l3.5 3.5" /></svg>
      <h1 className=' text-6xl text-white font-bold ' > {marque}</h1>
      </div>
      </div>
      </div>
  
      <div className=' flex m mt-32'>
      <Reservation/>
     
      </div>
    </div>
  )
}
