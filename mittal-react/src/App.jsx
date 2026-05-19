import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout.jsx';
import { ToastProvider } from './components/ui/Toast.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import CoreTeam from './pages/CoreTeam.jsx';
import Doctors from './pages/Doctors.jsx';
import Departments from './pages/Departments.jsx';
import DepartmentDetail from './pages/DepartmentDetail.jsx';
import Services from './pages/Services.jsx';
import Facilities from './pages/Facilities.jsx';
import Appointment from './pages/Appointment.jsx';
import Contact from './pages/Contact.jsx';
import Career from './pages/Career.jsx';
import Academics from './pages/Academics.jsx';
import Gallery from './pages/Gallery.jsx';
import Events from './pages/Events.jsx';
import PatientPortal from './pages/PatientPortal.jsx';
import Emergency from './pages/Emergency.jsx';
import HealthCheckup from './pages/HealthCheckup.jsx';
import VideoConsultation from './pages/VideoConsultation.jsx';
import SecondOpinion from './pages/SecondOpinion.jsx';
import Empanelment from './pages/Empanelment.jsx';
import Blog from './pages/Blog.jsx';
import PatientStories from './pages/PatientStories.jsx';
import MedicalTourism from './pages/MedicalTourism.jsx';
import NotFound from './pages/NotFound.jsx';
import Legal from './pages/Legal.jsx';

export default function App() {
  return (
    <ToastProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/core-team" element={<CoreTeam />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:slug" element={<DepartmentDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/patient-portal" element={<PatientPortal />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/health-checkup" element={<HealthCheckup />} />
          <Route path="/video-consultation" element={<VideoConsultation />} />
          <Route path="/second-opinion" element={<SecondOpinion />} />
          <Route path="/empanelment" element={<Empanelment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/patient-stories" element={<PatientStories />} />
          <Route path="/medical-tourism" element={<MedicalTourism />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="/disclosures" element={<Legal kind="disclosures" />} />
          <Route path="/sitemap" element={<Legal kind="sitemap" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ToastProvider>
  );
}
