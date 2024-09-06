'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ReportModal {
  openReportModal: boolean;
  setOpenReportModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReportModalContext = createContext<ReportModal | undefined>(undefined);

export const ReportModalProvider = ({ children }: { children: ReactNode }) => {
  const [openReportModal, setOpenReportModal] = useState<boolean>(false);

  return (
    <ReportModalContext.Provider
      value={{ openReportModal, setOpenReportModal }}
    >
      {children}
    </ReportModalContext.Provider>
  );
};

export const useReportModal = () => {
  const context = useContext(ReportModalContext);
  if (!context) {
    throw new Error(
      'useReportModal must be used within an ReportModalProvider'
    );
  }
  return context;
};
