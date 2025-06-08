import React from "react";
import { PulseLoader } from "react-spinners";

export interface BtnLoaderProps {}

export default function BtnLoader({}: BtnLoaderProps) {
  return <PulseLoader size={10} color="white" />;
}
