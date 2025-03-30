import React from 'react';
import '../styles/pages/Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Comprehensive solutions for all your expense sharing needs</p>
      </div>

      <div className="services-content">
        <section className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-users"></i>
            </div>
            <h2>Group Expense Management</h2>
            <p>
              Create and manage expense groups for roommates, friends, or any group activity.
              Track shared expenses, split bills, and settle up easily.
            </p>
            <ul className="service-features">
              <li>Create multiple expense groups</li>
              <li>Add and track expenses in real-time</li>
              <li>Split expenses equally or custom</li>
              <li>Track who paid and who owes</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-wallet"></i>
            </div>
            <h2>Payment Solutions</h2>
            <p>
              Seamless payment processing with multiple payment options.
              Send and receive money securely within your expense groups.
            </p>
            <ul className="service-features">
              <li>Multiple payment methods</li>
              <li>Secure payment processing</li>
              <li>Payment reminders</li>
              <li>Transaction history</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-chart-pie"></i>
            </div>
            <h2>Expense Analytics</h2>
            <p>
              Get detailed insights into your spending patterns and group expenses
              with our comprehensive analytics tools.
            </p>
            <ul className="service-features">
              <li>Spending breakdowns</li>
              <li>Category-wise analysis</li>
              <li>Monthly reports</li>
              <li>Budget tracking</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h2>Security & Privacy</h2>
            <p>
              Bank-level security measures to protect your financial data and
              ensure your privacy is maintained at all times.
            </p>
            <ul className="service-features">
              <li>End-to-end encryption</li>
              <li>Secure data storage</li>
              <li>Privacy controls</li>
              <li>Regular security audits</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services; 