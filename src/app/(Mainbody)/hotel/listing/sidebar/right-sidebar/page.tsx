"use client";
import { FC, useEffect } from "react";

import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import SearchBox from "@/components/common/search-box/page";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "@/redux-toolkit/hotel-api";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import GridView from "@/components/common/grid-page/grid/grid-view";

const RightSidebar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.hotel);
  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);

  return (
    <CustomLayout title="inner-page" userBgClass="user user-light" loader="right">
      <Breadcrumb title="Home" subTitle="hotels in dubai" bannerImg={"/assets/images/inner-pages/bg-bread.jpg"} />
      <div className="search-panel" id="searchBar">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <div className="search-panel" id="searchBar">
                <div className="search-section">
                  <SearchBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GridView size={3} gridType={"grid-view"} side={"right"} value={data} gridOption={true} topFilter={false} grid4Img={false} type={"hotel"} />
    </CustomLayout>
  );
};

export default RightSidebar;
