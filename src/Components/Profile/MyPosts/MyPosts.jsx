import classes from './MyPosts.module.css';
import Post from './Post/Post';

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
                <Post message='This is text for post #1' likes='15' />
                <Post message='Second post' likes='7' />
            </div>
        </div>
    )
}

export default MyPosts;
