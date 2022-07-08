import classes from './UsersList.module.css';
import Card from '../UI/Card';


const UsersList = (props) => {

    return (
        <Card className={classes.users}>
        <ul className={classes.users}>
        {props.userdata.map(userData => 
        <li key={userData.id}>{userData.userName} ({userData.age} years old)</li>
        )}
    </ul>
    </Card>
    )
}

export default UsersList;