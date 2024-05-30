import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function EmptyList({heading="Pas de correspondance.", message="Explorez nos autres biens.", btnText = "Retour à l'accueil"}: {heading?: string, message?:string, btnText?:string}) {
  return (
    <div className='mt-4'>
      <h2 className='txt-xl font-bold'>{heading}</h2>
      <p className='text-lg'>
        {message}
      </p>
      <Button asChild className='mt-4 capitalize' size="lg">
        <Link href="/">
          {btnText}
        </Link>
      </Button>
    </div>
  )
}

export default EmptyList
