const initialState = {
    botaoClicado: false,
}

export default function  (state: any = initialState, action: any){
    switch (action.type) {
        case 'BOTAO_CLICADO': {
            const newState = { ...state };
            newState.botaoClicado = !newState.botaoClicado;
            return newState;
        }
        default: {
            return state;
        }
    }
};
