import React, { FunctionComponent } from "react";
import ExplainSmilers from "../organisms/ExplainSmilers";
import ExplainLeague from "../organisms/ExplainLeague";
import Header from "../organisms/Header";
import Top from "../organisms/Top";
import * as styles from "./style.module.scss";
import Recruitment from "../organisms/Recruitment";
import RecruitmentOverview from "../organisms/RecruitmentOverview";
import SelectionFlow from "../organisms/SelectionFlow";
import Footer from "../organisms/Footer";

const LpTemplate: FunctionComponent = () => {
  return (
    <div className={styles.LpTemplate}>
      <Header />
      <Top />
      <ExplainLeague />
      <ExplainSmilers />
      <Recruitment />
      <RecruitmentOverview />
      <SelectionFlow />
      <Footer />
    </div>
  );
};

export default LpTemplate;
