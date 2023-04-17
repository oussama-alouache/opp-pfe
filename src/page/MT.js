import React from 'react'

import Add_M from './marque/add'
import Add_T from './type/add'
import Type from './type/show'
import Marque from './marque/show'

export default function MT() {
  return (
  
    <div className='flex flex-col justify-center items-center mt-20' >
      <div className=' flex flex-row'>
      <Add_M/>
      <Add_T/>
      </div>
      <div className=' flex flex-row'>
      <Type/>
      <Marque/>
      </div>
  
    </div>
  )
}
