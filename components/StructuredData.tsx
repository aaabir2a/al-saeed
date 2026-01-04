import Script from 'next/script';

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Al Saeed Trading & Contracting WLL",
    "alternateName": "Al Saeed Contracting",
    "url": "https://alsaeed.io",
    "logo": "https://alsaeed.io/logo/logo-transparent.png",
    "image": "https://alsaeed.io/logo/SMTC-LOGO.jpg",
    "description": "With over 14 years of excellence in civil construction in Qatar. Al Saeed Trading & Contracting delivers landmark infrastructure projects with integrity.",
    "foundingDate": "2009",
    "founder": {
        "@type": "Person",
        "name": "Engineer Mofijur Rahman"
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Flat 3, Floor 4, Building 30, Street 950, Umm Ghuwailina",
        "addressLocality": "Doha",
        "addressCountry": "QA"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+974-55799113",
        "contactType": "customer service",
        "email": "alsaeedcontractingtrading@gmail.com",
        "availableLanguage": ["English", "Arabic"]
    },
    "sameAs": [
        // Add your social media URLs when available
        // "https://www.facebook.com/alsaeedqa",
        // "https://www.linkedin.com/company/alsaeed",
        // "https://www.instagram.com/alsaeedqa"
    ],
    "areaServed": {
        "@type": "Country",
        "name": "Qatar"
    },
    "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 50,
        "maxValue": 100
    }
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Al Saeed Trading & Contracting WLL",
    "image": "https://alsaeed.io/logo/SMTC-LOGO.jpg",
    "url": "https://alsaeed.io",
    "telephone": "+974-55799113",
    "email": "alsaeedcontractingtrading@gmail.com",
    "priceRange": "$$$",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Flat 3, Floor 4, Building 30, Street 950, Umm Ghuwailina",
        "addressLocality": "Doha",
        "addressCountry": "QA"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.2854,
        "longitude": 51.5310
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            "opens": "08:00",
            "closes": "17:00"
        }
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "45"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Construction Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Building Construction",
                    "description": "Comprehensive concrete construction with 14+ years of expertise including paving, retaining walls, sidewalks, and cement stabilized base."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Excavation Services",
                    "description": "Expert earth moving and underground construction including excavation, grading, sewer and watermain installation."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Maintenance Services",
                    "description": "Professional maintenance for government, commercial, institutional, and industrial buildings."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "New Construction",
                    "description": "Design-build approach from concept to completion with energy efficient building solutions."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Renovation & Fit-Up",
                    "description": "Interior renovations, office space remodeling, commercial fit-ups, and electrical systems."
                }
            }
        ]
    }
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://alsaeed.io"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://alsaeed.io/#services"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Projects",
            "item": "https://alsaeed.io/#projects"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Contact",
            "item": "https://alsaeed.io/#contact"
        }
    ]
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Al Saeed Trading & Contracting WLL",
    "url": "https://alsaeed.io",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://alsaeed.io/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
};

export default function StructuredData() {
    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="local-business-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
