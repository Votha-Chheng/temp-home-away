import { formatQuantity } from '@/utils/format';
import React from 'react'

type PropertyDetailsProps = {
  details: {
    bedrooms: number;
    baths: number;
    guests: number;
    beds: number;
  };
};

function PropertyDetails({details: {bedrooms, baths, beds, guests}}: PropertyDetailsProps) {

  return (
    <p className='text-md font-light'>
      <span>{formatQuantity(bedrooms, "chambre")} &middot; </span>
      <span>{formatQuantity(baths, "salle de bain", "salles de bain")} &middot; </span>
      <span>{formatQuantity(beds, "lit")} &middot; </span>
      <span>{formatQuantity(guests, "personne")}</span>
    </p>
  )
}

export default PropertyDetails
