import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from '../utilities/bottun';
import axios from 'axios';
import VoitureAdmine from './show';

export default function Add_V() {

    const [add, setAdd] = useState([])
    const [shotype, setShowtype] = useState([])
    const [showmarque, setShowmarque] = useState([])
    const navigate = useNavigate();   


    useEffect(() => {
   
      ShowInputType();
      ShowInputMarque();
     }, [])



     const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setAdd(values =>( {...values,[name]:value}))

     }
     const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('http://localhost/Rest/voiture/save.php/',add).then(function(response){
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
      


     
    async function ShowInputType (){
      await axios.get('http://localhost/Rest/modele/show.php').then(function(response){
                 console.log(response.data)
                 setShowtype(response.data)
                  }).catch((error) => {
                    if(error.response) console.log(error.response.data.message);
                });;
     }
     async function ShowInputMarque (){
      await axios.get('http://localhost/Rest/marque/show.php').then(function(response){
                 console.log(response.data)
                 setShowmarque(response.data)
                  }).catch((error) => {
                    if(error.response) console.log(error.response.data.message);
                });
     }




 

  return (
    <div className=' flex  flex-col items-center justify-center m-10  mt-20'>
    <h1 className=' flex items-center justify-center  text-3xl uppercase tracking-wide font-bold '>ajouer une voiture</h1>
    
<div className=' flex flex-col   bg-white shadow rounded-lg m-10  '>

<form className=' flex flex-col items-center justify-center  space-y-7 m-10' onSubmit={handleSubmit} > 
<div className=' flex flex-row space-x-5'>
  <div className='flex flex-col space-y-3'>
  <labal  className=' font-bold uppercase tracking-wide text-xl' >type de voiture</labal>
  <select className="w-80 h-10 bg-white border-2  border-cyan-700 text-center" name='id_model' onChange={handleChange}>
    <option value="">choisir une type </option>

                 {shotype.map(model => (
              <option value={model.id} key={model.id} >{model.nom_model}</option>
    
              ))
              } 
              </select>
  </div>

  <div className='flex flex-col space-y-3'>
  <labal  className=' font-bold uppercase tracking-wide text-xl' >marque</labal>
  <select className="w-80 h-10 bg-white border-2  border-cyan-700 text-center" name='id_marque' onChange={handleChange}>
    <option value="">choisir une marque </option>

                 {showmarque.map(marque => (
              <option value={marque.id} key={marque.id} >{marque.nom_marque}</option>
    
              ))
              } 
              </select>
  </div>
  <div className='flex flex-col space-y-3 m'>
  <labal  className=' font-bold uppercase tracking-wide text-xl' >nom de la voiture</labal>
<input className='w-80 h-10 bg-white border-2  border-cyan-700 text-center' type="text" name='nom'onChange={handleChange}         />
  </div>


</div>
<div className=' flex flex-row space-x-5 '>
  <div className='flex flex-col space-y-3'>
  <labal  className=' font-bold uppercase tracking-wide text-xl' >matricule</labal>
<input className='w-80 h-10 bg-white border-2  border-cyan-700 text-center' type="text" name='matricule'onChange={handleChange}         />
  </div>

  <div className='flex flex-col space-y-3'>
  <labal  className=' font-bold uppercase tracking-wide text-xl' >kelometrage</labal>
<input className='w-80 h-10 bg-white border-2  border-cyan-700 text-center' type="text" name='km'onChange={handleChange}         />
  </div>
  <div className='flex flex-col space-y-3'>
  <labal  className=' font-bold uppercase tracking-wide text-xl' >etat</labal>
  <select className="w-80 h-10 bg-white border-2  border-cyan-700 text-center" name='etat' onChange={handleChange}>
    <option value="">choisir une marque </option>     
    <option value="nouv">neuv </option>   
    <option value="bon">bon </option>      
    </select>
  </div>


</div>
 <div className='justify-center items-center'>
  <Button>ENRGISTR</Button>
 </div>

</form>
</div>
<VoitureAdmine/>
</div>
  
  )
}
