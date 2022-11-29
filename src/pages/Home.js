import Feed from '../componentes/Feed'
import PostForm from '../componentes/PostForm'

import { useState } from 'react'

export default function Home() {
    const [posts, setPosts] = useState([])

    const handleSubmit = ({ history, userName }) => {
        setPosts([
            {
                id: Math.random(),
                content: history,
                userName,
                publishedAt: new Date() 
            },...posts
        ])
    }

    return(
        <>
            <PostForm onSubmit={handleSubmit}/>

            <main>
                <Feed 
                    posts={posts}
                    title='Seu feed'
                    subtitle='Acompanhe o que seus amigos estão postando'
                />
            </main>
        </>
    )
}