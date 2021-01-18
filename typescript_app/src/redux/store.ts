import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import repositoryReducer from "./repository/repositoryReducer";

const rootReducer = combineReducers({
  repository: repositoryReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;

export type RootState = ReturnType<typeof rootReducer>;
