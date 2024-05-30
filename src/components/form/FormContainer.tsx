'use client'

import { actionFunction } from "@/utils/types"
import { ReactNode, useEffect } from "react"
import { useFormState } from "react-dom"
import { useToast } from "../ui/use-toast"


const initialState = {
  message: ""
}

export default function FormContainer({ action, children} : {action: actionFunction, children: ReactNode}) {
  const [state, formAction] = useFormState(action, initialState)
  const {toast} = useToast()

  useEffect(()=> {
    if(state.message){
      toast({
        description: state.message
      })
    }
  }, [state])

  return (
    <form action={formAction}>
      {children}
    </form>
  )
}