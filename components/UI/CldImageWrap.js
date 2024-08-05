"use client";
import { CldImage } from "next-cloudinary";

export default function CldImageWrap(props) {
  const cloudinaryImageLoader = ({ src }) => {
    return `https://res.cloudinary.com/w2p/image/upload/w_40,h_40/${src}`;
  };
  return <CldImage loader={cloudinaryImageLoader} {...props} />;
}
