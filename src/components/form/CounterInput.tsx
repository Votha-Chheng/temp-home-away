'use client'

import React, { useState } from 'react'
import { Card, CardHeader } from '../ui/card'
import { Button } from '../ui/button'
import { LuMinus, LuPlus } from 'react-icons/lu'

function CounterInput({detail, name, defaultValue}:{detail: string, name:string, defaultValue?: number}) {
  const [count, setCount] = useState<number>(defaultValue || 0)

  const increaseCount = ()=> {
    setCount(prev=> prev+1)
  }

  const decreaseCount = ()=> {
    setCount(prev=> prev>0 ? prev-1 : prev)
  }

  console.log(count)

  return (
    <Card className='mb-4'>
      <input type="hidden" name={name} value={count}/>
      <CardHeader className='flex flex-col gap-y-5'>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='flex flex-col'>
            <h2 className='font-medium capitalize'>
              {detail}
            </h2>
            <p className='text-muted-foreground text-sm'>
              Spécifiez le nombre de {detail}
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <Button variant='outline' size='icon' type="button" onClick={decreaseCount}>
              <LuMinus className='w-5 h-5 text-primary'/>
            </Button>
            <span className='text-xl font-bold w-5 text-center'>
              {count}
            </span>
            <Button variant='outline' size='icon' type="button" onClick={increaseCount}>
              <LuPlus className='w-5 h-5 text-primary'/>
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card >
  )
}

export default CounterInput