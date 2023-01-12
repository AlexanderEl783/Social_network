import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div>
            <div className={`${classes.item} ${classes.active}`}>
                <img src='https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366__340.png' />
                {props.message}
            </div>
            <span>{props.likes} likes</span>
        </div>
    )
}
export default Post;
