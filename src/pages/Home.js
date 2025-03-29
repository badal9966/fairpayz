import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1 className="title">Welcome to FairPayz</h1>
        <p className="description">Effortlessly split expenses and track shared costs with friends, roommates, and groups.</p>
        <div className="buttons">
          <Link to="/signup" className="button primary">Get Started</Link>
          <Link to="/features" className="button secondary">Learn More</Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose FairPayz?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Easy to Use</h3>
            <p>Simple interface for adding expenses and settling up with friends.</p>
          </div>
          <div className="feature-card">
            <h3>Real-time Updates</h3>
            <p>Get instant notifications when expenses are added or settled.</p>
          </div>
          <div className="feature-card">
            <h3>Multiple Currencies</h3>
            <p>Support for various currencies to handle international expenses.</p>
          </div>
          <div className="feature-card">
            <h3>Secure & Private</h3>
            <p>Your financial data is encrypted and protected.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of users who trust FairPayz for their expense sharing needs.</p>
        <Link to="/signup" className="button primary">Create Free Account</Link>
      </section>
    </div>
  );
};

export default Home; 