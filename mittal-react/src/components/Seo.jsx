import { Helmet } from 'react-helmet-async';
import { hospital } from '../data/site';

export function Seo({ title, description, image, schema, path = '/' }) {
  const fullTitle = title ? `${title} | ${hospital.shortName}` : `${hospital.name} — NABH Accredited Hospital, Ajmer`;
  const url = `${hospital.url}${path}`;
  const desc = description || `${hospital.name} — Ajmer's first NABH accredited multi-specialty hospital offering 24/7 emergency care, advanced cardiology, neurology, oncology and more.`;
  const og = image || hospital.buildingMain;

  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Hospital',
    name: hospital.name,
    alternateName: hospital.alternateName,
    url: hospital.url,
    telephone: hospital.phone,
    email: hospital.email,
    description: desc,
    address: {
      '@type': 'PostalAddress',
      streetAddress: hospital.address.line1,
      addressLocality: hospital.address.city,
      addressRegion: hospital.address.region,
      postalCode: hospital.address.postalCode,
      addressCountry: hospital.address.country,
    },
    medicalSpecialty: ['Cardiology', 'Neurology', 'Gastroenterology', 'Nephrology', 'Urology', 'Surgical Oncology', 'Neonatology'],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={og} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={og} />
      <script type="application/ld+json">{JSON.stringify(schema || baseSchema)}</script>
    </Helmet>
  );
}
