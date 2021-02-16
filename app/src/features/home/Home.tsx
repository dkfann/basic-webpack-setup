import React from 'react'
import { useHackerNews } from 'shared/hooks/hackerNews'

import style from './Home.css'

function TopPosts({ posts }) {
    return (
        <>
            {
                posts.map(post => (
                    <div className={style.post_container} key={post.objectId}>
                        <div>{post.title}</div>
                        <div>{post.author}</div>
                    </div>
                ))
            }
        </>
    )
}

export function Home() {
    const posts = useHackerNews()

    console.log(posts)
    return (
        <div><TopPosts posts={posts} /></div>
    )
}