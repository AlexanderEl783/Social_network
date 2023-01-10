import classes from './Content.module.css';

const Content = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU' />
            </div>
            <div>
                ava +descr
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div>
                    <div className={`${classes.item} ${classes.active}`}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;
