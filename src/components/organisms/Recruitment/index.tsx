import React, { FunctionComponent } from "react";
import * as styles from "./style.module.scss";
// data
import { winnersData, revengersData } from "./data";
// images
import recruitmentImageSrc from "../../../images/recruitment/recruitmentImage.png";
import spRecruitmentImageSrc from "../../../images/recruitment/spRecruitmentImage.png";
import arrowRightSmall from "../../../images/recruitment/arrowRightSmall.png";
import arrowRight from "../../../images/recruitment/arrowRight.png";

type TeamIntroductionChannelProps = {
  thumbnail: {
    url: "*.png";
    alt: string;
  };
  position?: string;
  name: string;
  resistor: string;
  link: string;
};

export type TeamIntroductionProps = {
  index: string;
  id: string;
  title: {
    subText: string;
    text: string;
  };
  supervisor: {
    image: {
      // imageの方を決めたい
      url: "*.png";
      alt: string;
    };
    name: string;
    resistor: string;
  };
  movies: {
    thumbnail: {
      url: "*.png";
      alt: string;
    };
    infomation: {
      views: string;
      postedTime: string;
    };
    caption: string;
  }[];
  channels: TeamIntroductionChannelProps[];
  allResistor: string;
  link: {
    messages: string[];
    url: string;
  };
};

const TeamIntroductionChannel: FunctionComponent<
  TeamIntroductionChannelProps
> = ({ thumbnail, position, name, resistor, link }) => (
  <div className={styles.Recruitment__introductionChannel}>
    <div className={styles.Recruitment__introductionChannelUpper}>
      <img
        src={thumbnail.url}
        alt={thumbnail.alt}
        className={styles.Recruitment__introductionChannelThumbnail}
      />
      <div className={styles.Recruitment__introductionChannelUpperText}>
        <div className={styles.Recruitment__introductionChannelStatus}>
          {position ? (
            <p className={styles.Recruitment__introductionChannelPosition}>
              {position}
            </p>
          ) : null}
          <p className={styles.Recruitment__introductionChannelName}>{name}</p>
        </div>
        <div className={styles.Recruitment__introductionChannelResistor}>
          <p className={styles.Recruitment__introductionChannelResistorTitle}>
            YouTube登録者
          </p>
          <img
            src={arrowRightSmall}
            alt="右矢印"
            className={styles.Recruitment__arrowRightSmall}
          />
          <p className={styles.Recruitment__introductionChannelResistorNumber}>
            {resistor}
          </p>
        </div>
      </div>
    </div>
    <a href={link} className={styles.Recruitment__introductionChannelLink}>
      YouTubeチャンネル
    </a>
  </div>
);

