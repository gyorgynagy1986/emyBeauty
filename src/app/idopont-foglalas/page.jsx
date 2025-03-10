"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { services, bookingTypes } from "@/data/services"; // Frissített import

const page = () => {
  // Lépések kezelésére új állapot
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingType, setBookingType] = useState("");

  console.log(bookingType);

  // FORM ÁLLAPOT (Ide beillesztettük a date és time mezőket is)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false,
    date: "", // ÚJ
    time: "", // ÚJ
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

    if (name === "phone") {
      const numbersOnly = value.replace(/[^\d]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numbersOnly,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBookingTypeChange = (type) => {
    setBookingType(type);
    // Ha konzultációt választ, töröljük a service értéket
    if (type === "Konzultáció") {
      setFormData((prev) => ({
        ...prev,
        service: "",
      }));
    }
    setCurrentStep(2);
  };

  const goToNextStep = () => {
    if (currentStep === 2) {
      // Ha a második lépésen vagyunk, ellenőrizzük, hogy a service ki van-e választva (csak akkor, ha "Időpontfoglalás szolgáltatásra")
      if (
        bookingType === "Időpontfoglalás szolgáltatásra" &&
        !formData.service
      ) {
        setErrors((prev) => ({
          ...prev,
          service: "Kérlek válassz szolgáltatást",
        }));
        return;
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // VALIDÁCIÓS FÜGGVÉNY (igény szerint bővíthető a date/time mezők ellenőrzésével is)
  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: !formData.phone ? "Telefonszám megadása kötelező" : "",
      consent: !formData.consent
        ? "Az adatkezelési szabályzat elfogadása kötelező"
        : "",
    };

    // Csak akkor ellenőrizzük a szolgáltatást, ha időpontfoglalásról van szó
    if (bookingType === "Időpontfoglalás szolgáltatásra") {
      newErrors.service = !formData.service
        ? "Kérlek válassz szolgáltatást"
        : "";
      // Ha kötelező a dátum és idő, itt is ellenőrizhetjük
      if (!formData.date) {
        newErrors.date = "Kérlek válassz dátumot";
      }
      if (!formData.time) {
        newErrors.time = "Kérlek válassz időpontot";
      }
    }

    // Ha konzultációnál is kötelezőnek szeretnéd, itt ugyanez:
    // if (bookingType === "Konzultáció") {
    //   if (!formData.date) {
    //     newErrors.date = "Kérlek válassz dátumot";
    //   }
    //   if (!formData.time) {
    //     newErrors.time = "Kérlek válassz időpontot";
    //   }
    // }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Az emailData objektumba átemeljük a date és time mezőket is
      const emailData = {
        bookingType,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        consent: formData.consent,
        date: formData.date, // ÚJ
        time: formData.time, // ÚJ
      };

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.error || "Hiba történt az email küldése során."
          );
        }

        // Sikeres küldés
        setSubmitSuccess(true);
        // Form reset
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          consent: false,
          date: "",
          time: "",
        });
        setBookingType("");
        setCurrentStep(1);

        setTimeout(() => setSubmitSuccess(false), 6000);
      } else {
        const textResponse = await response.text();
        console.error("Nem JSON válasz:", textResponse);
        throw new Error("A szerver hibás választ küldött.");
      }
    } catch (error) {
      console.error("Form küldési hiba:", error);
      setErrors((prev) => ({
        ...prev,
        submit:
          error.message || "Hiba történt a küldés során. Kérlek próbáld újra.",
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
          <h2 className={styles.h2}>
            {currentStep === 1
              ? "Időpontfoglalás és Konzultáció"
              : bookingType === "Időpontfoglalás szolgáltatásra"
              ? "Időpontfoglalás"
              : "Konzultáció"}
          </h2>
          <p className={styles.p}>
            {currentStep === 1
              ? "Foglalj időpontot vagy kérj konzultációt, és amint lehetőségem van, visszahívlak!"
              : bookingType === "Időpontfoglalás szolgáltatásra"
              ? "Foglalj időpontot a kiválasztott szolgáltatásra, és amint lehetőségem van, visszahívlak!"
              : "Kérj konzultációt, és amint lehetőségem van, visszahívlak!"}
          </p>

          {submitSuccess && (
            <div className={styles.successMessage}>
              Köszönjük! Üzenetét sikeresen elküldtük.
            </div>
          )}

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* 1. lépés: Időpontfoglalás vagy konzultáció választása */}
            {currentStep === 1 && (
              <div className={styles.step}>
                <h3 className={styles.stepTitle}>
                  Milyen típusú időpontot szeretnél foglalni?
                </h3>
                <div className={styles.bookingTypeContainer}>
                  {bookingTypes.map((type, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`${styles.bookingTypeButton} ${
                        bookingType === type ? styles.selected : ""
                      }`}
                      onClick={() => handleBookingTypeChange(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 2. lépés: Szolgáltatás választása (csak időpontfoglalásnál) */}
            {currentStep === 2 && (
              <div className={styles.step}>
                <h3 className={styles.stepTitle}>
                  {bookingType === "Időpontfoglalás szolgáltatásra"
                    ? "Melyik szolgáltatásra szeretnél időpontot foglalni?"
                    : "Konzultáció részletei"}
                </h3>

                {bookingType === "Időpontfoglalás szolgáltatásra" && (
                  <div className={styles.inputWrapper}>
                    <select
                      className={`${styles.select} ${
                        errors.service ? styles.errorInput : ""
                      }`}
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
                    {errors.service && (
                      <span className={styles.errorText}>{errors.service}</span>
                    )}
                  </div>
                )}

                {bookingType === "Konzultáció" && (
                  <p className={styles.consultationInfo}>
                    Válaszd ezt az opciót, ha szeretnél előzetes konzultációt a
                    szolgáltatásokról, vagy egyedi igényeid megbeszélése
                    érdekében.
                  </p>
                )}

                <div className={styles.navigationButtons}>
                  <button
                    type="button"
                    className={styles.backButton}
                    onClick={goToPreviousStep}
                  >
                    Vissza
                  </button>
                  <button
                    type="button"
                    className={styles.nextButton}
                    onClick={goToNextStep}
                  >
                    Tovább
                  </button>
                </div>
              </div>
            )}

            {/* 3. lépés: Kapcsolati adatok, dátum és üzenet */}
            {currentStep === 3 && (
              <div className={styles.step}>
                <h3 className={styles.stepTitle}>Kapcsolati adatok</h3>

                <div className={styles.inputWrapper}>
                  <input
                    className={`${styles.input} ${
                      errors.name ? styles.errorInput : ""
                    }`}
                    type="text"
                    name="name"
                    placeholder="Név"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() =>
                      setErrors((prev) => ({
                        ...prev,
                        name: validateName(formData.name),
                      }))
                    }
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <span className={styles.errorText}>{errors.name}</span>
                  )}
                </div>

                <div className={styles.inputWrapper}>
                  <input
                    className={`${styles.input} ${
                      errors.email ? styles.errorInput : ""
                    }`}
                    type="email"
                    name="email"
                    placeholder="E-mail cím"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() =>
                      setErrors((prev) => ({
                        ...prev,
                        email: validateEmail(formData.email),
                      }))
                    }
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span className={styles.errorText}>{errors.email}</span>
                  )}
                </div>

                <div className={styles.inputWrapper}>
                  <input
                    className={`${styles.input} ${
                      errors.phone ? styles.errorInput : ""
                    }`}
                    type="tel"
                    name="phone"
                    placeholder="Telefonszám"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <span className={styles.errorText}>{errors.phone}</span>
                  )}
                </div>

                {/* DÁTUM ÉS IDŐPONT MEGADÁSA */}
                <div className={styles.inputWrapper}>
                  <label className={styles.label}>Dátum</label>
                  <input
                    className={`${styles.input} ${
                      errors.date ? styles.errorInput : ""
                    }`}
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.date && (
                    <span className={styles.errorText}>{errors.date}</span>
                  )}
                </div>

                <div className={styles.inputWrapper}>
                  <label className={styles.label}>Időpont</label>
                  <input
                    className={`${styles.input} ${
                      errors.time ? styles.errorInput : ""
                    }`}
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.time && (
                    <span className={styles.errorText}>{errors.time}</span>
                  )}
                </div>
                {/* ----------- */}

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

                <div
                  className={`${styles.checkboxContainer} ${
                    errors.consent ? styles.errorInput : ""
                  }`}
                >
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
                {errors.consent && (
                  <span className={styles.errorText}>{errors.consent}</span>
                )}

                {errors.submit && (
                  <div className={styles.submitError}>{errors.submit}</div>
                )}

                <div className={styles.navigationButtons}>
                  <button
                    type="button"
                    className={styles.backButton}
                    onClick={goToPreviousStep}
                  >
                    Vissza
                  </button>
                  <button
                    type="submit"
                    className={`${styles.submitButton} ${
                      isSubmitting ? styles.submitting : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Küldés folyamatban..." : "Üzenet küldése"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
