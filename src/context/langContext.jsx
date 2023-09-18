import React, { useState } from "react";
import es from "../languages/es-ES.json";
import en from "../languages/en-US.json";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  const [mensajes, setMensajes] = useState(es);
  const [locale, setLocale] = useState("es-ES");

  return <langContext.Provider value={{}}>{children}</langContext.Provider>;
};

export { LangProvider, langContext };
