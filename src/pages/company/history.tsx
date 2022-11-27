import React, { useContext, useEffect, useState } from "react";
import { DefaultLayout } from "../../organisms/DefaultLayout";
import * as styles from "../../styles/company/history.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { cssWithPrefix } from "../../utils/prefixer";
// Background
import Histoty2005Background from "../../images/history/bg_hirakata002.jpg";
import Histoty2011Background from "../../images/history/service_elumild.jpg";
import Histoty2013Background from "../../images/history/2013.jpeg";
import Histoty2015Background from "../../images/history/evand_210228_24.jpg";
import Histoty2016Background from "../../images/history/_kpo0728_companyoverview.jpg";
import Histoty2017Background from "../../images/history/adobestock_220372535.jpg";
import Histoty2018Background from "../../images/history/bg_2018_tokyo.jpg";
import Histoty2019Background from "../../images/history/bg_2011_artill.jpg";
import Histoty2020Background from "../../images/history/adobestock_88428296.jpg";
import Histoty2021Background from "../../images/history/2021.jpg";
import Histoty2022Background from "../../images/history/2022.png";
// LogoPc
import History2011 from "../../images/history/logo/elumild_white.png";
import History2015 from "../../images/history/logo/evand_white_b.png";
import History2017 from "../../images/history/history001.png";
import History2018Pc from "../../images/history/history002Pc.png";
import History2019One from "../../images/history/history003.png";
import History2019Two from "../../images/history/history004.png";
import History2019Three from "../../images/history/history005.png";
import History2020One from "../../images/history/history009.png";
// LogoSp
import ElumildSp from "../../images/history/logoSp/elumild.png";
import EvandSp from "../../images/history/logoSp/evand.png";
import BestVentureSp from "../../images/history/logoSp/bestVenture100.png";
import FinancialTimesSp from "../../images/history/logoSp/financialTimes.png";
import SuprieveConsultingSp from "../../images/history/logoSp/suprieveConsulting.png";
import AsFineSp from "../../images/history/logoSp/asFine.png";
import ArtillSp from "../../images/history/logoSp/artill.png";
import RegenJapanSp from "../../images/history/logoSp/regenJapan.png";

import Footer from "../../organisms/core/Footer";
import Helmet from "react-helmet";
import { sleep } from "../../utils/utils";
import {
  VirtualScrollerContext,
  VirtualScrollerProvider,
} from "../../atoms/scroller/VirtualScroller";
import { SpHorizontalMenu } from "../../atoms/menu/SpHorizontalMenu";
import { SEO } from "../../atoms/seo/SEO";
import seoImage from "../../images/history/history_topimg.jpg";
import classNames from "classnames";

const years = [
  "2005",
  "2011",
  "2013",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
];

