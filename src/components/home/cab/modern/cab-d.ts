import { JSX } from "react";

export interface IOurVehicleProps {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: number;
}

export interface IServiceCabProps {
  id: number;
  svg: JSX.Element;
  title: string;
  desc: string;
  price: string;
}

export interface ICabLogoProps {
  id: number;
  img: string;
}
