import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                new post
            </div>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts;
