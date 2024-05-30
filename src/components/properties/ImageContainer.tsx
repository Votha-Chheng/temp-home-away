import Image from 'next/image'
import React from 'react'

function ImageContainer({mainImage, name}: {mainImage: string, name: string}) {
  return (
    <section className='h-[300px] md-[500px] relative'>
      <Image src={mainImage} fill sizes='100vw' alt={name} className='object-cover rounded' priority/>
    </section>
  )
}

export default ImageContainer
