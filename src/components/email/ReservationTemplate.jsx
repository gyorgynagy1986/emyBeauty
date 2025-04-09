import * as React from "react";

const AppointmentEmailTemplate = ({
  name,
  email,
  phone,
  city,
  service,
  message,
  appointmentDate,
  requiresDeposit,
  isAdminNotification,
}) => {
  // Színek
  const colors = {
    blue: "#004e9d",
    text: "#222222b2",
    lightBlue: "#e6f0fa",
    accent: "#004e9d",
    background: "#f9f9f9",
    white: "#ffffff",
    border: "#e0e0e0",
    warning: "#FFF5E6",
    warningBorder: "#D0A079",
  };

  // Stílusok
  const outerContainerStyle = {
    backgroundColor: colors.background,
    padding: "30px 0",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  };

  const innerContainerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: colors.white,
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    padding: "40px 30px",
    color: colors.text,
    lineHeight: 1.6,
    textAlign: "left",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: 700,
    margin: "0 0 25px 0",
    textAlign: "center",
    color: colors.blue,
  };

  const paragraphStyle = {
    margin: "12px 0 18px 0",
    fontSize: "16px",
    color: colors.text,
  };

  const highlightStyle = {
    fontWeight: "bold",
    color: colors.blue,
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "25px",
    marginBottom: "25px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  };

  const thTdStyle = {
    border: "1px solid #eaeaea",
    padding: "12px 15px",
    textAlign: "left",
  };

  const labelCellStyle = {
    ...thTdStyle,
    backgroundColor: colors.lightBlue,
    fontWeight: "600",
    width: "40%",
    color: colors.blue,
  };

  const valueCellStyle = {
    ...thTdStyle,
    width: "60%",
  };

  const depositWarningStyle = {
    backgroundColor: colors.warning,
    borderLeft: `4px solid ${colors.warningBorder}`,
    padding: "15px",
    borderRadius: "6px",
    margin: "20px 0",
  };

  const linkStyle = {
    color: colors.blue,
    textDecoration: "none",
    fontWeight: "bold",
  };

  // Ha ez admin értesítés
  if (isAdminNotification) {
    return (
      <div style={outerContainerStyle}>
        <div style={innerContainerStyle}>
          <h1 style={titleStyle}>Új időpontfoglalás: {name}</h1>

          <p style={paragraphStyle}>
            Kedves Emy, új időpontfoglalás érkezett a weboldalról.🤗 
          </p>

          {/* Előleg figyelmeztetés adminnak */}
          {requiresDeposit && (
            <div style={depositWarningStyle}>
              <p style={{ margin: "0 0 10px 0", fontWeight: "bold", color: colors.warningBorder }}>
                Fontos: Előlegfizetés szükséges!
              </p>
              <p style={{ margin: "0" }}>
                A választott szolgáltatás előlegfizetéshez kötött (50%).
              </p>
            </div>
          )}

          <p
            style={{
              ...paragraphStyle,
              fontWeight: "600",
              marginTop: "25px",
              color: colors.blue,
            }}
          >
            Foglalás részletei:
          </p>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={labelCellStyle}>Név</td>
                <td style={valueCellStyle}>{name}</td>
              </tr>
              <tr>
                <td style={labelCellStyle}>Email</td>
                <td style={valueCellStyle}>
                  <a href={`mailto:${email}`} style={linkStyle}>{email}</a>
                </td>
              </tr>
              <tr>
                <td style={labelCellStyle}>Telefonszám</td>
                <td style={valueCellStyle}>
                  <a href={`tel:${phone}`} style={linkStyle}>{phone}</a>
                </td>
              </tr>
              {city && (
                <tr>
                  <td style={labelCellStyle}>Város</td>
                  <td style={valueCellStyle}>{city}</td>
                </tr>
              )}
              <tr>
                <td style={labelCellStyle}>Szolgáltatás</td>
                <td style={valueCellStyle}>{service}</td>
              </tr>
              {appointmentDate && (
                <tr>
                  <td style={labelCellStyle}>Időpont</td>
                  <td style={valueCellStyle}>{appointmentDate}</td>
                </tr>
              )}
              {message && (
                <tr>
                  <td style={labelCellStyle}>Megjegyzés</td>
                  <td style={valueCellStyle}>{message}</td>
                </tr>
              )}
              {requiresDeposit && (
                <tr>
                  <td style={labelCellStyle}>Előleg</td>
                  <td style={valueCellStyle}>Szükséges (50%)</td>
                </tr>
              )}
              <tr>
                <td style={labelCellStyle}>Beérkezés ideje</td>
                <td style={valueCellStyle}>
                  {new Date().toLocaleString('hu-HU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </td>
              </tr>
            </tbody>
          </table>

          <p style={paragraphStyle}>
            Közvetlen válasz küldése: <a href={`mailto:${email}`} style={linkStyle}>{email}</a><br />
            Telefon: <a href={`tel:${phone}`} style={linkStyle}>{phone}</a>
          </p>
        </div>
      </div>
    );
  }

  // Ügyfél verzió - a teljes sablon a lábléccel együtt
  return (
    <div style={outerContainerStyle}>
      <div style={innerContainerStyle}>
        <h1 style={titleStyle}>Időpontfoglalás visszaigazolás</h1>

        <p style={paragraphStyle}>
          Kedves <span style={highlightStyle}>{name}</span>,
        </p>

        <p style={paragraphStyle}>
          Köszönöm, hogy időpontot foglaltál az Emy Beauty Estetics-nél!
          Foglalásod megkaptam, és hamarosan felveszem Veled a kapcsolatot a
          részletek egyeztetése és az időpont megerősítése érdekében.
        </p>

        {/* Előleg figyelmeztetés */}
        {requiresDeposit && (
          <div style={depositWarningStyle}>
            <p style={{ margin: "0 0 10px 0", fontWeight: "bold", color: colors.warningBorder }}>
              Fontos: Előlegfizetés szükséges!
            </p>
            <p style={{ margin: "0 0 5px 0" }}>
              A választott szolgáltatás előlegfizetéshez kötött. Az időpont csak az előleg 
              beérkezése után válik véglegessé. Az előleg mértéke a szolgáltatás árának 50%-a.
            </p>
            <p style={{ margin: "5px 0 0 0" }}>
              Bankszámlaszám: <strong>12345678-12345678-12345678</strong>
            </p>
          </div>
        )}

        <p
          style={{
            ...paragraphStyle,
            fontWeight: "600",
            marginTop: "25px",
            color: colors.blue,
          }}
        >
          Foglalás részletei:
        </p>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={labelCellStyle}>Név</td>
              <td style={valueCellStyle}>{name}</td>
            </tr>
            <tr>
              <td style={labelCellStyle}>Email</td>
              <td style={valueCellStyle}>{email}</td>
            </tr>
            <tr>
              <td style={labelCellStyle}>Telefonszám</td>
              <td style={valueCellStyle}>{phone}</td>
            </tr>
            {city && (
              <tr>
                <td style={labelCellStyle}>Város</td>
                <td style={valueCellStyle}>{city}</td>
              </tr>
            )}
            <tr>
              <td style={labelCellStyle}>Szolgáltatás</td>
              <td style={valueCellStyle}>{service}</td>
            </tr>
            {appointmentDate && (
              <tr>
                <td style={labelCellStyle}>Időpont</td>
                <td style={valueCellStyle}>{appointmentDate}</td>
              </tr>
            )}
            {message && (
              <tr>
                <td style={labelCellStyle}>Megjegyzés</td>
                <td style={valueCellStyle}>{message}</td>
              </tr>
            )}
            {requiresDeposit && (
              <tr>
                <td style={labelCellStyle}>Előleg</td>
                <td style={valueCellStyle}>Szükséges (50%)</td>
              </tr>
            )}
          </tbody>
        </table>

        <p style={paragraphStyle}>
          Kérlek, várj, amíg személyesen felveszem Veled a kapcsolatot a
          foglalás részleteinek egyeztetése érdekében. Amennyiben 24 órán
          belül nem kapsz visszajelzést, kérlek hívj a megadott telefonszámon.
        </p>

        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            padding: "15px",
            backgroundColor: colors.lightBlue,
            borderRadius: "6px",
            textAlign: "center",
          }}
        >
          <p style={{ ...paragraphStyle, margin: "5px 0", fontWeight: "bold" }}>
            <span style={highlightStyle}>Időpontfoglalás</span>
            <br />
            <a href="tel:+36203426618" style={linkStyle}>
              +36 20 342 66 18
            </a>
          </p>
        </div>

        <p style={{ ...paragraphStyle, marginTop: "25px" }}>
          Üdvözlettel,
          <br />
          <span style={highlightStyle}>Emy</span>
          <br />
          <span style={{ fontSize: "14px" }}>EmyBeautyEstetics™️</span>
        </p>

        {/* Mobilbarát footer (táblázatos megoldás) */}
        <div
          style={{
            borderTop: `1px solid ${colors.border}`,
            marginTop: "35px",
            paddingTop: "25px",
            textAlign: "center",
          }}
        >
          {/* Első sor: két telephely egymás mellett */}
          <table
            width="100%"
            border="0"
            cellPadding="0"
            cellSpacing="0"
            style={{ marginBottom: "20px" }}
          >
            <tbody>
              <tr>
                <td valign="top" style={{ textAlign: "center" }}>
                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: colors.lightBlue,
                      borderRadius: "6px",
                      width: "250px",
                      margin: "0 10px",
                      padding: "15px 20px",
                    }}
                  >
                    <h4
                      style={{
                        color: colors.blue,
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: "0 0 5px 0",
                      }}
                    >
                      Szeged
                    </h4>
                    <p style={{ margin: "0 0 3px 0", fontSize: "14px" }}>
                      EmyBeautyEstetics™️
                    </p>
                    <p style={{ margin: "0 0 3px 0", fontSize: "14px" }}>
                      Nádas utca 14./a
                    </p>
                  </div>
                </td>
                <td valign="top" style={{ textAlign: "center" }}>
                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: colors.lightBlue,
                      borderRadius: "6px",
                      width: "250px",
                      margin: "0 10px",
                      padding: "15px 20px",
                    }}
                  >
                    <h4
                      style={{
                        color: colors.blue,
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: "0 0 5px 0",
                      }}
                    >
                      Budapest
                    </h4>
                    <p style={{ margin: "0 0 3px 0", fontSize: "14px" }}>
                      2Contour Aesthetic Clinic{" "}
                    </p>
                    <p style={{ margin: "0 0 3px 0", fontSize: "14px" }}>
                      XII. kerület, Rácz Aladár út 158{" "}
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Második sor: elérhetőségek */}
          <table
            width="100%"
            border="0"
            cellPadding="0"
            cellSpacing="0"
            style={{ marginBottom: "20px" }}
          >
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <div style={{ margin: "5px 0" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: colors.blue,
                        fontSize: "14px",
                      }}
                    >
                      Telefon:
                    </span>
                    <a
                      href="tel:+36203426618"
                      style={{
                        marginLeft: "5px",
                        color: colors.blue,
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      +36 20 342 66 18
                    </a>
                  </div>
                  <div style={{ margin: "5px 0" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: colors.blue,
                        fontSize: "14px",
                      }}
                    >
                      Web:
                    </span>
                    <a
                      href="https://emykozmetika.hu"
                      style={{
                        marginLeft: "5px",
                        color: colors.blue,
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      emykozmetika.hu
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Harmadik sor: közösségi ikonok */}
          <table
            width="100%"
            border="0"
            cellPadding="0"
            cellSpacing="0"
            style={{ marginBottom: "20px" }}
          >
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <a
                    href="https://facebook.com/emybeautyestetics"
                    style={{
                      display: "inline-block",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: colors.lightBlue,
                      color: colors.blue,
                      textAlign: "center",
                      lineHeight: "36px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: "16px",
                      margin: "0 5px",
                    }}
                    title="Facebook"
                  >
                    f
                  </a>
                  <a
                    href="https://instagram.com/emybeautyestetics"
                    style={{
                      display: "inline-block",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: colors.lightBlue,
                      color: colors.blue,
                      textAlign: "center",
                      lineHeight: "36px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: "16px",
                      margin: "0 5px",
                    }}
                    title="Instagram"
                  >
                    i
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Válaszvonal */}
          <div
            style={{
              height: "1px",
              background: colors.border,
              margin: "15px auto",
              width: "80%",
            }}
          />

          {/* Negyedik sor: jogi/copyright információk */}
          <p
            style={{
              fontSize: "14px",
              color: colors.text,
              margin: "0 0 10px 0",
            }}
          >
            {new Date().getFullYear()} © EmyBeautyEstetics™️ | Minden jog
            fenntartva
          </p>
          <p
            style={{
              fontSize: "14px",
              color: colors.text,
              margin: "0 0 10px 0",
            }}
          >
            Designed and developed by{" "}
            <a
              href="https://studiobromo.com"
              style={{
                color: colors.blue,
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Studio Bromo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentEmailTemplate;