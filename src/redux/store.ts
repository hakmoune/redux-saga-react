import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, applyMiddleware, Middleware } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";
import { rootReducer } from "./rootReducer";

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const middleware: Middleware[] = [sagaMiddleware]; // permettre d'ajouter plusier middleware

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)) as any

  // nous pouvons aussi faire directement, sans utiliser un tableau de middleware
  // composeWithDevTools(applyMiddleware(sagaMiddleware))

  //Sans composeWithDevTools, on utilise compose :
  //compose(applyMiddleware(...middleware)) // Sans Redux DevTools
);

// Lancer les sagas, permet de démarrer l'exécution des sagas.
// rootSaga est la saga principale qui regroupe toutes les autres sagas de l'application
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
