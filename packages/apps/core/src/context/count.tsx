import React, { createContext, useState } from 'react';

interface CountContextProps {
  count: number;
  setCount(value: number): void;
}

const CountContext = createContext({} as CountContextProps)

interface CountProviderProps {
  children: React.ReactNode
}

export function CountProvider({ children }: CountProviderProps) {
  const [count, setCount] = useState(10)

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  )
}

export default CountContext;