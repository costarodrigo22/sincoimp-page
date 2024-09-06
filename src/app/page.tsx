import BenefitsSession from '@/components/BenefitsSession';
import CarouselSession from '../components/CarouselSession';
import NoticeSession from '@/components/NoticeSession';
import ActionsSession from '@/components/ActionsSession';
import FooterSession from '@/components/FooterSession';
import ComplementSession from '@/components/ComplementSession';
import { Toaster } from 'react-hot-toast';
import { ReportModalProvider } from './contexts/ReportModal';

export default function Home() {
  return (
    <ReportModalProvider>
      <div className="w-full h-screen">
        <Toaster position="top-right" reverseOrder={false} />
        <CarouselSession />
        <BenefitsSession />
        {/* <NoticeSession /> */}
        <ActionsSession />
        <ComplementSession />
        <FooterSession />
        {/* <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            borderRadius: '100%',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          Voltar
        </button>
      </div> */}
      </div>
    </ReportModalProvider>
  );
}
