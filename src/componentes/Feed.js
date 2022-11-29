import clockIcon from '../images/clock.svg'
import emptyFolderIcon from '../images/empty-folder.svg'
import userIcon from '../images/user.svg';

import '../styles/Feed.css'

export default function Feed(props) {
    if(props.posts.length === 0) {
        return(
            <div className='feed-status'>
                <img src={emptyFolderIcon} alt='vazio'></img>
                <h1>Não encontramos nada</h1>
                <h2>Seus amigos ainda não postaram nada</h2>
            </div>
        )
    }

    return(
        <>
            <header>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </header>

            <section className='feed'>
                {props.posts.map((post) => (
                    <article key={post.id}>
                        <p>{post.content}</p>

                        <footer>
                            <div className='user-details'>
                                <img src={userIcon} alt='user' />
                                <strong>{post.userName}</strong>
                            </div>
                            <div>
                                <img src={clockIcon} alt='clock' />
                                <span> Publicado em {post.publishedAt.toLocaleDateString('pt-br')}</span>
                            </div>
                        </footer>
                    </article>
                ))}
            </section>
        </>
    )
}