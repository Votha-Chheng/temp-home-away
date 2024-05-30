"use client"

import React, { useState } from 'react'
import Title from './Title'
import { Button } from '../ui/button'

function Description({description}:{description: string}) {
  const [isFullDescriptionShown, setIsFullDescriptionShown] = useState<boolean>(false)

  const words = description.split(' ')
  const isLongDescription = words.length > 100

  const toggleDescription = ()=> {
    setIsFullDescriptionShown(!isFullDescriptionShown)
  }

  const displayedDescription = isLongDescription && !isFullDescriptionShown ? words.splice(0, 100).join(' ') + "..." : description

  return (
    <article className='mt-4'>
      <Title text="Description" />
      <p className='text-muted-foreground font-light leading-loose'>
        {displayedDescription}
      </p>
      {
        isLongDescription && 
        <Button variant="link" className='pl-0' onClick={toggleDescription}>
          {isFullDescriptionShown ? "Montrer la suite":"Cacher une partie"}
        </Button>
      }
    </article>
  )
}

export default Description