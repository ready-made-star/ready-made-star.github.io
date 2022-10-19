import {THEME} from '../actions'

export default function theme(state = true, action ) {
    switch(action.type) {
        case THEME:
            return action.json
        default: 
            return state
    }
}