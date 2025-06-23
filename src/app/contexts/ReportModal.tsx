'use client';
import { create } from 'zustand';

interface ReportModalState {
  openReportModal: boolean;
  setOpenReportModal: (open: boolean) => void;
}

export const useReportModal = create<ReportModalState>(
  (set: (partial: Partial<ReportModalState>) => void) => ({
    openReportModal: false,
    setOpenReportModal: (open: boolean) => set({ openReportModal: open }),
  })
);
