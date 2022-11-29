import Feed from "../componentes/Feed"

export default function MostViewed() {
    const posts = [
        {
            id: Math.random(),
            content: 'oi',
            userName: 'pedro',
            publishedAt: new Date()
        }
]

    return (
        <main className='most-viewed'>
            <Feed 
                posts={posts}
                title='Mais vistos'
                subtitle='acompanhe os posts mais vistos'
            />
        </main>
    )
}
