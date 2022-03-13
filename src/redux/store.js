import { createStore } from "redux";
// import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

// const middlewares = [logger];

//const store = createStore(rootReducer, applyMiddleware(...middlewares))
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const persistor = persistStore(store);

export { store, persistor };
