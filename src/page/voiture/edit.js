import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../utilities/bottun';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Edit_j() {
  const [shotype, setShowtype] = useState([])
  const [showmarque, setShowmarque] = useState([])

    const [edit, setedit] = useState([])
    const [show, setShow] = useState({});
    const navigate = useNavigate();   
    const {id} = useParams();


    useEffect(() => {
        ShowInput();
        ShowInputType();
        ShowInputMarque();
    
       }, [])

       async function ShowInput (){
        await axios.get(`http://localhost/Rest/voiture/showid.php/?id=${id}`).then(function(response){
                   console.log(response.data)
                    setShow(response.data)
                    });
       }
  
       async function ShowInputType (){
        await axios.get('http://localhost/Rest/modele/show.php').then(function(response){
              
                   setShowtype(response.data)
                    }).catch((error) => {
                      if(error.response) console.log(error.response.data.message);
                  });;
       }
       async function ShowInputMarque (){
        await axios.get('http://localhost/Rest/marque/show.php').then(function(response){
               
                   setShowmarque(response.data)
                    }).catch((error) => {
                      if(error.response) console.log(error.response.data.message);
                  });
       }

     
       const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setedit(values =>( {...values,[name]:value}))

     }
     const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('http://localhost/Rest/voiture/update.php/',edit).then(function(response){
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
    <div className=' flex  flex-col items-center justify-center m-10  mt-20'>
    <h1 className=' flex items-center justify-center  text-3xl uppercase tracking-wide font-bold '>ajouer une voiture</h1>
    
<div className=' flex flex-col   bg-white shadow rounded-lg m-10  '>

<form className=' flex flex-col items-center justify-center  space-y-7 m-10' onSubmit={handleSubmit} > 
<div className=' flex flex-row space-x-5'>
  <div className='flex flex-col space-y-3'>
  <labal  className=' font-bold uppercase tracking-wide text-xl' >type de voiture</labal>
  <select className="w-80 h-10 bg-white border-2  border-cyan-700 text-center" name='id_model' onChange={handleChange}>
    <option value="">{show.nom_model}</option>

                 {shotype.map(model => (
              <option value={model.id} key={model.id} >{model.nom_model}</option>
    
              ))
              } 
              </select>
  </div>

  <div className='flex flex-col space-y-3'>
  <labal  className=' font-bold uppercase tracking-wide text-xl' >marque</labal>
  <select className="w-80 h-10 bg-white border-2  border-cyan-700 text-center" name='id_marque' onChange={handleChange}>
    <option value={show.nom_marque}>{show.nom_marque} </option>

                 {showmarque.map(marque => (
              <option value={marque.id} key={marque.id} >{marque.nom_marque}</option>
    
              ))
              } 
              </select>
  </div>
  <div className='flex flex-col space-y-3 m'>
  <labal  className=' font-bold uppercase tracking-wide text-xl' >nom de la voiture</labal>
<input className='w-80 h-10 bg-white border-2  border-cyan-700 text-center' type="text" value={show.nom} name='nom'onChange={handleChange}         />
  </div>


</div>
<div className=' flex flex-row space-x-5 '>
  <div className='flex flex-col space-y-3'>
  <labal  className=' font-bold uppercase tracking-wide text-xl' >matricule</labal>
<input className='w-80 h-10 bg-white border-2  border-cyan-700 text-center' type="text" value={show.matricule} name='matricule'onChange={handleChange}         />
  </div>

  <div className='flex flex-col space-y-3'>
  <labal  className=' font-bold uppercase tracking-wide text-xl' >kelometrage</labal>
<input className='w-80 h-10 bg-white border-2  border-cyan-700 text-center' type="text" value={show.km} name='km'onChange={handleChange}         />
  </div>
  <div className='flex flex-col space-y-3'>
  <labal  className=' font-bold uppercase tracking-wide text-xl' >etat</labal>
  <select className="w-80 h-10 bg-white border-2  border-cyan-700 text-center" name='etat' onChange={handleChange}>
    <option value="">{show.etat} </option>     
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

</div>
  )
}
