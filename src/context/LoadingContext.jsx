//Iimport del Context
import { createContext, useState } from "react";

//export del contest
export const LoadingContext = createContext();

//export del provider("App" occuperà children)
export function LoadingProvider({ children }) {
  //Stato inizializzato a false
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
