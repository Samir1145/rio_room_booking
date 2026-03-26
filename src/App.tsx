import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import PropertyDetails from './pages/PropertyDetails';
import RequestToBook from './pages/RequestToBook';
import ConfirmBooking from './pages/ConfirmBooking';
import ChangeGuests from './pages/ChangeGuests';
import ChangeDates from './pages/ChangeDates';
import KycIntro from './pages/KycIntro';
import KycDocument from './pages/KycDocument';
import KycSelfie from './pages/KycSelfie';
import KycSignature from './pages/KycSignature';
import KycSuccess from './pages/KycSuccess';
import ActiveStay from './pages/ActiveStay';
import RoomService from './pages/RoomService';
import Housekeeping from './pages/Housekeeping';
import LocalGuide from './pages/LocalGuide';
import Saved from './pages/Saved';
import Profile from './pages/Profile';
import Chat from './pages/Chat';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/book/:id" element={<RequestToBook />} />
        <Route path="/book/:id/guests" element={<ChangeGuests />} />
        <Route path="/book/:id/dates" element={<ChangeDates />} />
        <Route path="/confirm/:id" element={<ConfirmBooking />} />
        
        {/* KYC Flow */}
        <Route path="/kyc/intro" element={<KycIntro />} />
        <Route path="/kyc/document" element={<KycDocument />} />
        <Route path="/kyc/selfie" element={<KycSelfie />} />
        <Route path="/kyc/signature" element={<KycSignature />} />
        <Route path="/kyc/success" element={<KycSuccess />} />

        {/* Active Stay Dashboard */}
        <Route path="/stay/active" element={<ActiveStay />} />
        <Route path="/stay/room-service" element={<RoomService />} />
        <Route path="/stay/housekeeping" element={<Housekeeping />} />
        <Route path="/stay/guide" element={<LocalGuide />} />
      </Routes>
    </BrowserRouter>
  );
}
