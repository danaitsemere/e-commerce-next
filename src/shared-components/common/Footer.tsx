export default function Footer() {
  return (
    <footer className="bg-black text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold mb-3">Exclusive</h3>
          <p className="text-sm mb-2">Subscribe</p>
          <p className="text-xs mb-2">Get 10% off your first order</p>
          <form className="flex">
            <input type="email" placeholder="Enter your email" className="bg-transparent border-b px-2 py-1 text-white w-full"/>
            <button type="submit" className="ml-2 text-white">&#10148;</button>
          </form>
        </div>
        <div>
          <h3 className="font-bold mb-3">Support</h3>
          <p className="text-xs mb-1">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-xs mb-1">exclusivev@gmail.com</p>
          <p className="text-xs mb-1">+88015-88888-9999</p>
        </div>
        <div>
          <h3 className="font-bold mb-3">Account</h3>
          <ul className="space-y-1 text-xs">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Quick Link</h3>
          <ul className="space-y-1 text-xs">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Download App</h3>
          <p className="text-xs mb-2">Save $3 with App New User Only</p>
          <div className="flex gap-1 mb-2">
            <img src="/google.svg" alt="Google Play" className="w-20 h-6"/>
            <img src="/appstore.svg" alt="App Store" className="w-20 h-6"/>
          </div>
          <div className="flex gap-2 mt-2">
            <a href="#"><span className="sr-only">Facebook</span></a>
            <a href="#"><span className="sr-only">Twitter</span></a>
            <a href="#"><span className="sr-only">Instagram</span></a>
            <a href="#"><span className="sr-only">LinkedIn</span></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-4 border-t border-gray-800">
        &copy; Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}