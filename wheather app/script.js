async function getData(event) {
    event.preventDefault();
  
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=ee86bb84089fcd5c67f0d51ddb347e23&query=jaipur`
    );
  
    console.log(response);
  }
  // none


  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(5)); // Calculate factorial of 5
  