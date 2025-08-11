import { useEffect, useState, type ReactNode } from "react";
import type { Country } from "../types";
import { CountryBUContext } from "../contexts/contexts";

const CountryBUProvider = ({ children }: { children: ReactNode }) => {
  const [countriesBU, setCountriesBU] = useState<Country[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const resp = await fetch("/data.json", { signal: controller.signal });
        if (!resp.ok) {
          throw new Error("Failed to load backup countries data file");
        }
        const data: Country[] = await resp.json();
        setCountriesBU(data);
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        if (e instanceof Error) {
          console.error(e.message);
        } else {
          console.error(e);
        }
      }
    })();

    return () => controller.abort();
  }, []);

  return (
    <CountryBUContext.Provider value={{ countriesBU, setCountriesBU }}>
      {children}
    </CountryBUContext.Provider>
  );
};

export default CountryBUProvider;
