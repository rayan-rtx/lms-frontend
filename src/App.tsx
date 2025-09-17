import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import CoursePreview from './pages/CoursePreview';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-right" dir="rtl">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/course-preview/:id" element={<CoursePreview />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;