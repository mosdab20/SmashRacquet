import  {useState} from 'react';

const Login = () => {
    const [count, ] = useState(0)
    return (
        <div>
            <h1>Login</h1>
            <div>{count}</div>
        </div>
    );
};

export default Login;