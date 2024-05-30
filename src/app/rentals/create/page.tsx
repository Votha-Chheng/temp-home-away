import AmenitiesInput from '@/components/form/AmenitiesInput'
import SubmitButton from '@/components/form/Buttons'
import CategoriesInput from '@/components/form/CategoriesInput'
import CounterInput from '@/components/form/CounterInput'
import CountriesInput from '@/components/form/CountriesInput'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import ImageInput from '@/components/form/ImageInput'
import PriceInput from '@/components/form/PriceInput'
import TextAreaInput from '@/components/form/TextAreaInput'
import { createPropertyAction } from '@/utils/actions'
import React from 'react'

function CreatePropertyPage() {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8'>
        Créer une location
      </h1>
      <div className='corder p-8 rounded'>
        <h3 className='text-lg mb-4 font-medium'>
          Informations générales
        </h3>
        <FormContainer action={createPropertyAction}>
          <div className='grid md:grid-cols-2 gap-8 mb-4'>
            <FormInput name="name" type="text" label="Nom du bien (20 caractères max.)" defaultValue='Cabane en Lettonie'/>
            <FormInput name="tagline" type="text" label="Sous-titre (30 caractères max.)" defaultValue='Là où vos rêves vous attendent'/>
            <PriceInput/>
            <CategoriesInput/>
            <TextAreaInput name='description' labelText='Description (entre 10 et 10000 mots).'/>
          </div>
          <div className='grid sm:grid-cols-2 gap-8 mt-4'>
            <CountriesInput/>
            <ImageInput/>
          </div>
          <h3 className='text-lg mt-8 mb-4 font-medium'>
            Détails de l&apos;accueil
          </h3>
          <CounterInput detail='personnes' name="guests" />
          <CounterInput detail='chambres' name="bedrooms" />
          <CounterInput detail='lits' name="beds" />
          <CounterInput detail='salles de bain' name="baths" />
          <h3 className='text-lg mt-10 mb-6 font-medium capitalize'>
            équipements
          </h3>
          <AmenitiesInput/>
          <SubmitButton text='Créer un bien' className='mt-12'/>
        </FormContainer>
      </div>
    </section>
  )
}

export default CreatePropertyPage