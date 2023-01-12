import classes from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';

const Content = () => {
    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU' />
            </div>
            <div>
                ava +descr
            </div>
            <MyPosts />
        </div>
    )
}

export default Content;
