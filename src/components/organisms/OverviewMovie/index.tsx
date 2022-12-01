import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import * as styles from "./style.module.scss";
// images
import arrowDownSrc from "../../../images/explainSmilers/arrowDown.png";
import classNames from "classnames";

type OverviewMovieProps = {
  isDisplayed?: boolean;
};

const OverviewMovie: FunctionComponent<OverviewMovieProps> = ({
  isDisplayed = false,
}) => {
  return isDisplayed ? (
    <div className={styles.OverviewMovie}>
      <div
        className={classNames(
          styles.OverviewMovie__title,
          "Animation--fadeInLeft"
        )}
      >
        <p className={styles.OverviewMovie__titleText}>募集概要Movie</p>
        <p className={styles.OverviewMovie__titleSubText}>タップして再生</p>
        <img
          width={20}
          src={arrowDownSrc}
          alt="下矢印"
          className={styles.OverviewMovie__titleArrowDown}
        />
      </div>

      <div
        className={classNames(
          styles.OverviewMovie__video,
          "Animation--fadeInRight"
        )}
      >
        <iframe
          id="OverviewMovie"
          width="100%"
          style={{ aspectRatio: "1.777777778" }}
          src="https://www.youtube.com/embed/l02Pzl97fIk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  ) : null;
};

export default OverviewMovie;
