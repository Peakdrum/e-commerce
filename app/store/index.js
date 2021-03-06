import { createStore } from 'redux'
import reducers from '../reducers'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
let store = createStore(reducers, reduxDevTools)

export default store 