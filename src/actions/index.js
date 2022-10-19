export const THEME = 'THEME';

function theme(value){
    return {
        type: THEME,
        json: value
    }
}

export function toggleTheme(value) {
    return dispatch=> {
        dispatch(theme(value))
    }
}