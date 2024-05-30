import { fetchProperties } from '@/utils/actions'
import { PropertyCardProps } from '@/utils/types'
import React from 'react'
import EmptyList from './EmptyList'
import PropertiesList from './PropertiesList'

async function PropertiesContainer({category, search}:{category?: string, search?: string}) {
  const properties: PropertyCardProps[] = await fetchProperties({category, search})

  if(properties.length === 0){
    return <EmptyList heading='Aucun résultat trouvé...' message='Essayer de changer les termes de la recherche.' btnText='Effacer la recherche'/>

  }

  return (
    <PropertiesList properties={properties} >
      
    </PropertiesList>
  )
}

export default PropertiesContainer
