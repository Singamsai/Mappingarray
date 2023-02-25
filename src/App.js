import './App.css';

function App() {
   let arr = Array(32).fill("");
   function isPrime(n){
    if (n <= 1)
        return false;
    for (let i = 2; i < n; i++)
        if (n % i === 0)
            return false;
  
    return true;
   }
  return (
    <div className="App">
      {arr.map((ele,i)=>{
        return(
          <div className='numbox' style={{backgroundColor: (isPrime(i)?"red":i%2===0?'green':'yellow')}}>{i}</div>
        )
      })}
    </div>
    
  );
}

export default App;
