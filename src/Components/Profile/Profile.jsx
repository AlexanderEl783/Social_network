import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} addNewPost={props.addNewPost} newPostText={props.profilePage.newPostText} />
        </div>
    )
}

export default Profile;
