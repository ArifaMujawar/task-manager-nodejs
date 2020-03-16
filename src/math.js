

const calculateTax = (salary)=>{
  const tax = salary * 0.10
  return salary - tax
}

const fahrenheitToCelsius = (temp) =>{
  return (temp -32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
  return (temp * 1.8) + 32
}

console.log(calculateTax(1000))
module.exports = {
  calculateTax,
  fahrenheitToCelsius,
  celsiusToFahrenheit
};