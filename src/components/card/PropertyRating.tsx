import React from 'react'
import { FaStar } from 'react-icons/fa'

function PropertyRating({propertyId, inPage}:{propertyId: string, inPage: boolean}) {
  const rating = 4.7
  const count = 100

  const className = `flex gap-1 items-center ${inPage ? 'text-md' : 'text-xs'}`
  const countValue = `(${count}) ${inPage ? "avis":""}`

  return (
    <span className={className}>
      <FaStar className="w-3 h-3"/>
      {rating} {countValue}
    </span>
  )
}

export default PropertyRating