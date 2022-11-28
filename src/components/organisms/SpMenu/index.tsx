import React, { FunctionComponent } from "react";
import { ENTRY_BUTTON_URLS } from "../Header";
import * as styles from "./style.module.scss";

import HeaderLogoSrc from "../../../images/header/logo.png";
import SupporterButtonSrc from "../../../images/selectionFlow/button1_new.png";
import PlayerButtonSrc from "../../../images/selectionFlow/button2.png";
import CloseButtonImageSrc from "../../../images/spMenu/closeButtonImage.png";

type SpMenuProps = {
  isDisplayed?: boolean;
  closeSpMenu?(): void;
};

const SpMenu: FunctionComponent<SpMenuProps> = ({
  isDisplayed = false,
  closeSpMenu = () => {},
}) => {
  return isDisplayed ? (
    <div className={styles.SpMenu}>
      <div className={styles.SpMenu__header}>
        <img src={HeaderLogoSrc} alt="" className={styles.SpMenu__logo} />
        <button onClick={closeSpMenu}>
          <img
            src={CloseButtonImageSrc}
            alt=""
            className={styles.SpMenu__closeButtonImage}
          />
        </button>
      </div>
      <ul className={styles.SpMenu__navigation}>
        <li className={styles.SpMenu__navigationLink}>
          <a href="#reelz" onClick={closeSpMenu}>
            Reelz LEAGUE
          </a>
        </li>
        <li className={styles.SpMenu__navigationLink}>
          <a href="#smilers" onClick={closeSpMenu}>
            SMILERS
          </a>
        </li>
        <li className={styles.SpMenu__navigationLink}>
          <a href="#recruitment" onClick={closeSpMenu}>
            募集要項
          </a>
        </li>
      </ul>
      <div className={styles.SpMenu__buttons}>
        <a
          href={ENTRY_BUTTON_URLS.SUPPORTER}
          className={styles.SpMenu__entryButton}
        >
          <img
            src={SupporterButtonSrc}
            alt="協賛応募ボタンアイコン"
            className={styles.SpMenu__entryButtonBody}
          />
        </a>
        <a
          href={ENTRY_BUTTON_URLS.PLAYER}
          className={styles.SpMenu__entryButton}
        >
          <img
            src={PlayerButtonSrc}
            alt="選手・コーチ応募ボタンアイコン"
            className={styles.SpMenu__entryButtonBody}
          />
        </a>
      </div>
    </div>
  ) : null;
};

export default SpMenu;
