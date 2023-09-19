import React, { useState } from "react";
import es from "../languages/es-ES.json";
import en from "../languages/en-US.json";

const langContext = React.createContext();
import { IntlProvider } from "react-intl";

const LangProvider = ({ children }) => {
  let localeDefault;
  let messagesDefault;

  const lang = localStorage.getItem("lang");

  if (lang) {
    localeDefault = lang;

    if (lang === "es-ES") {
      messagesDefault = es;
    } else if (lang === "en-US") {
      messagesDefault = en;
    } else {
      localeDefault = "en-US";
      messagesDefault = en;
    }
  }

  const [mensajes, setMensajes] = useState(messagesDefault);
  const [locale, setLocale] = useState(localeDefault);

  const langChange = (lenguaje) => {
    switch (lenguaje) {
      case "es-ES":
        setMensajes(es);
        setLocale("es-ES");
        localStorage.setItem("lang", "es-ES");
        break;
      case "en-US":
        setMensajes(en);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;
      default:
        setMensajes(en);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
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
