const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  let sAct = parseFloat(sampleActivity);
  if (isNaN(sAct) || sAct > MODERN_ACTIVITY || sAct <= 0) return false;

  let result =  Math.log((MODERN_ACTIVITY / sAct)) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(result);
};
