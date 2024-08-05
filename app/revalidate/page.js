"use client";
import axios from "axios";

export default function page() {
  const revalidate = () => {
    axios.post("/api/revalidate").then((res) => {
      console.log(res);
    });
  };
  return <button onClick={revalidate}>revalidate content</button>;
}
