import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SmartInvest</h1>
          <nav className="space-x-4">
            <a href="#advice" className="hover:text-blue-600">Advice</a>
            <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-blue-50 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Grow Your Wealth Smarter</h2>
        <p className="text-lg text-gray-700 mb-6">
          Expert investment tips, portfolio insights, and market trends at your fingertips.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Get Started</button>
      </section>

      <section id="advice" className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Investment Advice</h3>
        <ul className="space-y-4">
          <li>💡 Diversify your portfolio to manage risk.</li>
          <li>📈 Invest long-term instead of chasing short-term gains.</li>
          <li>📊 Rebalance regularly to stay on track.</li>
        </ul>
      </section>

      <section id="portfolio" className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Sample Portfolio</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded shadow">Stocks: 50%</div>
            <div className="bg-gray-50 p-4 rounded shadow">Bonds: 30%</div>
            <div className="bg-gray-50 p-4 rounded shadow">Real Estate: 10%</div>
            <div className="bg-gray-50 p-4 rounded shadow">Crypto: 10%</div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Your Name" className="p-3 rounded border" />
            <input type="email" placeholder="Your Email" className="p-3 rounded border" />
            <textarea placeholder="Your Message" className="p-3 rounded border" rows="4"></textarea>
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="text-center p-6 bg-white shadow mt-10">
        &copy; 2025 SmartInvest. All rights reserved.
      </footer>
    </div>
  );
}
