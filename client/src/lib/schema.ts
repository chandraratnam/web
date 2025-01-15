export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Acupuncture",
  "name": "Dave Chandraratnam Acupuncture",
  "image": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
  "description": "Professional acupuncture and Chinese medicine services in East Gosford, NSW",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "37 Althorp Street",
    "addressLocality": "East Gosford",
    "addressRegion": "NSW",
    "postalCode": "2250",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.4333,
    "longitude": 151.3500
  },
  "url": "https://chandraratnam.com",
  "telephone": "(02) 4325 5448",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  ]
};
