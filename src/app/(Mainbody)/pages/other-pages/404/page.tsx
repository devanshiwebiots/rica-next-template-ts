import { FC } from "react";

import CustomLayout from "@/layouts/layout";
import Error404Content from "@/components/pages/other-pages/404/page";

const Error404: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light">
      <Error404Content />
    </CustomLayout>
  );
};

export default Error404;
