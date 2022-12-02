import React, { FunctionComponent } from "react";
import { Title, Meta } from "react-head";
import OgpImage from "../../../images/ogp.jpg";

export const SEO: FunctionComponent = ({}) => {
  const title = "芸人サッカー選手・コーチ募集｜SMILERS";
  const URL = "https://http://smilers-group.com/lp";
  const ogpTitle = "YouTube最強の芸人サッカーチーム」選手・コーチ大募集!";
  return (
    <>
      <Title>{title}</Title>

      {/* OpenGraph tags */}
      <Meta property="og:url" content={URL} />
      <Meta property="og:title" content={title} />
      <Meta property="og:image" content={OgpImage} />
      <Meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <Meta name="twitter:title" content={ogpTitle} />
      <Meta name="twitter:image" content={OgpImage} />
    </>
  );
};

export default SEO;
