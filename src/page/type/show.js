import axios from 'axios'
import React from 'react'
import { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Type() {
  const [show, setShow] = useState([])



   useEffect(() => {
    ShowInput();
   }, [])
   


             async function ShowInput (){
              await axios.get('http://localhost/Rest/modele/show.php',).then(function(response){  
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
                  title: 'Êtes vous sûrs? ',
                  text: "vous pouvez plus annuler cette action!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'oui, supprimer!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                    
                axios.delete(`http://localhost/Rest/modele//destroy.php?id=${id}`).then(function(response){
                    response.data.message,
                    
                    console.log(deleteInput);
        
                    ShowInput();
                    Swal.fire(
                      'Deleted!',
                      response.data.message,
                      'success'
                    )
                });
                Swal.fire(
                    'Deleted!',
                    response.data.message,
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
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left'  >tupe de voiture</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left'  >date de creation</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left'  >date du dernier changemnt</th>
                        <th className='  p-3 text-sm font-semibold tracking-wide text-left'  >supprimer</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'  >editer</th>
                        </tr>
                        </thead>
                        <tbody>
                          
                          {show.map(( type, i) =>
                                 <tr key={i}>
                                  <td className='p-3 text-sm text-black'> {type.nom_model}</td>
                                  <td className='p-3 text-sm text-black'> {type.created_at}</td>
                                  <td className='p-3 text-sm text-black'> {type.updatted_at}</td>

                                  <td className='p-3 text-sm text-black'>
                                      <button onClick={() => deleteInput(type.id)} className="p-1,5 text-sm font-medium uppercase tracking-wider
                                         text-red-500 ">supprimer</button>
                                </td>
                                <td className='p-3 text-sm text-black'>
                                    
                                        <Link to={`/edittype/${type.id}/`} className="p-1,5 text-sm font-medium uppercase tracking-wider
                                         text-green-500 
                                        
                                        
                                        " style={{marginRight: "10px"}}>Edit</Link>
                                </td>

                                  </tr>
    )}
                         

                        </tbody>

                    </table>


                </div>
                <div className='grid grid-cols-1 gap-4 md:hidden'  >
                {show.map(( type, i) =>
                    <div key={i}>
                        <div className=' bg-white shadow rounded-lg p-4 space-y-3'  >
                          
                            <div  className=' flex  items-center space-x-5 text-sm'>
                            <div className='w-20'>{type.nom_model}</div>
                            <div className='w-20'>{type.created_at}</div>
                            <div className='w-20'>{type.updatted_at}</div>
                            
                            
                            <button onClick={() => deleteUser(type.id)} className="p-1,5 text-sm font-medium uppercase tracking-wider
                                         text-red-500 ">Delete</button>
                            <div>
                                        <Link to={`/editpizza/${type.id}/`} className="p-1,5 text-sm font-medium uppercase tracking-wider
                                         text-green-500 
                                        " style={{marginRight: "10px"}}>Edit</Link></div>
                            </div>
                    
                         

                        </div>
                    </div>
                    )}

                </div>

                   
               </div>
   
    </div>
  )
}
