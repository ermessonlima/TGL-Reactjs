const initialState = {
    name: '',
    isLoggedIn: false,
    games: [
        {
            numbers: "",
            data: null,
            price: "",
            color: "",
            type: "",
        }
    ],
    user: {
        username: '',
        email: '',
        password: ''
    }
}

const UsuarioReducer = (state = initialState, action) => {
    let newList = [...state.games];
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload.name }
            break;
        case 'SET_LOGIN':
            return { ...state, user: action.payload.user }
            break;
        case 'SET_LOGININ':
            return { ...state, isLoggedIn: action.payload.isLoggedIn }
            break;
        case 'SET_GAMES':
            newList.push(
                {
                    numbers: action.payload.numbers,
                    data: action.payload.data,
                    price: action.payload.price,
                    color: action.payload.color,
                    type: action.payload.type,
                }
            )

            break;
    }

    return { ...state, games: newList };
}

export default UsuarioReducer;