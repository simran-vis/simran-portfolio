export function generateMetadata({
  title = "Simran Vishwakarma | Frontend Developer (React, Next.js)",
  description = "Simran Vishwakarma is a Frontend Developer skilled in React, Next.js, JavaScript, HTML, CSS, and modern web technologies.",
  url = "https://simran-vishwakarma.vercel.app/",
}) {
  return {
    title,
    description,
    keywords: [
      "Simran Vishwakarma",
      "Simran Vishwakarma Frontend Developer",
      "React Developer Portfolio",
      "Next.js Developer",
      "Frontend Developer India",
      "JavaScript Developer",
    ],
    authors: [{ name: "Simran Vishwakarma" }],
    creator: "Simran Vishwakarma",

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: "Simran Vishwakarma Portfolio",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    metadataBase: new URL(url),
  };
}
