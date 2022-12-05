import { createContext } from 'react';

export type AppContextType = {
  menu: {
      isOpen: boolean
      toggle: () => void
  }
}

export const AppContext = createContext({
    menu: {
        isOpen: false,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        toggle: () => { },
    }
});
