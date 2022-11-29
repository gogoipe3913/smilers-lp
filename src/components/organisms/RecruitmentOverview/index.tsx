import React, { FunctionComponent } from "react";
import * as styles from "./style.module.scss";
// data
import recruitmentOverviewData from "./data";
// images
import RecruitmentOverviewSrc from "../../../images/recruitmentOverview/main.png";
import classNames from "classnames";

const RecruitmentOverview: FunctionComponent = () => {
  return (
    <div className={styles.RecruitmentOverview}>
      <div
        className={classNames(
          styles.RecruitmentOverview__overview,
          "Animation--fadeInBottom"
        )}
      >
        <img
          src={RecruitmentOverviewSrc}
          alt="応募概要のイメージ画像"
          className={styles.RecruitmentOverview__overviewImage}
        />
        <p className={styles.RecruitmentOverview__overviewTitle}>SMILERSの</p>
        <p className={styles.RecruitmentOverview__overviewTitle}>
          選手・コーチ応募概要
        </p>
        <p className={styles.RecruitmentOverview__overviewSubTitle}>
          Players And Coaches
        </p>
        <ul className={styles.RecruitmentOverview__overviewList}>
          {recruitmentOverviewData.map((item, index) => (
            <li
              key={index}
              className={styles.RecruitmentOverview__overviewItem}
            >
              <p className={styles.RecruitmentOverview__overviewItemTitle}>
                {item.title}
              </p>
              <ul
                className={styles.RecruitmentOverview__overviewItemContentList}
              >
                {item.contents.map((content, contentIndex) => (
                  <p
                    key={contentIndex}
                    className={styles.RecruitmentOverview__overviewItemContent}
                  >
                    {content}
                  </p>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecruitmentOverview;
