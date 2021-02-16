import { useState, useEffect } from 'react'

export function useHackerNews() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchFrontPage() {
            try {
                const response = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
                const data = await response.json()

                setPosts(data.hits)

                return data
            } catch (error) {
                console.warn('Something went wrong: ', error)
            }
        }

        fetchFrontPage()
    }, [])

    return posts
}