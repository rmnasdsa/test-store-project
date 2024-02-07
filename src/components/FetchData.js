
const FetchData = () => {

  const reject = () => console.log('error occured...');
  const resolve = async() => {
    const data = await fetch('../../data.json');
    const res = data.json();
    console.log(res);
  }
  const promise = new Promise((resolve) => {resolve()});
  promise.then(() => {
    // setTimeout(resolve(), 1000);
    resolve()
  }).catch (() => {
    reject()
  })
  return (
    <>
  
    
    </>
  )
}
export default FetchData;