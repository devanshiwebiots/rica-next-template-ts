"use client";
import { FC, useEffect, useState } from "react";

import CustomLayout from "@/layouts/layout";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import HomeBanner from "@/components/common/banner/restaurant-banner";
import { getRestaurant } from "@/redux-toolkit/restaurant-api";
import GoogleMapComponent from "@/components/common/map/google-map";
import GridView from "@/components/common/grid-page/grid/grid-view";
import MapModal from "@/components/common/model/map/page";

const GoogleMapModal: FC = () => {
  const [mapModal, setMapModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.restaurant);

  useEffect(() => {
    dispatch(getRestaurant());
  }, [dispatch]);

  return (
    <CustomLayout logo="dark" title="light_header" userBgClass="user user-light" loader="pre">
      <HomeBanner />
      <GridView size={3} gridType={"grid-view"} side={"left"} value={data} topFilter={false} mapModal={true} gridOption={true} grid4Img={true} setMapModal={setMapModal} type={"restaurant"} />
      <MapModal modal={mapModal} setMapModal={setMapModal} value={data} type={"restaurant"}>
        <GoogleMapComponent />
      </MapModal>
    </CustomLayout>
  );
};

export default GoogleMapModal;
