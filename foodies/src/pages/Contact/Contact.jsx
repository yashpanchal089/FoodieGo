import React from 'react';

const ContactUs = () => {
    return (
        <section className="container py-5" id="contact">
            <h2 className="text-center mb-5">Contact Us</h2>

            <div className="row g-4">
                {/* Form */}
                <div className="col-lg-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows={5} placeholder="Enter your message here" />
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>

                {/* Google Maps */}
                <div className="col-lg-6">
                    <div style={{ height: '100%' }}>
                        <iframe
                            src="https://www.google.com/maps?q=Mumbai%2C%20India&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            {/* Horizontal Contact Info */}
            <div className="row text-center mt-5 gy-4">
                <div className="col-md-3 col-6">
                    <i className="bi bi-telephone-fill fs-4 text-primary"></i>
                    <p className="mb-0">+91 93-5263-6631</p>
                </div>
                <div className="col-md-3 col-6">
                    <i className="bi bi-envelope-fill fs-4 text-primary"></i>
                    <p className="mb-0">Foodiego@foodies.com</p>
                </div>
                <div className="col-md-3 col-6">
                    <i className="bi bi-instagram fs-4 text-primary"></i>
                    <p className="mb-0">@Foodiego</p>
                </div>
                <div className="col-md-3 col-6">
                    <i className="bi bi-facebook fs-4 text-primary"></i>
                    <p className="mb-0">Foodiego</p>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
