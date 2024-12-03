import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Snowfall } from './components/Snowfall';
import { ChristmasDecorations } from './components/ChristmasDecorations';
import { PackagesPage } from './pages/PackagesPage';
import { SantaCallPage } from './pages/SantaCallPage';
import { ChatPage } from './pages/ChatPage';
import { SantaLetterPage } from './pages/SantaLetterPage';
import { SantaVideoPage } from './pages/SantaVideoPage';
import { SantaBundlePage } from './pages/SantaBundlePage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-red-900 via-green-900 to-red-900 flex flex-col">
        <Snowfall />
        <ChristmasDecorations />
        <div className="relative z-10 flex flex-col flex-grow">
          <Header />
          <main className="container mx-auto px-4 py-8 flex-grow">
            <Routes>
              <Route path="/" element={<PackagesPage />} />
              <Route path="/santa-call" element={<SantaCallPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/santa-letter" element={<SantaLetterPage />} />
              <Route path="/santa-video" element={<SantaVideoPage />} />
              <Route path="/santa-bundle" element={<SantaBundlePage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
