import React, { FunctionComponent } from "react";
import * as styles from "./style.module.scss";
// images
import arrowDownSrc from "../../../images/explainSmilers/arrowDown.png";
import classNames from "classnames";

const SERVER_HOST = "https://smilers-group.com/";

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
        <video
          width="100%"
          playsInline={true}
          controls={true}
          src={`${SERVER_HOST}/movie/okabeMovie.mp4`}
        />
      </div>
    </div>
  ) : null;
};

export default OverviewMovie;
