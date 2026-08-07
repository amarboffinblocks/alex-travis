const EMAIL = "hello@example.com";
const PHONE = "+1 (555) 010-2048";
const PHONE_HREF = "tel:+15550102048";

const PROFILE_IMAGE =
  "https://cdn.prod.website-files.com/68702569b799febef1f58c88/6874024ecca5623a42ccd83f_03e5e77fc0cfea4491d607a4741fadfb_Profile%2002.avif";

const NAV_LINKS = [
  { label: "About", href: "#what-i-build" },
  { label: "Work", href: "#selected-work" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
] as const;

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X / Twitter", href: "https://x.com" },
] as const;

export { EMAIL, NAV_LINKS, PHONE, PHONE_HREF, PROFILE_IMAGE, SOCIAL_LINKS };
