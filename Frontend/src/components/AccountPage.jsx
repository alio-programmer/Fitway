import React, { useState } from 'react';
import { User, Mail, Shield, CheckCircle, Smartphone, Globe } from 'lucide-react';
import './AccountPage.css';

const AccountPage = () => {
    const [isGoogleConnected, setIsGoogleConnected] = useState(false);

    return (
        <div className="account-page">
            <h1 className="page-title">Account Settings</h1>

            <div className="account-grid">
                <section className="profile-section">
                    <div className="account-card profile-card">
                        <div className="avatar-section">
                            <div className="avatar-placeholder">
                                <User size={48} />
                            </div>
                            <button className="edit-avatar">Edit Photo</button>
                        </div>
                        <div className="profile-info">
                            <div className="info-group">
                                <label>Full Name</label>
                                <p>Gaurav Kumar</p>
                            </div>
                            <div className="info-group">
                                <label>Email Address</label>
                                <p>gaurav@example.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="account-card connection-card">
                        <div className="card-header">
                            <Globe size={20} className="text-blue" />
                            <h3>Connected Accounts</h3>
                        </div>
                        <div className="connection-item">
                            <div className="connection-info">
                                <img src="https://www.google.com/favicon.ico" alt="Google" width="20" height="20" />
                                <div>
                                    <span className="platform">Google Account</span>
                                    <p className="status">{isGoogleConnected ? 'Connected as gaurav@gmail.com' : 'Not connected'}</p>
                                </div>
                            </div>
                            <button
                                className={`connect-btn ${isGoogleConnected ? 'connected' : ''}`}
                                onClick={() => setIsGoogleConnected(!isGoogleConnected)}
                            >
                                {isGoogleConnected ? 'Disconnect' : 'Connect'}
                            </button>
                        </div>
                    </div>
                </section>

                <section className="security-section">
                    <div className="account-card">
                        <div className="card-header">
                            <Shield size={20} className="text-green" />
                            <h3>Security & Privacy</h3>
                        </div>
                        <div className="security-list">
                            <div className="security-item">
                                <div>
                                    <span className="item-title">Two-Factor Authentication</span>
                                    <p className="item-desc">Add an extra layer of security to your account.</p>
                                </div>
                                <button className="outline-btn">Enable</button>
                            </div>
                            <div className="security-item">
                                <div>
                                    <span className="item-title">Password</span>
                                    <p className="item-desc">Last changed 3 months ago.</p>
                                </div>
                                <button className="outline-btn">Change</button>
                            </div>
                        </div>
                    </div>

                    <div className="account-card delete-card">
                        <h3 className="text-red">Danger Zone</h3>
                        <p>Once you delete your account, there is no going back. Please be certain.</p>
                        <button className="delete-btn">Delete Account</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AccountPage;
