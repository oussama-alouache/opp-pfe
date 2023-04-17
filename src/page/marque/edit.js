import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from '../utilities/bottun';

export default function Edit_M() {
  const [show, setShow] = useState([])

    const [edit, setedit] = useState([])
    const navigate = useNavigate();   
    const {id} = useParams();


    useEffect(() => {
        ShowInput();
       }, [])
       
                 async function ShowInput (){
                  await axios.get(`http://localhost/Rest/marque/showid.php/?id=${id}`).then(function(response){
                    console.log(response.data)
                    setShow(response.data)
                              });
                 }
    

     const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setedit(values =>( {...values,[name]:value}))

     }
     const handleSubmit = (event)=>{
        event.preventDefault();
       
        axios.post('http://localhost/Rest/marque/update.php/',edit).then(function(response){
              Swal.fire({
 
                 icon: 'success',
                 title: response.data.message,
                 showConfirmButton: false,
                 timer: 1500
    })
              navigate('/')
       
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

  return (
    <div className=' flex  flex-col items-center justify-center m-10'>
    <h1 className=' flex items-center justify-center  text-3xl uppercase tracking-wide font-bold '>ajouer une marque</h1>
    
<div className=' flex flex-col  w-[420px] h-[500] bg-white shadow rounded-lg m-10  '>

<form className=' flex flex-col items-center justify-center  space-y-7 m-10' onSubmit={handleSubmit} > 
 <labal  className=' font-bold uppercase tracking-wide text-xl' >nom de la marque</labal>
 <input className='w-80 h-10 bg-white border-2  border-cyan-700 text-center' type="text" value={show.nom_marque} name='nom_marque'onChange={handleChange}         />

 <div className='justify-center items-center'>
  <Button>ENRGISTR</Button>
 </div>

</form>
</div>
</div>
  )
}
