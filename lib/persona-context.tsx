"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { defaultPersonaId, type PersonaId } from "@/lib/content/personas";
import { track } from "@/lib/analytics";

interface PersonaContextValue {
  personaId: PersonaId | null;
  selectPersona: (id: PersonaId, source: string) => void;
}

const PersonaContext = createContext<PersonaContextValue | undefined>(undefined);

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const [personaId, setPersonaId] = useState<PersonaId | null>(null);

  const value = useMemo<PersonaContextValue>(
    () => ({
      personaId,
      selectPersona: (id, source) => {
        setPersonaId(id);
        track("persona_selected", { persona: id, location: source });
      },
    }),
    [personaId]
  );

  return <PersonaContext.Provider value={value}>{children}</PersonaContext.Provider>;
}

export function usePersona() {
  const ctx = useContext(PersonaContext);
  if (!ctx) throw new Error("usePersona must be used within PersonaProvider");
  return ctx;
}

export function useActivePersonaId() {
  const { personaId } = usePersona();
  return personaId ?? defaultPersonaId;
}
