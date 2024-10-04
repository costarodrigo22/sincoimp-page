import BenefitsSession from '@/components/BenefitsSession';
import CarouselSession from '../components/CarouselSession';
import NoticeSession from '@/components/NoticeSession';
import ActionsSession from '@/components/ActionsSession';
import FooterSession from '@/components/FooterSession';
import ComplementSession from '@/components/ComplementSession';
import { Toaster } from 'react-hot-toast';
import { ReportModalProvider } from './contexts/ReportModal';
import ConventionsSession from '@/components/ConventionsSession';

export default function Home() {
  return (
    <ReportModalProvider>
      <div className="w-full h-screen">
        <Toaster position="top-right" reverseOrder={false} />
        <CarouselSession />
        <BenefitsSession />
        <ConventionsSession />
        {/* <NoticeSession /> */}
        <ActionsSession />
        <ComplementSession />
        <FooterSession />
      </div>
    </ReportModalProvider>
  );
}
