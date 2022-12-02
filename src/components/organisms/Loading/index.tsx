import classNames from "classnames";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import * as styles from "./style.module.scss";

type LoadingProps = {
  setIsDisplayedTopView?(): void;
  className?: string;
};

const Loading: FunctionComponent<LoadingProps> = ({
  setIsDisplayedTopView = () => {},
  className = "",
}) => {
  const [isRender, setIsRender] = useState(true);
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [progressNumber, setProgressNumber] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsDisplayedTopView();
      setIsDisplayed(false);
    }, 5000);

    setTimeout(() => {
      setIsRender(false);
    }, 5600);

    setTimeout(() => {
      setProgressNumber(progressNumber + 1);
    }, 40);
  }, []);

  useEffect(() => {
    if (progressNumber < 100) {
      setTimeout(() => {
        setProgressNumber(progressNumber + 1);
      }, 40);
    }

    if (progressNumber >= 100) {
      return;
    }
  }, [progressNumber]);

  return isRender ? (
    <div
      className={classNames(
        styles.Loading,
        isDisplayed ? "" : styles.Loading__fadeOut,
        className
      )}
    >
      <div
        className={styles.Loading__progressNumber}
      >{`${progressNumber}%`}</div>
      <div className={styles.Loading__progressBar}>
        <div className={styles.Loading__progressBarColored} />
      </div>
    </div>
  ) : null;
};

export default Loading;
