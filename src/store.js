import { createStore } from 'redux'
import todoApp from './reducers/user'

export let store = createStore(todoApp)