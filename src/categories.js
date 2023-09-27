export default function allCategories() {
  const categories = document.querySelectorAll('.project-links li a');
  const categoryTitles = Array.from(categories).map(category => category.textContent);
  return categoryTitles;
}
