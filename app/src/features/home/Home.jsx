import React from 'react'
import { FormProvider } from './useFormContext'

export function Home() {
    return (
        <FormProvider>
        <div>Homepage</div>
        </FormProvider>
    )
}