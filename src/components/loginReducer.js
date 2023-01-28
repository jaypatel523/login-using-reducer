
export const loginReducer = (state, action) => {

    switch (action.type) {
        case 'usernameInput': {
            return (
                { ...state, username: action.payload }
            )
        }
        case 'passwordInput': {
            return (
                { ...state, password: action.payload }
            )
        }
        case 'login': {
            return (
                { ...state, isLogged: true, isValid: false, username: '', password: '' }
            )
        }
        case 'logout': {
            return (
                { ...state, isLogged: false, username: '', password: '' }
            )
        }
        case 'failed': {
            return (
                { ...state, isValid: true, username: '', password: '' }
            )
        }

    }

}