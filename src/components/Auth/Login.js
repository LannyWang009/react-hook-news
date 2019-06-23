import React from "react";
import useFormValidation from "./useFormValidation";

const INITIAL_STATE = {
  // this is an object so that we can add different state later
  name: '',
  email: '',
  password: ''
}

function Login(props) {
  const {handleChange, handleSubmit, values} = useFormValidation(INITIAL_STATE)

  const [login, setLogin] = React.useState(true)

  return (
    <div>
      <h2 className='mv3'>
       {login ? "Login" : "Create an account"}
      </h2>
      <form onSubmit={handleSubmit}
      className='flex flex-column'>
        {!login && <input 
        type='text' 
        onChange={handleChange}
        name="name"
        value = {values.name}
        placeholder='Your Name' 
        autoComplete="off"/>}
        <input 
        type="email" 
        onChange={handleChange}
        value={values.email}
        name="email"
        placeholder="Your Email" 
        autoComplete='off'/>
        <input 
        type='password' 
        value={values.password}
        onChange={handleChange}
        name="password"
        placeholder="Choose a secure password" />
        <div className='flex mt3'>
          <button type='submit' className='button pointer mr2'>
            Submit!
          </button>
          <button type='button' className='pointer button' 
          onClick={()=> setLogin(prevLogin => !prevLogin)}>
            {login? "Need to create an account? ": "Already have an account?" }
            
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;
