/**
 * Shapes for everything under `src/content`.
 *
 * Sections stay purely presentational and read from these modules, so updating
 * the site after a promotion or a new project is a data edit, never a JSX one.
 */

export type SocialLink = {
  label: string;
  href: string;
  /** Shown instead of the raw URL, e.g. "@pandeyprashu". */
  handle: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  /** Short line under the hero heading. */
  tagline: string;
  /** Longer prose for the About section, one string per paragraph. */
  bio: string[];
  availability: string;
  resumeUrl: string;
  socials: SocialLink[];
};

export type NavItem = {
  label: string;
  /** Element id of the target section, without the leading `#`. */
  id: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

/** A headline number pulled out of a project, e.g. "232" / "backend models". */
export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  /** One-line positioning, e.g. "On-demand beauty & grooming platform". */
  tagline: string;
  summary: string;
  metrics: ProjectMetric[];
  highlights: string[];
  stack: string[];
};

export type Education = {
  degree: string;
  abbreviation: string;
  institution: string;
  period: string;
  grade: string;
};
