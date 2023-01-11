import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                new post
            </div>
            <Post message='This is text for post #1' likes='15' />
            <Post message='Second post' likes='7' />
        </div>
    )
}

export default MyPosts;
