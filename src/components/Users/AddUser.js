import {useState,useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddUser = (props) => {
    // const [userData,setUserData] = useState({
    //     userName: '',
    //     age: ''
    // })
    const [error, setError] = useState(false);

    const nameRef =useRef();
    const ageRef = useRef();


    const addUserHandler = (event) => {
        event.preventDefault();
        if(nameRef.current.value.trim().length === 0 || ageRef.current.value.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if(+ageRef.current.value < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }
        // setUserData({userName:'', age: ''});
        const user = {userName:nameRef.current.value,age:ageRef.current.value,id:Math.random.toString()}
        props.addUser(user);
        nameRef.current.value = '';
        ageRef.current.value = '';

    }

    // const onChangeUserName = (event) => {
    //     setUserData((prevData) => {
    //         return {...prevData,userName:event.target.value};
    //     });
    // }

    // const onChangeAge = (event) => {
    //     setUserData((prevData) => {
    //         return {...prevData,age:event.target.value};
    //     });
    // }

    const errorHandler = () => {
        setError(null);
    }

    return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" ref={nameRef} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={ageRef}/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
    );

}

export default AddUser;