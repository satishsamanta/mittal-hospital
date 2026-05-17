import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { PageHero, Section, FadeIn } from '../components/ui/Section';

const COPY = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      ['Information we collect', 'When you book an appointment, register for the patient portal or contact us, we collect basic identifying information — your name, phone number, email address, age, gender, and the medical reason for your visit. We may also collect technical data such as your IP address and browser type for analytics and security.'],
      ['How we use it', 'We use this information solely to confirm and provide medical care, to send appointment reminders, to issue bills and reports, and to comply with applicable healthcare regulations. We never sell your personal data.'],
      ['Data security', 'All form submissions are transmitted over HTTPS. Medical records are stored in access-controlled systems and reviewed regularly under our NABH-mandated information-security policy.'],
      ['Your rights', 'You may request access to or deletion of your personal data at any time by writing to privacy@mittalhospital.com. We will respond within 30 days.'],
      ['Cookies', 'We use only essential cookies and a single anonymous analytics cookie. No advertising trackers are loaded on this site.'],
      ['Contact', 'For any privacy concern, please write to privacy@mittalhospital.com.'],
    ],
  },
  terms: {
    title: 'Terms of Service',
    body: [
      ['Use of website', 'This website is provided for general information and to enable appointment booking. Content on this site is not medical advice and should not be substituted for an in-person consultation.'],
      ['Appointment policy', 'Online appointment requests are confirmed by SMS or phone. Appointments may be rescheduled subject to doctor availability.'],
      ['Cancellation & refunds', 'Health package bookings can be cancelled up to 24 hours before the scheduled date. Refunds are processed within 7 business days.'],
      ['Intellectual property', 'All content, images and logos on this site are the property of Mittal Hospital & Research Centre and may not be used without written permission.'],
      ['Liability', 'While we strive for accuracy, the hospital is not liable for any loss arising from reliance on the content of this website outside of a clinical consultation.'],
    ],
  },
  disclosures: {
    title: 'Statutory Disclosures',
    body: [
      ['NABH Accreditation', 'Mittal Hospital & Research Centre is fully NABH accredited. The accreditation certificate is displayed prominently at the main reception and can be verified on the NABH website.'],
      ['Bio-Medical Waste', 'The hospital adheres to the Bio-Medical Waste Management Rules, 2016 (amended). Quarterly disposal reports are filed with the State Pollution Control Board.'],
      ['Implant Pricing', 'A current list of orthopaedic and cardiac implant pricing is available at the OPD desk and the Billing department.'],
      ['Patient Rights', 'Patients have the right to be informed, the right to consent or refuse, the right to confidentiality, and the right to a second opinion. A full list is displayed at all in-patient floors.'],
      ['Grievance Redressal', 'For any grievance, please contact the Medical Superintendent: grievance@mittalhospital.com. Your complaint will be acknowledged within 24 hours.'],
    ],
  },
  sitemap: {
    title: 'Sitemap',
    body: [
      ['Patient Care', 'Home · About · Doctors · Departments · Services · Facilities · Health Checkup · Emergency · Appointment'],
      ['Information', 'Gallery · Events & News · Blog · Patient Stories · Medical Tourism'],
      ['Hospital', 'Career · Academics · Contact'],
      ['Legal', 'Privacy Policy · Terms of Service · Statutory Disclosures'],
    ],
  },
};

export default function Legal({ kind = 'privacy' }) {
  const c = COPY[kind] || COPY.privacy;
  return (
    <>
      <Seo title={c.title} path={`/${kind}`} />
      <PageHero
        badge="Legal & Policies"
        title={c.title}
        breadcrumb={<span><Link to="/" className="hover:text-primary-600">Home</Link> / {c.title}</span>}
      />
      <Section className="!pt-4">
        <div className="max-w-3xl mx-auto card">
          {c.body.map(([h, body], i) => (
            <FadeIn key={h} delay={i * 0.04}>
              <h3 className="mb-2 mt-4 first:mt-0">{h}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{body}</p>
            </FadeIn>
          ))}
          <p className="text-xs text-slate-500 pt-6 border-t border-slate-100 mt-6">
            Last updated: May 2026 · For questions, contact <a href="mailto:info@mittalhospital.com" className="text-primary-600">info@mittalhospital.com</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
