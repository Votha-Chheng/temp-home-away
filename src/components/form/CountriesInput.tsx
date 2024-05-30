import React from 'react'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { formattedCountries } from '@/utils/countries'

function CountriesInput({defaultValue}: {defaultValue?: string}) {
  const name = 'country'

  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Pays
      </Label>
      <Select defaultValue={defaultValue || formattedCountries[0].code} name={name} required>
        <SelectTrigger id={name} >
          <SelectValue/>
        </SelectTrigger>
        <SelectContent>
          {
            formattedCountries.map((item)=> (
              <SelectItem key={item.code} value={item.code}>
                <span className='flex items-center gap-2'>
                  {item.flag} {item.name}
                </span>
              </SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </div>
  )
}

export default CountriesInput