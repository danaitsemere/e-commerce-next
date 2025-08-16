import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white w-full border-b">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between py-6 px-8">
    
        <span className="font-extrabold text-3xl">Exclusive</span>
      
        <nav className="flex items-center gap-10">
          <Link href="/" className="font-medium text-lg border-b-2 border-black pb-1">Home</Link>
          <Link href="#" className="font-medium text-lg">Contact</Link>
          <Link href="#" className="font-medium text-lg">About</Link>
          <Link href="/signup" className="font-bold text-lg">Sign Up</Link>
        </nav>
   
        <div className="flex items-center gap-6">
          <div className="flex items-center bg-gray-100 rounded px-4 py-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 outline-none w-56 text-base"
            />
            <button>
              <svg width="20" height="20" fill="none" stroke="currentColor">
                <circle cx="9" cy="9" r="8" strokeWidth="2" />
                <line x1="15" y1="15" x2="19" y2="19" strokeWidth="2" />
              </svg>
            </button>
          </div>

          <button>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s-8-7.6-8-12.1A5.1 5.1 0 0112 3a5.1 5.1 0 018 5.9C20 13.4 12 21 12 21z" />
            </svg>
          </button>

          <button>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}