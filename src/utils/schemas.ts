import * as z from 'zod'
import  {ZodSchema} from 'zod'

export const profileSchema = z.object({
  firstName: z.string().min(2, {message: "Le prénom doit contenir au minimum 2 caractères."}),
  lastName: z.string().min(2, {message: "Le nom doit contenir au minimum 2 caractères."}),
  username: z.string().min(2, {message: "Le pseudo doit contenir au minimum 2 caractères."})
})

export function validateWithZodSchema<T>(schema: ZodSchema, data: unknown){
  const result = schema.safeParse(data)

  if(!result.success){
    const errors = result.error.errors.map((error)=> error.message)
    throw new Error(errors.join(' - '))
  }

  return result.data
}

export const imageSchema = z.object({
  image: validateFile()
})

function validateFile(){
  const maxUploadSize = 1024 * 1024
  const acceptedFilesTypes = ["image/"]

  return z.instanceof(File)
    .refine((file)=> {return !file || file.size <= maxUploadSize}, "Le fichier doit être inférieur à 1 Mo.")
    .refine((file)=> {return !file || acceptedFilesTypes.some((type)=> file.type.startsWith(type))}, "Le fichier doit être de type image.")
}

export const propertySchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Le nom doit contenir au moins 2 caractères.',
    })
    .max(100, {
      message: 'Le nom doit contenir au plus 100 caractères.',
    }),
  tagline: z
    .string()
    .min(2, {
      message: 'Le sous-titre doit contenir au moins 2 caractères.',
    })
    .max(100, {
      message: 'Le sous-titre doit contenir au plus 100 caractères.',
    }),
  price: z.coerce.number().int().min(0, {
    message: 'Le prix doit être un nombre positif.',
  }),
  category: z.string(),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(' ').length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: 'La description doit contenir entre 10 et 1000 mots.',
    }
  ),
  country: z.string(),
  guests: z.coerce.number().int().min(0, {
    message: 'guest amount must be a positive number.',
  }),
  bedrooms: z.coerce.number().int().min(0, {
    message: 'bedrooms amount must be a positive number.',
  }),
  beds: z.coerce.number().int().min(0, {
    message: 'beds amount must be a positive number.',
  }),
  baths: z.coerce.number().int().min(0, {
    message: 'baths amount must be a positive number.',
  }),
  amenities: z.string(),
});