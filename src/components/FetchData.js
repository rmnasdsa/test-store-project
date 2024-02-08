
const FetchData = () => {

  
  // const reject = () => console.log('error occured...');
  // const resolve = () => {
  //   const data = fetch('../../data.json').then((res) => {
  //     res.json();
  //     // console.log(res);
  //   }).then((jsonData) => console.log(jsonData))
  //   // console.log(data);
 
  // }
  // const promise = new Promise((resolve) => {resolve()});
  // promise.then(() => {
  //   setTimeout(resolve(), 1000);
  //   // resolve()
  // }).catch (() => {
  //   reject()
  // })



  // const promise = new Promise((resolve, reject) => {
  //   const data = fetch(' https://ghibliapi.herokuapp.com/').then((res) => {return res.json()}).then((r) => console.log(r))
  //   setTimeout(() => {
  //     resolve(data)
  //   },0)
  // })
  // promise.then((res) => {
  //   return res;
  // }).then((jsonData) => { console.log(jsonData); }).catch(
  //   (err) => console.log(err))





  const onFullFillment = async() => {
    // const data = fetch('../../data.json', {
    // method:"POST" })
    //   const data = res.json();
    //   data.then((jsonData) => console.log(jsonData))
    // })

    const data = await fetch('http://localhost:8000/data.json');
    const res = await data.json();
    console.log(res)
  }
  const onRejection = (err) => {console.log(err)}

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    },1000)
  }).then(onFullFillment).catch(onRejection)
  return (
    <>

    
    </>
  )
}
export default FetchData;