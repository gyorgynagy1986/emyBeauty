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

  // Privacy policy validation
  if (!formData.consent) {
    errors.consent = "Az adatkezelési tájékoztató elfogadása kötelező";
  }

  return errors;
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      const newErrors = { ...formErrors };
      delete newErrors[name];
      setFormErrors(newErrors);
    }
  };

  const handleSubmit = async (e) => {
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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Hiba történt az üzenet küldése során."
        );
      }

      // Sikeres küldés esetén
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
      });

      // 8 másodperc után eltüntetjük a sikeres üzenetet
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 8000);
    } catch (error) {
      console.error("Form küldési hiba:", error);
      setFormErrors({
        ...formErrors,
        submit:
          error.message ||
          "Hiba történt a küldés során. Kérjük, próbálja újra később.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              Szépülnél vagy csak kérdésed van a kezelésekkel kapcsolatban? Vedd
              fel velem a kapcsolatot, és segítek kiválasztani a bőrtípusodnak
              legmegfelelőbb kezelést. Személyre szabott tanácsadással várlak!
            </p>
            <a href="mailto:emy@emybeautyestetics.hu">
              emy@emybeautyestetics.hu
            </a>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.contentContainert}>
          {submitSuccess ? (
            <div className={styles.successContainer}>
              <div className={styles.successIcon}>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#004e9d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h4 className={styles.successTitle}>Köszönjük az üzenetet!</h4>
              <p className={styles.successText}>
                Üzenetét sikeresen elküldtük. Hamarosan válaszolunk Önnek a
                megadott elérhetőségek egyikén.
              </p>
            </div>
          ) : (
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

              <div className={`${styles.formGroup} ${styles.consentGroup}`}>
                <label className={styles.consentLabel}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className={styles.consentCheckbox}
                  />
                  <span className={styles.consentText}>
                    Elfogadom az{" "}
                    <a
                      href="/adatkezeles"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      adatkezelési tájékoztatót
                    </a>
                  </span>
                </label>
                {formErrors.consent && (
                  <p className={styles.errorText}>{formErrors.consent}</p>
                )}
              </div>

              {formErrors.submit && (
                <div className={styles.submitError}>{formErrors.submit}</div>
              )}

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
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
