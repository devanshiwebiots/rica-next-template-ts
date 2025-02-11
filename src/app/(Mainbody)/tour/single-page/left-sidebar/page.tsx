import { FC } from "react";

import CustomLayout from "@/layouts/layout";
import Banner from "@/components/tour/single-page/tabs/banner";
import SinglePage from "@/components/tour/single-page/common/single-page";

const LeftSidebar: FC = () => {
  return (
    <CustomLayout logo={"dark"} title="light_header" userBgClass="user user-light rounded5" loader="pre">
      <Banner />
      <SinglePage tab={true} />
    </CustomLayout>
  );
};

export default LeftSidebar;
