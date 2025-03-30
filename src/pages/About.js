import React from 'react';
import '../styles/pages/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About FairPayz</h1>
        <p>Making expense sharing simple and fair for everyone</p>
      </div>

      <div className="about-content">
        <section className="about-story">
          <h2>Our Story</h2>
          <p>
            FairPayz was born from a simple idea: making it easier for friends, roommates, and groups
            to manage shared expenses. We understand the challenges of keeping track of who owes what,
            especially in shared living situations or group trips.
          </p>
          <p>
            Founded in 2024, our platform has grown to help thousands of users manage their shared
            expenses effortlessly, maintaining transparency and fairness in financial matters.
          </p>
        </section>

        <section className="about-mission">
          <div className="mission-card">
            <div className="mission-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h2>Our Mission</h2>
            <p>
              To simplify group expenses and strengthen relationships by removing the awkwardness
              from money matters. We believe that financial transparency leads to stronger bonds
              and better experiences.
            </p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h2>Our Vision</h2>
            <p>
              To become the world's most trusted platform for shared expense management, making
              it easier for people to focus on creating memories rather than tracking expenses.
            </p>
          </div>
        </section>

        <section className="about-features">
          <h2>Why Choose FairPayz?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-user-shield"></i>
              </div>
              <h3>Secure & Private</h3>
              <p>Your financial data is protected with bank-level security.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Fast & Easy</h3>
              <p>Split expenses and settle up with just a few taps.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Multi-Currency</h3>
              <p>Support for multiple currencies for international groups.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Smart Analytics</h3>
              <p>Track spending patterns and manage budgets effectively.</p>
            </div>
          </div>
        </section>

        <section className="about-values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Transparency</h3>
              <p>We believe in complete openness in all financial matters.</p>
            </div>
            <div className="value-item">
              <h3>Simplicity</h3>
              <p>Making complex financial tracking simple and accessible.</p>
            </div>
            <div className="value-item">
              <h3>Fairness</h3>
              <p>Ensuring everyone pays their fair share, no more, no less.</p>
            </div>
            <div className="value-item">
              <h3>Trust</h3>
              <p>Building reliable solutions that users can count on.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 