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

/**
 * Calculates new distance based on initial velocity, time, and initial distance.
 * Checks for correct units and alerts the user if incorrect units are used.
 * @param {Object} props - Object containing parameters for calculation
 * @returns {number | undefined} - New distance value or undefined if units are incorrect
 */
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

 //function for remaining fuel and to check correct units
 const fuelRemaining = ({fuel:fuel,time:time,fbr:fbr})=>{
  if(fuel[1]==='kg'&& time[1]==='s'&& fbr[1]==='kg/s'){
   return fuel[0] - fbr[0]*time[0]
  }
  else{
   alert('Please use the correct units')
  }
 }

// Perform calculations using the provided parameters
 const d2 = newDistance(props) //calcultes new distance
 const rf = fuelRemaining(props) //calculates remaining fuel
 const vel2 = calcNewVel(props) //calculates new velocity based on acceleration
 
// Log calculated values for debugging purposes
 console.log(`Corrected New Velocity: ${vel2} km/h`);
 console.log(`Corrected New Distance: ${d2} km`);
 console.log(`Corrected Remaining Fuel: ${rf} kg`);
 
 
 
 
