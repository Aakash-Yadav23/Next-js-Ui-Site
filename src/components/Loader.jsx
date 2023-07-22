// components/SpiralCircleLoader.js

import React from "react";
import styles from "./loading.module.css";

const SpiralCircleLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default SpiralCircleLoader;
