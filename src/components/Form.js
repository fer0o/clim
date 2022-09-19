import React, { useState } from 'react'

export const Form = () => {
  // creación de hook
  const [city, setCity] = useState('')
  //   funcion submit
  const onSubmit = e => {
    e.preventDefault()
    console.log({ city })
    if (city === '' || !city) {
      return
    }
  }
  return (
    <div>
      <div>
        <form onSubmit={onSubmit} className='m-8'>
          <div className='flex justify-center space-x-2'>
            <input
              className='w-96 p-2 rounded-sm block text-start text-xl'
              type='text'
              placeholder='Ciudad'
              onChange={e => setCity(e.target.value)}
            />
            <button
              type='submit'
              className='  border-2 border-white bg-black text-lg text-white p-4 w-32 rounded-md hover:bg-white hover:text-black hover:border-4 hover:border-black '
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
