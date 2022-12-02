import React, { FunctionComponent, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExplainSmilers from "../organisms/ExplainSmilers";
import ExplainLeague from "../organisms/ExplainLeague";
import Header from "../organisms/Header";
import Top from "../organisms/Top";
import * as styles from "./style.module.scss";
import Recruitment from "../organisms/Recruitment";
import RecruitmentOverview from "../organisms/RecruitmentOverview";
import SelectionFlow from "../organisms/SelectionFlow";
import Footer from "../organisms/Footer";
import OverviewMovie from "../organisms/OverviewMovie";
import SEO from "../organisms/SEO";

const LpTemplate: FunctionComponent = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof document !== `undefined`) {
      document.querySelectorAll(".Animation--fadeInRight").forEach(element => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            x: 150,
          },
          {
            opacity: 1,
            duration: 0.7,
            x: 0,
            // アニメーション内容
            scrollTrigger: {
              trigger: element,
              start: "top 100%", //開始時のトリガー条件
              end: "top 50%", //終了時のトリガー条件
              onEnter: () => {}, //スクロールイン時
              onEnterBack: () => {}, //スクロールバック時
              scrub: 0,
              // markers: true, // マーカー表示
            },
          }
        );
      });

      document.querySelectorAll(".Animation--fadeInLeft").forEach(element => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            x: -150,
          },
          {
            opacity: 1,
            duration: 0.7,
            x: 0,
            // アニメーション内容
            scrollTrigger: {
              trigger: element,
              start: "top 100%", //開始時のトリガー条件
              end: "top 50%", //終了時のトリガー条件
              onEnter: () => {}, //スクロールイン時
              onEnterBack: () => {}, //スクロールバック時
              scrub: 0,
              // markers: true, // マーカー表示
            },
          }
        );
      });

      document.querySelectorAll(".Animation--fadeInBottom").forEach(element => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 150,
          },
          {
            opacity: 1,
            duration: 0.8,
            y: 0,
            // アニメーション内容
            scrollTrigger: {
              trigger: element,
              start: "top 90%", //開始時のトリガー条件
              end: "top 40%", //終了時のトリガー条件
              onEnter: () => {}, //スクロールイン時
              onEnterBack: () => {}, //スクロールバック時
              scrub: 1,
              // markers: true, // マーカー表示
            },
          }
        );
      });
    }
  }, []);

  return (
    <div className={styles.LpTemplate}>
      <SEO />
      <Header />
      <Top />
      <ExplainLeague />
      <ExplainSmilers />
      <OverviewMovie isDisplayed={true} />
      <Recruitment />
      <RecruitmentOverview />
      <SelectionFlow />
      <Footer />
    </div>
  );
};

export default LpTemplate;
