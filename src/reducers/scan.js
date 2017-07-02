import {initStatistics} from '../utils'

const scan = (state = {stats: initStatistics(), currency: null, currencyValue: 0, showLoader: false}, action) => {
    switch (action.type) {
        case 'DRAW_STATS':
            return {
                ...state,
                stats: {...action.stats}
            };
        case 'SET_CURRENCY':
            return {...state, currency: action.currency, currencyValue: action.currencyValue};

        case 'SHOW_LOADER':
            return {...state, showLoader: true};

        case 'HIDE_LOADER':
            return {...state, showLoader: false};
        default:
            return state
    }
};

export default scan