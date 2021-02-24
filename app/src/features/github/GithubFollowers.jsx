import React, { useState, useEffect } from 'react'

import style from './GithubFollowers.css'

function useGithubFollowers() {
    const [username, setUsername] = useState('')
    const [followers, setFollowers] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function fetchFollowersByUsername() {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/followers?page=${page}&per_page=10`)
                const followers = await response.json()

                console.log(followers)

                setFollowers(followers)
            } catch (error) {
                throw new Error(`Something went wrong with fetching the followers for ${username}`)
            }
        }

        if (username) {
            fetchFollowersByUsername()
        }
    }, [username, page])

    return {
        setSearchUsername: setUsername,
        page,
        setPage,
        followers,
    }
}

function FollowersList({ followers }) {
    return (
        <div className={style.follower_list}>
            {
                followers.map(follower => <div className={style.follower} key={follower.id}>
                    <img className={style.avatar} src={follower.avatar_url} />
                    <div>{follower.login}</div>
                </div>)
            }
        </div>
    )
}

export function GithubFollowers() {
    const [username, setUsername] = useState('')

    const {
        followers,
        setSearchUsername,
        page,
        setPage,
    } = useGithubFollowers()

    return (
        <>
            <div className={style.controls}>
                <input placeholder="Enter username" value={username} onChange={(event) => setUsername(event.target.value)} />
                <button onClick={() => setSearchUsername(username)}>Search Followers</button>
                <div className={style.pagination}>
                    <button disabled={page == 1} onClick={() => setPage(page => Math.max(page - 1, 1))}>Prev</button>
                    <button onClick={() => setPage(page => page + 1)}>Next</button>
                </div>
            </div>
            <FollowersList followers={followers} />
        </>
    )
}