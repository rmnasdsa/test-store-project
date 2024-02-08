
const FetchData = () => {

  const reject = () => console.log('error occured...');
  const resolve = () => {
    const data = fetch('../../data.json').then((res) => {
      res.json();
      // console.log(res);
    }).then((jsonData) => console.log(jsonData))
    // console.log(data);
 
  }
  const promise = new Promise((resolve) => {resolve()});
  promise.then(() => {
    setTimeout(resolve(), 1000);
    // resolve()
  }).catch (() => {
    reject()
  })
  return (
    <>
  
    
    </>
  )
}
export default FetchData;