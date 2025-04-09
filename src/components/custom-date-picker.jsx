"use client"

import { useState, useEffect, useRef } from "react"

export const CustomDatePicker = ({
  selected,
  onChange,
  filterDate,
  minDate,
  placeholderText,
  disabled,
  className,
  dateFormat = "yyyy-MM-dd",
  locale = "hu",
  ...otherProps
}) => {
  const [selectedDate, setSelectedDate] = useState(selected || null)
  const [currentMonth, setCurrentMonth] = useState(selected || new Date())
  const [showCalendar, setShowCalendar] = useState(false)
  const datePickerRef = useRef(null)

  // Update selected date when prop changes
  useEffect(() => {
    setSelectedDate(selected)
  }, [selected])

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setShowCalendar(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Format date to display in input
  const formatDate = (date) => {
    if (!date) return ""

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")

    if (dateFormat === "yyyy-MM-dd") {
      return `${year}-${month}-${day}`
    } else {
      // Handle other formats if needed
      return date.toLocaleDateString(locale)
    }
  }

  // Month translations
  const months = {
    hu: [
      "Január",
      "Február",
      "Március",
      "Április",
      "Május",
      "Június",
      "Július",
      "Augusztus",
      "Szeptember",
      "Október",
      "November",
      "December",
    ],
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  }

  // Days translations
  const daysShort = {
    hu: ["H", "K", "Sze", "Cs", "P", "Szo", "V"],
    en: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  }

  // Get month name for the current locale
  const getMonthName = (monthIndex) => {
    return months[locale]?.[monthIndex] || months.en[monthIndex]
  }

  // Get header text for the calendar
  const getMonthYear = (date) => {
    return `${getMonthName(date.getMonth())} ${date.getFullYear()}`
  }

  // Generate days for the calendar
  const getDaysArray = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()

    // In JavaScript, Sunday is 0, but in Hungarian locale Monday is the first day (1)
    // So we need to adjust to make Monday the first day of the week
    const firstDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

    const days = []

    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }

    return days
  }

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  // Check if a date is today
  const isToday = (date) => {
    if (!date) return false
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  // Check if a date is the selected date
  const isSelectedDate = (date) => {
    if (!date || !selectedDate) return false
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    )
  }

  // Check if date is before min date
  const isBeforeMinDate = (date) => {
    if (!date || !minDate) return false
    return date < minDate
  }

  // Handle date selection
  const handleDateSelect = (date) => {
    if (disabled) return

    setSelectedDate(date)
    setShowCalendar(false)
    if (onChange) {
      onChange(date)
    }
  }

  // Calendar days
  const days = getDaysArray(currentMonth.getFullYear(), currentMonth.getMonth())

  // Custom date picker style using the existing styles
  const datePickerStyles = {
    datePickerContainer: {
      position: "relative",
      width: "100%",
    },
    datePickerInputContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    calendarIcon: {
      position: "absolute",
      right: "0.75rem",
      color: "#64748b",
      pointerEvents: "none",
    },
    calendarDropdown: {
      position: "absolute",
      marginTop: "0.5rem",
      maxWidth: "30rem",
      width: "100%",
      backgroundColor: "white",
      border: "1px solid #e2e8f0",
      borderRadius: "0.375rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      zIndex: 50,
      padding: "1rem",
      fontSize: "1.2rem", // Kisebb méret
    },
    calendarHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "0.75rem",
    },
    navButton: {
      background: "none",
      border: "none",
      padding: "0.25rem 0.5rem",
      cursor: "pointer",
      color: "#64748b",
      borderRadius: "0.25rem",
    },
    monthYearLabel: {
      fontWeight: 600,
      color: "#1e293b",
      fontSize: "1.4rem", // Kisebb méret, de még mindig olvasható
    },
    weekdaysContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "0.25rem",
      marginBottom: "0.5rem",
    },
    weekday: {
      textAlign: "center",
      fontWeight: 500,
      color: "#64748b",
      padding: "0.25rem 0",
      fontSize: "1.2rem", // Kisebb méret
    },
    daysContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "0.25rem",
    },
    dayCell: {
      textAlign: "center",
      aspectRatio: "1/1", // Ez biztosítja a négyzet alakot a cellákhoz
      padding: "0.15rem", // Kisebb padding a kompaktabb megjelenésért
    },
    dayButton: {
      width: "2.5rem", // Explicit szélesség a körformához
      height: "2.5rem", // Explicit magasság a körformához
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "none",
      border: "none",
      borderRadius: "50%", // Teljes kör
      cursor: "pointer",
      color: "#1e293b",
      fontSize: "1.2rem", // Kisebb méret
      margin: "0 auto", // Középre igazítás
    },
    today: {
      border: "1px solid #3b82f6",
      color: "#3b82f6",
    },
    selected: {
      backgroundColor: "#3b82f6",
      color: "white",
    },
    disabled: {
      color: "#cbd5e1",
      cursor: "not-allowed",
      opacity: 0.5,
    },
    todayButtonContainer: {
      marginTop: "0.75rem",
      textAlign: "center",
    },
    todayButton: {
      background: "none",
      border: "none",
      color: "#3b82f6",
      cursor: "pointer",
      fontSize: "1.2rem", // Kisebb méret
      padding: "0.25rem 0.5rem",
      borderRadius: "0.25rem",
    },
  }

  return (
    <div style={datePickerStyles.datePickerContainer} ref={datePickerRef}>
      <div style={datePickerStyles.datePickerInputContainer}>
        <input
          type="text"
          className={className}
          value={selectedDate ? formatDate(selectedDate) : ""}
          placeholder={placeholderText || "Válassz dátumot..."}
          readOnly
          onClick={() => !disabled && setShowCalendar(!showCalendar)}
          disabled={disabled}
          {...otherProps}
        />
        <div style={datePickerStyles.calendarIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="white"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
      </div>

      {showCalendar && (
        <div style={datePickerStyles.calendarDropdown}>
          {/* Calendar Header */}
          <div style={datePickerStyles.calendarHeader}>
            <button style={datePickerStyles.navButton} onClick={prevMonth} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div style={datePickerStyles.monthYearLabel}>{getMonthYear(currentMonth)}</div>
            <button style={datePickerStyles.navButton} onClick={nextMonth} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Days of Week */}
          <div style={datePickerStyles.weekdaysContainer}>
            {daysShort[locale].map((day, index) => (
              <div key={index} style={datePickerStyles.weekday}>
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div style={datePickerStyles.daysContainer}>
            {days.map((date, index) => (
              <div key={index} style={datePickerStyles.dayCell}>
                {date ? (
                  <button
                    type="button"
                    style={{
                      ...datePickerStyles.dayButton,
                      ...(isToday(date) ? datePickerStyles.today : {}),
                      ...(isSelectedDate(date) ? datePickerStyles.selected : {}),
                      ...(isBeforeMinDate(date) || (filterDate && !filterDate(date)) ? datePickerStyles.disabled : {}),
                    }}
                    onClick={() => {
                      if ((!minDate || date >= minDate) && (!filterDate || filterDate(date))) {
                        handleDateSelect(date)
                      }
                    }}
                    disabled={(minDate && date < minDate) || (filterDate && !filterDate(date))}
                  >
                    {date.getDate()}
                  </button>
                ) : (
                  <div style={{ height: "32px" }}></div>
                )}
              </div>
            ))}
          </div>

          {/* Today Button */}
          <div style={datePickerStyles.todayButtonContainer}>
            <button
              type="button"
              style={datePickerStyles.todayButton}
              onClick={() => {
                const today = new Date()
                // Check if today is valid based on filter
                if ((!minDate || today >= minDate) && (!filterDate || filterDate(today))) {
                  handleDateSelect(today)
                }
              }}
              disabled={(minDate && new Date() < minDate) || (filterDate && !filterDate(new Date()))}
            >
              Mai nap
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
