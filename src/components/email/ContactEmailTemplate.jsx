import * as React from "react";

const ContactEmailTemplate = ({
  name,
  email,
  phone,
  message,
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

  // Footer stílusok
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

  return (
    <div style={outerContainerStyle}>
      <div style={innerContainerStyle}>
        <h1 style={titleStyle}>Új kapcsolatfelvételi üzenet</h1>

        <p style={paragraphStyle}>
          Új üzenet érkezett a weboldalról <span style={highlightStyle}>{name}</span> látogatótól.
        </p>

        <div style={infoBoxStyle}>
          <p style={{ margin: 0, fontWeight: "500" }}>
            A látogató kapcsolatfelvételt kezdeményezett a weboldalon található űrlapon keresztül.
            Alább találhatók az üzenet részletei.
          </p>
        </div>

        <p
          style={{
            ...paragraphStyle,
            fontWeight: "600",
            marginTop: "25px",
            color: colors.blue,
          }}
        >
          Üzenet részletei:
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
                <a href={`mailto:${email}`} style={linkStyle}>
                  {email}
                </a>
              </td>
            </tr>
            {phone && (
              <tr>
                <td style={labelCellStyle}>Telefonszám</td>
                <td style={valueCellStyle}>
                  <a href={`tel:${phone}`} style={linkStyle}>
                    {phone}
                  </a>
                </td>
              </tr>
            )}
            <tr>
              <td style={labelCellStyle}>Üzenet időpontja</td>
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

        <div style={infoBoxStyle}>
          <p style={{ margin: 0, fontWeight: "500", color: colors.blue }}>
            Üzenet szövege:
          </p>
          <p style={{ margin: "10px 0 0 0", whiteSpace: "pre-wrap" }}>
            {message}
          </p>
        </div>

        <p style={{ ...paragraphStyle, marginTop: "25px" }}>
          Közvetlenül válaszolhatsz a feladónak az alábbi email címen: <a href={`mailto:${email}`} style={linkStyle}>{email}</a>
          {phone && <>, vagy hívhatod a következő telefonszámon: <a href={`tel:${phone}`} style={linkStyle}>{phone}</a></>}
        </p>

        {/* Footer */}
        <div style={footerContainerStyle}>
          <p style={footerTextStyle}>
            Ez az email automatikusan lett elküldve az EmyBeautyEstetics weboldal kapcsolati űrlapján keresztül.
          </p>
          <p style={footerTextStyle}>
            {new Date().getFullYear()} © EmyBeautyEstetics™️ | Minden jog fenntartva
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactEmailTemplate;