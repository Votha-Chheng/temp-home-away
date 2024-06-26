'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import { SignInButton } from '@clerk/nextjs'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

type BtnSize = "default"|"lg"|"sm"

type SubmitButtonProps = {
  className?: string
  text?:string
  size?: BtnSize
}

export default function SubmitButton({className="", text="valider", size="lg"}: SubmitButtonProps) {
  const {pending} = useFormStatus()

  return (
    <Button type='submit' disabled={pending} className={`uppercase ${className}`} size={size} >
      {
        pending
        ?
        <>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
        </>
        :
        text
      }
    </Button>
  )
}

export function CardSignInButton (){
  return (
    <SignInButton mode="modal">
      <Button type="button" size='icon' variant='outline' className='p-2 cursor-pointer' asChild>
        <FaRegHeart/>
      </Button>
    </SignInButton>
  )
}


export function CardSubmitButton ({isFavorite}:{isFavorite: boolean}){
  const { pending } = useFormStatus()

  return (
    <Button type="submit" size='icon' variant="outline" className='p-2 cursor-pointer'>
      {
        pending
        ?
        <ReloadIcon className='animate-spin'/>
        :
        isFavorite
        ?
        <FaHeart/>
        :
        <FaRegHeart/>
      }
    </Button>
  )
}
