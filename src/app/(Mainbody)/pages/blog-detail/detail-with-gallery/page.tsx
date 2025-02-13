import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import { FC } from "react";
import BodyContent from "@/components/pages/blog-detail/page";

const SliderSidebar: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light" logo={"dark"} loader="pre">
      <Breadcrumb title="Home" subTitle="blog" bannerImg={"/assets/images/tour/inner-page/breadcrumb.jpg"} />
      <BodyContent side="left" view="slide" />
    </CustomLayout>
  );
};

export default SliderSidebar;
