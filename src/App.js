function App() {
  return (
<div className="min-h-screen bg-gray-900 text-white">
<nav className="flex justify-between items-center px-8 py-6 bg-gray-800">
        <h1 className="text-2xl font-bold text-blue-400">YourBusiness</h1>
        <div className="space-x-6">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#services" className="hover:text-blue-400">Services</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center py-32 px-4">
        <h2 className="text-5xl font-bold mb-6">
          Grow Your Business <span className="text-blue-400">Online</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          We build stunning websites that help your business stand out and get more customers.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold">
          Get Started
        </button>
      </section>
    </div>
  );
}

export default App;