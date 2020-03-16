const { calculateTax, fahrenheitToCelsius,
  celsiusToFahrenheit} = require('../src/math')

test('should calculate net salary', ()=>{
  const total = calculateTax(3000)
  expect(total).toBe(2700)
})

test('should convert Fahrenheit ot celsius', ()=>{
  const fahren = fahrenheitToCelsius(32)
  expect(fahren).toBe(0)
})

test('should convert Celsius to Fahrenheit', ()=>{
  const celsius = celsiusToFahrenheit(0)
  expect(celsius).toBe(32)
})