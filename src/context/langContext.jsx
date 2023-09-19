import React, { useState } from "react";
import es from "../languages/es-ES.json";
import en from "../languages/en-US.json";

const langContext = React.createContext();
import { IntlProvider } from "react-intl";

const LangProvider = ({ children }) => {
  const [mensajes, setMensajes] = useState(en);
  const [locale, setLocale] = useState("en-US");

  const langChange = (lenguaje) => {
    switch (lenguaje) {
      case "es-ES":
        setMensajes(es);
        setLocale("es-ES");
        break;
      case "en-US":
        setMensajes(en);
        setLocale("en-US");
        break;
      default:
        setMensajes(en);
        setLocale("en-US");
    }
  };

  return (
    <langContext.Provider value={{ langChange: langChange }}>
      <IntlProvider locale={locale} messages={mensajes}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
