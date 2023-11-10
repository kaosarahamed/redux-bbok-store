import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";
import ThunkMiddlewar from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(ThunkMiddlewar));

export default store;