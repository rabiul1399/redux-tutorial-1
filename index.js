// 1. state = count:0
//2.  action = increment,decrement
//3.  reducer
//4 . store = getState(),subscribe(),dispatch()

const { createStore } = require("redux");

// defining constans 
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = "RESET";

// state 
const initalCounterState = {
    count: 0,
}

// action-  Object -type , payload
// Increment Counter
const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}

// Decrement Counter
const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
}
// RESET  Counter
const resetCounter = () => {
    return {
        type: RESET,
    }
}

// create reducer for counter
const counterReducer = (state = initalCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }

        case RESET:
            return {
                ...state,
                count: 0,
            }

        default:
            state;
    }
}

// create store 
const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState());

})

// dispatch action

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(resetCounter())