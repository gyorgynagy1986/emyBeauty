"use client";

import React, { useState } from "react";
import styles from "./ContactSection.module.css";
import Abstract from "@/components/astract/ObjectElement";

// Form validation function
const validateForm = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = "Név megadása kötelező";
  } else if (formData.name.trim().length < 2) {
    errors.name = "Névnek legalább 2 karakternek kell lennie";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = "E-mail cím megadása kötelező";
  } else if (!emailRegex.test(formData.email.trim())) {
    errors.email = "Érvénytelen e-mail formátum";
  }

  // Phone validation (optional, but with format check if provided)
  if (formData.phone.trim()) {
    const phoneRegex = /^(\+36|06)?[-. ]?(\d{2})[-. ]?(\d{3})[-. ]?(\d{4})$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = "Érvénytelen telefonszám formátum";
    }
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = "Üzenet megadása kötelező";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Az üzenetnek legalább 10 karakternek kell lennie";
  }

  return errors;
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      const newErrors = { ...formErrors };
      delete newErrors[name];
      setFormErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm(formData);

    // If there are validation errors
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    // Start submission process
    setIsSubmitting(true);

    // Simulate form submission (replace with actual logic)
    setTimeout(() => {
      console.log("Form Submitted", formData);
      setIsSubmitting(false);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section className={styles.container}>
      <div className={styles.ledftContainer}>
        <div className={styles.contentContainert}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>Lépj velem kapcsolatba!</h3>
            <Abstract />
          </div>
          <div className={styles.textContainer}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              lacinia auctor magna ac viverra.
            </p>
            <a href="mailto:emy@emybeautyestetics.hu">
              emy@emybeautyestetics.hu
            </a>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.contentContainert}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                className={`${styles.input} ${
                  formErrors.name ? styles.inputError : ""
                }`}
                placeholder="Név"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && (
                <p className={styles.errorText}>{formErrors.name}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                className={`${styles.input} ${
                  formErrors.email ? styles.inputError : ""
                }`}
                placeholder="E-mail cím"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <p className={styles.errorText}>{formErrors.email}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                className={`${styles.input} ${
                  formErrors.phone ? styles.inputError : ""
                }`}
                placeholder="Telefonszám"
                value={formData.phone}
                onChange={handleChange}
              />
              {formErrors.phone && (
                <p className={styles.errorText}>{formErrors.phone}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                className={`${styles.textarea} ${
                  formErrors.message ? styles.inputError : ""
                }`}
                placeholder="Üzenet"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {formErrors.message && (
                <p className={styles.errorText}>{formErrors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className={`${styles.submitButton} ${
                isSubmitting ? styles.submitting : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Küldés folyamatban..." : "Üzenet küldése"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
