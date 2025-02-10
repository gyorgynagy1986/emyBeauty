import React from "react";
import styles from "./Contact.module.css";
import Object from "@/components/astract/Object";
import Button from '@/components/button/Button'
import Button2 from '@/components/button/Button2'
import Button3 from '@/components/button/Button4'

const Contact = () => {
  return (
    <section className={styles.sections}>
      <div className={styles.container}>
        <div className={styles.helper}>
          <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
              <h2>Időpontfoglalás</h2>
            </div>
            <div className={styles.text}>
              <p>
                Kezeléseim kizárólag előzetes bejelentkezés alapján érhetők el.
                Minden vendégem teljes figyelmet és személyre szabott törődést
                kap a lefoglalt időpontban.
              </p>
              <Object />
            </div>
            <div className={styles.btnContainer}>
            <Button />
            <Button2 />
            </div>
          </div>

          <div className={styles.textContainer2}>
            <div className={styles.titleContainer}>
              <h2>Elérhetőségeim</h2>
            </div>
            <div className={styles.text}>
              <p>
                Két városban is elérhető vagyok, hogy közelebb hozhassam
                számodra a szépség és harmónia élményét. Fordulj hozzám
                bizalommal, és foglalj időpontot személyre szabott kezelésre egy
                nyugodt, igényes környezetben!
              </p>
              <Object />
            </div>
            <div style={{marginTop:'0px'}} className={styles.btnContainer}>

            <Button3 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
