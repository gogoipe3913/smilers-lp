import React, { FunctionComponent } from "react";
import classNames from "classnames";
import * as styles from "./style.module.scss";

type TopProps = {
  isDisplayed?: boolean;
};

const Top: FunctionComponent<TopProps> = ({ isDisplayed = false }) => {
  return isDisplayed ? (
    <div className={styles.Top}>
      <h1 className={classNames(styles.Top__heading)}>
        <div className={styles.Top__headingSubTextBox}>
          <div className={styles.Top__separator} />
          <p className={styles.Top__headingSubText}>サッカー×エンタメ</p>
          <div className={styles.Top__separator} />
        </div>
        <p className={styles.Top__headingText}>SMILERS始動</p>
      </h1>

      <p className={styles.Top__message}>サッカーの力で、人々を笑顔にする。</p>
      <p className={styles.Top__messageEnglish}>Soccer For Good Smile</p>

      <p className={styles.Top__explain}>SMILERS選手・コーチ募集サイト</p>
      <div className={styles.Top__explainSp}>
        <p className={styles.Top__explainSpText}>SMILERS</p>
        <p className={styles.Top__explainSpText}>選手・コーチ募集サイト</p>
      </div>
      <div className={styles.Top__scrollIndicator}>
        <p className={styles.Top__scrollIndicatorText}>SCROLL</p>
        <div className={styles.Top__scrollLine} />
      </div>
    </div>
  ) : null;
};

export default Top;
