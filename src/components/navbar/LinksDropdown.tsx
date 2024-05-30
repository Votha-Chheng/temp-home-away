import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { LuAlignLeft } from 'react-icons/lu'
import UserIcon from './UserIcon'
import { links } from '@/utils/links'
import Link from 'next/link'
import { SignedOut } from '@clerk/nextjs'
import { SignedIn, SignInButton, SignUpButton } from '@clerk/nextjs'
import SignOutLink from './SignOutLink'

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='gap-4 max-w-[100px]'>
          <LuAlignLeft className='w-6 h-6'/>
          <UserIcon/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className='w-52'
        align='start'
        sideOffset={10}
      >
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button className='w-full text-left'>Connexion</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator/>
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button className='w-full text-left'>S&apos;inscrire</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {
            links.map((link)=> (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href} className='capitalize w-full'>
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))
          }
          <DropdownMenuSeparator/>
          <DropdownMenuItem>
            <SignOutLink/>
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  ) 
}

export default LinksDropdown