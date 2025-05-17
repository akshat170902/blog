import { CategoryTabs, Tab } from "./BlogHeader.styled";

const categories = [
  { key: "general", label: "General", href: "/blogs/general" },
  { key: "travel-tip", label: "Travel Tip", href: "/blogs/travel-tip" },
  { key: "travel-guide", label: "Travel Guide", href: "/blogs/travel-guide" },
];

export default function BlogCategoryTabs({ activeCategory }) {
  return (
    <CategoryTabs>
      {categories.map((cat) => (
        <Tab key={cat.key} href={cat.href} $active={cat.key === activeCategory}>
          {cat.label}
        </Tab>
      ))}
    </CategoryTabs>
  );
}
