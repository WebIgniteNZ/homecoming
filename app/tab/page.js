"use client";
import { useState } from "react";
import { retrieveCSV } from "../../utils/server-actions";

export default function Page() {
  const [passed, setPassed] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [val, setVal] = useState("");
  const checkPass = async () => {
    const res = await fetch("/api/check-pass", {
      method: "POST",
      body: JSON.stringify({ pass: val }),
    });
    if (await res.json()) {
      console.log("PASSED");
      setPassed(true);
    } else {
      console.log("Wrong password");
    }
  };
  const getCsv = async () => {
    const res = await retrieveCSV();

    if (res) {
      const csvData = new Blob([res], { type: "text/csv" });
      const csvURL = URL.createObjectURL(csvData);
      const link = document.createElement("a");
      link.href = csvURL;
      link.download = `${new Date().toDateString()}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <div className="flex flex-col gap-2 max-w-xs m-auto py-10">
      <div className="relative border-2 rounded-md">
        <input
          type={reveal ? "text" : "password"}
          className=" bg-transparent  p-2   w-full "
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setReveal(!reveal);
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 leading-none text-xs">
          {reveal ? "hide" : "show"}
        </button>
      </div>
      <button onClick={checkPass}>check pass</button>
      {!passed ? <button onClick={getCsv}>download</button> : ""}
    </div>
  );
}