const TeamIntroduction: FunctionComponent<TeamIntroductionProps> = ({
  index,
  id,
  title,
  supervisor,
  movies,
  channels,
  allResistor,
  link,
}) => (
  <>
    <div className={styles.Recruitment__introduction}>
      <p className={styles.Recruitment__introductionIndex}>{index}</p>
      <div className={styles.Recruitment__introductionTitle}>
        <p className={styles.Recruitment__introductionTitleSubText}>
          {title.subText}
        </p>
        <p className={styles.Recruitment__introductionTitleText}>
          {title.text}
        </p>
      </div>
      <div className={styles.Recruitment__introductionTeam}>
        <div className={styles.Recruitment__introductionTeamLeft}>
          <img
            src={supervisor.image.url}
            alt={supervisor.image.alt}
            className={styles.Recruitment__introductionSupervisorImage}
          />
          <p className={styles.Recruitment__introductionSupervisorName}>
            <span>監督</span>
            <span
              className={styles.Recruitment__introductionSupervisorNameBold}
            >
              {supervisor.name}
            </span>
          </p>
          <p className={styles.Recruitment__introductionSupervisorStatus}>
            <span>YouTube登録者数</span>
            <img
              src={arrowRightSmall}
              alt="右矢印"
              className={styles.Recruitment__arrowRightSmall}
            />
            <span>{supervisor.resistor}</span>
          </p>
        </div>
        <div className={styles.Recruitment__introductionTeamRight}>
          <div
            className={styles.Recruitment__introductionTeamRightSeparatorSp}
          />
          <p className={styles.Recruitment__introductionTeamRightTitle}>
            人気動画Pickup
          </p>
          <ul className={styles.Recruitment__introductionMovieList}>
            {movies.map((movie, index) => (
              <li
                key={index}
                className={styles.Recruitment__introductionMovieItem}
              >
                <img
                  src={movie.thumbnail.url}
                  alt={movie.thumbnail.alt}
                  className={styles.Recruitment__introductionMovieThumbnail}
                />
                <div className={styles.Recruitment__introductionMovieText}>
                  <p
                    className={styles.Recruitment__introductionMovieInfomation}
                  >
                    <span
                      className={styles.Recruitment__introductionMovieViews}
                    >
                      {movie.infomation.views}
                    </span>
                    <span>{movie.infomation.postedTime}</span>
                  </p>
                  <div className={styles.Recruitment__introductionMovieCaption}>
                    <span>{movie.caption}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={styles.Recruitment__introductionChannelsTitle}>
        チームメンバーの一部紹介
      </p>
      <div className={styles.Recruitment__introductionChannels}>
        {channels.map((channel, index) => (
          <TeamIntroductionChannel key={index} {...channel} />
        ))}
      </div>
      <div className={styles.Recruitment__allResistor}>
        <p>チームメンバー20人 YouTube総登録者数</p>
        <img
          src={arrowRight}
          alt="右矢印"
          className={styles.Recruitment__arrowRight}
        />
        <p>{allResistor}</p>
      </div>
    </div>
    <div className={styles.Recruitment__channelLink}>
      {link.messages.map((message, index) => (
        <p key={index} className={styles.Recruitment__channelLinkMessage}>
          {message}
        </p>
      ))}
      <a
        href={link.url}
        className={styles.Recruitment__channelLinkBody}
      >{`${title.text}チャンネル`}</a>
    </div>
  </>
);

const Recruitment: FunctionComponent = () => {
  return (
    <div id="recruitment" className={styles.Recruitment}>
      <div className={styles.Recruitment__upperColumn}>
        <div className={styles.Recruitment__upperColumnHeading}>
          <p className={styles.Recruitment__upperColumnText}>募集要項</p>
          <p className={styles.Recruitment__upperColumnSubText}>Recruitment</p>
        </div>
        <div className={styles.Recruitment__image}>
          <img
            src={recruitmentImageSrc}
            alt="募集要項イメージ画像"
            className={styles.Recruitment__imageBody}
          />
          <img
            src={spRecruitmentImageSrc}
            alt="募集要項イメージ画像"
            className={styles.Recruitment__imageBodySp}
          />
        </div>
      </div>

      <div className={styles.Recruitment__middleColumn}>
        <p className={styles.Recruitment__middleColumnHeadingText}>
          打倒、ライバルチーム
        </p>
        <p className={styles.Recruitment__middleColumnHeadingSubText}>
          Beat The Rival Team
        </p>

        <div className={styles.Recruitment__separator} />
        <p className={styles.Recruitment__middleColumnExplain}>
          「人生を変えたい。」
        </p>
        <p className={styles.Recruitment__middleColumnExplain}>
          「サッカーを通して、もっと知名度を上げたい。」
        </p>
        <p className={styles.Recruitment__middleColumnExplain}>
          「芸人もサッカーも両方活躍したい。」
        </p>
        <p className={styles.Recruitment__middleColumnExplain}>
          「有名YouTuberとコラボしたい。」
        </p>

        <p className={styles.Recruitment__middleColumnMessage}>
          まずは、そんな動機でも大丈夫！
        </p>
        <p className={styles.Recruitment__middleColumnMessage}>
          共にSMILERSの一員として、チームを勝利へと導きましょう
        </p>
      </div>

      <div className={styles.Recruitment__lowerColumn}>
        <p className={styles.Recruitment__lowerColumnTitle}>
          ライバルチーム紹介
        </p>
        <TeamIntroduction {...winnersData} />
        <TeamIntroduction {...revengersData} />
      </div>
    </div>
  );
};

export default Recruitment;
