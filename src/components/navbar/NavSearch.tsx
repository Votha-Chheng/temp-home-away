'use client'

import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

const NavSearch = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [search, setSearch] = useState<string>(searchParams.get("search")?.toString() || "")

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams)

    if(value){
      params.set("search", value)
    } else {
      params.delete('search')
    }

    replace(`${pathname}?${params.toString()}`)
  })


  useEffect(()=> {
    if(!searchParams.get("search")){
      setSearch("")
    }
  }, [searchParams.get('search')])

  return (
    <Input 
      type='text' 
      placeholder='Trouver un logement...' 
      className='max-w-xs dark:bg-muted' 
      value={search} 
      onChange={(e)=>{
        setSearch(e.target.value)
        handleSearch(e.target.value)
      }} />
  )
}

export default NavSearch