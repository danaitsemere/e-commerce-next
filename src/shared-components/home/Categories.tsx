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
    <aside className="col-span-2 -ml-29.5">
      <ul className="space-y-6 mt-6 mb-12">
        {categories.map((cat, idx) => (
          <li key={idx} 
          className="flex items-center gap-15 cursor-pointer text-lg hover:text-pink-600 font-medium">
            <span>{cat}</span>
            {(cat === "Woman’s Fashion" || cat === "Men’s Fashion") && (
              <span className="text-xl font-bold">&gt;</span>
            )}
          
          </li>
          
        ))}
      </ul>
    </aside>
  );
}