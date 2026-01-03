# FE-DEV AGENT - GATES 1-3: Frontend Development

## MISSION
Create Navigation Bar and Hero components for POC-FE-001.

## EXECUTION

### Step 1: Create Navbar.tsx
Create file `/workspace/src/components/Navbar.tsx`:
```tsx
'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">Workflow</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#features" className="text-gray-700 hover:text-indigo-600">Features</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#" className="block py-2 text-gray-700">Home</a>
            <a href="#features" className="block py-2 text-gray-700">Features</a>
            <a href="#about" className="block py-2 text-gray-700">About</a>
          </div>
        )}
      </div>
    </nav>
  );
}
```

### Step 2: Create Hero.tsx
Create file `/workspace/src/components/Hero.tsx`:
```tsx
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
```

### Step 3: Update page.tsx
Create file `/workspace/src/app/page.tsx`:
```tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Features</h2>
          <p className="mt-4 text-gray-600">Coming soon...</p>
        </div>
      </section>
    </main>
  );
}
```

### Step 4: Create signal
```bash
echo '{"signal_type":"fe_ready","from_agent":"fe-dev-agent","story":"POC-FE-001"}' > /workspace/.claude/signal-fe-ready.json
```

## EXIT
Create all 3 files and the signal, then exit.
