import React, { FunctionComponent } from "react";
import * as styles from "./style.module.scss";
// data
import overviewList from "./data";
// images
import reelzLeagueSrc from "../../../images/explainLeague/reelzLeague.png";
import spReelzLeagueSrc from "../../../images/explainLeague/spReelzLeague.png";
import blackBallSrc from "../../../images/explainLeague/ballBlack.png";
import classNames from "classnames";

const ExplainLeague: FunctionComponent = () => {
  return (
    <div id="reelz" className={styles.ExplainLeague}>
      <div className={styles.ExplainLeague__upperColumn}>
        <div
          className={classNames(
            styles.ExplainLeague__upperColumnHeading,
            "Animation--fadeInRight"
          )}
        >
          <p className={styles.ExplainLeague__upperColumnText}>
            ReelZ LEAGUEとは
          </p>
          <p className={styles.ExplainLeague__upperColumnSubText}>
            What is "ReelZ LEAGUE"
          </p>
        </div>
        <div
          className={classNames(
            styles.ExplainLeague__image,
            "Animation--fadeInRight"
          )}
        >
          <img
            src={reelzLeagueSrc}
            alt="新サッカーリーグ開幕画像"
            className={styles.ExplainLeague__imageBody}
          />
          <img
            src={spReelzLeagueSrc}
            alt="新サッカーリーグ開幕画像"
            className={styles.ExplainLeague__imageBodySp}
          />
        </div>
      </div>

      <div className={styles.ExplainLeague__lowerColumn}>
        <div className={styles.ExplainLeague__lowerColumnBackground}>
          <img
            src={blackBallSrc}
            alt="黒いサッカーボールの画像"
            className={styles.ExplainLeague__lowerColumnBackgroundImage}
          />
        </div>
        <div
          className={classNames(
            styles.ExplainLeague__lowerColumnHeading,
            "Animation--fadeInLeft"
          )}
        >
          <p className={styles.ExplainLeague__lowerColumnHeadingText}>
            YouTubeに
          </p>
          <p className={styles.ExplainLeague__lowerColumnHeadingText}>
            サッカーの祭典を創る
          </p>
        </div>
        <div className={styles.ExplainLeague__separator} />
        <p className={styles.ExplainLeague__lowerColumnExplain}>
          日本サッカー界を盛り上げたいという思いから始まった「ReelZ LEAGUE」。
        </p>
        <p className={styles.ExplainLeague__lowerColumnExplain}>
          「サッカー×エンタメ」という新しい形で、日本サッカーを盛り上げていく。
        </p>
        <ul
          className={classNames(
            styles.ExplainLeague__explainList,
            "Animation--fadeInRight"
          )}
        >
          <li className={styles.ExplainLeague__explainItem}>
            <p className={styles.ExplainLeague__explainItemSubText}>
              リーグ戦全試合
            </p>
            <p className={styles.ExplainLeague__explainItemText}>YouTube配信</p>
          </li>
          <li className={styles.ExplainLeague__explainItem}>
            <p className={styles.ExplainLeague__explainItemSubText}>優勝賞金</p>
            <p className={styles.ExplainLeague__explainItemText}>300万円</p>
          </li>
          <li className={styles.ExplainLeague__explainItem}>
            <p className={styles.ExplainLeague__explainItemSubText}>
              試合時間40分
            </p>
            <p className={styles.ExplainLeague__explainItemText}>前後半20分</p>
          </li>
        </ul>
        <div
          className={classNames(
            styles.ExplainLeague__overview,
            "Animation--fadeInBottom"
          )}
        >
          <p className={styles.ExplainLeague__overviewTitle}>大会概要</p>
          <p className={styles.ExplainLeague__overviewSubTitle}>ReelZ LEAGUE</p>
          <ul className={styles.ExplainLeague__overviewList}>
            {overviewList.map((item, index) => (
              <li key={index} className={styles.ExplainLeague__overviewItem}>
                <p className={styles.ExplainLeague__overviewItemTitle}>
                  {item.title}
                </p>
                <ul className={styles.ExplainLeague__overviewItemContentList}>
                  {item.contents.map((content, contentIndex) => (
                    <p
                      key={contentIndex}
                      className={styles.ExplainLeague__overviewItemContent}
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
  );
};

export default ExplainLeague;
