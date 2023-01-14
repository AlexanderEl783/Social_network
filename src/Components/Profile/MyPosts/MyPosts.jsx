import classes from './MyPosts.module.css';
import Post from './Post/Post';

const postsData = [
    { id: 1, message: 'This is text for post #1', likes: '15' },
    { id: 2, message: 'Second post', likes: '7' },
    { id: 3, message: 'post number three', likes: '9' },
]

let postsElement = postsData.map((post) => <Post message={post.message} likes={post.likes} />)

const MyPosts = () => {
    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.myPosts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;
