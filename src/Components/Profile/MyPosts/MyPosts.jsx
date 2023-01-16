import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {
    let postsElement = props.posts.map((p) => <Post message={p.message} likes={p.likes} />);

    let newPostElement = React.createRef();
    let addPost = () => {
        props.addNewPost();
    };

    let onPostCahnge = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} placeholder='Text here...' value={props.newPostText} onChange={onPostCahnge} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.myPosts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;
