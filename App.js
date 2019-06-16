import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import AppNavigator from "./src/appNavigator";
import rootReducer from "./src/rootReducer";
import rootSaga from "./src/rootSaga";

const sagas = createSagaMiddleware();
const middleware = applyMiddleware(sagas);
const store = createStore(rootReducer, {}, middleware);
sagas.run(rootSaga);

export default function App(props) {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