const HistoryComponent = ({ location: pathname }) => {
  const { index, setIndex, setLength } = useContext(VirtualScrollerContext);
  const yearRefs = years.map(() => React.createRef<HTMLHeadingElement>());
  const sections = Array.from(new Array(years.length + 2)).map(() =>
    React.createRef<HTMLElement>()
  );
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const moveToPosition = async i => {
    if (index === i) {
      return;
    }
    const d = Math.sign(i - index);
    for (let j = index + d; ; j += d) {
      setIndex(j);
      if (i === j) {
        break;
      }
      await sleep(33);
    }
  };

  const applyClassesToChildren = (section: HTMLElement, show = false) => {
    Array.from(
      section.querySelectorAll(`.${styles.CompanyHistory__section} > *`)
    ).forEach(child => {
      child.classList.add(styles.child);
      if (show) {
        child.classList.add(styles.show);
      } else {
        child.classList.remove(styles.show);
      }
    });
  };

  useEffect(() => {
    sections.forEach(({ current: section }, i) => {
      if (section) {
        // アニメーション用のクラス付与 or 削除
        section.classList.add(styles.CompanyHistory__cover);
        if (i > index) {
          section.classList.add(styles.CompanyHistory__down);
          applyClassesToChildren(section);
        } else {
          section.classList.remove(styles.CompanyHistory__down);
          applyClassesToChildren(section, true);
        }
        section.style.zIndex = `${i}`;
        if (
          !section.classList.contains(styles.CompanyHistory__coverAnimation)
        ) {
          requestAnimationFrame(() =>
            section.classList.add(styles.CompanyHistory__coverAnimation)
          );
        }
      }
    });
    setLength(years.length + 2);
    const currentYearIndex = Math.min(years.length - 1, Math.max(0, index - 1));
    const currentYearRef = yearRefs[currentYearIndex];
    const indicatorStyle = {};
    if (currentYearRef.current) {
      const rect = currentYearRef.current.getBoundingClientRect();
      cssWithPrefix(
        indicatorStyle,
        "transform",
        `translate3d(50px, ${(rect.top + rect.bottom) / 2}px, 0)`
      );
      setIndicatorStyle(indicatorStyle);
    }
    return () => {};
  }, [index]);
  const onPageTop = e => moveToPosition(0);

  return (
    <DefaultLayout
      className={styles.CompanyHistory}
      isWhite={true}
      footer={false}
    >
      <SEO
        pathname={pathname}
        title="ヒストリー | History"
        description="2005年 わくわくエッサ有限会社創業. 2007年 牧野オフィス移転. 2009年樟葉オフィス移転. 2010年 樟葉オフィス増床. 2011年 EC事業部開業. 2013年 Suprieve株式会社名称変更."
        image={seoImage}
      />
      <Helmet bodyAttributes={{ style: "overflow: hidden" }} />
      <div className={styles.CompanyHistory__navigatorSp}>
        <SpHorizontalMenu
          index={index - 1}
          className={styles.CompanyHistory__horizontalMenu}
        >
          {years.map((year, i) => (
            <p
              className={styles.CompanyHistory__navigatorYearSp}
              key={`controller-${year}`}
              onClick={() => moveToPosition(i + 1)}
            >
              {year}
            </p>
          ))}
        </SpHorizontalMenu>
      </div>
      <div className={styles.CompanyHistory__navigator}>
        {years.map((year, i) => (
          <p
            className={styles.CompanyHistory__navigatorYear}
            key={`controller-${year}`}
            ref={yearRefs[i]}
            onClick={() => moveToPosition(i + 1)}
          >
            {year}
          </p>
        ))}
        <span
          className={styles.CompanyHistory__navigatorCurrentYearIndicator}
          style={indicatorStyle}
        />
      </div>

      <section ref={sections[0]}>
        <StaticImage
          src="../../images/history/history_topimg.jpg"
          alt="スプリーブの歩み"
        />
        <div className={styles.CompanyHistory__title}>
          <h2>History</h2>
          <h3>Suprieveの歩み</h3>
        </div>
      </section>

      <section ref={sections[1]}>
        <div className={styles.CompanyHistory__firstSectionImage}>
          <StaticImage
            className={classNames("flex-1", styles.CompanyHistory__imageBodyPc)}
            src="../../images/history/bg_hirakata002.jpg"
            alt=""
            aspectRatio={16 / 9}
          />
        </div>
        <div className={styles.CompanyHistory__background} />

        <img
          src={Histoty2005Background}
          alt=""
          className={styles.CompanyHistory__imageBodySp}
        />

        <div
          className={`${styles.CompanyHistory__section} ${styles.CompanyHistory__firstTypeSection}`}
        >
          <div className={styles.CompanyHistory__sectionLineSp} />
          <div className={styles.CompanyHistory__sectionItem}>
            <h2 className={styles.CompanyHistory__sectionItemYear}>2005</h2>
            <p className={styles.CompanyHistory__sectionItemText}>
              わくわくエッサ有限会社創業
            </p>
            <p className={styles.CompanyHistory__sectionItemText}>
              イベント事業部創業
            </p>
          </div>
          <div className={styles.CompanyHistory__sectionItem}>
            <h2 className={styles.CompanyHistory__sectionItemYear}>2007</h2>
            <p className={styles.CompanyHistory__sectionItemText}>
              牧野オフィス移転
            </p>
          </div>
          <div className={styles.CompanyHistory__sectionItem}>
            <h2 className={styles.CompanyHistory__sectionItemYear}>2009</h2>
            <p className={styles.CompanyHistory__sectionItemText}>
              樟葉オフィス移転
            </p>
          </div>
          <div className={styles.CompanyHistory__sectionItem}>
            <h2 className={styles.CompanyHistory__sectionItemYear}>2010</h2>
            <p className={styles.CompanyHistory__sectionItemText}>
              樟葉オフィス増床
            </p>
          </div>
        </div>
      </section>

      <section ref={sections[2]}>
        <StaticImage
          className={styles.CompanyHistory__imageBodyPc}
          src="../../images/history/service_elumild.jpg"
          alt=""
          aspectRatio={16 / 9}
        />
        <div className={styles.CompanyHistory__background} />

        <img
          src={Histoty2011Background}
          alt=""
          className={styles.CompanyHistory__imageBodySp}
        />

        <div
          className={`${styles.CompanyHistory__section} ${styles.CompanyHistory__secondTypeSection}`}
        >
          <div className={styles.CompanyHistory__sectionLineSp} />
          <h2 className={styles.CompanyHistory__sectionItemYear}>2011</h2>
          <div className={styles.CompanyHistory__sectionItemUnderYear}>
            <img
              className={styles.CompanyHistory__sectionItemImage_sp}
              src={ElumildSp}
              alt=""
            />
            <p className={styles.CompanyHistory__sectionItemText}>
              EC事業部開業
            </p>
            <img
              className={styles.CompanyHistory__sectionItemImage_pc}
              src={History2011}
              alt=""
            />
          </div>
        </div>
      </section>

      <section ref={sections[3]}>
        <StaticImage
          src="../../images/history/2013.jpeg"
          alt=""
          aspectRatio={16 / 9}
          className={styles.CompanyHistory__imageBodyPc}
        />
        <div className={styles.CompanyHistory__background} />

        <img
          src={Histoty2013Background}
          alt=""
          className={styles.CompanyHistory__imageBodySp}
        />

        <div
          className={`${styles.CompanyHistory__section} ${styles.CompanyHistory__secondTypeSection}`}
        >
          <div className={styles.CompanyHistory__sectionLineSp} />
          <h2 className={styles.CompanyHistory__sectionItemYear}>2013</h2>
          <div className={styles.CompanyHistory__sectionItemUnderYear}>
            <h3 className={styles.CompanyHistory__sectionItemText}>
              Suprieve 株式会社&nbsp;&nbsp;名称変更
            </h3>
          </div>
        </div>
      </section>

      <section ref={sections[4]}>
        <StaticImage
          src="../../images/history/evand_210228_24.jpg"
          alt=""
          aspectRatio={16 / 9}
          className={styles.CompanyHistory__imageBodyPc}
        />
        <div className={styles.CompanyHistory__background} />

        <img
          src={Histoty2015Background}
          alt=""
          className={styles.CompanyHistory__imageBodySp}
        />

        <div
          className={`${styles.CompanyHistory__section} ${styles.CompanyHistory__secondTypeSection}`}
        >
          <div className={styles.CompanyHistory__sectionLineSp} />
          <h2 className={styles.CompanyHistory__sectionItemYear}>2015</h2>
          <div className={styles.CompanyHistory__sectionItemMultipleUnderYear}>
            <h3 className={styles.CompanyHistory__sectionItemText}>
              メディア事業部開業
            </h3>
            <h3 className={styles.CompanyHistory__sectionItemText}>
              <img
                src={EvandSp}
                alt=""
                className={styles.CompanyHistory__sectionItemImage_sp}
              />
              人材事業部開業{" "}
              <img
                className={`${styles.CompanyHistory__sectionItemImage_pc} ${styles.CompanyHistory__sectionItemImage2015}`}
                src={History2015}
                alt=""
              />
            </h3>
          </div>
        </div>
      </section>

      <section ref={sections[5]}>
        <StaticImage
          src="../../images/history/_kpo0728_companyoverview.jpg"
          alt=""
          aspectRatio={16 / 9}
          className={styles.CompanyHistory__imageBodyPc}
        />
        <div className={styles.CompanyHistory__background} />

        <img
          src={Histoty2016Background}
          alt=""
          className={styles.CompanyHistory__imageBodySp}
        />

        <div
          className={`${styles.CompanyHistory__section} ${styles.CompanyHistory__secondTypeSection}`}
        >
          <div className={styles.CompanyHistory__sectionLineSp} />
          <h2 className={styles.CompanyHistory__sectionItemYear}>2016</h2>
          <div className={styles.CompanyHistory__sectionItemMultipleUnderYear}>
            <h3 className={styles.CompanyHistory__sectionItemText}>
              広告事業部開業
            </h3>
            <h3 className={styles.CompanyHistory__sectionItemText}>
              梅田オフィスへ増床移転
            </h3>
          </div>
        </div>
      </section>

      <section ref={sections[6]}>
        <StaticImage
          src="../../images/history/adobestock_220372535.jpg"
          alt=""
          aspectRatio={16 / 9}
          className={styles.CompanyHistory__imageBodyPc}
        />
        <div className={styles.CompanyHistory__background} />

        <img
          src={Histoty2017Background}
          alt=""
          className={styles.CompanyHistory__imageBodySp}
        />

        <div
          className={`${styles.CompanyHistory__section} ${styles.CompanyHistory__secondTypeSection}`}
        >
          <div className={styles.CompanyHistory__sectionLineSp} />
          <h2 className={styles.CompanyHistory__sectionItemYear}>2017</h2>
          <div className={styles.CompanyHistory__sectionItemMultipleUnderYear}>
            <h3 className={styles.CompanyHistory__sectionItemText}>
              ベストベンチャー100に選出
            </h3>
            <img
              className={`${styles.CompanyHistory__sectionItemImage_pc} ${styles.CompanyHistory__sectionItemImage2017}`}
              src={History2017}
              alt=""
            />
            <img
              className={`${styles.CompanyHistory__sectionItemImage_sp} ${styles.CompanyHistory__sectionItemImage2017}`}
              src={BestVentureSp}
              alt=""
            />
          </div>
        </div>
      </section>

      <section ref={sections[7]}>
        <StaticImage
          src="../../images/history/bg_2018_tokyo.jpg"
          alt=""
          aspectRatio={16 / 9}
          className={styles.CompanyHistory__imageBodyPc}
        />
        <div className={styles.CompanyHistory__background} />

        <img
          src={Histoty2018Background}
          alt=""
          className={styles.CompanyHistory__imageBodySp}
        />

        <div
          className={`${styles.CompanyHistory__section} ${styles.CompanyHistory__thirdTypeSection}`}
        >
          <div className={styles.CompanyHistory__sectionLineSp} />
          <div className={styles.CompanyHistory__sectionItem2018}>
            <p className={styles.CompanyHistory__sectionItemYear}>2018</p>
            <p
              className={`${styles.CompanyHistory__sectionItemText} ${styles.CompanyHistory__sectionItemText2018}`}
            >
              第２創業期スタート
            </p>
          </div>

          <div
            className={`${styles.CompanyHistory__sectionItemMultipleUnderYear} ${styles.CompanyHistory__sectionItem2018}`}
          >
            <p className={styles.CompanyHistory__sectionItemText}>
              Financial Times 1000
              <br />
              high-growth compainies Asia-Pacific
            </p>
            <img
              className={styles.CompanyHistory__sectionItemImage2018}
              src={History2018Pc}
              alt=""
            />
            <img
              className={styles.CompanyHistory__sectionItemImage2018Sp}
              src={FinancialTimesSp}
              alt=""
            />
            <div className={styles.CompanyHistory__sectionItemTexts}>
              <h3 className={styles.CompanyHistory__sectionItemText}>
                東京オフィス開設
              </h3>
              <h3 className={styles.CompanyHistory__sectionItemText}>
                イベント事業売却
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section ref={sections[8]}>
        <StaticImage
          src="../../images/history/bg_2011_artill.jpg"
          alt=""
          aspectRatio={16 / 9}
          className={styles.CompanyHistory__imageBodyPc}
        />
        <div className={styles.CompanyHistory__background} />

        <img
          src={Histoty2019Background}
          alt=""
          className={styles.CompanyHistory__imageBodySp}
        />

        <div
          className={`${styles.CompanyHistory__section} ${styles.CompanyHistory__firstTypeSection}`}
        >
          <div className={styles.CompanyHistory__sectionLineSp} />
          <h2 className={styles.CompanyHistory__sectionItemYear}>2019</h2>

          <div
            className={`${styles.CompanyHistory__sectionItemUnderYear} ${styles.CompanyHistory__sectionItemUnderYear2019}`}
          >
            <img
              src={SuprieveConsultingSp}
              alt=""
              className={classNames(
                styles.CompanyHistory__sectionItemImage_sp,
                styles.CompanyHistory__sectionItemImage2019
              )}
            />
            <h3
              className={`${styles.CompanyHistory__sectionItemText} ${styles.CompanyHistory__sectionItemText2019}`}
            >
              Suprieve Consulting株式会社創立
            </h3>
            <img
              className={classNames(
                styles.CompanyHistory__sectionItemImage_pc,
                styles.CompanyHistory__sectionItemImage2019
              )}
              src={History2019One}
              alt=""
            />
          </div>

          <div
            className={`${styles.CompanyHistory__sectionItemUnderYear} ${styles.CompanyHistory__sectionItemUnderYear2019}`}
          >
            <img
              src={AsFineSp}
              alt=""
              className={classNames(
                styles.CompanyHistory__sectionItemImage_sp,
                styles.CompanyHistory__sectionItemImage2019
              )}
            />
            <h3
              className={`${styles.CompanyHistory__sectionItemText} ${styles.CompanyHistory__sectionItemText2019}`}
            >
              Asfine株式会社創立
            </h3>
            <img
              className={classNames(
                styles.CompanyHistory__sectionItemImage_pc,
                styles.CompanyHistory__sectionItemImage2019
              )}
              src={History2019Two}
              alt=""
            />
          </div>

          <div
            className={`${styles.CompanyHistory__sectionItemUnderYear} ${styles.CompanyHistory__sectionItemUnderYear2019}`}
          >
            <img
              src={ArtillSp}
              alt=""
              className={classNames(
                styles.CompanyHistory__sectionItemImage_sp,
                styles.CompanyHistory__sectionItemImage2019
              )}
            />
            <h3
              className={`${styles.CompanyHistory__sectionItemText} ${styles.CompanyHistory__sectionItemText2019}`}
            >
              Artill株式会社創立
            </h3>
            <img
              className={classNames(
                styles.CompanyHistory__sectionItemImage_pc,
                styles.CompanyHistory__sectionItemImage2019
              )}
              src={History2019Three}
              alt=""
            />
          </div>

          <div
            className={`${styles.CompanyHistory__sectionItemUnderYear} ${styles.CompanyHistory__sectionItemUnderYear2019}`}
          >
            <h3
              className={`${styles.CompanyHistory__sectionItemText} ${styles.CompanyHistory__sectionItemText2019}`}
            >
              福岡オフィス開設
            </h3>
          </div>

          <div
            className={`${styles.CompanyHistory__sectionItemUnderYear} ${styles.CompanyHistory__sectionItemUnderYear2019}`}
          >
            <h3
              className={`${styles.CompanyHistory__sectionItemText} ${styles.CompanyHistory__sectionItemText2019}`}
            >
              ホワイト企業認定 シルバー取得
            </h3>
          </div>
        </div>
      </section>

      <section ref={sections[9]}>
        <StaticImage
          src="../../images/history/adobestock_88428296.jpg"
          alt=""
          aspectRatio={16 / 9}
          className={styles.CompanyHistory__imageBodyPc}
        />
        <div className={styles.CompanyHistory__background} />

        <img
          src={Histoty2020Background}
          alt=""
          className={styles.CompanyHistory__imageBodySp}
        />

        <div
          className={`${styles.CompanyHistory__section} ${styles.CompanyHistory__thirdTypeSection}`}
        >
          <div className={styles.CompanyHistory__sectionLineSp} />
          <h2 className={styles.CompanyHistory__sectionItemYear}>2020</h2>
          <div
            className={`${styles.CompanyHistory__sectionItemUnderYear} ${styles.CompanyHistory__sectionItemUnderYear2019}`}
          >
            <img
              className={classNames(
                styles.CompanyHistory__sectionItemImage_sp,
                styles.CompanyHistory__sectionItemImage2020
              )}
              src={RegenJapanSp}
              alt=""
            />
            <h3
              className={`${styles.CompanyHistory__sectionItemText} ${styles.CompanyHistory__sectionItemText2019}`}
            >
              Regen Japan株式会社
            </h3>
            <img
              className={classNames(
                styles.CompanyHistory__sectionItemImage_pc,
                styles.CompanyHistory__sectionItemImage2020
              )}
              src={History2020One}
              alt=""
            />
          </div>
          <div
            className={`${styles.CompanyHistory__sectionItemUnderYear} ${styles.CompanyHistory__sectionItemUnderYear2019}`}
          >
            <h3
              className={`${styles.CompanyHistory__sectionItemText} ${styles.CompanyHistory__sectionItemText2019}`}
            >
              ファンド事業部開業
            </h3>
          </div>

          <div
            className={`${styles.CompanyHistory__sectionItemUnderYear} ${styles.CompanyHistory__sectionItemUnderYear2019}`}
          >
            <h3
              className={`${styles.CompanyHistory__sectionItemText} ${styles.CompanyHistory__sectionItemText2019}`}
            >
              名古屋オフィス開設
            </h3>
          </div>
          <div
            className={`${styles.CompanyHistory__sectionItemUnderYear} ${styles.CompanyHistory__sectionItemUnderYear2019}`}
          >
            <h3
              className={`${styles.CompanyHistory__sectionItemText} ${styles.CompanyHistory__sectionItemText2019}`}
            >
              シンガポールオフィス開設
            </h3>
          </div>
        </div>
      </section>

      <section ref={sections[10]}>
        <StaticImage
          src="../../images/history/2021.jpg"
          alt=""
          aspectRatio={16 / 9}
          className={styles.CompanyHistory__imageBodyPc}
        />
        <div className={styles.CompanyHistory__background} />

        <img
          src={Histoty2021Background}
          alt=""
          className={styles.CompanyHistory__imageBodySp}
        />

        <div
          className={`${styles.CompanyHistory__section} ${styles.CompanyHistory__thirdTypeSection}`}
        >
          <div className={styles.CompanyHistory__sectionLineSp} />
          <div className={styles.CompanyHistory__sectionItem2018}>
            <h2 className={styles.CompanyHistory__sectionItemYear}>2021</h2>
          </div>
          <div
            className={`${styles.CompanyHistory__sectionItemMultipleUnderYear} ${styles.CompanyHistory__sectionItem2018}`}
          >
            <p
              className={`${styles.CompanyHistory__sectionItemText} ${styles.CompanyHistory__sectionItemText2018}`}
            >
              ホワイト企業認定 ゴールド取得
            </p>
          </div>
          <div
            className={`${styles.CompanyHistory__sectionItemMultipleUnderYear} ${styles.CompanyHistory__sectionItem2018}`}
          >
            <p
              className={`${styles.CompanyHistory__sectionItemText} ${styles.CompanyHistory__sectionItemText2018}`}
            >
              Suprieve本社をグランフロントビルに移転
            </p>
          </div>
          <div
            className={`${styles.CompanyHistory__sectionItemMultipleUnderYear} ${styles.CompanyHistory__sectionItem2018}`}
          >
            <p
              className={`${styles.CompanyHistory__sectionItemText} ${styles.CompanyHistory__sectionItemText2018}`}
            >
              札幌オフィス開設
            </p>
          </div>
        </div>
      </section>

      <section ref={sections[11]}>
        <StaticImage
          src="../../images/history/2022.png"
          alt=""
          aspectRatio={16 / 9}
          className={styles.CompanyHistory__imageBodyPc}
        />
        <div className={styles.CompanyHistory__background} />

        <img
          src={Histoty2022Background}
          alt=""
          className={styles.CompanyHistory__imageBodySp}
        />

        <div
          className={`${styles.CompanyHistory__section} ${styles.CompanyHistory__thirdTypeSection}`}
        >
          <div className={styles.CompanyHistory__sectionLineSp} />
          <div className={styles.CompanyHistory__sectionItem2018}>
            <h2 className={styles.CompanyHistory__sectionItemYear}>2022</h2>
          </div>
          <div
            className={`${styles.CompanyHistory__sectionItemMultipleUnderYear} ${styles.CompanyHistory__sectionItem2018}`}
          >
            <p
              className={`${styles.CompanyHistory__sectionItemText} ${styles.CompanyHistory__sectionItemText2018}`}
            >
              GLOBAL FRONT INVESTMENT株式会社創立
            </p>
          </div>
        </div>
      </section>

      <section ref={sections[12]}>
        <div className={styles.CompanyHistory__footer}>
          <Footer onPageTop={onPageTop} />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default () => (
  <VirtualScrollerProvider>
    <HistoryComponent />
  </VirtualScrollerProvider>
);
