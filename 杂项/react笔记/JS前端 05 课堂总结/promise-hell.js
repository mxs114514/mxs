function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Processed ${data}`);
    }, 1000);
  });
}

function saveData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Saved ${data}`);
    }, 1000);
  });
}

fetchData("https://api.example.com/data1")
  .then((data1) => {
    console.log(data1);
    return fetchData("https://api.example.com/data2").then((data2) => {
      console.log(data2);
      return fetchData("https://api.example.com/data3").then((data3) => {
        console.log(data3);
        return processData(data1).then((processedData1) => {
          console.log(processedData1);
          return processData(data2).then((processedData2) => {
            console.log(processedData2);
            return processData(data3).then((processedData3) => {
              console.log(processedData3);
              return saveData(processedData1).then((savedData1) => {
                console.log(savedData1);
                return saveData(processedData2).then((savedData2) => {
                  console.log(savedData2);
                  return saveData(processedData3).then((savedData3) => {
                    console.log(savedData3);
                    console.log("All data processed and saved.");
                  });
                });
              });
            });
          });
        });
      });
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
