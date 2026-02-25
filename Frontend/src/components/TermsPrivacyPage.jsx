import React from 'react';
import './TermsPrivacyPage.css';

const TermsPrivacyPage = () => {
    return (
        <div className="legal-page">
            <h1 className="page-title">Terms & Privacy</h1>

            <div className="legal-content">
                <section className="legal-section">
                    <h2>Terms of Service</h2>
                    <p className="last-updated">Last Updated: February 26, 2026</p>
                    <p>Welcome to Fitway. By using our app, you agree to these terms. Please read them carefully.</p>

                    <h3>1. Use of the App</h3>
                    <p>You must follow any policies made available to you within the App. Do not misuse our App. For example, do not interfere with our App or try to access it using a method other than the interface and the instructions that we provide.</p>

                    <h3>2. Your Account</h3>
                    <p>You may need a Fitway Account in order to use some of our Services. You are responsible for the activity that happens on or through your Fitway Account.</p>
                </section>

                <section className="legal-section">
                    <h2>Privacy Policy</h2>
                    <p>Your privacy is important to us. It is Fitway's policy to respect your privacy regarding any information we may collect from you through our app.</p>

                    <h3>Data We Collect</h3>
                    <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>

                    <h3>Data Retention</h3>
                    <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
                </section>
            </div>
        </div>
    );
};

export default TermsPrivacyPage;
