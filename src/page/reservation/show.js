import axios from 'axios'
import React from 'react'
import { useState ,useEffect } from 'react'
import Swal from 'sweetalert2'

export default function Reservation() {
  const [show, setShow] = useState([])



   useEffect(() => {
    ShowInput();
   }, [])
   


             async function ShowInput (){
              await axios.get('http://localhost/Rest/reservation/show.php',).then(function(response){  
                         console.log(response.data)
                          setShow(response.data)
                          }).catch((error) => {
                            if(error.response)
                             Swal.fire({
                   
                              icon: 'error',
                              title: error.response.data.message,
                              showConfirmButton: false,
                              timer: 1500
                            }) ;
                        });;;
             }

  
             const deleteInput = (id) => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                    
                      axios.delete(`http://localhost/Rest/reservation//destroy.php?id=${id}`).then(function(response){
                        response.data.message,
                    
                 
        
                    ShowInput();
                });
                Swal.fire(
                    'Deleted!',
                    'deleted',
                    'success'
                  )
                }
            
            })
            }



  return (
    
    <div className="">
        
     
               <div className='p-5 h-screen  ' >
                <h1 className='text-3xl mb-2 uppercase tracking-wide font-semibold'   > lise des type </h1>
                <div className='rounded-lg shadow  hidden md:block bg-indigo-100 ' >
                <table className='w-full'  >
                        <thead className='bg-gradient-to-r from-cyan-500 to-blue-500 '>
                        <tr>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left'  > voiture</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left'  >matricule</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left'  >nom</th>
                        <th className='  p-3 text-sm font-semibold tracking-wide text-left'  >prenom</th>
                        <th className='  p-3 text-sm font-semibold tracking-wide text-left'  >adresse</th>
                        <th className='  w-64 p-3 text-sm font-semibold tracking-wide text-left'  >adresse mail</th>
                        <th className='  p-3 text-sm font-semibold tracking-wide text-left'  >telephone</th>
                        <th className='  p-3 text-sm font-semibold tracking-wide text-left'  >date</th>
                        <th className='  p-3 text-sm font-semibold tracking-wide text-left'  >finaliser</th>
                        </tr>
                        </thead>
                        <tbody>
                          
                          {show.map(( res, i) =>
                                 <tr key={i}>
                                  <td className='p-3 text-sm text-black'> {res.nomv}</td>
                                  <td className='p-3 text-sm text-black'> {res.matricule}</td>
                                  <td className='p-3 text-sm text-black'> {res.nom}</td>
                                  <td className='p-3 text-sm text-black'> {res.prenom}</td>
                                  <td className='p-3 text-sm text-black'> {res.adresse}</td>
                                  <td className='p-3 text-sm text-black'> {res.mail}</td>
                                  <td className='p-3 text-sm text-black'> {res.phone}</td>
                                  <td className='p-3 text-sm text-black'> {res.created_at}</td>
                            
                                  <td className='p-3 text-sm text-black'>
                                      <button onClick={() => deleteInput(res.id)} className="p-1,5 text-sm font-medium uppercase tracking-wider
                                         text-red-500 ">finaliser</button>
                                </td>
                                  </tr>
    )}
                         

                        </tbody>

                    </table>


                </div>
               
                   
               </div>
   
    </div>
  )
}
