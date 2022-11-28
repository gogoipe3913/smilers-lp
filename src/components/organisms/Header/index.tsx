import React, { FunctionComponent, useEffect, useState } from "react";
import * as styles from "./style.module.scss";
import HeaderLogoSrc from "../../../images/header/logo.png";
import SupporterButtonSrc from "../../../images/header/supporterButton.png";
import PlayerButtonSrc from "../../../images/header/playerButton.png";
import HumbergerSrc from "../../../images/header/spHumberger.png";
import SpMenu from "../SpMenu";

export const ENTRY_BUTTON_URLS = {
  SUPPORTER:
    "https://docs.google.com/forms/d/e/1FAIpQLSd2ED97Bfb9Jh8vD0zXLAN0znFHjVRlz7u2K1cfPHB92sXBDA/viewform",
  PLAYER:
    "https://docs.google.com/forms/d/e/1FAIpQLSdyb0W1Vv-77CSGRHgpms5RfU2nJM7kz_S3GPa0X8UngclMbA/viewform",
};

const Header: FunctionComponent = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <>
      <div className={styles.Header}>
        <a href="/">
          <img
            src={HeaderLogoSrc}
            alt="Smilersトップロゴ"
            className={styles.Header__logo}
          />
        </a>
        <div className={styles.Header__rightColumn}>
          <ul className={styles.Header__navigation}>
            <li className={styles.Header__navigationLink}>
              <a href="#reelz">Reelz LEAGUE</a>
            </li>
            <li className={styles.Header__navigationLink}>
              <a href="#smilers">SMILERS</a>
            </li>
            <li className={styles.Header__navigationLink}>
              <a href="#recruitment">募集要項</a>
            </li>
          </ul>
          <div className={styles.Header__entryButtons}>
            <a
              href={ENTRY_BUTTON_URLS.SUPPORTER}
              className={styles.Header__entryButton}
            >
              <img
                src={SupporterButtonSrc}
                alt="協賛応募ボタンアイコン"
                className={styles.Header__entryButtonBody}
              />
            </a>
            <a
              href={ENTRY_BUTTON_URLS.PLAYER}
              className={styles.Header__entryButton}
            >
              <img
                src={PlayerButtonSrc}
                alt="選手・コーチ応募ボタンアイコン"
                className={styles.Header__entryButtonBody}
              />
            </a>
          </div>
          <button
            onClick={() => {
              setIsDisplayed(true);
            }}
          >
            <img
              src={HumbergerSrc}
              alt="ハンバーガーメニュー"
              className={styles.Header__spHumberger}
            />
          </button>
        </div>
      </div>
      <SpMenu
        isDisplayed={isDisplayed}
        closeSpMenu={() => {
          setIsDisplayed(false);
        }}
      />
    </>
  );
};

export default Header;
