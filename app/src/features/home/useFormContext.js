import { createContext, useContext } from 'react'

export const FormContext = createContext(null)

export const FormProvider = FormContext.Provider

export function useFormContext() {
    const context = useContext(FormContext)

    return context
}