"use client";

import React, { useState } from "react";

export default function PartnerForm() {
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
    if (!data.organisation) newErrors.organisation = "Organisation is required";
    if (!data.interest) newErrors.interest = "Please select what you are exploring";
    if (!data.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ formType: 'Partner With Us', ...data }),
      });
      if (res.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setGlobalError('There was an error submitting the form. Please try again.');
      }
    } catch (err) {
      setGlobalError('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input name="name" placeholder="Your name" />
        {errors.name && <small style={{ color: 'red', marginTop: '4px' }}>{errors.name}</small>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input name="email" type="email" placeholder="Work email" />
        {errors.email && <small style={{ color: 'red', marginTop: '4px' }}>{errors.email}</small>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input name="organisation" placeholder="Organisation" />
        {errors.organisation && <small style={{ color: 'red', marginTop: '4px' }}>{errors.organisation}</small>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <select name="interest">
          <option value="">What are you exploring?</option>
          <option value="Brand initiative">Brand initiative</option>
          <option value="Corporate experience">Corporate experience</option>
          <option value="Community engagement">Community engagement</option>
          <option value="Strategic collaboration">Strategic collaboration</option>
          <option value="Something else">Something else</option>
        </select>
        {errors.interest && <small style={{ color: 'red', marginTop: '4px' }}>{errors.interest}</small>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gridColumn: '1 / -1' }}>
        <textarea name="message" placeholder="Tell us a little about the opportunity or idea"></textarea>
        {errors.message && <small style={{ color: 'red', marginTop: '4px' }}>{errors.message}</small>}
      </div>
      <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button type="submit" disabled={loading}>
          {loading ? "SENDING..." : "START THE CONVERSATION →"}
        </button>
        {success && <p style={{ color: 'green', margin: 0 }}>Your partnership inquiry has been sent successfully!</p>}
        {globalError && <p style={{ color: 'red', margin: 0 }}>{globalError}</p>}
      </div>
    </form>
  );
}
