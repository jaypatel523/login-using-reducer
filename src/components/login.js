import React, { useReducer } from 'react'
import { loginReducer } from './loginReducer'


const rightUsername = "jaypatel"
const rightPassword = "jaypatel"



const Login = () => {

    const initialState = {
        username: '',
        password: '',
        isLogged: false,
        isValid: false
    };


    const [state, dispatch] = useReducer(loginReducer, initialState)


    const handleSubmit = (e) => {
        e.preventDefault();



        if (state.username === rightUsername && state.password === rightPassword) {
            dispatch({ type: 'login' })
        }
        else {
            dispatch({ type: 'failed' })
        }


    }

    return (
        <section>
            <div className='w-max border-2 border-solid border-red-700 p-12 mx-auto my-[5rem]'>
                <div className='p-2 flex-col justify-center items-center'>
                    {state.isValid && <div className='text-center my-3 text-red-500'> * Incorrect username or password </div>}
                    {state.isLogged || <div className='text-center my-3'> Please login here </div>}
                    {state.isLogged ? (
                        <div>
                            <h1> You are logged-in</h1>
                            <button
                                className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3'
                                onClick={() => { dispatch({ type: 'logout' }) }}>
                                Log out
                            </button>
                        </div>
                    ) : (
                        <form
                            action=""
                            className='flex-col w-[500px] justify-center items-center'
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                placeholder='Username'
                                className='border-[1.5px] border-solid border-blue-500 w-[100%] my-3 p-2 outline-none'
                                value={state.username}
                                onChange={(e) => { dispatch({ type: 'usernameInput', payload: e.currentTarget.value }) }}
                            />
                            <input
                                type="password"
                                placeholder='Password'
                                className='border-[1.5px] border-solid border-blue-500 w-[100%] my-3 p-2 outline-none'
                                value={state.password}
                                onChange={(e) => { dispatch({ type: 'passwordInput', payload: e.currentTarget.value }) }}
                            />
                            <div className='w-[100%] flex justify-center'>
                                <button
                                    className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3'>
                                    Login
                                </button>
                            </div>
                        </form>
                    )
                    }
                </div>
            </div>
        </section >
    )
}



export default Login