import * as React from "react";
import AppointmentEmailTemplate from "@/components/email/ReservationTemplate";
import ConsultationEmailTemplate from "@/components/email/Consultation";

// Egyszerű selector komponens, ami a bookingType alapján választja ki a megfelelő sablont
const EmailSelector = (props) => {
  const { bookingType, ...otherProps } = props;
  
  // Ha időpontfoglalás, akkor a szolgáltatás emailt adjuk vissza
  if (bookingType === "Időpontfoglalás szolgáltatásra") {
    return <AppointmentEmailTemplate {...otherProps} />;
  }
  
  // Egyébként konzultációs emailt adjuk vissza
  return <ConsultationEmailTemplate {...otherProps} />;
};

export default EmailSelector;