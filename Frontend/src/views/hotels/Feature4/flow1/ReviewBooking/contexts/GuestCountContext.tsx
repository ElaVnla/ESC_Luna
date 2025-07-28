// GuestCountContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

type GuestCount = {
  adults: number;
  children: number;
};

type GuestCountContextType = {
  guests: GuestCount;
  setGuests: (guests: GuestCount) => void;
};

const GuestCountContext = createContext<GuestCountContextType | undefined>(undefined);

export const GuestCountProvider = ({ children }: { children: ReactNode }) => {
  const [guests, setGuests] = useState<GuestCount>({ adults: 1, children: 0 });

  return (
    <GuestCountContext.Provider value={{ guests, setGuests }}>
      {children}
    </GuestCountContext.Provider>
  );
};

export const useGuestCount = () => {
  const context = useContext(GuestCountContext);
  if (!context) throw new Error('useGuestCount must be used within GuestCountProvider');
  return context;
};
