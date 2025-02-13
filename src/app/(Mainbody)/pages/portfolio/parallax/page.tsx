"use client";

import CustomLayout from "@/layouts/layout";
import { FC } from "react";
import BodyContent from "@/components/pages/portfolio/parallax/page";

const Parallax: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light" logo={"dark"} footerPlace={true}>
      <BodyContent />
    </CustomLayout>
  );
};

export default Parallax;
