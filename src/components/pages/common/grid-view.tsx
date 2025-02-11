import CategoryPage from "@/components/common/filters/category";
import { FC, useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridLayoutPage from "./grid-layout";
import CreativePage from "../portfolio/creative-3/page";
import { RootState } from "@/redux-toolkit/store";
import MasonaryLayout from "./MasonaryLayout";
import { setGridSize, setGridStyle } from "@/redux-toolkit/reducers/grid-reducer";

interface IBaseProps {
  // Define common properties here
}

interface IGridViewProps {
  value: IBaseProps[]; // Update this to the actual union type
  size?: number;
  gridType?: string;
  type?: string;
  view?: string;
}

const GridView: FC<IGridViewProps> = ({ value, size, gridType, type, view }) => {
  const dispatch = useDispatch();
  const grid = useSelector((state: RootState) => state.gridReducer);
  const [filteredMenu, setFilteredMenu] = useState<IBaseProps[] | undefined>();
  const getCategories = useCallback(
    (data: IBaseProps[]) => {
      setFilteredMenu(data);
    },
    [value]
  );

  useEffect(() => {
    setFilteredMenu(value);
    dispatch(setGridSize(size));
    dispatch(setGridStyle(gridType));
  }, [value]);

  return (
    <section className="portfolio-section bg-white small-section ratio2_3">
      <div className="container">
        <div className="filter-button-group">
          <CategoryPage value={value} getCategories={getCategories} />
        </div>

        <div className="row content grid zoom-gallery">{view == "creative" ? <CreativePage value={filteredMenu} grid={grid} /> : view == "masonry" ? <MasonaryLayout grid={grid} value={filteredMenu} type={type} view={view} /> : <GridLayoutPage grid={grid} value={filteredMenu} type={type} view={view} />}</div>
      </div>
    </section>
  );
};

export default GridView;
