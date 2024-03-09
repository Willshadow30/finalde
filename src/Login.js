import React,{useState} from 'react';

const Login = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit =(event) => {
        event.preventDefault();
        // login logic goes below
        console.log('Login attempt with', username,password);
    };

return(
    <div style={{textAlign:'center', marginTop: '20px'}}>
        
        <form onsubmit={handleSubmit}>
            <div>
                <label>
                    Username:
                    <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                    type="password"
                    value={password}
                    onchange={(e)=> setPassword(e.target.value)}
                    />
                </label>
                </div>
                <button type="submit">Login</button>
        </form>
    </div>
    );
};
export default Login;