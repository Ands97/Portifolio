import { createContext, useContext, useReducer } from 'react';

import ThemeReducer from '../reducers/ThemeReducer';
import UserReducer from '../reducers/UserReducer';
import Counter from '../reducers/Counter';

const initialState = {
    theme: ThemeReducer(),
    user: UserReducer(),
    count: Counter()
}

const MainReducer = (state, action) => ({
    theme: ThemeReducer(state.theme, action),
    user: UserReducer(state.user, action),
    count: Counter(state.count, action)
});

export const StateContext = createContext();

export const StateProvider = ({ children }) => (
    <StateContext.Provider value={useReducer(MainReducer, initialState)}>
        {children}
    </StateContext.Provider>);


export const useStateValue = () => useContext(StateContext);