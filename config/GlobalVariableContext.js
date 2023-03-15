import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeviceVariables = {
  AUTHORIZATION_HEADER:
    'eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.5_Z2Ajj11uqc-0ctLiNqBbQKSR-FbqEgDlAS5oOTagsaN6RYeelIw9u6FOVjRKDr5gawojNcAquMUXGs6XXKW2OtWfXjDKEy.TKFPH6UKUXs9HSH-delKcg.i4wfjthuMVysWmCgElQHHdqaH0ffHwx_FBPJs3LlR-0mjl6I53jSwzB0WRvfr2Bipnucd8h-MJQg6nk_U4aYyTptqlRSMzCCOZtXC98pL_thJWo5HpG6409ux2MjCu-CArBaFBKd5y6xmdNnzqj5EdGwDfXIopHncQZ0YyHT0uU.ygaleIXVtmtcrh0KyeNYoZg83X5ezWVHcCaZfgsS5lg',
  Child_ID: '',
  Parent_ID: '',
};
const AppVariables = {
  DC_symbol:
    '<svg width="49" height="79" viewBox="0 0 49 79" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.0728 62H13.2769L13.3423 58.5649H24.0728C27.4969 58.5649 30.4412 57.8016 32.9058 56.2749C35.3921 54.7264 37.3114 52.589 38.6636 49.8628C40.0158 47.1366 40.6919 43.9741 40.6919 40.3755V35.9263C40.6919 33.1782 40.2993 30.6919 39.5142 28.4673C38.7508 26.2427 37.6494 24.3452 36.21 22.7749C34.7705 21.1828 33.0475 19.9614 31.041 19.1108C29.0563 18.2603 26.8317 17.835 24.3672 17.835H13.0806V14.3672H24.3672C27.3333 14.3672 30.0487 14.8797 32.5132 15.9048C34.9995 16.908 37.1478 18.3693 38.958 20.2886C40.79 22.186 42.1968 24.4652 43.1782 27.126C44.1815 29.7868 44.6831 32.7529 44.6831 36.0244V40.3755C44.6831 43.647 44.1815 46.6131 43.1782 49.2739C42.1968 51.9347 40.79 54.2139 38.958 56.1113C37.126 58.0088 34.9559 59.4701 32.4478 60.4951C29.9396 61.4984 27.1479 62 24.0728 62ZM15.0762 14.3672V62H11.0522V14.3672H15.0762Z" fill="white"/> <path d="M19.957 43.1831H23.6133C23.4229 44.9351 22.9214 46.5029 22.1089 47.8867C21.2964 49.2705 20.1475 50.3687 18.6621 51.1812C17.1768 51.981 15.3232 52.3809 13.1016 52.3809C11.4766 52.3809 9.99756 52.0762 8.66455 51.4668C7.34424 50.8574 6.20801 49.9941 5.25586 48.877C4.30371 47.7471 3.56738 46.395 3.04688 44.8208C2.53906 43.2339 2.28516 41.4692 2.28516 39.5269V36.7656C2.28516 34.8232 2.53906 33.0649 3.04688 31.4907C3.56738 29.9038 4.31006 28.5454 5.2749 27.4155C6.25244 26.2856 7.42676 25.416 8.79785 24.8066C10.1689 24.1973 11.7114 23.8926 13.4253 23.8926C15.52 23.8926 17.291 24.2861 18.7383 25.0732C20.1855 25.8604 21.3091 26.9521 22.1089 28.3486C22.9214 29.7324 23.4229 31.3384 23.6133 33.1665H19.957C19.7793 31.8716 19.4492 30.7607 18.9668 29.834C18.4844 28.8945 17.7988 28.1709 16.9102 27.6631C16.0215 27.1553 14.8599 26.9014 13.4253 26.9014C12.1938 26.9014 11.1084 27.1362 10.1689 27.606C9.24219 28.0757 8.46143 28.7422 7.82666 29.6055C7.20459 30.4688 6.73486 31.5034 6.41748 32.7095C6.1001 33.9155 5.94141 35.2549 5.94141 36.7275V39.5269C5.94141 40.8853 6.08105 42.1611 6.36035 43.3545C6.65234 44.5479 7.09033 45.5952 7.67432 46.4966C8.2583 47.3979 9.00098 48.1089 9.90234 48.6294C10.8037 49.1372 11.8701 49.3911 13.1016 49.3911C14.6631 49.3911 15.9072 49.1436 16.834 48.6484C17.7607 48.1533 18.459 47.4424 18.9287 46.5156C19.4111 45.5889 19.7539 44.478 19.957 43.1831Z" fill="white"/> </svg>',
  ERROR_MESSAGE: '',
  Visible: false,
};
const GlobalVariableContext = React.createContext();
const GlobalVariableUpdater = React.createContext();

