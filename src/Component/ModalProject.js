import React from 'react'

export default function ModalProject({isVisible, data}) {
    if (isVisible === false) return null;
    console.log(data);
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-10'>

    </div>
  )
}
