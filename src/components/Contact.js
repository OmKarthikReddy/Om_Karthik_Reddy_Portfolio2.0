// src/components/Contact.js
import React, { useState } from 'react';
import { Mail, MapPin, Calendar, Send, Github, Linkedin, Clock } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'research-collaboration',
        message: '' // Default message is now empty
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactInfo = [
        {
            icon: <Mail size={20} />,
            label: 'Email',
            value: 'omkarthik1307@gmail.com',
            link: 'mailto:omkarthik1307@gmail.com'
        },
        {
            icon: <MapPin size={20} />,
            label: 'Location',
            value: 'Detroit, USA',
            link: null
        },
        {
            icon: <Calendar size={20} />,
            label: 'Availability',
            value: 'Flexible',
            link: null
        }
    ];

    const socialLinks = [
        {
            platform: 'GitHub',
            icon: <Github size={20} />,
            url: 'https://github.com/omkarthikreddy',
            handle: '@omkarthikreddy'
        },
        {
            platform: 'LinkedIn',
            icon: <Linkedin size={20} />,
            url: 'https://www.linkedin.com/in/om-karthik-reddy-v/',
            handle: '/in/om-karthik-reddy-v/'
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setFormData({ name: '', email: '', subject: 'research-collaboration', message: '' });
        setIsSubmitting(false);
        alert('Thank you for your message! I\'ll get back to you soon.');
    };

    return (
        <section className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Let's discuss research, collaboration opportunities, or any questions you might have
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Form */}
                    <div className="contact-form-section">
                        <h3 className="subsection-title">Send me a message</h3>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="your.email@domain.com"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select a subject</option>
                                    <option value="research-collaboration">Research Collaboration</option>
                                    <option value="interview-inquiry">Interview Inquiry</option>
                                    <option value="speaking-opportunity">Speaking Opportunity</option>
                                    <option value="industry-partnership">Industry Partnership</option>
                                    <option value="general-inquiry">General Inquiry</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="6"
                                    placeholder="Tell me about your project, idea, or question..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info-section">
                        <h3 className="subsection-title">Contact Information</h3>
                        <div className="contact-details">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-item">
                                    <div className="contact-icon">{info.icon}</div>
                                    <div className="contact-content">
                                        <span className="contact-label">{info.label}</span>
                                        {info.link ? (
                                            <a href={info.link} className="contact-value">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="contact-value">{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="social-section">
                            <h4>Connect with me</h4>
                            <div className="social-links-grid">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                    >
                                        <div className="social-icon">{social.icon}</div>
                                        <div className="social-info">
                                            <span className="social-platform">{social.platform}</span>
                                            <span className="social-handle">{social.handle}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Response Time */}
                        <div className="response-info">
                            <Clock size={16} />
                            <div>
                                <strong>Response Time</strong>
                                <p>I typically respond within 24-48 hours during weekdays.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;