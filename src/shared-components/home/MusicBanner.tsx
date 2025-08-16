export default function MusicBanner() {
  return (
    <section className="bg-black py-8">
      <div className="max-w-7xl mx-auto flex items-center gap-8 text-white">
        <img src="/speaker.png" alt="Music Banner" className="w-64 h-auto" />
        <div>
          <h3 className="text-green-500">Categories</h3>
          <h2 className="text-2xl font-bold mb-4">Enhance Your Music Experience</h2>
          <div className="flex gap-4 mb-4">
            <div>23 Hours</div>
            <div>05 Days</div>
            <div>59 Minutes</div>
            <div>35 Seconds</div>
          </div>
          <button className="bg-green-500 text-black font-semibold px-6 py-2 rounded">Buy Now!</button>
        </div>
      </div>
    </section>
  );
}