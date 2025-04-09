"use client";

import { useState, useEffect } from "react";
import styles from "../page.module.css";
import { CustomDatePicker } from "@/components/custom-date-picker";
import { useRouter } from "next/navigation";
import hu from "date-fns/locale/hu";

// Mock functions for compatibility
const registerLocale = (locale, localeData) => {};
const setDefaultLocale = (locale) => {};

// Register Hungarian locale (no-op but kept for code compatibility)
registerLocale("hu", hu);
setDefaultLocale("hu");

// Define the cities
const cities = ["Budapest", "Szeged"];

const KonzultacioPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isWeekendSelected, setIsWeekendSelected] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState({
    mobile: false,
    desktop: false,
  });

  // FORM ÁLLAPOT
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    consent: false,
    date: "",
    time: "",
  });

  useEffect(() => {
    const checkIfMobile = () => {
      const width = window.innerWidth;
      console.log("Window width:", width, "Is mobile:", width <= 1024);
      setIsMobile(width <= 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Következő érvényes dátum az adott városhoz
  const getNextValidDate = (city) => {
    const today = new Date();
    const testDate = new Date(today);
    let found = false;
    let attempts = 0;

    while (!found && attempts < 14) {
      // Maximum két hét előre keresünk
      attempts++;
      testDate.setDate(testDate.getDate() + 1); // Következő nap

      const day = testDate.getDay(); // 0 = vasárnap, 1 = hétfő, stb.

      // Hétvége kizárása
      if (day === 0 || day === 6) {
        continue;
      }

      // Város szerinti nap ellenőrzése
      if (city === "Budapest") {
        // Budapest: hétfő (1), kedd (2)
        if (day === 1 || day === 2) {
          found = true;
        }
      } else if (city === "Szeged") {
        // Szeged: szerda (3), csütörtök (4), péntek (5)
        if (day === 3 || day === 4 || day === 5) {
          found = true;
        }
      }
    }

    if (found) {
      return testDate;
    } else {
      return null; // Nem találtunk érvényes dátumot
    }
  };

  // Dátum ellenőrzése hétvége és város szerint
  const isDateValid = (date, city) => {
    if (!date || !city) return false;

    const day = date.getDay(); // 0 = vasárnap, 6 = szombat

    // Hétvége ellenőrzése - allow weekends but return "weekend" to show error message
    if (day === 0 || day === 6) {
      return "weekend";
    }

    // Város szerinti nap ellenőrzése
    if (city === "Budapest") {
      // Budapest: hétfő (1), kedd (2)
      return day === 1 || day === 2;
    } else if (city === "Szeged") {
      // Szeged: szerda (3), csütörtök (4), péntek (5)
      return day === 3 || day === 4 || day === 5;
    }

    return false;
  };

  // Dátum szűrő függvény a DatePicker számára
  const filterDate = (date) => {
    if (!formData.city) return false;
    const validity = isDateValid(date, formData.city);
    // Return true for both valid dates and weekends
    return validity === true || validity === "weekend";
  };

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

    // Ha változik a város, automatikusan beállítunk egy érvényes dátumot
    if (name === "city") {
      const nextValidDate = getNextValidDate(value);

      setFormData((prev) => ({
        ...prev,
        [name]: value,
        date: nextValidDate ? nextValidDate.toISOString().split("T")[0] : "", // Automatikusan beállítjuk a következő érvényes dátumot
      }));

      // Töröljük a dátummal kapcsolatos hibaüzenetet
      setErrors((prev) => ({
        ...prev,
        date: "",
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

  // Modify the handleDateChange function to check for weekends
  const handleDateChange = (date) => {
    if (date) {
      // Check if it's a weekend
      const day = date.getDay();
      const isWeekend = day === 0 || day === 6;
      setIsWeekendSelected(isWeekend);

      setFormData((prev) => ({
        ...prev,
        date: date.toISOString().split("T")[0],
      }));

      // Töröljük a dátummal kapcsolatos hibaüzenetet
      setErrors((prev) => ({
        ...prev,
        date: "",
      }));
    }
  };

  const goToNextStep = () => {
    if (currentStep === 1) {
      // Ellenőrizzük, hogy van-e kiválasztott város
      if (!formData.city) {
        setErrors((prev) => ({
          ...prev,
          city: "Kérlek válassz várost",
        }));
        return;
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    if (currentStep === 1) {
      router.push("/");
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  // Modify the validateForm function to check for weekend dates
  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: !formData.phone ? "Telefonszám megadása kötelező" : "",
      consent: !formData.consent
        ? "Az adatkezelési szabályzat elfogadása kötelező"
        : "",
      city: !formData.city ? "Kérlek válassz várost" : "",
    };

    if (!formData.date) {
      newErrors.date = "Kérlek válassz dátumot";
    } else if (isWeekendSelected) {
      newErrors.date = "Hétvégén nem foglalható időpont";
    }

    if (!formData.time) {
      newErrors.time = "Kérlek válassz időpontot";
    }

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
      const emailData = {
        bookingType: "Konzultáció",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        service: "",
        message: formData.message,
        consent: formData.consent,
        date: formData.date,
        time: formData.time,
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

        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          message: "",
          consent: false,
          date: "",
          time: "",
        });
        setCurrentStep(1);

        setTimeout(() => {
          setSubmitSuccess(false);
          router.push("/");
        }, 3000);
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

  const handleVideoLoad = (type) => {
    setVideoLoaded((prev) => ({
      ...prev,
      [type]: true,
    }));
    console.log(`${type} video loaded successfully`);
  };

  const handleVideoError = (type) => {
    console.error(`Error loading ${type} video`);
  };

  return (
    <div className={styles.pageContainer}>
      {isMobile === false && (
        <video
          playsInline
          muted
          autoPlay
          loop
          className={styles.backgroundVideo}
          preload="auto"
          onLoadedData={() => handleVideoLoad("mobile")}
          onError={() => handleVideoError("mobile")}
        >
          <source src="/desktop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {isMobile === true && (
        <video
          playsInline
          muted
          autoPlay
          loop
          className={styles.backgroundVideo}
          preload="auto"
          onLoadedData={() => handleVideoLoad("desktop")}
          onError={() => handleVideoError("desktop")}
        >
          <source src="/desktop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h2 className={styles.h2}>Konzultáció</h2>
          <p className={styles.p}>
            Kérj konzultációt, és amint lehetőségem van, visszahívlak!
          </p>

          {submitSuccess && (
            <div className={styles.successMessage}>
              Köszönjük! Üzenetét sikeresen elküldtük.
            </div>
          )}

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* 1. lépés: Város választása */}
            {currentStep === 1 && (
              <div className={styles.step}>
                <h3 className={styles.stepTitle}>Konzultáció részletei</h3>

                <p className={styles.consultationInfo}>
                  Válaszd ezt az opciót, ha szeretnél előzetes konzultációt a
                  szolgáltatásokról, vagy egyedi igényeid megbeszélése
                  érdekében.
                </p>

                {/* Város választása */}
                <div className={styles.inputWrapper}>
                  <select
                    className={`${styles.select} ${
                      errors.city ? styles.errorInput : ""
                    }`}
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  >
                    <option value="">Válassz várost...</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {errors.city && (
                    <span className={styles.errorText}>{errors.city}</span>
                  )}
                </div>

                {/* Információ a választható napokról */}
                {formData.city && (
                  <div className={styles.cityInfo}>
                    {formData.city === "Budapest" ? (
                      <p className={styles.infoText}>
                        Budapesten hétfőn és kedden vagyunk elérhetőek.
                      </p>
                    ) : (
                      <p className={styles.infoText}>
                        Szegeden szerdán, csütörtökön és pénteken vagyunk
                        elérhetőek.
                      </p>
                    )}
                  </div>
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

            {/* 2. lépés: Kapcsolati adatok, dátum és üzenet */}
            {currentStep === 2 && (
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

                {/* DÁTUM ÉS IDŐPONT MEGADÁSA - Saját DatePicker komponenssel */}
                <div className={styles.inputWrapper}>
                  <label className={styles.label}>Dátum</label>
                  <div className={`${errors.date ? styles.errorInput : ""}`}>
                    <CustomDatePicker
                      selected={formData.date ? new Date(formData.date) : null}
                      onChange={handleDateChange}
                      filterDate={filterDate}
                      minDate={new Date()}
                      placeholderText="Válassz dátumot..."
                      disabled={isSubmitting || !formData.city}
                      className={styles.input}
                      dateFormat="yyyy-MM-dd"
                      locale="hu"
                    />
                  </div>
                  {!formData.city && (
                    <span className={styles.infoText}>
                      Először válassz várost
                    </span>
                  )}
                  {formData.city === "Budapest" && (
                    <span className={styles.infoText}></span>
                  )}
                  {formData.city === "Szeged" && (
                    <span className={styles.infoText}></span>
                  )}
                  {errors.date && (
                    <span className={styles.errorText}>{errors.date}</span>
                  )}
                  {isWeekendSelected && (
                    <span className={styles.errorText}>
                      {" "}
                      Hétvégi időpontfoglalás kizárólag előzetes egyeztetést
                      követően lehetséges! Kérjük, hétvégi időpont
                      egyeztetéséhez hívjon a következő telefonszámon:+36 20 342
                      66 18
                    </span>
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
                    <a href="/dokumentumok/adatkezeles" target="_blank">
                      {" "}
                      Elfogadom az{" "}
                      <span style={{ textDecoration: "underline" }}>
                        adatkezelési 
                      </span>{" "}
                      és a 
                    </a>

                    <a href="/dokumentumok/foglalasi-szabalyzat" target="_blank">
                      {" "}
                      {" "}
                      <span style={{ textDecoration: "underline" }}>
                        foglalási szabályzatot!
                      </span>{" "}
                    </a>
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

export default KonzultacioPage;
