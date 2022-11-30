import React, { FunctionComponent } from "react";
import * as styles from "./style.module.scss";
// data
import { supervisorData, coacherData } from "./data";
// images
import tamukenSrc from "../../../images/explainSmilers/tamuken.png";
import tamukenExplainSrc from "../../../images/explainSmilers/tamukenExplain.png";
import tamukenSmilersSrc from "../../../images/explainSmilers/tamuken-smilers.png";
import okabeSrc from "../../../images/explainSmilers/okabe.png";
import okabeExplainSrc from "../../../images/explainSmilers/okabeExplain.png";
import arrowDownSrc from "../../../images/explainSmilers/arrowDown.png";
import classNames from "classnames";
import { getHasBulletPoints } from "../../../utils/getHasBulletPoints";

const SERVER_HOST = "https://smilers-group.com/";

const ExplainSmilers: FunctionComponent = () => {
  return (
    <div id="smilers" className={styles.ExplainSmilers}>
      <div className={styles.ExplainSmilers__upperColumn}>
        <div
          className={classNames(
            styles.ExplainSmilers__upperColumnHeading,
            "Animation--fadeInLeft"
          )}
        >
          <p className={styles.ExplainSmilers__upperColumnText}>SMILERSとは</p>
          <p className={styles.ExplainSmilers__upperColumnSubText}>
            What is "SMILERS"
          </p>
        </div>
      </div>

      <div className={styles.ExplainSmilers__lowerColumn}>
        <div
          className={classNames(
            styles.ExplainSmilers__explainSupervisor,
            "Animation--fadeInBottom"
          )}
        >
          <img
            src={tamukenSrc}
            alt="たむけん顔写真"
            className={styles.ExplainSmilers__explainSupervisorImage}
          />
          <img
            src={tamukenExplainSrc}
            alt="たむけん説明"
            className={styles.ExplainSmilers__explainSupervisorExplainImage}
          />
          <div className={styles.ExplainSmilers__separator} />
          <div className={styles.ExplainSmilers__explainSupervisorExplain}>
            <p className={styles.ExplainSmilers__explainSupervisorExplainText}>
              「サッカー×エンタメ」のReelZ LEAGUEにおいて、
            </p>
            <p className={styles.ExplainSmilers__explainSupervisorExplainText}>
              「サッカーの力で、人々を笑顔にする」という目的のもと
            </p>
            <p className={styles.ExplainSmilers__explainSupervisorExplainText}>
              結成する最強の芸人チーム。
            </p>
          </div>
          <img
            src={tamukenSmilersSrc}
            alt="SMILERSのイメージ画像"
            className={styles.ExplainSmilers__smilersImage}
          />
          <div className={styles.ExplainSmilers__profile}>
            <p className={styles.ExplainSmilers__profileTitle}>
              <span className={styles.ExplainSmilers__profileTitleName}>
                たむらけんじ
              </span>
              <span className={styles.ExplainSmilers__profileTitleText}>
                Profile
              </span>
            </p>
            <ul className={styles.ExplainSmilers__profileList}>
              {supervisorData.map((item, index) => (
                <li key={index} className={styles.ExplainSmilers__profileItem}>
                  <p className={styles.ExplainSmilers__profileItemTitle}>
                    {item.title}
                  </p>
                  <ul className={styles.ExplainSmilers__profileItemContentList}>
                    {item.contents.map((content, contentIndex) => (
                      <p
                        key={contentIndex}
                        className={classNames(
                          styles.ExplainSmilers__profileItemContent,
                          getHasBulletPoints(content)
                            ? styles.ExplainSmilers__profileItemContent__indented
                            : ""
                        )}
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

        <div
          className={classNames(
            styles.ExplainSmilers__explainSupervisor,
            "Animation--fadeInBottom"
          )}
        >
          <img
            src={okabeSrc}
            alt="岡部将和顔写真"
            className={styles.ExplainSmilers__explainSupervisorImage}
          />
          <img
            src={okabeExplainSrc}
            alt="岡部将和説明"
            className={styles.ExplainSmilers__explainSupervisorExplainImage}
          />
          <div className={styles.ExplainSmilers__separator} />
          <div className={styles.ExplainSmilers__explainCoacher}>
            <p className={styles.ExplainSmilers__explainCoacherText}>Movie</p>
            <p className={styles.ExplainSmilers__explainCoacherSubText}>
              タップして再生
            </p>
            <img
              width={20}
              src={arrowDownSrc}
              alt="下矢印"
              className={styles.ExplainSmilers__explainCoacherArrowDown}
            />
            <div className={styles.ExplainSmilers__explainCoacherMovie}>
              <video
                width="80%"
                height="500"
                playsInline={true}
                controls={true}
                src={`${SERVER_HOST}/movie/okabeMovie.mp4`}
              />
            </div>
            <div className={styles.ExplainSmilers__explainCoacherMovieSp}>
              <video
                width="300"
                height="172"
                playsInline={true}
                controls={true}
                src={`${SERVER_HOST}/movie/okabeMovie.mp4`}
              />
            </div>
          </div>
          <div className={styles.ExplainSmilers__profile}>
            <p className={styles.ExplainSmilers__profileTitle}>
              <span className={styles.ExplainSmilers__profileTitleName}>
                ドリブルデザイナー岡部将和
              </span>
              <span className={styles.ExplainSmilers__profileTitleText}>
                Profile
              </span>
            </p>
            <ul className={styles.ExplainSmilers__profileList}>
              {coacherData.map((item, index) => (
                <li key={index} className={styles.ExplainSmilers__profileItem}>
                  <p className={styles.ExplainSmilers__profileItemTitle}>
                    {item.title}
                  </p>
                  <ul className={styles.ExplainSmilers__profileItemContentList}>
                    {item.contents.map((content, contentIndex) => (
                      <p
                        key={contentIndex}
                        className={classNames(
                          styles.ExplainSmilers__profileItemContent,
                          getHasBulletPoints(content)
                            ? styles.ExplainSmilers__profileItemContent__indented
                            : ""
                        )}
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
      </div>
    </div>
  );
};

export default ExplainSmilers;
