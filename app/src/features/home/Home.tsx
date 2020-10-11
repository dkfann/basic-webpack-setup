import React from 'react'
import { YelpService } from 'shared/services/YelpService'

export function Home() {
    const service = YelpService()
    return (
        <div>Home</div>
    )
}