// Central data — easily editable for CMS migration
// All hospital content lives here. Swap with a CMS/API later by mirroring this shape.

export const hospital = {
  name: 'Mittal Hospital & Research Centre',
  shortName: 'Mittal Hospital',
  alternateName: 'Gheesibai Memorial Mittal Hospital',
  tagline: 'Compassionate Care, Modern Medicine.',
  since: 2005,
  url: 'https://mittalhospital.com',
  email: 'info@mittalhospital.com',
  phone: '+91-145-2603603',
  phoneDisplay: '+91 145 2603 603',
  emergencyPhone: '+91-145-2603707',
  ambulancePhone: '108',
  whatsapp: '+919876543210',
  logo: 'https://mittalhospital.com/wp-content/uploads/2024/04/mittal-hospital-logo.png',
  buildingMain: 'https://mittalhospital.com/wp-content/uploads/2024/05/MittalHospital-Building-2.jpg',
  buildingSecondary: 'https://mittalhospital.com/wp-content/uploads/2024/05/mittal-hospital-ajmer-building-1.jpeg',
  address: {
    line1: 'Pushkar Road',
    city: 'Ajmer',
    region: 'Rajasthan',
    postalCode: '305004',
    country: 'IN',
  },
  hours: [
    { days: 'Mon – Sat', open: '10:00 AM', close: '7:00 PM' },
    { days: 'Sunday', open: '10:30 AM', close: '12:30 PM' },
    { days: 'Emergency', open: '24/7', close: '' },
  ],
  social: {
    facebook: 'https://facebook.com/mittalhospital',
    twitter: 'https://twitter.com/mittalhospital',
    instagram: 'https://instagram.com/mittalhospital',
    youtube: 'https://youtube.com/@mittalhospital',
    linkedin: 'https://linkedin.com/company/mittalhospital',
  },
  stats: [
    { label: 'Years of Service', value: 20, suffix: '+', icon: 'fa-hospital' },
    { label: 'Bed Capacity', value: 250, suffix: '+', icon: 'fa-bed-pulse' },
    { label: 'Expert Doctors', value: 120, suffix: '+', icon: 'fa-user-doctor' },
    { label: 'Surgeries/Year', value: 15000, suffix: '+', icon: 'fa-stethoscope' },
    { label: 'Happy Patients', value: 500000, suffix: '+', icon: 'fa-face-smile' },
  ],
};

