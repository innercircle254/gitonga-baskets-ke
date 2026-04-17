import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface LoyaltyContextType {
  viewedIds: string[];
  trackView: (id: string) => void;
  questCompleted: boolean;
  rewardCode: string | null;
}

const LoyaltyContext = createContext<LoyaltyContextType | undefined>(undefined);

export const LoyaltyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [viewedIds, setViewedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('gitonga_viewed');
    return saved ? JSON.parse(saved) : [];
  });

  const [questCompleted, setQuestCompleted] = useState(false);
  const [rewardCode, setRewardCode] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('gitonga_viewed', JSON.stringify(viewedIds));
    if (viewedIds.length >= 3) {
      setQuestCompleted(true);
      setRewardCode('GITONGA10');
    }
  }, [viewedIds]);

  const trackView = (id: string) => {
    if (!viewedIds.includes(id)) {
      setViewedIds(prev => [...prev, id]);
    }
  };

  return (
    <LoyaltyContext.Provider value={{ viewedIds, trackView, questCompleted, rewardCode }}>
      {children}
    </LoyaltyContext.Provider>
  );
};

export const useLoyalty = () => {
  const context = useContext(LoyaltyContext);
  if (!context) throw new Error('useLoyalty must be used within a LoyaltyProvider');
  return context;
};
