import React from "react";
import styles from "./PriceTable.module.css";
import Ob from "@/components/astract/ObjectElement";

const allServices = [
  {
    category: "Szolgáltatás kategória 1",
    items: [
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft" },
      { name: "Szolgáltatás neve", price: "15.990 Ft" },
    ],
  },
  {
    category: "Szolgáltatás kategória 2",
    items: [
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft" },
      { name: "Szolgáltatás neve", price: "15.990 Ft" },
    ],
  },
  {
    category: "Szolgáltatás kategória 3",
    items: [
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft" },
      { name: "Szolgáltatás neve", price: "15.990 Ft" },
    ],
  },
  {
    category: "Szolgáltatás kategória 4",
    items: [
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft" },
      { name: "Szolgáltatás neve", price: "15.990 Ft" },
    ],
  },
  {
    category: "Szolgáltatás kategória 5",
    items: [
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft" },
      { name: "Szolgáltatás neve", price: "15.990 Ft" },
    ],
  },
  {
    category: "Szolgáltatás kategória 5",
    items: [
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft", perUse: "/alkalom" },
      { name: "Szolgáltatás neve", price: "15.990 Ft" },
      { name: "Szolgáltatás neve", price: "15.990 Ft" },
    ],
  },
];

// Szolgáltatási lista komponens
const ServiceList = ({ category, items }) => (
  <div className={styles.titleItem}>
    <h3 className={styles.titleItemTitle}>{category}</h3>
    <div className={styles.list}>
      {items.map((service, index) => (
        <div key={index} className={styles.listItem}>
          <p className={styles.serviceName}>{service.name}</p>
          <span className={styles.span}></span>
          <p className={styles.servicePrice}>
            {service.price}{" "}
            <span className={styles.perUse}>{service.perUse}</span>
          </p>
        </div>
      ))}
    </div>
  </div>
);

// Fő komponens
const PriceTable = () => {
  return (
    <section className={styles.container}>
      <div className={styles.helper}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Árak</h1>
          <Ob />
        </div>

        {allServices.map((serviceCategory, index) => (
          <ServiceList
            key={index}
            category={serviceCategory.category}
            items={serviceCategory.items}
          />
        ))}
      </div>
    </section>
  );
};

export default PriceTable;
