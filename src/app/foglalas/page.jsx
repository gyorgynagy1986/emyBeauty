"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

const services = [
  "Arckezelés",
  "Masszázs",
  "Manikűr",
  "Pedikűr",
  "Hajápolás",
];

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateName = (name) => {
    if (!name.trim()) return "Név megadása kötelező";
    if (name.length < 2) return "A név minimum 2 karakter hosszú legyen";
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email cím megadása kötelező";
    if (!emailRegex.test(email)) return "Érvénytelen email cím";
    return "";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'phone') {
      const numbersOnly = value.replace(/[^\d]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numbersOnly
      }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: !formData.phone ? "Telefonszám megadása kötelező" : "",
      service: !formData.service ? "Kérlek válassz szolgáltatást" : "",
      consent: !formData.consent ? "Az adatkezelési szabályzat elfogadása kötelező" : ""
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        consent: false,
      });
      
      setTimeout(() => setSubmitSuccess(false), 6000);
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        submit: "Hiba történt a küldés során. Kérlek próbáld újra."
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h2 className={styles.h2}>Időpontfoglalás</h2>
          <p className={styles.p}>
            Írj üzenetet, és amint lehetőségem van, visszahívlak!
          </p>

          {submitSuccess && (
            <div className={styles.successMessage}>
              Köszönjük! Üzenetét sikeresen elküldtük.
            </div>
          )}

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.inputWrapper}>
              <input
                className={`${styles.input} ${errors.name ? styles.errorInput : ""}`}
                type="text"
                name="name"
                placeholder="Név"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => setErrors(prev => ({ 
                  ...prev, 
                  name: validateName(formData.name) 
                }))}
                disabled={isSubmitting}
              />
              {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>

            <div className={styles.inputWrapper}>
              <input
                className={`${styles.input} ${errors.email ? styles.errorInput : ""}`}
                type="email"
                name="email"
                placeholder="E-mail cím"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => setErrors(prev => ({ 
                  ...prev, 
                  email: validateEmail(formData.email) 
                }))}
                disabled={isSubmitting}
              />
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>

            <div className={styles.inputWrapper}>
              <input
                className={`${styles.input} ${errors.phone ? styles.errorInput : ""}`}
                type="tel"
                name="phone"
                placeholder="Telefonszám"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
            </div>

            <div className={styles.inputWrapper}>
              <select
                className={`${styles.select} ${errors.service ? styles.errorInput : ""}`}
                name="service"
                value={formData.service}
                onChange={handleChange}
                disabled={isSubmitting}
              >
                <option value="">Válassz szolgáltatást...</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && <span className={styles.errorText}>{errors.service}</span>}
            </div>

            <div className={styles.inputWrapper}>
              <textarea
                className={styles.textarea}
                name="message"
                placeholder="Üzenet (opcionális)"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className={`${styles.checkboxContainer} ${errors.consent ? styles.errorInput : ""}`}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <label className={styles.label}>
                Elfogadom az adatkezelési szabályzatot
              </label>
            </div>
            {errors.consent && <span className={styles.errorText}>{errors.consent}</span>}

            {errors.submit && (
              <div className={styles.submitError}>{errors.submit}</div>
            )}

            <button 
              type="submit" 
              className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Küldés folyamatban...' : 'Üzenet küldése'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;