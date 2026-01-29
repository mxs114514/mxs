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

const getData = async () => {
    // 标上 await 之后，我们直接获得了 Promise 的值？
    const data1 = await fetchData("https://api.example.com/data1");
    console.log(data1);
    const data2 = await fetchData("https://api.example.com/data2");
    console.log(data2);
    const data3 = await fetchData("https://api.example.com/data3");
    console.log(data3);
    const processedData1 = await processData(data1);
    console.log(processedData1);
    const processedData2 = await processData(data2);
    console.log(processedData2);
    const processedData3 = await processData(data3);
    console.log(processedData3);
    const savedData1 = await saveData(processedData1);
    console.log(savedData1);
    const savedData2 = await saveData(processedData2);
    console.log(savedData2);
    const savedData3 = await saveData(processedData3);
    console.log(savedData3);
    console.log("All data processed and saved.");
}
