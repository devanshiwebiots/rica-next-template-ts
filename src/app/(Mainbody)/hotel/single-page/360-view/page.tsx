import { FC } from "react";

import CustomLayout from "@/layouts/layout";
import SinglePageSection from "@/components/hotels/single-pages/common/single-page-section";
import BannerImage from "@/components/restaurant/single-page/360/banner";

const View360: FC = () => {
  return (
    <CustomLayout logo={"dark"} title="light_header" userBgClass="user user-light rounded5" loader="good">
      <BannerImage />
      <SinglePageSection detail={true} side="left" tab={true} />
    </CustomLayout>
  );
};

export default View360;