export const departments = [
  {
    slug: 'cardiology',
    name: 'Cardiology',
    icon: 'fa-heart-pulse',
    tagline: 'Heart care that never sleeps.',
    short: 'Angiography, angioplasty, pacemaker implantation & 24/7 cardiac emergencies.',
    description:
      'Our cardiology team provides comprehensive heart care from preventive screening to complex interventional procedures, supported by a modern Cath Lab and CCU.',
    overview:
      'The Department of Cardiology at Mittal Hospital is the most trusted name for heart care across the Ajmer division. Led by senior interventional cardiologists with 25+ years of combined experience, we deliver world-class outcomes for everything from preventive screening to complex coronary interventions — all under one roof. Our 24/7 Cath Lab, dedicated Cardiac Care Unit (CCU) and on-call cardiologists make us the first choice for both routine cardiac care and life-threatening emergencies. Backed by NABH-audited safety standards and modern GE imaging systems, we perform 800+ cardiac procedures every year with outcomes that rival metro-city hospitals — at a fraction of the cost.',
    heroImage: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=1400&q=80',
    image: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    ],
    conditions: [
      { name: 'Coronary Artery Disease', text: 'Narrowed or blocked heart arteries causing chest pain, angina or heart attack.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80' },
      { name: 'Heart Attack (MI)', text: 'Sudden blockage of blood flow to the heart muscle — treated 24/7 with thrombolysis or primary angioplasty.', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80' },
      { name: 'Arrhythmia', text: 'Irregular heartbeat — atrial fibrillation, bradycardia, tachycardia — diagnosed with ECG, Holter and electrophysiology.', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80' },
      { name: 'Heart Failure', text: 'Weakening of the heart muscle — long-term management with medication, lifestyle and device therapy.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
      { name: 'Hypertension', text: 'High blood pressure — assessed for end-organ effects and managed under our dedicated HTN clinic.', image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=600&q=80' },
      { name: 'Valve Disease', text: 'Stenosis or regurgitation of heart valves — evaluated by 2D Echo and managed medically or surgically.', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80' },
    ],
    proceduresDetailed: [
      { name: 'Coronary Angiography', text: 'A diagnostic dye-test of the heart arteries performed in our Cath Lab. Same-day discharge for most patients, with results discussed the same evening.', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80' },
      { name: 'Angioplasty & Stenting', text: 'Minimally invasive opening of blocked arteries using balloon catheters and drug-eluting stents — performed for both emergency heart attacks and planned cases.', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80' },
      { name: 'Pacemaker Implantation', text: 'Permanent and temporary pacemakers for slow heart rhythms — including dual-chamber and biventricular devices for heart failure.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80' },
      { name: '2D Echocardiography', text: 'High-resolution ultrasound imaging of the heart — done within 30 minutes for outpatients and at the bedside for in-patients.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80' },
      { name: 'TMT / Stress Test', text: 'Treadmill stress testing to evaluate exertional chest pain and stratify cardiac risk — supervised by a cardiologist.', image: 'https://images.unsplash.com/photo-1554344728-2f37d4c61f04?auto=format&fit=crop&w=900&q=80' },
      { name: 'Holter Monitoring', text: '24 to 48-hour continuous ECG recording to detect intermittent arrhythmias and silent ischaemia.', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80' },
    ],
    treatments: [
      'Coronary Angiography', 'Angioplasty & Stenting', 'Pacemaker Implantation',
      'Echocardiography', 'TMT / Stress Test', '24/7 Cardiac Emergency', 'Holter Monitoring',
    ],
    symptoms: [
      'Chest pain, pressure or tightness',
      'Shortness of breath, especially at rest',
      'Palpitations or irregular heartbeat',
      'Dizziness or fainting episodes',
      'Swelling in feet, ankles or abdomen',
      'Unusual fatigue with everyday activity',
    ],
    whyChoose: [
      { title: '24/7 Cath Lab', text: 'Modern Cath Lab staffed round the clock for primary angioplasty — proven life-saver in heart attacks.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80' },
      { title: 'Senior consultants', text: 'Lead cardiologists with 25+ years of experience — backed by senior registrars and a fellowship-trained team.', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80' },
      { title: 'Dedicated CCU', text: 'Six-bed Cardiac Care Unit with central monitoring, ventilators and an on-call intensivist 24×7.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=900&q=80' },
    ],
    stats: [
      { value: '800+', label: 'Cardiac procedures / year' },
      { value: '24×7', label: 'Cath Lab availability' },
      { value: '95%+', label: 'Procedural success rate' },
    ],
    faqs: [
      { q: 'When should I see a cardiologist?', a: 'See a cardiologist if you experience chest pain, breathlessness, palpitations, dizziness, swelling or have a strong family history of heart disease. Annual preventive screening is recommended after age 40.' },
      { q: 'How long does an angiography take?', a: 'The procedure itself takes 20–30 minutes. Including preparation and 4–6 hours of post-procedure observation, you can usually be discharged the same day.' },
      { q: 'Is angioplasty painful?', a: 'No — it is done under local anaesthesia at the wrist or groin. You will be awake but comfortable throughout, with minimal discomfort.' },
      { q: 'Do you accept cashless insurance for cardiac procedures?', a: 'Yes. We are empanelled with all major insurers and TPAs including CGHS, ECHS, Star Health, HDFC Ergo and more for cashless cardiac admissions.' },
    ],
  },

  {
    slug: 'neurology',
    name: 'Neurology',
    icon: 'fa-brain',
    tagline: 'Restoring function. Restoring lives.',
    short: 'Stroke care, epilepsy treatment, neurosurgery & spine specialty programs.',
    description:
      'Advanced neurological care for stroke, epilepsy, movement disorders and spine conditions — backed by EEG, EMG and 24/7 stroke-ready imaging.',
    overview:
      'The Department of Neurology and Neurosurgery at Mittal Hospital is the regional referral centre for everything from acute stroke and head injury to chronic conditions like epilepsy, Parkinson’s disease and multiple sclerosis. With a stroke-ready CT scan available 24/7, a dedicated neuro-ICU and the only Mch-trained neurosurgeon in the Ajmer division, we have changed the regional standard of brain care. From emergency thrombolysis to elective spine surgery, from EEG-guided epilepsy management to neuro-rehabilitation — our team takes patients through every step of the neurological care pathway with empathy and precision.',
    heroImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1400&q=80',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=900&q=80',
    ],
    conditions: [
      { name: 'Stroke', text: 'A medical emergency caused by blocked or burst brain arteries. Every minute counts — call us immediately.', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80' },
      { name: 'Epilepsy & Seizures', text: 'Recurrent seizures managed with EEG-guided diagnosis and individualised drug regimens.', image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=600&q=80' },
      { name: 'Headache & Migraine', text: 'Dedicated headache clinic for tension headaches, migraine, cluster headache and secondary causes.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
      { name: 'Parkinson’s Disease', text: 'Movement disorder with tremor, stiffness and slowness — managed under our movement disorder clinic.', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80' },
      { name: 'Spine Disorders', text: 'Disc prolapse, sciatica and spinal stenosis — managed medically, with rehab or with surgery.', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=600&q=80' },
      { name: 'Head Injury', text: 'Trauma from accidents or falls — 24/7 trauma response with CT scan and neurosurgical cover.', image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=600&q=80' },
    ],
    proceduresDetailed: [
      { name: 'Acute Stroke Thrombolysis', text: 'Time-critical clot-busting therapy for ischaemic stroke — delivered within the 4.5-hour window to maximise recovery.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=900&q=80' },
      { name: 'EEG / EMG / NCV', text: 'Comprehensive neuro-electrophysiology suite for diagnosis of epilepsy, peripheral neuropathy and muscle disorders.', image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=900&q=80' },
      { name: 'Neurosurgery', text: 'Brain tumour surgery, aneurysm clipping and traumatic brain injury surgery by an Mch-trained team.', image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=900&q=80' },
      { name: 'Spine Surgery', text: 'Discectomy, laminectomy and minimally invasive spine surgery for relief of back and leg pain.', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80' },
      { name: 'Botulinum Toxin Therapy', text: 'For chronic migraine, dystonia and spasticity — performed in outpatient setting.', image: 'https://images.unsplash.com/photo-1620912189865-cd56db4d3b29?auto=format&fit=crop&w=900&q=80' },
      { name: 'Neuro-Rehabilitation', text: 'In-house physiotherapy, speech therapy and occupational therapy for post-stroke and post-injury recovery.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80' },
    ],
    treatments: [
      'Stroke Care (Acute & Rehab)', 'Epilepsy Management', 'EEG / EMG / NCV',
      'Neurosurgery', 'Spine Surgery', 'Movement Disorder Clinic',
    ],
    symptoms: [
      'Sudden numbness or weakness on one side',
      'Slurred speech or trouble understanding',
      'Severe sudden headache',
      'Seizures or loss of consciousness',
      'Persistent dizziness or imbalance',
      'Memory loss or confusion',
    ],
    whyChoose: [
      { title: 'Stroke-ready 24/7', text: 'CT scan available round-the-clock with neurologist on call — every minute saves brain tissue.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=900&q=80' },
      { title: 'Neurosurgery team', text: 'The only Mch-trained neurosurgery team in the Ajmer division — handling brain and spine surgery.', image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=900&q=80' },
      { title: 'Rehab under one roof', text: 'Physiotherapy, speech therapy and occupational therapy in-house for faster recovery.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80' },
    ],
    stats: [
      { value: '24×7', label: 'Stroke-ready imaging' },
      { value: '500+', label: 'Neurology cases / year' },
      { value: '4.5 hr', label: 'Stroke thrombolysis window' },
    ],
    faqs: [
      { q: 'What is the “golden hour” for stroke?', a: 'Stroke treatment is most effective when delivered within 4.5 hours of symptom onset — ideally as soon as possible. Call us immediately if you suspect a stroke.' },
      { q: 'Can epilepsy be cured?', a: 'Many forms of epilepsy can be fully controlled with medication. About 70% of patients become seizure-free with the right drug regimen.' },
      { q: 'Is spine surgery safe?', a: 'Modern minimally invasive spine surgery is very safe with success rates above 90%. Our team uses image-guided techniques to minimise complications.' },
      { q: 'Do you have neuro-rehab services?', a: 'Yes — we offer in-house physiotherapy, occupational therapy and speech therapy, which is critical for stroke recovery and post-surgical rehab.' },
    ],
  },

  {
    slug: 'gastroenterology',
    name: 'Gastroenterology',
    icon: 'fa-stethoscope',
    tagline: 'Trusted care for the gut, liver and pancreas.',
    short: 'Endoscopy, liver disease care, GI cancer screening & advanced procedures.',
    description:
      'Diagnosis and treatment for the digestive system, liver and pancreas — including therapeutic endoscopy and ERCP.',
    overview:
      'Stomach pain, acidity, jaundice, weight loss or a change in bowel habits — none of these should be ignored. The Department of Gastroenterology at Mittal Hospital is the most advanced GI care centre in the Ajmer region, equipped with high-definition endoscopy, ERCP, colonoscopy and a dedicated GI ICU. Our team handles everything from simple endoscopic procedures to complex therapeutic interventions for bile duct stones, GI bleeding and early cancer detection. Every patient receives a structured workup and a clear treatment plan — explained in plain language so you can make informed decisions about your health.',
    heroImage: 'https://images.unsplash.com/photo-1583912267550-d44c9c12fa0b?auto=format&fit=crop&w=1400&q=80',
    image: 'https://images.unsplash.com/photo-1583912267550-d44c9c12fa0b?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80',
    ],
    conditions: [
      { name: 'Acid Reflux & GERD', text: 'Heartburn, regurgitation and chest discomfort — managed with lifestyle changes and modern acid-suppression therapy.', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80' },
      { name: 'Liver Disease', text: 'Hepatitis B/C, fatty liver and cirrhosis — diagnosed with FibroScan and managed long-term.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
      { name: 'Gallstones', text: 'Symptomatic gallstones — evaluated by ultrasound and treated by laparoscopic cholecystectomy.', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80' },
      { name: 'Inflammatory Bowel Disease', text: 'Crohn’s disease and ulcerative colitis — managed under our dedicated IBD clinic.', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=600&q=80' },
      { name: 'GI Bleeding', text: 'Vomiting blood or passing black stools — emergency endoscopy 24/7 to identify and stop the bleed.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80' },
      { name: 'GI Cancer Screening', text: 'Endoscopy and colonoscopy for early detection of stomach, colon and oesophageal cancer.', image: 'https://images.unsplash.com/photo-1583912267550-d44c9c12fa0b?auto=format&fit=crop&w=600&q=80' },
    ],
    proceduresDetailed: [
      { name: 'Upper GI Endoscopy', text: 'High-definition endoscopy to visualise the food pipe, stomach and duodenum — for ulcers, reflux, cancer screening and biopsy.', image: 'https://images.unsplash.com/photo-1583912267550-d44c9c12fa0b?auto=format&fit=crop&w=900&q=80' },
      { name: 'Colonoscopy', text: 'Complete examination of the colon for cancer screening, polyp removal and bleeding diagnosis.', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80' },
      { name: 'ERCP', text: 'Therapeutic endoscopy for bile duct stones, strictures and pancreatic disease — avoids open surgery.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80' },
      { name: 'Liver Biopsy & FibroScan', text: 'Non-invasive liver stiffness measurement and image-guided biopsy for chronic liver disease.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80' },
      { name: 'Endoscopic Polypectomy', text: 'Removal of polyps and early cancers without surgery — using snare and band ligation techniques.', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80' },
      { name: 'GI Cancer Workup', text: 'A structured pathway for diagnosis and staging of stomach, colon and pancreatic cancer.', image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=900&q=80' },
    ],
    treatments: [
      'Diagnostic & Therapeutic Endoscopy', 'Colonoscopy', 'ERCP',
      'Liver Disease Management', 'GI Cancer Screening', 'IBD Clinic',
    ],
    symptoms: [
      'Persistent abdominal pain or bloating',
      'Heartburn or acidity despite medication',
      'Difficulty swallowing food',
      'Yellow eyes or skin (jaundice)',
      'Blood in stools or black tarry stools',
      'Unintended weight loss',
    ],
    whyChoose: [
      { title: 'HD Endoscopy', text: 'High-definition video endoscopy with image enhancement — picks up early lesions other systems miss.', image: 'https://images.unsplash.com/photo-1583912267550-d44c9c12fa0b?auto=format&fit=crop&w=900&q=80' },
      { title: 'ERCP capability', text: 'Therapeutic ERCP for stones, strictures and pancreatic disease — only available at a handful of regional centres.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80' },
      { title: 'Day-care procedures', text: 'Most endoscopies are done as day-care — you can go home the same day after a short observation.', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80' },
    ],
    stats: [
      { value: '3,000+', label: 'Endoscopies / year' },
      { value: '99%+', label: 'Procedural safety' },
      { value: 'Same day', label: 'Discharge for most' },
    ],
    faqs: [
      { q: 'Is endoscopy painful?', a: 'No — it is done under sedation with light anaesthesia. Most patients have no memory of the procedure and recover within an hour.' },
      { q: 'How often should I get a colonoscopy?', a: 'For average-risk adults, screening colonoscopy is recommended once between ages 45 and 50, then every 5–10 years based on findings.' },
      { q: 'Can fatty liver be reversed?', a: 'Yes — fatty liver disease can be largely reversed with weight loss, exercise and dietary changes, especially if caught early.' },
      { q: 'Do you offer pre-procedure prep at home?', a: 'Yes — we provide a written instruction sheet and bowel-prep medication for colonoscopy, all done from home the night before.' },
    ],
  },

  {
    slug: 'nephrology',
    name: 'Nephrology',
    icon: 'fa-droplet',
    tagline: 'Kidney care, when every drop matters.',
    short: 'Dialysis center, kidney disease management & transplant evaluation.',
    description:
      'Complete kidney care including hemodialysis, CKD management and pre-transplant workup with strict infection-control protocols.',
    overview:
      'Kidneys quietly do the work of cleaning your blood — and when they fail, the consequences are silent and serious. The Department of Nephrology at Mittal Hospital is the largest dialysis and kidney-care centre in the Ajmer division, running 18 hemodialysis stations including dedicated isolation bays for hepatitis-positive patients. Our nephrologists manage everything from early-stage chronic kidney disease through dialysis, transplant evaluation and resistant hypertension. We also run the region’s only hypertension clinic for cases that fail to respond to standard treatment. Our strict infection-control protocol — audited under NABH standards — gives families the assurance they deserve.',
    heroImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1400&q=80',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80',
    ],
    conditions: [
      { name: 'Chronic Kidney Disease', text: 'Progressive loss of kidney function — slowed with diet, BP control and metabolic management.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
      { name: 'Acute Kidney Injury', text: 'Sudden kidney failure from infection, dehydration or drugs — reversible with timely treatment.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80' },
      { name: 'End-Stage Renal Disease', text: 'Kidney failure requiring dialysis or transplant — supported by our 18-station dialysis unit.', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80' },
      { name: 'Glomerulonephritis', text: 'Inflammation of the kidney filters — diagnosed by kidney biopsy and managed long-term.', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80' },
      { name: 'Resistant Hypertension', text: 'Blood pressure that does not respond to standard drugs — workup at our dedicated HTN clinic.', image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=600&q=80' },
      { name: 'Diabetic Kidney Disease', text: 'The most common cause of kidney failure in India — slowed with tight glucose and BP control.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
    ],
    proceduresDetailed: [
      { name: 'Hemodialysis (HD)', text: 'Daily dialysis on 18 stations including dedicated isolation chairs for HCV/HIV-positive patients — ensuring zero cross-infection.', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80' },
      { name: 'AV Fistula Creation', text: 'Surgical creation of arterio-venous fistula for long-term dialysis access — done as a day-care procedure.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80' },
      { name: 'Kidney Biopsy', text: 'Image-guided kidney biopsy for diagnosis of glomerulonephritis and unexplained kidney disease.', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80' },
      { name: 'CKD Clinic', text: 'A structured outpatient clinic to slow CKD progression with diet, BP control and metabolic management.', image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80' },
      { name: 'Transplant Evaluation', text: 'Pre-transplant workup, donor screening and post-transplant follow-up in partnership with major transplant centres.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80' },
      { name: 'Plasmapheresis', text: 'For autoimmune kidney disease and transplant rejection — done on a dedicated machine.', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80' },
    ],
    treatments: [
      'Hemodialysis (Daily)', 'CKD Management', 'AV Fistula Creation',
      'Kidney Biopsy', 'Transplant Evaluation', 'Hypertension Clinic',
    ],
    symptoms: [
      'Swelling in legs, face or around eyes',
      'Frothy or bloody urine',
      'Reduced urine output',
      'Persistent high blood pressure',
      'Unexplained fatigue and nausea',
      'Itching or restless legs',
    ],
    whyChoose: [
      { title: '18 dialysis stations', text: 'Largest hemodialysis centre in the region with isolation bays for cross-infection control.', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80' },
      { title: 'NABH-audited safety', text: 'Strict infection-control protocols audited regularly under NABH standards.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80' },
      { title: 'Transplant pathway', text: 'Complete pre- and post-transplant care in partnership with leading transplant centres.', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80' },
    ],
    stats: [
      { value: '18', label: 'Dialysis stations' },
      { value: '20,000+', label: 'Dialysis sessions / year' },
      { value: '0', label: 'Cross-infections (5-yr audit)' },
    ],
    faqs: [
      { q: 'How often is dialysis needed?', a: 'Most patients on chronic dialysis need 3 sessions per week, each lasting 3–4 hours. Schedules are tailored to your work and family commitments.' },
      { q: 'Can kidney disease be reversed?', a: 'Acute kidney injury is often reversible. Chronic kidney disease cannot be reversed but its progression can be significantly slowed with the right care.' },
      { q: 'Is dialysis painful?', a: 'No — once your fistula is mature, dialysis is painless. Some patients feel tired afterwards, which improves with experience.' },
      { q: 'Do you accept insurance for dialysis?', a: 'Yes — dialysis is covered under most cashless insurance schemes, CGHS, ECHS and government welfare programs.' },
    ],
  },

  {
    slug: 'urology',
    name: 'Urology',
    icon: 'fa-kit-medical',
    tagline: 'Modern urology, minimally invasive.',
    short: 'Laser stone surgery, prostate care, laparoscopic & robotic procedures.',
    description:
      'Minimally invasive urological surgery with laser, laparoscopic and endoscopic options for stones, prostate and uro-oncology.',
    overview:
      'From kidney stones and prostate problems to bladder cancer and urinary tract reconstruction — the Department of Urology at Mittal Hospital is your single destination for all urological care. Equipped with Holmium laser, flexible ureteroscopes and HD laparoscopic systems, we offer the full range of minimally invasive procedures — meaning shorter hospital stays, less pain and faster recovery. Our team also handles emergency urology including urinary retention, severe urinary tract infections and stone-induced colic. Every patient receives a clear written treatment plan and pricing estimate before the procedure.',
    heroImage: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1400&q=80',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80',
    ],
    conditions: [
      { name: 'Kidney Stones', text: 'Severe colicky pain — managed by laser surgery (RIRS) or PCNL with same-day or next-day discharge.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80' },
      { name: 'Enlarged Prostate (BPH)', text: 'Difficulty in urination in older men — managed with medication or laser TURP.', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80' },
      { name: 'Urinary Tract Infections', text: 'Recurrent UTIs evaluated thoroughly to identify and treat the underlying cause.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
      { name: 'Prostate & Bladder Cancer', text: 'Diagnosed by PSA, biopsy and imaging — treated by surgery and multimodality therapy.', image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=600&q=80' },
      { name: 'Male Infertility', text: 'Workup and treatment for male-factor infertility including microsurgical procedures.', image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=600&q=80' },
      { name: 'Pediatric Urology', text: 'Congenital problems of the urinary tract in children — managed with sensitivity and expertise.', image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=600&q=80' },
    ],
    proceduresDetailed: [
      { name: 'Laser Stone Surgery (RIRS)', text: 'Retrograde intra-renal surgery using flexible scope and Holmium laser — stone-free in a single session, no cuts.', image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=900&q=80' },
      { name: 'PCNL', text: 'Percutaneous nephrolithotomy for large kidney stones — keyhole approach with same-week discharge.', image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=900&q=80' },
      { name: 'TURP (Prostate Surgery)', text: 'Trans-urethral resection of the prostate for BPH — bipolar or laser approach with quick recovery.', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80' },
      { name: 'Laparoscopic Urology', text: 'Laparoscopic nephrectomy, pyeloplasty and adrenal surgery — small cuts, faster recovery.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80' },
      { name: 'Uro-Oncology Surgery', text: 'Radical surgery for prostate, kidney and bladder cancer — open and minimally invasive options.', image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=900&q=80' },
      { name: 'Cystoscopy', text: 'Direct visual examination of the bladder for haematuria, recurrent UTI and tumour follow-up.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80' },
    ],
    treatments: [
      'Laser Stone Surgery (RIRS)', 'PCNL', 'TURP (Prostate Surgery)',
      'Laparoscopic Urology', 'Uro-Oncology', 'Pediatric Urology',
    ],
    symptoms: [
      'Severe pain in the side or back',
      'Burning or pain while urinating',
      'Blood in urine',
      'Difficulty starting or stopping urination',
      'Frequent urination, especially at night',
      'Lump in the testicular region',
    ],
    whyChoose: [
      { title: 'Holmium laser', text: 'Modern Holmium laser system for stones and prostate — gold standard with shortest recovery.', image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=900&q=80' },
      { title: 'Minimal invasion', text: 'Most procedures done as day-care or 1-day stay — back to work in 3–5 days.', image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=900&q=80' },
      { title: 'Transparent pricing', text: 'Written treatment plan and price estimate before any procedure — no surprises.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80' },
    ],
    stats: [
      { value: '1,200+', label: 'Stone procedures / year' },
      { value: '< 24 hrs', label: 'Average stay for RIRS' },
      { value: '95%+', label: 'Stone-free rate' },
    ],
    faqs: [
      { q: 'How long is the hospital stay for laser stone surgery?', a: 'Most patients are discharged the same day or the next morning after laser stone surgery (RIRS). PCNL needs a 2–3 day stay.' },
      { q: 'Will TURP affect sexual function?', a: 'Modern TURP using bipolar or laser energy preserves erectile function in most men. Detailed counselling is offered before the procedure.' },
      { q: 'When should men get a PSA test?', a: 'Annual PSA screening is recommended for men over 50, or over 45 if there is a family history of prostate cancer.' },
      { q: 'Do you treat recurrent stones?', a: 'Yes — recurrent stone-formers undergo metabolic workup and are placed on a personalised diet and medication plan to prevent recurrence.' },
    ],
  },

  {
    slug: 'oncology',
    name: 'Surgical Oncology',
    icon: 'fa-ribbon',
    tagline: 'Comprehensive cancer care, close to home.',
    short: 'Cancer surgery, multimodal therapy, tumor board & survivor support.',
    description:
      'Comprehensive cancer surgery program with tumor-board-driven planning and coordinated medical & radiation oncology partnerships.',
    overview:
      'A cancer diagnosis is one of life’s most difficult moments — and you should not have to travel hundreds of kilometres for world-class treatment. The Department of Surgical Oncology at Mittal Hospital brings tumor-board-driven cancer care to the Ajmer region, with senior MCh-trained surgical oncologists handling everything from early-stage breast cancer to complex GI and head-and-neck cancers. Every case is reviewed by a multidisciplinary tumor board comprising surgeons, medical oncologists, radiation oncologists and pathologists — ensuring every patient gets a treatment plan as thorough as those offered at premier metro cancer centres. We also partner with the region’s leading centres for chemotherapy and radiation, so you receive coordinated, end-to-end care.',
    heroImage: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1400&q=80',
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80',
    ],
    conditions: [
      { name: 'Breast Cancer', text: 'Early detection by mammography — treated with breast-conservation surgery, modified radical mastectomy and reconstruction.', image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80' },
      { name: 'GI Cancers', text: 'Stomach, colon, rectal and pancreatic cancer — operated with curative intent backed by tumor-board planning.', image: 'https://images.unsplash.com/photo-1583912267550-d44c9c12fa0b?auto=format&fit=crop&w=600&q=80' },
      { name: 'Head & Neck Cancer', text: 'Oral, throat and thyroid cancers — operated with attention to function, speech and cosmesis.', image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=600&q=80' },
      { name: 'Gynae Cancers', text: 'Cervical, ovarian and endometrial cancer — comprehensive surgical and follow-up care.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80' },
      { name: 'Soft Tissue Sarcoma', text: 'Specialised surgery for sarcomas of the limbs and trunk — preserving limb function wherever possible.', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=600&q=80' },
      { name: 'Cancer Survivorship', text: 'Long-term follow-up clinic for cancer survivors — including emotional, nutritional and rehab support.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
    ],
    proceduresDetailed: [
      { name: 'Breast Conservation Surgery', text: 'Lumpectomy with sentinel lymph node biopsy — preserves the breast in eligible early-stage cancers.', image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=80' },
      { name: 'Modified Radical Mastectomy', text: 'Standard surgical option for advanced breast cancer — followed by reconstruction or prosthesis support.', image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=900&q=80' },
      { name: 'GI Oncology Surgery', text: 'Stomach, colon, rectum and pancreatic resections — open and laparoscopic approaches.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80' },
      { name: 'Head & Neck Surgery', text: 'Oral cancer resection with reconstruction, neck dissection and thyroid surgery.', image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=900&q=80' },
      { name: 'Tumor Board Reviews', text: 'Weekly multidisciplinary meetings to plan every cancer case — surgeon, oncologist, radiologist, pathologist together.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80' },
      { name: 'Cancer Screening Camps', text: 'Regular free screening camps for breast, oral and cervical cancer — driving early detection in the community.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80' },
    ],
    treatments: [
      'Cancer Surgery (All Major Sites)', 'Breast Conservation Surgery',
      'GI Oncology', 'Head & Neck Cancer Surgery', 'Multidisciplinary Tumor Board',
    ],
    symptoms: [
      'A new lump or thickening anywhere on the body',
      'Unexplained weight loss',
      'Persistent cough or hoarseness',
      'Mouth ulcer that does not heal',
      'Change in bowel or bladder habits',
      'Unusual bleeding or discharge',
    ],
    whyChoose: [
      { title: 'Tumor-board approach', text: 'Every case reviewed by a multidisciplinary team — same standard as premier metro centres.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80' },
      { title: 'MCh-trained team', text: 'Surgical oncologists with formal MCh super-specialty training and decades of operating experience.', image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=900&q=80' },
      { title: 'Local + metro care', text: 'Surgery here, chemo and radiation coordinated with leading centres — coordinated, no patient lost in transition.', image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=80' },
    ],
    stats: [
      { value: '400+', label: 'Cancer surgeries / year' },
      { value: 'Weekly', label: 'Tumor board meeting' },
      { value: 'Free', label: 'Screening camps' },
    ],
    faqs: [
      { q: 'How soon can surgery be scheduled after a cancer diagnosis?', a: 'Most cancer surgeries are scheduled within 1–2 weeks of confirmed diagnosis and staging, depending on the type and your fitness for surgery.' },
      { q: 'Will I lose my breast for breast cancer?', a: 'Many early-stage breast cancers can be treated with breast-conservation surgery (lumpectomy). The decision is made together with you based on tumour size, location and your preferences.' },
      { q: 'Do you offer chemotherapy here?', a: 'We coordinate medical oncology with leading regional centres. Surgery, follow-up and post-treatment rehab is handled here at Mittal Hospital.' },
      { q: 'How are second opinions handled?', a: 'You are encouraged to seek a second opinion — we readily share all reports and imaging, and even provide a written tumor-board opinion when requested.' },
    ],
  },

  {
    slug: 'neonatology',
    name: 'Neonatology',
    icon: 'fa-baby',
    tagline: 'Holding the smallest hands. Saving the smallest lives.',
    short: 'Level-III NICU, neonatal surgery, premature & critically ill newborn care.',
    description:
      'Level-III NICU for the smallest and sickest newborns with ventilator support, surfactant therapy and a dedicated neonatologist team.',
    overview:
      'When a baby arrives premature or critically ill, every minute matters. The Department of Neonatology at Mittal Hospital runs the region’s only Level-III Neonatal Intensive Care Unit (NICU) — equipped to handle babies as small as 800 grams. With on-site neonatologists, high-frequency ventilators, surfactant therapy and a neonatal transport team, we provide the same standard of care that the smallest babies receive at India’s top metro hospitals. Our family-centred approach means parents are kept fully informed, encouraged in Kangaroo Mother Care and supported through one of the most stressful experiences a family can face. Most of our preterm babies grow into healthy, thriving children — a testament to our team’s dedication.',
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    ],
    conditions: [
      { name: 'Prematurity', text: 'Babies born before 37 weeks — supported with ventilation, surfactant and nutrition until they are ready to go home.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80' },
      { name: 'Neonatal Jaundice', text: 'High bilirubin in newborns — managed with phototherapy and, rarely, exchange transfusion.', image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=600&q=80' },
      { name: 'Respiratory Distress', text: 'Difficulty breathing in newborns — treated with CPAP, surfactant and ventilation as needed.', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=600&q=80' },
      { name: 'Neonatal Sepsis', text: 'Infections in the newborn — diagnosed early with culture-driven antibiotic therapy.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80' },
      { name: 'Birth Asphyxia', text: 'Lack of oxygen at birth — managed with therapeutic hypothermia in eligible babies.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80' },
      { name: 'Congenital Anomalies', text: 'Heart defects, gut anomalies and other birth defects — diagnosed and managed with surgical partners.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
    ],
    proceduresDetailed: [
      { name: 'Level-III NICU Care', text: 'Twelve-bed neonatal intensive care with high-frequency ventilators, surfactant therapy and central monitoring.', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80' },
      { name: 'Surfactant Therapy', text: 'Life-saving lung-opening therapy for preterm respiratory distress — delivered within minutes of birth.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80' },
      { name: 'Kangaroo Mother Care', text: 'Skin-to-skin contact between mother and preterm baby — proven to improve weight gain and reduce infections.', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80' },
      { name: 'Phototherapy', text: 'Blue-light therapy for neonatal jaundice — done at the cotside under our nursery team’s supervision.', image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=900&q=80' },
      { name: 'Newborn Screening', text: 'Screening for congenital hypothyroidism, hearing loss, retinopathy and other treatable conditions.', image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=900&q=80' },
      { name: 'NICU Transport', text: 'Trained neonatal transport team with portable incubator — for safe transfer of sick newborns from other hospitals.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80' },
    ],
    treatments: [
      'Level-III NICU', 'Premature Baby Care', 'Neonatal Surgery',
      'Phototherapy', 'Kangaroo Mother Care', 'Newborn Screening',
    ],
    symptoms: [
      'Baby is not feeding well',
      'Yellow skin or eyes (jaundice)',
      'Rapid breathing or grunting',
      'Bluish discoloration around lips',
      'Excessive sleepiness or floppiness',
      'Fever or low body temperature',
    ],
    whyChoose: [
      { title: 'Level-III NICU', text: 'The only Level-III neonatal intensive care unit in the Ajmer division.', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80' },
      { title: '24/7 neonatologist', text: 'On-site neonatologist round the clock — not just paediatricians on call.', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80' },
      { title: 'Family-centred care', text: 'Parents are partners in care — daily updates, KMC support and lactation counselling.', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80' },
    ],
    stats: [
      { value: '12-bed', label: 'Level-III NICU' },
      { value: '800g', label: 'Smallest baby saved' },
      { value: '24×7', label: 'Neonatologist on-site' },
    ],
    faqs: [
      { q: 'How long do preterm babies stay in NICU?', a: 'On average, NICU stay equals (40 weeks − gestational age at birth). A 32-week baby may stay 4–6 weeks; a 28-week baby may stay 8–12 weeks.' },
      { q: 'Can I visit my baby in NICU?', a: 'Yes — parents are encouraged to visit, hold and feed the baby as soon as the baby is stable. Kangaroo Mother Care is actively supported.' },
      { q: 'Will my premature baby develop normally?', a: 'Most preterm babies catch up in growth and development by age 2. Long-term follow-up is offered to monitor development and address any issues early.' },
      { q: 'Is the NICU covered by insurance?', a: 'Yes — most insurance policies cover NICU admission. Our billing team will help you with cashless pre-authorisation.' },
    ],
  },

  {
    slug: 'orthopaedics',
    name: 'Orthopaedics',
    icon: 'fa-bone',
    tagline: 'Get back to doing what you love.',
    short: 'Joint replacement, arthroscopy, trauma care & sports injury management.',
    description:
      'Bone, joint and spine care from sports injuries to total joint replacement, supported by physiotherapy and rehabilitation.',
    overview:
      'Whether it is a sports injury, a fracture from a fall or a stubborn knee that has stopped you walking, the Department of Orthopaedics at Mittal Hospital is here to get you back on your feet. Our team performs over 500 joint replacements and 1,500 trauma surgeries each year — using modern implants, image-guided techniques and minimally invasive arthroscopy. The department also runs a sports injury clinic for athletes and an arthritis clinic for long-term joint care. Every patient who undergoes joint surgery follows a structured rehabilitation pathway in our in-house physiotherapy unit — meaning faster, more complete recovery.',
    heroImage: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1400&q=80',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542178243-bc20204b769f?auto=format&fit=crop&w=900&q=80',
    ],
    conditions: [
      { name: 'Knee Osteoarthritis', text: 'Worn-out knee joints causing pain and stiffness — managed with medication, physio or total knee replacement.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80' },
      { name: 'Hip Arthritis', text: 'Severe hip pain and limited movement — treated with hip replacement for excellent functional outcomes.', image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=600&q=80' },
      { name: 'Fractures & Trauma', text: '24/7 management of all bone fractures — operative and non-operative, including pelvis and spine.', image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=600&q=80' },
      { name: 'Sports Injuries', text: 'ACL tears, meniscus injuries and shoulder dislocations — managed by arthroscopic surgery.', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=600&q=80' },
      { name: 'Back Pain & Sciatica', text: 'Disc prolapse, spinal stenosis and chronic back pain — managed with rehab or surgery.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
      { name: 'Osteoporosis', text: 'Reduced bone density and fracture risk — assessed by DEXA scan and managed long-term.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80' },
    ],
    proceduresDetailed: [
      { name: 'Total Knee Replacement', text: 'High-flex, gender-specific knee implants for severe arthritis — most patients walk on day 1 after surgery.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80' },
      { name: 'Total Hip Replacement', text: 'Cement-less and uncemented hip prostheses with ceramic or polyethylene bearings for long implant life.', image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=900&q=80' },
      { name: 'Arthroscopy', text: 'Keyhole surgery for sports injuries — ACL reconstruction, meniscal repair and shoulder rotator cuff repair.', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80' },
      { name: 'Trauma Surgery', text: '24/7 fracture fixation with modern locking plates, intramedullary nails and external fixators.', image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=900&q=80' },
      { name: 'Spine Surgery', text: 'Discectomy, decompression and instrumented fixation — open and minimally invasive techniques.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80' },
      { name: 'In-house Rehabilitation', text: 'Structured rehab from day-1 post-op with our in-house physiotherapy team — faster, more complete recovery.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80' },
    ],
    treatments: [
      'Total Knee/Hip Replacement', 'Arthroscopy', 'Trauma & Fracture Care',
      'Spine Surgery', 'Sports Injury Clinic', 'Pediatric Orthopaedics',
    ],
    symptoms: [
      'Joint pain or swelling that does not settle',
      'Difficulty walking, climbing stairs or squatting',
      'A bone or joint deformity',
      'Severe pain after a fall or injury',
      'Numbness, tingling or weakness in arms/legs',
      'Persistent back or neck pain',
    ],
    whyChoose: [
      { title: 'Modern implants', text: 'High-flex knee and uncemented hip implants designed for an active Indian lifestyle.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80' },
      { title: 'Same-day mobilisation', text: 'Most joint replacement patients are walking with support on day 1 after surgery.', image: 'https://images.unsplash.com/photo-1542178243-bc20204b769f?auto=format&fit=crop&w=900&q=80' },
      { title: 'In-house physio', text: 'Structured rehab from day 1 — no fragmented care, no extra travel.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80' },
    ],
    stats: [
      { value: '500+', label: 'Joint replacements / year' },
      { value: '1,500+', label: 'Trauma surgeries / year' },
      { value: 'Day-1', label: 'Mobilisation post-op' },
    ],
    faqs: [
      { q: 'How long does a knee replacement last?', a: 'Modern knee implants typically last 15–20 years or more. Younger, more active patients may need a revision after that period.' },
      { q: 'When should I consider joint replacement?', a: 'When pain disturbs sleep, restricts daily activities and does not improve with medication, physio and weight loss — usually after age 55.' },
      { q: 'How long is the recovery after knee replacement?', a: 'Walking with support starts on day 1. Most patients return to routine activities in 6–8 weeks and full recovery is at 3 months.' },
      { q: 'Do you treat sports injuries in young patients?', a: 'Yes — our sports injury clinic handles ACL tears, meniscus injuries and shoulder injuries with arthroscopic surgery and structured rehab.' },
    ],
  },

  {
    slug: 'general-medicine',
    name: 'General Medicine',
    icon: 'fa-user-doctor',
    tagline: 'Your first stop for adult healthcare.',
    short: 'Diabetes, hypertension, infectious disease & comprehensive adult care.',
    description:
      'Adult outpatient and inpatient medicine including chronic-disease management, infection care and lifestyle counseling.',
    overview:
      'The Department of General Medicine at Mittal Hospital is the first stop for adult patients with any health concern — from fever and infections to long-term conditions like diabetes, hypertension and thyroid disease. Our physicians are also the coordinators-in-chief — connecting you to specialists, organising tests and following up to ensure your care is seamless. We run dedicated outpatient clinics for diabetes, hypertension and lifestyle diseases, and admit and treat acute medical conditions in our medical wards. Our team brings together evidence-based protocols, technology-enabled record-keeping and the kind of personal attention you would expect from a family physician — only with the resources of a multi-specialty hospital behind them.',
    heroImage: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1400&q=80',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    ],
    conditions: [
      { name: 'Diabetes', text: 'Type 1 and Type 2 diabetes — managed with insulin, oral drugs, diet and lifestyle counselling.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
      { name: 'Hypertension', text: 'High blood pressure — assessed for end-organ effects and treated long-term.', image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=600&q=80' },
      { name: 'Thyroid Disorders', text: 'Hyper- and hypothyroidism diagnosed by blood tests, ultrasound and managed lifelong.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80' },
      { name: 'Infections', text: 'Fever workup, antibiotic stewardship and treatment of dengue, malaria, typhoid and viral illnesses.', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80' },
      { name: 'Asthma & COPD', text: 'Chronic respiratory illness — managed with inhalers, pulmonary function tests and lifestyle changes.', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80' },
      { name: 'Anaemia', text: 'Iron-deficiency and other anaemias diagnosed and treated with diet, supplements or transfusion.', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=600&q=80' },
    ],
    proceduresDetailed: [
      { name: 'Diabetes Clinic', text: 'Structured outpatient clinic for diabetes — HbA1c monitoring, retinal screening and foot care.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80' },
      { name: 'Hypertension Clinic', text: 'Detailed BP workup, end-organ assessment and individualised drug therapy.', image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80' },
      { name: 'Fever Workup', text: 'Structured fever-of-unknown-origin workup with cultures and imaging.', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80' },
      { name: 'Preventive Health', text: 'Annual health checks for adults with risk-stratified screening tests and counselling.', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80' },
      { name: 'Geriatric Care', text: 'Comprehensive assessment of older adults — medications, falls, memory and nutrition.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80' },
      { name: 'Smoking Cessation', text: 'Counselling, nicotine-replacement therapy and follow-up for tobacco users.', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80' },
    ],
    treatments: [
      'Diabetes Care', 'Hypertension Clinic', 'Infectious Disease',
      'Preventive Health Checks', 'Geriatric Care', 'Thyroid Disorders',
    ],
    symptoms: [
      'Persistent fever or cough',
      'Unexplained weight gain or loss',
      'Excessive thirst or frequent urination',
      'Fatigue lasting more than 2 weeks',
      'High blood pressure on home reading',
      'Repeated infections or slow healing wounds',
    ],
    whyChoose: [
      { title: 'Dedicated clinics', text: 'Separate diabetes, hypertension and lifestyle clinics for structured long-term management.', image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80' },
      { title: 'Holistic approach', text: 'Specialists, dietitians and physiotherapists working under one roof for complete care.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80' },
      { title: 'Same-day reports', text: 'In-house pathology with same-day reporting for most routine blood tests.', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80' },
    ],
    stats: [
      { value: '50,000+', label: 'OPD visits / year' },
      { value: '40+', label: 'Conditions treated' },
      { value: 'Same day', label: 'Lab reports for most' },
    ],
    faqs: [
      { q: 'Do I need an appointment for OPD?', a: 'Walk-ins are welcome, but an online appointment guarantees a fixed slot. New patients can register at the front desk in 5 minutes.' },
      { q: 'Can I do my regular health check here?', a: 'Yes — our Health Checkup page lists 6 packages from Basic to Executive, with same-day reports and a physician summary.' },
      { q: 'How often should I see a physician for diabetes?', a: 'Every 3 months is standard for stable diabetes. Newly diagnosed or unstable cases may need more frequent visits initially.' },
      { q: 'Can a physician coordinate my specialist visits?', a: 'Absolutely — that is one of our core roles. We help organise tests, refer to specialists and follow up afterwards so your care is seamless.' },
    ],
  },

  {
    slug: 'paediatrics',
    name: 'Paediatrics',
    icon: 'fa-children',
    tagline: 'Gentle care for your little one.',
    short: 'Newborn to adolescent care, vaccination & developmental clinics.',
    description:
      'Full-spectrum child healthcare from immunizations and growth monitoring to pediatric ICU.',
    overview:
      'Children are not small adults — they need clinicians, equipment and an environment designed specifically for them. The Department of Paediatrics at Mittal Hospital cares for children from birth through adolescence, with a child-friendly OPD, a dedicated Paediatric Intensive Care Unit (PICU) and a vaccination clinic that follows the latest IAP schedule. We run specialised clinics for asthma, allergy, growth and development concerns, behavioural issues and adolescent health. Our team works hand-in-hand with the neonatology unit, so families have a single trusted team from birth to teenage years. Every child consultation includes parental education — because well-informed parents lead to healthier kids.',
    heroImage: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1400&q=80',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    ],
    conditions: [
      { name: 'Common Infections', text: 'Fever, cough, ear infections and gastroenteritis — managed with evidence-based protocols.', image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=600&q=80' },
      { name: 'Asthma & Allergy', text: 'Diagnosed with pulmonary function testing and managed with inhalers and avoidance strategies.', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80' },
      { name: 'Growth Concerns', text: 'Short stature, failure to thrive and feeding problems — assessed by our growth clinic.', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=600&q=80' },
      { name: 'Developmental Delay', text: 'Concerns about milestones — early assessment, therapy referrals and parental coaching.', image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=600&q=80' },
      { name: 'ADHD & Behaviour', text: 'Specialist assessment for attention difficulties, learning problems and adolescent issues.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80' },
      { name: 'Child Nutrition', text: 'Healthy weight, fussy eating and nutritional deficiencies — dietitian-led counselling.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
    ],
    proceduresDetailed: [
      { name: 'Vaccination Clinic', text: 'IAP-schedule vaccinations from birth through adolescence — with reminders and a digital vaccination card.', image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=900&q=80' },
      { name: 'Growth & Development Clinic', text: 'Regular growth monitoring with height-weight charts, milestone tracking and parental counselling.', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80' },
      { name: 'Paediatric ICU (PICU)', text: 'Critical care for children — ventilation, sepsis management, post-surgical observation.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=900&q=80' },
      { name: 'Asthma Clinic', text: 'Structured asthma management with PFT, inhaler technique training and a written action plan.', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80' },
      { name: 'Adolescent Health', text: 'Confidential care for teenagers — puberty, menstrual, mental health and sexuality concerns.', image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=900&q=80' },
      { name: 'Newborn Follow-up', text: 'Routine follow-up for healthy newborns and NICU graduates — feeding, growth and immunisation.', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80' },
    ],
    treatments: [
      'Routine Vaccination', 'Growth & Development Clinic',
      'Pediatric ICU', 'Child Nutrition', 'Asthma Clinic', 'Adolescent Health',
    ],
    symptoms: [
      'Fever lasting more than 3 days',
      'Poor feeding or weight loss',
      'Persistent cough or wheezing',
      'Delay in developmental milestones',
      'Bedwetting beyond age 5',
      'Behavioural or attention difficulties',
    ],
    whyChoose: [
      { title: 'Child-friendly OPD', text: 'Bright, kid-friendly waiting area with toys, books and child-trained nurses.', image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=900&q=80' },
      { title: 'PICU + NICU', text: 'Both neonatal and paediatric intensive care under one roof — seamless transition as children grow.', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80' },
      { title: 'Parental coaching', text: 'Every consultation includes parental education — well-informed parents raise healthier kids.', image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=900&q=80' },
    ],
    stats: [
      { value: '20,000+', label: 'Paediatric visits / year' },
      { value: 'IAP', label: 'Vaccination schedule' },
      { value: 'PICU', label: 'Children’s ICU on-site' },
    ],
    faqs: [
      { q: 'What vaccination schedule do you follow?', a: 'We follow the Indian Academy of Paediatrics (IAP) schedule — the most up-to-date national standard. A digital vaccination card is provided.' },
      { q: 'When should I worry about my child’s growth?', a: 'If your child is consistently below the 3rd centile or has crossed two centile lines downward, an evaluation at our growth clinic is recommended.' },
      { q: 'Can I bring my teenager separately?', a: 'Yes — for sensitive issues we offer confidential adolescent consultations, with parents joining or stepping out depending on the teen’s preference.' },
      { q: 'Do you offer home visits for newborns?', a: 'No — but the first newborn visit can be scheduled within the first week of discharge, and tele-consultation is available for non-urgent queries.' },
    ],
  },

  {
    slug: 'obstetrics-gynaecology',
    name: 'Obstetrics & Gynaecology',
    icon: 'fa-person-pregnant',
    tagline: 'Women’s health — every life stage.',
    short: 'High-risk pregnancy, laparoscopic gynae surgery & fertility support.',
    description:
      'Comprehensive women’s health from antenatal care to advanced laparoscopic gynae surgery and menopause management.',
    overview:
      'From the joy of pregnancy to the challenges of menopause, women have unique healthcare needs at every stage of life. The Department of Obstetrics & Gynaecology at Mittal Hospital provides comprehensive women’s healthcare — including antenatal care, normal and assisted deliveries, high-risk pregnancy management, advanced laparoscopic gynae surgery, infertility workup and menopause care. Our birthing suites are designed for comfort and dignity, with options for natural birth, water birth and painless delivery. The department works closely with our Level-III NICU, so high-risk pregnancies are managed with complete confidence. We also run a dedicated PCOS clinic, a high-risk pregnancy clinic and a menopause clinic — each with structured protocols and gentle, sensitive care.',
    heroImage: 'https://images.unsplash.com/photo-1584467735867-4297ae2ebcef?auto=format&fit=crop&w=1400&q=80',
    image: 'https://images.unsplash.com/photo-1584467735867-4297ae2ebcef?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80',
    ],
    conditions: [
      { name: 'Pregnancy Care', text: 'Routine and high-risk antenatal care with ultrasound, screening and personalised birth planning.', image: 'https://images.unsplash.com/photo-1584467735867-4297ae2ebcef?auto=format&fit=crop&w=600&q=80' },
      { name: 'PCOS', text: 'Polycystic ovary syndrome — managed with lifestyle, medication and fertility support.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
      { name: 'Fibroids', text: 'Uterine fibroids causing pain or bleeding — managed medically or with myomectomy.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80' },
      { name: 'Endometriosis', text: 'A painful condition where uterine tissue grows outside the uterus — diagnosed and managed surgically.', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=600&q=80' },
      { name: 'Infertility', text: 'Comprehensive male and female fertility workup with timed protocols and IUI.', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80' },
      { name: 'Menopause', text: 'Hot flushes, mood changes and bone health — managed with our menopause clinic.', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80' },
    ],
    proceduresDetailed: [
      { name: 'Antenatal Care', text: 'Comprehensive prenatal package with all visits, ultrasounds, blood tests and counselling.', image: 'https://images.unsplash.com/photo-1584467735867-4297ae2ebcef?auto=format&fit=crop&w=900&q=80' },
      { name: 'Painless / Natural Delivery', text: 'Comfortable birthing suites, epidural analgesia for painless delivery, and natural-birth-friendly protocols.', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80' },
      { name: 'Caesarean Section', text: 'Safe, gentle caesarean delivery with skin-to-skin contact and breastfeeding support immediately after.', image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=900&q=80' },
      { name: 'Laparoscopic Surgery', text: 'Minimally invasive surgery for fibroids, ovarian cysts, endometriosis and hysterectomy.', image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=900&q=80' },
      { name: 'High-Risk Pregnancy', text: 'Specialised care for diabetes, hypertension, twin pregnancy and other complex pregnancies.', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80' },
      { name: 'Well-Woman Check', text: 'Annual check-up including Pap smear, breast exam, pelvic ultrasound and bone density screen.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80' },
    ],
    treatments: [
      'Antenatal Care', 'High-Risk Pregnancy', 'Laparoscopic Hysterectomy',
      'Infertility Workup', 'Menopause Clinic', 'Well-Woman Checks',
    ],
    symptoms: [
      'Irregular or heavy periods',
      'Severe period pain',
      'Difficulty conceiving',
      'Vaginal bleeding between periods',
      'Persistent pelvic pain',
      'Menopausal symptoms affecting daily life',
    ],
    whyChoose: [
      { title: 'Painless delivery', text: 'Epidural analgesia and a calm birthing environment — for the kindest birth experience.', image: 'https://images.unsplash.com/photo-1584467735867-4297ae2ebcef?auto=format&fit=crop&w=900&q=80' },
      { title: 'High-risk team', text: 'Obstetricians + Level-III NICU + senior anaesthesia team — high-risk pregnancies in safe hands.', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80' },
      { title: 'Laparoscopic gynae', text: 'Modern laparoscopic and hysteroscopic surgery for faster recovery and less scarring.', image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=900&q=80' },
    ],
    stats: [
      { value: '1,500+', label: 'Deliveries / year' },
      { value: 'Level-III', label: 'NICU under same roof' },
      { value: '24×7', label: 'OB/Gyn cover' },
    ],
    faqs: [
      { q: 'When should I start antenatal visits?', a: 'Ideally before 12 weeks. The first visit includes a thorough assessment, blood tests, ultrasound and a personalised pregnancy plan.' },
      { q: 'Is painless delivery safe?', a: 'Yes — epidural analgesia is one of the safest pain-relief options. It is administered by trained anaesthetists with full monitoring.' },
      { q: 'Can I plan a normal delivery after a previous C-section?', a: 'In many cases yes — VBAC (Vaginal Birth After Caesarean) is offered to suitable candidates with continuous monitoring.' },
      { q: 'How often should I get a Pap smear?', a: 'Every 3 years for women aged 21–65, or every 5 years if combined with HPV testing.' },
    ],
  },

  {
    slug: 'general-surgery',
    name: 'General Surgery',
    icon: 'fa-syringe',
    tagline: 'Modern surgery, faster recovery.',
    short: 'Laparoscopic & open surgery — hernia, gallbladder, appendix & more.',
    description:
      'A modern surgical team performing both routine and complex laparoscopic procedures with quick recovery protocols.',
    overview:
      'The Department of General Surgery at Mittal Hospital is built around one principle: do the most modern, least invasive surgery possible — so patients go home faster, heal better and get back to life sooner. From routine laparoscopic gallbladder and hernia surgery to complex GI and onco-surgeries, our team handles the full spectrum of adult surgery. With high-definition laparoscopy, modern energy devices and an Enhanced Recovery After Surgery (ERAS) protocol, most of our patients are eating the same evening and walking the next morning. Every patient gets a transparent treatment plan, written cost estimate and clear discharge instructions — so there are no surprises.',
    heroImage: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=1400&q=80',
    image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80',
    ],
    conditions: [
      { name: 'Gallstones', text: 'Symptomatic gallstones — treated with laparoscopic cholecystectomy as a day-care procedure.', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80' },
      { name: 'Hernia', text: 'Inguinal, umbilical, incisional and hiatus hernia — repaired with mesh by laparoscopic or open techniques.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80' },
      { name: 'Appendicitis', text: 'Acute appendicitis — diagnosed by ultrasound or CT and treated with laparoscopic appendectomy.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80' },
      { name: 'Thyroid Disease', text: 'Goitres, nodules and thyroid cancer — managed with FNA, ultrasound and minimal-scar surgery.', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=600&q=80' },
      { name: 'Breast Lumps', text: 'Evaluated by triple assessment — clinical exam, imaging and biopsy — with surgery if needed.', image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80' },
      { name: 'Piles & Fissure', text: 'Anorectal conditions — managed medically or by minimally invasive procedures like MIPH.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
    ],
    proceduresDetailed: [
      { name: 'Laparoscopic Cholecystectomy', text: 'Keyhole gallbladder removal — most patients discharged the same day or next morning.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80' },
      { name: 'Hernia Repair', text: 'Mesh repair of all hernia types — laparoscopic where appropriate for faster recovery and lower recurrence.', image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=900&q=80' },
      { name: 'Appendectomy', text: 'Emergency or planned removal of the appendix — done laparoscopically with 1–2 day stay.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=900&q=80' },
      { name: 'Thyroid Surgery', text: 'Hemi- and total thyroidectomy for nodules, goitres and thyroid cancer — with nerve monitoring.', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80' },
      { name: 'Breast Surgery', text: 'Lumpectomy, mastectomy and sentinel node biopsy for benign and malignant breast disease.', image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=80' },
      { name: 'Anorectal Surgery', text: 'Minimal-invasive procedures for piles, fissure, fistula and pilonidal sinus.', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80' },
    ],
    treatments: [
      'Laparoscopic Cholecystectomy', 'Hernia Repair', 'Appendectomy',
      'Thyroid Surgery', 'Breast Surgery', 'Anorectal Surgery',
    ],
    symptoms: [
      'Persistent abdominal pain',
      'A new lump anywhere on the body',
      'Painful swelling in the groin (hernia)',
      'Pain or swelling in the neck (thyroid)',
      'Bleeding from the back passage',
      'Sudden severe abdominal pain (emergency)',
    ],
    whyChoose: [
      { title: 'ERAS protocol', text: 'Enhanced Recovery After Surgery — eat the same evening, walk the next morning, home in 1–2 days.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80' },
      { title: 'HD laparoscopy', text: 'High-definition laparoscopic equipment for sharper vision and faster, safer surgery.', image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=900&q=80' },
      { title: 'Transparent pricing', text: 'Written cost estimate before any procedure — including OT, implants, anaesthesia and stay.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80' },
    ],
    stats: [
      { value: '2,500+', label: 'Surgeries / year' },
      { value: '80%+', label: 'Done laparoscopically' },
      { value: '1–2 days', label: 'Typical hospital stay' },
    ],
    faqs: [
      { q: 'How soon can I go home after gallbladder surgery?', a: 'Most patients undergoing laparoscopic gallbladder surgery are discharged the same day or the next morning.' },
      { q: 'Is laparoscopic surgery better than open surgery?', a: 'For most conditions yes — smaller scars, less pain, faster recovery and lower infection risk. Not every condition is suitable, though, and your surgeon will explain.' },
      { q: 'Will I have a big scar?', a: 'Laparoscopic procedures leave 3–4 small marks of less than 1 cm each — barely visible after healing. Open surgery scars depend on the procedure.' },
      { q: 'How long before I can return to work?', a: 'Most laparoscopic patients return to desk work in 1 week and physical activity by 3–4 weeks. Open surgery may need 4–6 weeks of recovery.' },
    ],
  },
];

export const doctors = [
  { name: 'Dr. Rajesh Mittal', speciality: 'Senior Cardiologist', dept: 'cardiology', qualification: 'MD, DM (Cardiology), FACC', experience: 28, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80', languages: ['English', 'Hindi'], opd: 'Mon – Sat · 10 AM – 2 PM', online: true },
  { name: 'Dr. Priya Sharma', speciality: 'Gynaecologist', dept: 'obstetrics-gynaecology', qualification: 'MBBS, MS (OB-GYN)', experience: 18, image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80', languages: ['English', 'Hindi'], opd: 'Mon – Fri · 11 AM – 3 PM', online: true },
  { name: 'Dr. Anil Verma', speciality: 'Neurologist', dept: 'neurology', qualification: 'MD, DM (Neurology)', experience: 22, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80', languages: ['English', 'Hindi'], opd: 'Tue – Sat · 9 AM – 1 PM', online: true },
  { name: 'Dr. Suresh Gupta', speciality: 'Gastroenterologist', dept: 'gastroenterology', qualification: 'MD, DM (Gastro)', experience: 16, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80', languages: ['English', 'Hindi'], opd: 'Mon – Sat · 10 AM – 1 PM', online: true },
  { name: 'Dr. Meera Singh', speciality: 'Neurosurgeon', dept: 'neurology', qualification: 'MS, MCh (Neurosurgery)', experience: 19, image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=400&q=80', languages: ['English', 'Hindi'], opd: 'Mon, Wed, Fri · 11 AM – 2 PM' },
  { name: 'Dr. Kavita Joshi', speciality: 'Nephrologist', dept: 'nephrology', qualification: 'MD, DM (Nephrology)', experience: 14, image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80', languages: ['English', 'Hindi'], opd: 'Mon – Fri · 10 AM – 1 PM', online: true },
  { name: 'Dr. Vikram Khanna', speciality: 'Urologist', dept: 'urology', qualification: 'MS, MCh (Urology)', experience: 20, image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80', languages: ['English', 'Hindi'], opd: 'Mon – Sat · 11 AM – 2 PM' },
  { name: 'Dr. Ramesh Patel', speciality: 'Surgical Oncologist', dept: 'oncology', qualification: 'MS, MCh (Surgical Oncology)', experience: 24, image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=400&q=80', languages: ['English', 'Hindi'], opd: 'Mon, Wed, Fri · 10 AM – 1 PM', online: true },
  { name: 'Dr. Anjali Mehta', speciality: 'Neonatologist & Paediatrician', dept: 'neonatology', qualification: 'MD (Paed), Fellowship Neonatology', experience: 15, image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80', languages: ['English', 'Hindi'], opd: 'Mon – Sat · 9 AM – 12 PM', online: true },
  { name: 'Dr. Manoj Tiwari', speciality: 'Orthopaedic Surgeon', dept: 'orthopaedics', qualification: 'MS (Ortho), Fellowship Joint Replacement', experience: 21, image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=400&q=80', languages: ['English', 'Hindi'], opd: 'Mon – Sat · 10 AM – 1 PM' },
  { name: 'Dr. Sunita Rao', speciality: 'Physician & Diabetologist', dept: 'general-medicine', qualification: 'MD (Medicine)', experience: 17, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80', languages: ['English', 'Hindi'], opd: 'Mon – Sat · 9 AM – 1 PM', online: true },
  { name: 'Dr. Pooja Agarwal', speciality: 'Obstetrician & Gynaecologist', dept: 'obstetrics-gynaecology', qualification: 'MS (OB-GYN)', experience: 13, image: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?auto=format&fit=crop&w=400&q=80', languages: ['English', 'Hindi'], opd: 'Mon – Fri · 10 AM – 1 PM', online: true },
];

export const services = [
  {
    slug: 'blood-bank', name: 'Blood Bank',
    desc: 'A 24/7 licensed blood bank with full component separation — red cells, plasma and platelets — supporting both our hospital and emergency requests from across the region.',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'cath-lab', name: 'Cath Lab',
    desc: 'Modern cardiac catheterisation lab equipped for diagnostic angiography, interventional angioplasty, pacemaker implantation and emergency primary PCI — staffed round the clock.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'dialysis', name: 'Dialysis Centre',
    desc: 'The largest dialysis centre in the Ajmer division — 18 hemodialysis stations including dedicated isolation chairs for hepatitis-positive patients, ensuring zero cross-infection.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'physiotherapy', name: 'Physiotherapy',
    desc: 'In-patient and out-patient physiotherapy and rehabilitation — post-surgery, post-stroke, sports injuries and chronic pain. Structured rehab pathways for joint replacement patients.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'pathology', name: 'Pathology Lab',
    desc: 'Fully automated NABL-ready pathology lab with same-day reporting for routine tests, including biochemistry, haematology, microbiology and histopathology — all under one roof.',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'radiology', name: 'Radiology & Imaging',
    desc: 'Modern CT, MRI, Digital X-Ray, Ultrasound, 4D imaging and Mammography under one roof — with reports issued by experienced radiologists, often the same day.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'icu', name: 'ICU / CCU / NICU',
    desc: 'Multi-disciplinary critical care with 24/7 intensivist cover — including general ICU, Cardiac Care Unit (CCU) and the region’s only Level-III Neonatal Intensive Care Unit (NICU).',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'pharmacy', name: 'In-house Pharmacy',
    desc: 'Round-the-clock pharmacy stocking life-saving emergency medication, prescription drugs and surgical consumables — so families never have to step outside the hospital.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'ambulance', name: 'Ambulance Service',
    desc: 'Fleet of Advanced Cardiac Life Support (ACLS) ambulances staffed by trained paramedics — for pickups from home and inter-hospital transfers, available 24×7 anywhere in the city.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'health-checkup', name: 'Health Checkup',
    desc: 'Six preventive health packages — from a 2-hour Basic screen to the full Executive workup, plus women-specific, senior citizen and diabetic care packages with same-day reports.',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80',
  },
];

export const healthPackages = [
  {
    slug: 'basic',
    name: 'Basic Health Check',
    price: 1499,
    duration: '2 hours',
    forWhom: 'Adults 18–35 years',
    tests: ['CBC', 'Blood Sugar (FBS)', 'Urine Routine', 'ECG', 'Chest X-Ray', 'Physician Consult', 'BMI & BP', 'Lipid Profile'],
  },
  {
    slug: 'comprehensive',
    name: 'Comprehensive',
    price: 2999,
    duration: '3 hours',
    forWhom: 'Adults 30–50 years',
    popular: true,
    tests: ['Everything in Basic', 'LFT', 'KFT', 'TSH', 'Ultrasound Abdomen', 'TMT / Stress Test', 'Eye & Dental', 'Dietician Consult'],
  },
  {
    slug: 'executive',
    name: 'Executive Premium',
    price: 5499,
    duration: '4–5 hours',
    forWhom: 'Adults 40+ / High-Stress Jobs',
    tests: ['Everything in Comprehensive', '2D Echocardiogram', 'Cardiac Markers', 'PFT', 'HbA1c', 'Vitamin D & B12', 'PSA / Pap Smear', 'Cancer Screen'],
  },
  {
    slug: 'women',
    name: 'Women’s Wellness',
    price: 3499,
    duration: '3 hours',
    forWhom: 'Women 25+',
    tests: ['CBC', 'Thyroid', 'Pap Smear', 'Mammography', 'Pelvic Ultrasound', 'Vitamin D', 'Bone Density Screen', 'Gynae Consult'],
  },
  {
    slug: 'senior',
    name: 'Senior Citizen Care',
    price: 4499,
    duration: '4 hours',
    forWhom: '60+ years',
    tests: ['Comprehensive Tests', 'Cardiac Workup', 'Bone Density', 'Cognitive Assessment', 'Geriatric Consult', 'Eye Pressure', 'Audiometry'],
  },
  {
    slug: 'diabetic',
    name: 'Diabetic Care',
    price: 1999,
    duration: '2 hours',
    forWhom: 'Diabetics / Pre-Diabetics',
    tests: ['HbA1c', 'FBS / PPBS', 'Lipid', 'KFT', 'Urine Micro Albumin', 'Eye Check (Fundus)', 'Foot Exam', 'Diabetologist Consult'],
  },
];

export const testimonials = [
  { name: 'Rakesh Sharma', role: 'Cardiac Patient', text: 'The cardiology team saved my father’s life during a midnight emergency. From the ambulance team to the cath lab, every step was world class.', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
  { name: 'Sunita Devi', role: 'Maternity Patient', text: 'My delivery was handled with so much care and dignity. The nurses became like family during my stay.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80' },
  { name: 'Mohan Lal', role: 'Knee Replacement', text: 'After my knee replacement I was walking in 2 days. The physio team made all the difference.', rating: 5, image: 'https://images.unsplash.com/photo-1542178243-bc20204b769f?auto=format&fit=crop&w=200&q=80' },
  { name: 'Priya Joshi', role: 'NICU Family', text: 'Our preterm baby came home healthy thanks to the dedicated NICU team. Forever grateful.', rating: 5, image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=200&q=80' },
];

export const events = [
  { date: '2026-06-14', title: 'Free Heart Screening Camp', desc: 'Free ECG, BP and lipid profile for the community. No appointment needed.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80' },
  { date: '2026-06-21', title: 'World Yoga Day Special', desc: 'Free yoga session by certified instructors with health pack giveaways.', image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=900&q=80' },
  { date: '2026-07-11', title: 'Diabetes Awareness Workshop', desc: 'Interactive session with diabetologists and dietitians.', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=900&q=80' },
  { date: '2026-08-08', title: 'Breast Cancer Awareness Walk', desc: 'A community walk + free screening drive.', image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=80' },
];

export const blogPosts = [
  { slug: '10-warning-signs-heart-attack', title: '10 Warning Signs of a Heart Attack You Should Never Ignore', excerpt: 'Knowing the early warning signs can save a life — yours or someone you love.', author: 'Dr. Rajesh Mittal', date: '2026-04-22', readTime: '6 min', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80', tag: 'Cardiology' },
  { slug: 'managing-diabetes-naturally', title: 'Managing Type-2 Diabetes Naturally: Diet, Exercise & More', excerpt: 'A practical guide to controlling blood sugar with lifestyle changes — evidence-based.', author: 'Dr. Sunita Rao', date: '2026-04-15', readTime: '8 min', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80', tag: 'Diabetes' },
  { slug: 'monsoon-illness-prevention', title: 'Monsoon Illnesses: How to Keep Your Family Safe', excerpt: 'Dengue, malaria and waterborne diseases peak in monsoon — prevention checklist.', author: 'Dr. Anil Verma', date: '2026-04-03', readTime: '5 min', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80', tag: 'Prevention' },
  { slug: 'preparing-for-pregnancy', title: 'Preparing for a Healthy Pregnancy: A First-Trimester Guide', excerpt: 'Everything mothers-to-be should know in the first 12 weeks.', author: 'Dr. Priya Sharma', date: '2026-03-28', readTime: '7 min', image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=900&q=80', tag: 'Maternity' },
];

export const careers = [
  { title: 'Consultant Cardiologist', dept: 'Cardiology', type: 'Full-time', location: 'Ajmer', exp: '6+ years' },
  { title: 'Staff Nurse — ICU', dept: 'Nursing', type: 'Full-time', location: 'Ajmer', exp: '2+ years' },
  { title: 'Radiology Technician', dept: 'Radiology', type: 'Full-time', location: 'Ajmer', exp: '3+ years' },
  { title: 'Front Office Executive', dept: 'Administration', type: 'Full-time', location: 'Ajmer', exp: '1+ years' },
  { title: 'Junior Physiotherapist', dept: 'Physiotherapy', type: 'Full-time', location: 'Ajmer', exp: 'Fresher / 1 yr' },
  { title: 'Pharmacist (D.Pharm / B.Pharm)', dept: 'Pharmacy', type: 'Full-time', location: 'Ajmer', exp: '1+ years' },
];

export const facilities = [
  { name: 'Modular Operation Theatres', icon: 'fa-bed-pulse', desc: '6 modular OTs with laminar airflow and HEPA filtration.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80' },
  { name: 'Intensive Care Units', icon: 'fa-heart-pulse', desc: 'Multi-bed ICU, CCU and NICU with multi-para monitors & ventilators.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=900&q=80' },
  { name: 'In-Patient Rooms', icon: 'fa-bed', desc: 'Single, twin-sharing and deluxe suites with attendant facilities.', image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80' },
  { name: 'Pathology Lab', icon: 'fa-vial', desc: 'Fully automated diagnostic lab with same-day reporting.', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80' },
  { name: 'Radiology & Imaging', icon: 'fa-magnifying-glass-chart', desc: 'CT, MRI, Digital X-Ray, USG and 4D imaging.', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80' },
  { name: 'Cafeteria & Waiting Lounges', icon: 'fa-mug-hot', desc: 'Hygienic, spacious lounges and a diet-compliant cafeteria.', image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=900&q=80' },
];

// Insurance partners — styled brand badges (sample placeholders, user replaces with real logos).
// `domain` is used to fetch a tiny favicon accent via Google's reliable S2 service.
// `color` is the partner's primary brand colour for the logo card.
// `mark` is a short stylized brand initial that anchors the badge visually.
export const empanelments = [
  { name: 'Star Health',         short: 'Star Health',     tagline: 'Insurance',         color: '#0866b8', mark: 'S',  domain: 'starhealth.in' },
  { name: 'HDFC Ergo',           short: 'HDFC ERGO',       tagline: 'General Insurance', color: '#004c8f', mark: 'H',  domain: 'hdfcergo.com' },
  { name: 'ICICI Lombard',       short: 'ICICI Lombard',   tagline: 'General Insurance', color: '#b22128', mark: 'I',  domain: 'icicilombard.com' },
  { name: 'New India Assurance', short: 'New India',       tagline: 'Assurance',         color: '#1a3a8e', mark: 'N',  domain: 'newindia.co.in' },
  { name: 'Bajaj Allianz',       short: 'Bajaj Allianz',   tagline: 'General Insurance', color: '#002663', mark: 'B',  domain: 'bajajallianz.com' },
  { name: 'Care Health',         short: 'Care Health',     tagline: 'Insurance',         color: '#ed1c24', mark: 'C',  domain: 'careinsurance.com' },
  { name: 'Niva Bupa',           short: 'Niva Bupa',       tagline: 'Health Insurance',  color: '#0d2c5c', mark: 'N',  domain: 'nivabupa.com' },
  { name: 'Tata AIG',            short: 'TATA AIG',        tagline: 'General Insurance', color: '#1a4d8c', mark: 'T',  domain: 'tataaig.com' },
  { name: 'Aditya Birla Health', short: 'Aditya Birla',    tagline: 'Health Insurance',  color: '#b71c1c', mark: 'A',  domain: 'adityabirlahealth.com' },
  { name: 'CGHS',                short: 'CGHS',            tagline: 'Government Scheme', color: '#0a6cb8', mark: 'G',  domain: null,             scheme: true },
  { name: 'ECHS',                short: 'ECHS',            tagline: 'Government Scheme', color: '#06a77d', mark: 'E',  domain: null,             scheme: true },
  { name: 'ESIC',                short: 'ESIC',            tagline: 'Government Scheme', color: '#0a6cb8', mark: 'E',  domain: 'esic.gov.in',     scheme: true },
];

export const milestones = [
  { year: 2005, text: 'Hospital founded as Gheesibai Memorial Mittal Hospital' },
  { year: 2009, text: 'Launched cardiac sciences with a modern Cath Lab' },
  { year: 2013, text: 'Became the first hospital in Ajmer Division to earn NABH accreditation' },
  { year: 2016, text: 'Expanded to 250 beds with Level-III NICU' },
  { year: 2019, text: 'Started medical tourism program for international patients' },
  { year: 2022, text: 'Crossed 500,000+ patient lives touched' },
  { year: 2025, text: 'Launched digital patient portal and 24/7 tele-consultation' },
];

export const galleryImages = [
  { src: 'https://mittalhospital.com/wp-content/uploads/2024/05/MittalHospital-Building-2.jpg', cat: 'Facility', alt: 'Mittal Hospital main building' },
  { src: 'https://mittalhospital.com/wp-content/uploads/2024/05/mittal-hospital-ajmer-building-1.jpeg', cat: 'Facility', alt: 'Mittal Hospital — Ajmer' },
  { src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80', cat: 'Facility', alt: 'Hospital reception' },
  { src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80', cat: 'Facility', alt: 'Operation theatre' },
  { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80', cat: 'Camps', alt: 'Health camp' },
  { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=900&q=80', cat: 'Facility', alt: 'ICU ward' },
  { src: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80', cat: 'Facility', alt: 'Neurology' },
  { src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80', cat: 'Facility', alt: 'Patient room' },
  { src: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80', cat: 'Facility', alt: 'Imaging' },
  { src: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80', cat: 'Facility', alt: 'Pathology' },
  { src: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=900&q=80', cat: 'Events', alt: 'Yoga day' },
  { src: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=80', cat: 'Events', alt: 'Awareness walk' },
  { src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80', cat: 'Camps', alt: 'Blood donation' },
  { src: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80', cat: 'Camps', alt: 'Wellness camp' },
];

export const videoConsultTestimonials = [
  { name: 'Sunita Devi', location: 'Ajmer, Rajasthan', text: 'I consulted Dr. Sharma over video for my pregnancy concerns. The call was clear, the doctor was patient and I got my e-prescription on WhatsApp within 5 minutes. Saved me a long trip.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80' },
  { name: 'Ramesh Gupta', location: 'Beawar, Rajasthan', text: 'My father has restricted mobility — we did his cardiology follow-up via video call. The doctor reviewed his reports on screen and adjusted his medication. Excellent service.', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
  { name: 'Priyanka Singh', location: 'Kishangarh, Rajasthan', text: 'Booked a paediatric video consultation for my son’s fever. Dr. Mehta calmed me down, gave clear advice and prescribed safely without an unnecessary hospital visit.', rating: 5, image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=200&q=80' },
];

export const secondOpinionTestimonials = [
  { name: 'Ramesh Gupta', location: 'Jaipur, Rajasthan', specialty: 'Neurology', text: 'My local doctor recommended brain surgery for a small tumour. The Mittal Hospital team reviewed my MRI and suggested a watch-and-wait approach. Two years later, the tumour is stable and I am healthy.', rating: 5, image: 'https://images.unsplash.com/photo-1542178243-bc20204b769f?auto=format&fit=crop&w=200&q=80' },
  { name: 'Priya Mehta', location: 'Dubai, UAE', specialty: 'Oncology', text: 'My mother’s breast cancer was staged as Stage 3 elsewhere. The tumor board at Mittal reviewed her scans and re-staged it as Stage 2 — which completely changed her treatment plan and outcome.', rating: 5, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' },
  { name: 'Ahmed Al-Rashidi', location: 'Kuwait City, Kuwait', specialty: 'Cardiology', text: 'I had been struggling with a rare arrhythmia. The Mittal cardiologist reviewed my reports online, identified the right diagnosis and connected me with an in-person consultation.', rating: 5, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
];

export const faqs = [
  { q: 'How do I book an appointment?', a: 'Use our online appointment form, call +91 145 2603 603, or visit the front desk. You will receive an SMS confirmation.' },
  { q: 'Do you accept cashless health insurance?', a: 'Yes — we are empanelled with most major insurers including CGHS, ECHS and leading TPAs. Please carry your card and a valid ID.' },
  { q: 'Are emergency services available 24/7?', a: 'Yes, our emergency and trauma centre is open round the clock with on-call specialists and ambulance support.' },
  { q: 'Can I get a second opinion remotely?', a: 'Absolutely. Submit your reports through the second-opinion form and a specialist will respond within 48 hours.' },
  { q: 'Do you offer international patient services?', a: 'Yes — we provide visa letters, airport pick-up, language support and discounted packages for international patients.' },
];

// Core leadership team — shown on /core-team
export const coreTeam = {
  promoters: [
    {
      name: 'Dr. Dilip Mittal',
      role: 'Founder & Chairman',
      qualification: 'MBBS, MD (Medicine)',
      bio: 'Founder visionary of Mittal Hospital. Built the institution from a small memorial unit in 2005 into the first NABH-accredited multi-specialty hospital of Ajmer division — guided by an unwavering belief in ethical, affordable healthcare.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Smt. Manju Mittal',
      role: 'Co-Founder & Trustee',
      qualification: 'BA, Social Work',
      bio: 'Co-founder and a guiding force behind the hospital’s patient-first culture. Oversees community outreach, free health camps and the hospital’s social-welfare programs across the Ajmer region.',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80',
    },
  ],
  executives: [
    {
      name: 'Dr. Rohit Mittal',
      role: 'Chief Executive Officer',
      qualification: 'MBBS, MBA (Healthcare)',
      bio: 'Leads day-to-day operations and strategic growth. Drove the hospital’s expansion to 250 beds, the introduction of digital records and the launch of the patient portal.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dr. Sushila Mittal',
      role: 'Medical Superintendent',
      qualification: 'MD (Medicine), Hospital Administration',
      bio: 'Heads clinical governance and the NABH quality program. Anchored the hospital’s first NABH cycle and continues to chair the patient-safety committee.',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Mr. Anil Mittal',
      role: 'Chief Financial Officer',
      qualification: 'CA, MBA (Finance)',
      bio: 'Custodian of the hospital’s financial discipline and pricing transparency. Built the empanelment program with leading insurers and TPAs.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Mr. Pankaj Sharma',
      role: 'Chief Operating Officer',
      qualification: 'MBA (Healthcare Operations)',
      bio: 'Manages clinical operations, facility services and patient experience. Brings 18 years of hospital-operations leadership across multiple tertiary centres.',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    },
  ],
  hods: [
    {
      name: 'Dr. Rajesh Mittal',
      role: 'HOD — Cardiology',
      qualification: 'MD, DM (Cardiology), FACC',
      bio: 'Senior interventional cardiologist with 28+ years of experience. Heads the Cath Lab and the 24/7 cardiac emergency service.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dr. Anil Verma',
      role: 'HOD — Neurology',
      qualification: 'MD, DM (Neurology)',
      bio: 'Leads the neurology and stroke-care program. Established the round-the-clock stroke-ready imaging and thrombolysis protocol.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dr. Suresh Gupta',
      role: 'HOD — Gastroenterology',
      qualification: 'MD, DM (Gastro)',
      bio: 'Senior gastroenterologist heading therapeutic endoscopy and ERCP services. Trained at premier institutes in India and abroad.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dr. Meera Singh',
      role: 'HOD — Neurosurgery',
      qualification: 'MS, MCh (Neurosurgery)',
      bio: 'Leads the neurosurgery and spine program. One of the few female neurosurgeons in the region; published widely in peer-reviewed journals.',
      image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dr. Ramesh Patel',
      role: 'HOD — Surgical Oncology',
      qualification: 'MS, MCh (Surgical Oncology)',
      bio: 'Anchors the tumor-board-driven cancer surgery program. Specializes in GI and head-and-neck oncology.',
      image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dr. Anjali Mehta',
      role: 'HOD — Neonatology',
      qualification: 'MD (Paed), Fellowship Neonatology',
      bio: 'Heads the Level-III NICU. Established the hospital’s premature-baby care and Kangaroo Mother Care programs.',
      image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dr. Manoj Tiwari',
      role: 'HOD — Orthopaedics',
      qualification: 'MS (Ortho), Fellowship Joint Replacement',
      bio: 'Senior orthopaedic surgeon specializing in total joint replacement, arthroscopy and trauma care.',
      image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dr. Pooja Agarwal',
      role: 'HOD — Obstetrics & Gynaecology',
      qualification: 'MS (OB-GYN)',
      bio: 'Leads the maternity and women’s health program. Routinely handles high-risk pregnancies and advanced laparoscopic gynae surgery.',
      image: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?auto=format&fit=crop&w=600&q=80',
    },
  ],
  administration: [
    {
      name: 'Mrs. Kiran Bhatia',
      role: 'Director — Nursing',
      qualification: 'M.Sc. Nursing',
      bio: 'Oversees nursing services, staff training and the hospital’s patient-care standards across all departments.',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Mr. Sanjay Khandelwal',
      role: 'Head — Human Resources',
      qualification: 'MBA (HR)',
      bio: 'Builds the people function — from clinical recruitment to staff welfare and continuous learning programs.',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Mr. Arun Joshi',
      role: 'Head — Quality & NABH',
      qualification: 'MHA, NABH Lead Assessor',
      bio: 'Drives the continuous-quality-improvement program and the cyclical NABH re-accreditation audits.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Mrs. Neha Saxena',
      role: 'Head — Patient Experience',
      qualification: 'MBA (Healthcare Services)',
      bio: 'Champions the patient-experience program — from front-desk training to grievance redressal.',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80',
    },
  ],
};
