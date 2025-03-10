import * as React from "react";

const ConsultationEmailTemplate = ({
  name,
  email,
  phone,
  message,
  appointmentDate,
  isAdminNotification
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
  };

  // Fő konténerek
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

  // Általános stílusok
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

  // Kiemelt (pl. infóbox) stílus
  const infoBoxStyle = {
    backgroundColor: colors.lightBlue,
    padding: "15px",
    borderRadius: "6px",
    margin: "20px 0",
    borderLeft: `4px solid ${colors.blue}`,
  };

  // Linkek
  const linkStyle = {
    color: colors.blue,
    textDecoration: "none",
    fontWeight: "bold",
  };

  // Footer stílusok (táblázatos megoldás)
  const footerContainerStyle = {
    borderTop: `1px solid ${colors.border}`,
    marginTop: "35px",
    paddingTop: "25px",
    textAlign: "center",
  };

  const footerTextStyle = {
    fontSize: "14px",
    color: colors.text,
    margin: "0 0 10px 0",
  };

  // Főcím dinamikus beállítása admin értesítés esetén
  const title = isAdminNotification
    ? `Új konzultációs igény: ${name}`
    : "Konzultációs igény visszaigazolása";

  return (
    <div style={outerContainerStyle}>
      <div style={innerContainerStyle}>
        <h1 style={titleStyle}>{title}</h1>

        <p style={paragraphStyle}>
          {isAdminNotification ? (
            <>Új konzultációs igény érkezett a weboldalról.</>
          ) : (
            <>
              Kedves <span style={highlightStyle}>{name}</span>,
            </>
          )}
        </p>
        
        {!isAdminNotification && (
          <p style={paragraphStyle}>
            Köszönöm, hogy konzultációs igényt küldtél az EmyBeautyEstetics-hez!
            Megkaptam az üzenetedet, és hamarosan személyesen felveszem Veled a kapcsolatot 
            egy alkalmas időpont egyeztetése érdekében.
          </p>
        )}

        {!isAdminNotification && (
          <div style={infoBoxStyle}>
            <p style={{ margin: 0, fontWeight: "500" }}>
              A konzultáció során részletesen megbeszéljük az igényeidet, és segítek kiválasztani 
              a számodra legmegfelelőbb kezeléseket és megoldásokat.
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
          {isAdminNotification ? "Kérés részletei:" : "Kérésed részletei:"}
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
            <tr>
              <td style={labelCellStyle}>Típus</td>
              <td style={valueCellStyle}>Konzultáció</td>
            </tr>
            {appointmentDate && (
              <tr>
                <td style={labelCellStyle}>Tervezett időpont</td>
                <td style={valueCellStyle}>{appointmentDate}</td>
              </tr>
            )}
            {message && (
              <tr>
                <td style={labelCellStyle}>Megjegyzés</td>
                <td style={valueCellStyle}>{message}</td>
              </tr>
            )}
          </tbody>
        </table>

        {!isAdminNotification && (
          <p style={paragraphStyle}>
            Kérlek, várj, amíg személyesen felveszem Veled a kapcsolatot. 
            Amennyiben 24 órán belül nem jelentkezem, kérlek hívj a megadott telefonszámon.
          </p>
        )}

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
            <span style={highlightStyle}>Konzultációs időpontegyeztetés</span>
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

        {/* *** Footer: táblázatalapú, hogy ne csússzon szét mobilon *** */}
        <div style={footerContainerStyle}>
          {/* 1. sor: két telephely (Szeged / Budapest) */}
          <table
            width="100%"
            border="0"
            cellPadding="0"
            cellSpacing="0"
            style={{ marginBottom: "20px" }}
          >
            <tbody>
              <tr>
                <td valign="top" style={{ textAlign: "center", padding: "0 10px" }}>
                  <div
                    style={{
                      backgroundColor: colors.lightBlue,
                      borderRadius: "6px",
                      padding: "15px 20px",
                      margin: "0 auto 10px",
                      maxWidth: "280px",
                    }}
                  >
                    <h4
                      style={{
                        color: colors.blue,
                        fontSize: "15px",
                        fontWeight: "bold",
                        margin: "0 0 5px 0",
                      }}
                    >
                      Szeged
                    </h4>
                    <p style={{ margin: "0 0 3px 0", fontSize: "13px" }}>
                      EmyBeautyEstetics™️
                    </p>
                    <p style={{ margin: "0 0 3px 0", fontSize: "13px" }}>
                      Nádas utca 14./a
                    </p>
                  </div>
                </td>
                <td valign="top" style={{ textAlign: "center", padding: "0 10px" }}>
                  <div
                    style={{
                      backgroundColor: colors.lightBlue,
                      borderRadius: "6px",
                      padding: "15px 20px",
                      margin: "0 auto 10px",
                      maxWidth: "280px",
                    }}
                  >
                    <h4
                      style={{
                        color: colors.blue,
                        fontSize: "15px",
                        fontWeight: "bold",
                        margin: "0 0 5px 0",
                      }}
                    >
                      Budapest
                    </h4>
                    <p style={{ margin: "0 0 3px 0", fontSize: "13px" }}>
                      XIII. kerület
                    </p>
                    <p style={{ margin: "0 0 3px 0", fontSize: "13px" }}>
                      Szabolcs utca 23-25.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* 2. sor: elérhetőségek (telefon, web) */}
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

          {/* 3. sor: közösségi ikonok */}
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

          {/* 4. sor: jogi / copyright */}
          <p style={footerTextStyle}>
            {new Date().getFullYear()} © EmyBeautyEstetics™️ | Minden jog fenntartva
          </p>
          <p style={footerTextStyle}>
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

export default ConsultationEmailTemplate;