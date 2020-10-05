import getCategories from 'app/categories/queries/getCategories';
import {useQuery, useSession, Link, useRouter} from 'blitz'
import deletePost from '../mutations/deletePost';
import getPosts from '../queries/getPosts'
import styles from './MyPostList.module.scss'


function MyPostList({ cat }) {

    const user = useSession().userId
    const [{posts}] = useQuery(getPosts, {})

    const router = useRouter()
    
    let chain = posts.filter(post => post.userId === user)
    const [{categories}] = useQuery(getCategories, {})

    let lists = chain

    cat > 0 ? lists = lists.filter(list => list.categoryId === cat) : lists = chain

    return (
        <div className={styles.blog_container}>

            { lists.map((post) => (
                <div key={post.id} className={styles.blogCard}>
                    <div className={styles.cardHeader}>
                        <img src={post.imageUrl} alt="image_Sample" className={styles.blogImg} />
                        <div className={styles.meta}>
                            <span className={styles.badge1}>
                              Category: {categories.filter(category => category.id===post.categoryId).map(category => category.name)}
                            </span>
                            <span className={styles.badge2}>{post.createdAt.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className={styles.card_content}>
                        <h2 className={styles.blogHeader}>{post.title}</h2>
                        <p className={styles.blogPara}>{post.text}</p>
                    </div>
                    <div className="action">
                        <Link href="/posts/[postId]/edit" as={`/posts/${post.id}/edit`}>
                            <a className="edit">Edit</a>
                        </Link>

                        <button
                            className="delete"
                            type="button"
                            onClick={async () => {
                                if (window.confirm("This will be deleted")) {
                                    await deletePost({ where: { id: post.id } })
                                    window.location.reload()
                                }
                            }}>
                            Delete
                        </button>

                    </div>
                </div>))}
        </div>
    )
}

export default MyPostList
