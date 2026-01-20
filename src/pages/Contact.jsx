import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 flex items-center justify-center px-4 py-16">
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* LEFT — INFORMATION */}
        <div className="space-y-6">
          <span className="inline-block text-sm font-semibold text-blue-600">
            CUSTOMER SUPPORT
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Contact our <br />
            <span className="text-blue-600">support team</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-lg">
            Whether you have questions about orders, payments, or products,
            our support specialists are ready to assist you.
          </p>

          <div className="space-y-3 text-slate-700">
            <p><strong>Address:</strong> 123 Tech Lane, Kolkata, India</p>
            <p><strong>Email:</strong> support@bazzar.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-10">

          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Send us a message
          </h2>

          <form className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 rounded-md transition"
            >
              Contact Support
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
