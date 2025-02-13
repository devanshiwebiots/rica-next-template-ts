"use client";

import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import { FC } from "react";
import GridView from "@/components/pages/common/grid-view";
import { masonryData } from "@/data/pages/all-page";

const Masonry4: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light" logo={"dark"}>
      <Breadcrumb title="Home" subTitle="portfolio" bannerImg={"/assets/images/tour/inner-page/breadcrumb.jpg"} />
      <GridView value={masonryData} size={4} gridType={"grid-view"} type="tour" view={"masonry"} />
    </CustomLayout>
  );
};

export default Masonry4;
