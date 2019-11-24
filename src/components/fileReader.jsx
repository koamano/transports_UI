import React, { Component } from "react";

const ImportFromFileBodyComponent = () => {
  let fileReader;

  const handleFileRead = e => {
    const content = fileReader.result;
    console.log(content);
    // … do something with the 'content' …
  };

  const handleFileChosen = file => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  // const handleFileChosen = file => {
  //   const csv = require("csvtojson");
  //   const fs = require("fs");
  //   let results = [];

  // fs.createReadStream(file).pipe(
  //   csv([
  //     "filler1",
  //     "filler2",
  //     "filler3",
  //     "filler4",
  //     "category",
  //     "color",
  //     "filler4",
  //     "filler5",
  //     "filler6",
  //     "itemName",
  //     "itemNumber",
  //     "filler7",
  //     "filler8",
  //     "onHandCollege",
  //     "filler9",
  //     "filler10",
  //     "filler11",
  //     "price",
  //     "size",
  //     "style",
  //     "gender",
  //     "vendor",
  //     "filler13",
  //     "filler14",
  //     "filler15",
  //     "filler16",
  //     "filler17"
  //   ])
  //     .on("data", data => results.push(data))
  //     .on("end", () => {
  //       console.log(results);
  //     })
  // );

  // };

  return (
    <div className="upload-expense">
      <input
        type="file"
        id="file"
        className="input-file form-control"
        accept=".csv"
        onChange={e => handleFileChosen(e.target.files[0])}
      />
    </div>
  );
};

export default ImportFromFileBodyComponent;
