import Food from "@/components/icons/Food";
import Fast from "@/components/icons/Fast";
import Choice from "@/components/icons/Choice";
import Clock from "@/components/icons/Clock";

import styles from "./Attributes.module.css";

function Attributes() {
  return (
    <div className={styles['container']}>
      <h3>Why us?</h3>
      <div className={styles['subContainer']}>
        <div>
          <Fast />
          <p>Fast</p>
        </div>
        <div>
          <Food />
          <p>Best Restaurants</p>
        </div>
        <div>
          <Choice />
          <p>Your Choice</p>
        </div>
        <div>
          <Clock />
          <p>24-7</p>
        </div>
      </div>
    </div>
  );
}

export default Attributes;