// Attempt to parse a string as JSON. If the parse fails, return the string as-is.
// This is necessary to account for variables which are already present in local
// storage, but were not stored in JSON syntax (e.g. 'hello' instead of '"hello"').
function tryParseJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

class GlobalVariable {
  /**
   *  Filters an object of key-value pairs for those that should be
   *  persisted to storage, and persists them.
   *
   *  @param values Record<string, string>
   */
  static async syncToLocalStorage(values) {
    const update = Object.entries(values)
      .filter(([key]) => key in DeviceVariables)
      .map(([key, value]) => [key, JSON.stringify(value)]);

    if (update.length > 0) {
      await AsyncStorage.multiSet(update);
    }

    return update;
  }

  static async loadLocalStorage() {
    const entries = await AsyncStorage.multiGet(Object.keys(DeviceVariables));

    // If values isn't set, use the default. These will be written back to
    // storage on the next render.
    const withDefaults = entries.map(([key, value]) => [
      key,
      value ? tryParseJson(value) : DeviceVariables[key],
    ]);

    return Object.fromEntries(withDefaults);
  }
}

class State {
  static defaultValues = {
    ...AppVariables,
    ...DeviceVariables,
  };

  static reducer(state, { type, payload }) {
    switch (type) {
      case 'RESET':
        return { values: State.defaultValues, __loaded: true };
      case 'LOAD_FROM_ASYNC_STORAGE':
        return { values: { ...state.values, ...payload }, __loaded: true };
      case 'UPDATE':
        return state.__loaded
          ? {
              ...state,
              values: {
                ...state.values,
                [payload.key]: payload.value,
              },
            }
          : state;
      default:
        return state;
    }
  }

  static initialState = {
    __loaded: false,
    values: State.defaultValues,
  };
}

export function GlobalVariableProvider({ children }) {
  const [state, dispatch] = React.useReducer(State.reducer, State.initialState);

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  // This effect runs on mount to overwrite the default value of any
  // key that has a local value.
  React.useEffect(() => {
    async function initialStorageLoader() {
      try {
        const payload = await GlobalVariable.loadLocalStorage();
        dispatch({ type: 'LOAD_FROM_ASYNC_STORAGE', payload });
      } catch (err) {
        console.error(err);
      }
    }
    initialStorageLoader();
  }, []);

  // This effect runs on every state update after the initial load. Gives us
  // best of both worlds: React state updates sync, but current state made
  // durable next async tick.
  React.useEffect(() => {
    async function syncToAsyncStorage() {
      try {
        await GlobalVariable.syncToLocalStorage(state.values);
      } catch (err) {
        console.error(err);
      }
    }
    if (state.__loaded) {
      syncToAsyncStorage();
    }
  }, [state]);

  const onLayoutRootView = React.useCallback(async () => {
    if (state.__loaded) {
      await SplashScreen.hideAsync();
    }
  }, [state.__loaded]);

  // We won't want an app to read a default state when there might be one
  // incoming from storage.
  if (!state.__loaded) {
    return null;
  }

  return (
    <GlobalVariableUpdater.Provider
      value={dispatch}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableContext.Provider value={state.values}>
        {children}
      </GlobalVariableContext.Provider>
    </GlobalVariableUpdater.Provider>
  );
}

// Hooks
export function useSetValue() {
  const dispatch = React.useContext(GlobalVariableUpdater);
  return ({ key, value }) => {
    dispatch({ type: 'UPDATE', payload: { key, value } });
    return value;
  };
}

export function useValues() {
  return React.useContext(GlobalVariableContext);
}
