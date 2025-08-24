const categories = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty"
];

export default function Categories() {
  return (
    <aside className="col-span-2 h-full">
      <ul className="space-y-4 mt-10 mb-12 ">
      {categories.map((cat, idx) => (
  <li key={idx} 
  className="flex items-center gap-6 cursor-pointer text-lg hover:text-red-600 font-medium">
  <span className="w-55 inline-block">{cat}</span>
  <span className="w-0 flex justify-center">
    {(cat === "Woman’s Fashion" || cat === "Men’s Fashion") ? (
      <span className="text-xl font-bold">&gt;</span>
    ) : null}
  </span>
</li>
))}
      </ul>
    </aside>
  );
}