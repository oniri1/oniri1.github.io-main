const sectionIDs = [
  "#home",
  "#summation",
  "#Worked",
  "#skills__Details",
  "#Contact",
];
const sections = sectionIDs.map((id) => document.querySelector(id));
const navItems = sectionIDs.map((id) =>
  document.querySelector(`[href="${id}"]`)
);

const visibleSections = sectionIDs.map(() => false);

let activeNavItem = navItems[0];

const options = {
  rootMargin: "-20% 0px 0px 0px",
  threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observercallback, options);

sections.forEach((section) => observer.observe(section));

function observercallback(entries) {
  let selectLastone;
  entries.forEach((entry) => {
    const index = sectionIDs.indexOf(`#${entry.target.id}`);

    visibleSections[index] = entry.isIntersecting;
    selectLastone =
      index === sectionIDs.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.93;
  });

  const navIndex = selectLastone
    ? sectionIDs.length - 1
    : findFirstIntersecting(visibleSections);

  selectNavItem(navIndex);
}

function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}

function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem) return;
  activeNavItem.classList.remove("active");
  activeNavItem = navItem;
  activeNavItem.classList.add("active");
}
