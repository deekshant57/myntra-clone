import fetch from 'node-fetch';
const getData = async () => {
   let data = await fetch('gs://test-myntra-39d3f.appspot.com/mensData.json')
   data = await data.json();s
   console.log(data);
};

getData();
