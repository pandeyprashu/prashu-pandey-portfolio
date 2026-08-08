import { education, experiences, profile, skillGroups } from "@/content";
import { siteConfig, siteUrl } from "@/lib/site";

/**
 * schema.org Person markup.
 *
 * This is what lets Google associate the name, the job title and the GitHub
 * and LinkedIn profiles with one entity, rather than treating the site as an
 * unattributed page that happens to mention a name.
 */
export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: siteConfig.description,
    url: siteUrl,
    image: `${siteUrl}/prashu-pandey.png`,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    sameAs: profile.socials.map((social) => social.href),
    worksFor: experiences.map((role) => ({
      "@type": "Organization",
      name: role.company,
    })),
    alumniOf: education.map((entry) => ({
      "@type": "CollegeOrUniversity",
      name: entry.institution,
    })),
    knowsAbout: skillGroups.flatMap((group) => group.items),
  };

  return (
    <script
      type="application/ld+json"
      // Content is built from local data, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
