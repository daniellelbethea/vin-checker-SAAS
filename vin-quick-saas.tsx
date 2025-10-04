import React, { useState } from 'react';
import { AlertCircle, CheckCircle, XCircle, Search, Shield, Zap, DollarSign } from 'lucide-react';

// This is a DEMO UI showing the complete VIN Quick product flow
// For the full codebase with backend, see the accompanying code artifact

const VINQuickDemo = () => {
  const [view, setView] = useState('landing'); // landing, dashboard, results
  const [vin, setVin] = useState('');
  const [loading, setLoading] = useState(false);
  const [lookupCount, setLookupCount] = useState(0);

  // Mock VIN lookup
  const handleLookup = () => {
    if (vin.length !== 17) {
      alert('VIN must be exactly 17 characters');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLookupCount(prev => prev + 1);
      setView('results');
      setLoading(false);
    }, 1500);
  };

  // Landing Page
  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">VIN Quick</span>
            </div>
            <button 
              onClick={() => setView('dashboard')}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Sign In
            </button>
          </div>
        </nav>

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Instant Vehicle History Reports
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get comprehensive VIN checks with NHTSA data, NMVTIS records, and AI-powered risk analysis — all for just $5/month.
          </p>
          <button 
            onClick={() => setView('dashboard')}
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
          >
            Start for $5/month
          </button>
        </div>

        {/* Features */}
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Zap className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
            <p className="text-gray-600">Get complete vehicle history in seconds with real-time API lookups.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Shield className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">NMVTIS Data</h3>
            <p className="text-gray-600">Access official government records for salvage, theft, and odometer data.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <DollarSign className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">Just $5/month for 3 VIN lookups. No hidden fees or surprises.</p>
          </div>
        </div>

        {/* Pricing */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-indigo-600">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
              <div className="text-5xl font-bold text-indigo-600 mb-4">$5<span className="text-2xl text-gray-600">/mo</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>3 VIN lookups per month</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>NHTSA vPIC data access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>NMVTIS records check</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>AI-powered risk summary</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>7-day free trial</span>
                </li>
              </ul>
              <button 
                onClick={() => setView('dashboard')}
                className="w-full bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">What's included in a VIN lookup?</h3>
              <p className="text-gray-600">Each lookup includes NHTSA vehicle specifications, NMVTIS records for salvage/theft history, and an AI-generated risk assessment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">Yes! Cancel your subscription at any time with no penalties or fees.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">What happens after my 3 lookups?</h3>
              <p className="text-gray-600">Your lookups reset at the start of each billing cycle. Additional lookups can be purchased separately.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard
  if (view === 'dashboard') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">VIN Quick</span>
            </div>
            <button 
              onClick={() => setView('landing')}
              className="text-gray-600 hover:text-gray-900"
            >
              Sign Out
            </button>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Usage Stats */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Your Plan</h2>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600">Pro Plan - $5/month</p>
                <p className="text-sm text-gray-500 mt-1">Next billing: Nov 1, 2025</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-indigo-600">{lookupCount}/3</p>
                <p className="text-sm text-gray-600">Lookups used</p>
              </div>
            </div>
          </div>

          {/* VIN Lookup Form */}
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-semibold mb-6">Check a VIN</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter 17-character VIN
                </label>
                <input
                  type="text"
                  value={vin}
                  onChange={(e) => setVin(e.target.value.toUpperCase())}
                  maxLength={17}
                  placeholder="1HGBH41JXMN109186"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">{vin.length}/17 characters</p>
              </div>
              <button
                onClick={handleLookup}
                disabled={loading || vin.length !== 17 || lookupCount >= 3}
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Check VIN
                  </>
                )}
              </button>
              {lookupCount >= 3 && (
                <p className="text-sm text-red-600 text-center">Monthly limit reached. Resets Nov 1, 2025.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results Page
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">VIN Quick</span>
          </div>
          <button 
            onClick={() => {
              setView('dashboard');
              setVin('');
            }}
            className="text-gray-600 hover:text-gray-900"
          >
            ← Back to Dashboard
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Risk Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-yellow-500">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-yellow-500 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Risk Assessment: MODERATE</h2>
              <p className="text-gray-700 leading-relaxed">
                This vehicle shows a clean title with no salvage or theft records in NMVTIS. However, the odometer reading shows 125,000 miles, which is above average for the 2018 model year. The vehicle has had 2 previous owners and minor accident history reported. Overall risk is moderate — recommended for use but consider a pre-purchase inspection.
              </p>
            </div>
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="bg-white rounded-lg shadow p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4">Vehicle Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">VIN</p>
              <p className="font-semibold">{vin}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Year</p>
              <p className="font-semibold">2018</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Make</p>
              <p className="font-semibold">Honda</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Model</p>
              <p className="font-semibold">Accord EX-L</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Body Type</p>
              <p className="font-semibold">4-Door Sedan</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Engine</p>
              <p className="font-semibold">2.0L Turbo I4</p>
            </div>
          </div>
        </div>

        {/* NMVTIS Checks */}
        <div className="bg-white rounded-lg shadow p-8">
          <h3 className="text-xl font-semibold mb-4">NMVTIS Record Checks</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="font-medium">No salvage records found</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="font-medium">No theft records found</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="font-medium">Clean title status</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              <span className="font-medium">Odometer: 125,000 miles (above average)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VINQuickDemo;