import React, { FunctionComponent } from "react";
import * as styles from "./style.module.scss";
// images
import arrowDownSrc from "../../../images/selectionFlow/arrowDown.png";
import Button1 from "../../../images/selectionFlow/button1_new.png";
import Button2 from "../../../images/selectionFlow/button2.png";
import { ENTRY_BUTTON_URLS } from "../Header";
import classNames from "classnames";

const SelectionFlow: FunctionComponent = () => {
  return (
    <div className={styles.SelectionFlow}>
      <div className={styles.SelectionFlow__upperColumn}>
        <div
          className={classNames(
            styles.SelectionFlow__upperColumnHeading,
            "Animation--fadeInLeft"
          )}
        >
          <p className={styles.SelectionFlow__upperColumnText}>選考の流れ</p>
          <p className={styles.SelectionFlow__upperColumnSubText}>
            Selection Flow
          </p>
        </div>
      </div>
      <div className={styles.SelectionFlow__lowerColumn}>
        <ul className={styles.SelectionFlow__flowList}>
          <li className={styles.SelectionFlow__flowItem}>
            <p className={styles.SelectionFlow__flowItemText}>書類選考</p>
            <img
              src={arrowDownSrc}
              alt="下矢印"
              className={styles.SelectionFlow__flowItemArrowDown}
            />
          </li>
          <li className={styles.SelectionFlow__flowItem}>
            <p className={styles.SelectionFlow__flowItemText}>
              【12/8】1~2次選考
            </p>
            <img
              src={arrowDownSrc}
              alt="下矢印"
              className={styles.SelectionFlow__flowItemArrowDown}
            />
          </li>
          <li className={styles.SelectionFlow__flowItem}>
            <p className={styles.SelectionFlow__flowItemText}>
              【未定】3~5次選考
            </p>
          </li>
        </ul>
        <div className={styles.SelectionFlow__buttons}>
          <a
            href={ENTRY_BUTTON_URLS.SUPPORTER}
            className={styles.SelectionFlow__button}
          >
            <img
              src={Button1}
              alt="協賛ボタン"
              className={styles.SelectionFlow__buttonImage}
            />
          </a>
          <a
            href={ENTRY_BUTTON_URLS.PLAYER}
            className={styles.SelectionFlow__button}
          >
            <img
              src={Button2}
              alt="選手コーチボタン"
              className={styles.SelectionFlow__buttonImage}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SelectionFlow;
