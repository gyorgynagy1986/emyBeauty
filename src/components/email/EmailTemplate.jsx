import * as React from "react";

export const EmailTemplate = ({
  name,
  email,
  phone,
  date,
  persons,
  startTime,
  endTime,
}) => (
  <div
    style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.5, color: "#333" }}
  >
    <h1 style={{ color: "#3c4043" }}>Új foglalás érkezett!</h1>
    <p>Tisztelt Étterem!</p>
    <p>
      Egy új foglalás érkezett az oldaláról. Az alábbiakban találja a foglalás
      részleteit:
    </p>

    <table
      style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
    >
      <thead>
        <tr>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              backgroundColor: "#f4f4f4",
            }}
          >
            Adat
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              backgroundColor: "#f4f4f4",
            }}
          >
            Érték
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>Név</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>{name}</td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>Email</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>{email}</td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            Telefonszám
          </td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>{phone}</td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>Dátum</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>{date}</td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            Vendégek száma
          </td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            {persons}
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            Kezdési idő
          </td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            {startTime}
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            Befejezési idő
          </td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            {endTime}
          </td>
        </tr>
      </tbody>
    </table>

    <p style={{ marginTop: "20px" }}>
      Kérjük, erősítse meg a foglalást az ügyféllel!
    </p>
    <p>
      Köszönettel,
      <br />
      Az Ön weboldala
    </p>
  </div>
);
