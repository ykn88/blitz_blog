import { useQuery, Link } from 'blitz'
import getPosts from '../queries/getPosts'
import getCategories from '../../categories/queries/getCategories'
import styles from './PostList.module.scss'

function PostList({ cat }) {

    const [{posts}] = useQuery(getPosts, {orderBy: {createdAt: "desc"}})
    const [{categories}] = useQuery(getCategories, {})
    let lists = posts
    
    cat > 0 ? lists = lists.filter(list => list.categoryId === cat) : lists = posts
    
    return (
        <div className={styles.blog_container}>
            {
                lists.map((post) => (
                    <Link  key={post.id}  href="/posts/[postId]" as={`/posts/${post.id}`}>
                        <a>
                            <div className={styles.blogCard}>
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
                            </div>
                        </a>
                    </Link>
                ))}
        </div>
    )
}

export default PostList
