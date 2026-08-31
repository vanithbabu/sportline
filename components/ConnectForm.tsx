"use client";

import React, { useState } from "react";

export default function ConnectForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);
  const [globalError, setGlobalError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setSuccess(false);
    setGlobalError("");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    let newErrors: { [key: string]: string } = {};
    if (!data.name) newErrors.name = "Name is required";
    if (!data.email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(data.email as string)) newErrors.email = "Invalid email format";
    if (!data.interest) newErrors.interest = "Please select an area of interest";
    if (!data.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ formType: 'Connect With Us', ...data }),
      });
      if (res.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setGlobalError('Error sending message. Please try again.');
      }
    } catch (err) {
      setGlobalError('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label>YOUR NAME</label>
        <input name="name" placeholder="Name" />
        {errors.name && <small style={{ color: 'red', marginTop: '4px' }}>{errors.name}</small>}
      </div>
      <div className="field">
        <label>EMAIL ADDRESS</label>
        <input name="email" type="email" placeholder="name@company.com" />
        {errors.email && <small style={{ color: 'red', marginTop: '4px' }}>{errors.email}</small>}
      </div>
      <div className="field">
        <label>PHONE NUMBER</label>
        <input name="phone" placeholder="+91" />
      </div>
      <div className="field">
        <label>AREA OF INTEREST</label>
        <select name="interest">
          <option value="">Select an option</option>
          <option value="Programs & Workshops">Programs & Workshops</option>
          <option value="Pathways">Pathways</option>
          <option value="Partnerships">Partnerships</option>
          <option value="Curated Sporting Experiences">Curated Sporting Experiences</option>
          <option value="General Enquiry">General Enquiry</option>
        </select>
        {errors.interest && <small style={{ color: 'red', marginTop: '4px' }}>{errors.interest}</small>}
      </div>
      <div className="field full">
        <label>YOUR MESSAGE</label>
        <textarea name="message" placeholder="Tell us a little about what you would like to explore..."></textarea>
        {errors.message && <small style={{ color: 'red', marginTop: '4px' }}>{errors.message}</small>}
      </div>
      <div className="submit" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button type="submit" disabled={loading}>
          {loading ? "SENDING..." : "START THE CONVERSATION →"}
        </button>
        {success && <p style={{ color: 'green', margin: 0 }}>Message sent successfully!</p>}
        {globalError && <p style={{ color: 'red', margin: 0 }}>{globalError}</p>}
      </div>
    </form>
  );
}
