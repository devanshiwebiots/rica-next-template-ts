"use client";
import { FC } from "react";
import SuccessPage from "@/components/common/booking-page/success";

import CustomLayout from "@/layouts/layout";

const BookingSuccess: FC = () => {
  return (
    <CustomLayout title="light_header" logo="dark" userBgClass="user user-light">
      <SuccessPage img="/assets/images/hotel/booking-success.png" title="Payment Successful ! get ready for comfortable stay." />
    </CustomLayout>
  );
};

export default BookingSuccess;
