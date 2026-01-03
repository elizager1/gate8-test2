export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">Workflow V4.0</h1>
          <p className="mt-6 text-lg sm:text-xl text-indigo-100 max-w-3xl mx-auto">
            Autonomous multi-agent development powered by AI.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#get-started" className="px-8 py-3 rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 font-medium">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
