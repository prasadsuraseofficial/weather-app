import rootReducer from "./services/reducers/index"

import { applyMiddleware, createStore } from "redux"

import {persistStore, persistReducer} from "redux-persist"

import thunk from "redux-thunk"

import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "main-store",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(persistedReducer, applyMiddleware(thunk))
const store = createStore(persistedReducer, applyMiddleware(thunk))

const persistedStore = persistStore(store)

export { store, persistedStore }