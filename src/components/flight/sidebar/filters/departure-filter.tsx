import { departureTimeData } from "@/data/flight/filter-data";
import { setDepartureStatus } from "@/redux-toolkit/reducers/flight-filter";
import Img from "@/utils/BackgroundImageRatio";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DepartureFilter: React.FC = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const departureStatus = useSelector((state: any) => state.flightFilterReducer.departureStatus);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch(setDepartureStatus([...departureStatus, value]));
    } else {
      dispatch(setDepartureStatus(departureStatus.filter((selectedValue: string) => selectedValue !== value)));
    }
  };

  useEffect(() => {
    dispatch(setDepartureStatus(departureStatus));
  }, [departureStatus]);

  return (
    <div
      className="filter-block"
      onClick={() => {
        setShow(!show);
      }}
    >
      <div className={`collection-collapse-block ${show ? "open" : ""}`}>
        <h6 className="collapse-block-title">Departure</h6>
        <div className={`collection-collapse-block-content ${!show ? "d-none" : ""} `}>
          <div className="collection-brand-filter">
            {departureTimeData.map((data: IAllFiltersProps, index) => {
              return (
                <div className="form-check collection-filter-checkbox" key={index}>
                  <input type="checkbox" className="form-check-input" id={data.type} value={data.type} checked={departureStatus.includes(data.type)} onChange={handleCheckboxChange} />
                  <label className="form-check-label" htmlFor={data.type}>
                    <Img src={data.img} className="me-1" />
                    {data.title}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const MemoizedDepartureFilter = React.memo(DepartureFilter);

export default MemoizedDepartureFilter;
