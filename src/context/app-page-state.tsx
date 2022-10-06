import { createContext, ReactNode, useContext, useReducer } from 'react';

// All the possible modules that we can visit in this app
export enum AppModule {
  dashboard = 'dashboard',
  usersGroup = 'usersGroup',
  cloudService = 'cloudService',
  usageData = 'usageData',
  server = 'server',
}

// The data belonging to each module.
// For the sake of showing the "provide pattern", we kept it simple, and we
// decided to have the same type of data for each module.
export type ModuleData = {
  name: string;
  description: string;
  owner: string;
  created: string;
};

// The application data is the combination of the data coming from each module.
// The key is the id of the module by which we can read the actual data.
export type AppData = {
  [key in AppModule]: ModuleData;
};

// This is the State of our application, in general it can be a state of a single
// page or a state of a slice of our app.
type State = {
  appData: AppData;
  pageTitle: string;
  selectedModule: AppModule;
};

/**
 * The actions used to change the state:
 * besides reading from the state, we can also change the state.
 * For reference see usage in {@link PageContent}
 */
type Action =
  | { type: 'change_selected_module'; module: AppModule; title: string }
  | { type: 'update_app_data'; module: AppModule; data: ModuleData };

type Dispatch = (action: Action) => void;

const AppPageStateContext = createContext<
  { pageState: State; dispatch: Dispatch } | undefined
>(undefined);

function pageStateReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'change_selected_module': {
      return {
        ...state,
        pageTitle: action.title,
        selectedModule: action.module,
      };
    }

    case 'update_app_data': {
      return {
        ...state,
        appData: {
          ...state.appData,
          [action.module]: action.data,
        },
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${(action as any).type}`);
    }
  }
}

export const DEFAULT_DATA: ModuleData = {
  name: '',
  description: '',
  owner: '',
  created: '',
};

const initialAppData: AppData = {
  dashboard: DEFAULT_DATA,
  usersGroup: DEFAULT_DATA,
  cloudService: DEFAULT_DATA,
  usageData: DEFAULT_DATA,
  server: DEFAULT_DATA,
};

type Props = {
  children: ReactNode;
};

/**
 * This is our state provider: it will provide the page state to its children.
 * In this way, all the components down in the hierarchy can access this
 * state right away (see usage in {@link App}).
 */
export function AppPageStateProvider({ children }: Props) {
  const initialState: State = {
    appData: initialAppData,
    pageTitle: 'Dashboard',
    selectedModule: AppModule.dashboard,
  };
  const [pageState, dispatch] = useReducer(pageStateReducer, initialState);
  const value = { pageState, dispatch };

  return (
    <AppPageStateContext.Provider value={value}>
      {children}
    </AppPageStateContext.Provider>
  );
}

/**
 * This hook makes things nicer by returning the current
 * context when it's used (e.g. see {@link Header}).
 */
export function useAppPageState() {
  const context = useContext(AppPageStateContext);

  if (context === undefined) {
    throw new Error(
      'useAppPageState must be used within a AppPageStateProvider',
    );
  }

  return context;
}
