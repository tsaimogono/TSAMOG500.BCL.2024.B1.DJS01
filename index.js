/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const props = {
  vel : [10000,'km/h'], // velocity (km/h)
  acc : [3,'m/s^2'], // acceleration (m/s^2)
  time : [3600,'s'], // seconds (1 hour)
  d : [0,'km'], // distance (km)
  fuel : [5000,'kg'], // remaining fuel (kg)
  fbr : [0.5,'kg/s'] // fuel burn rate (kg/s)
 }

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = ({vel, acc, time}) => { 
  if(vel[1]==='km/h'&& acc[1]==='m/s^2'&& time[1]==='s'){
  return vel[0] + (acc[0]*time[0])*(3600/1000)
  }
  else{
    alert('Please use the correct units')
  }
}

 // function to calculate new distance and check for correct units
 const newDistance = ({vel,time:time,d:d})=>{
  if(vel[1]==='km/h'&& time[1]==='s' && d[1]==='km'){
   return d[0] + vel[0]*time[0]/3600
  }
  else{
   alert('Please use the correct units')
  }
}


console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);

