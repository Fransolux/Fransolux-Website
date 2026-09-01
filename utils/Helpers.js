export function scrollToSection(id) {
  const section = document.getElementById(id);

  if (!section) return;

  const offset = 64;

  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: sectionPosition - offset,
    behavior: "smooth",
  });
}
