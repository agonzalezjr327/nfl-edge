// Convert American odds into implied probability.
//
// Example:
// -110 = about 52.38%
// +150 = 40%
function americanOddsToProbability(odds) {
  if (odds < 0) {
    return Math.abs(odds) / (Math.abs(odds) + 100);
  }

  return 100 / (odds + 100);
}


// Calculate profit from American odds.
function calculateProfit(wager, odds) {
  if (odds > 0) {
    return wager * (odds / 100);
  }

  return wager * (100 / Math.abs(odds));
}


// Calculate decimal odds.
function americanToDecimal(odds) {
  if (odds > 0) {
    return odds / 100 + 1;
  }

  return 100 / Math.abs(odds) + 1;
}


// Convert decimal odds back to American odds.
function decimalToAmerican(decimal) {
  if (decimal >= 2) {
    return Math.round((decimal - 1) * 100);
  }

  return Math.round(-100 / (decimal - 1));
}


// Combine several independent parlay legs.
//
// IMPORTANT:
// This assumes the events are independent.
//
// We should NOT blindly use this calculation for
// correlated same-game parlays.
function calculateParlayProbability(legs) {
  return legs.reduce((probability, leg) => {
    return probability * leg.modelProbability;
  }, 1);
}


// Calculate combined sportsbook odds.
function calculateParlayOdds(legs) {
  const decimalOdds = legs.reduce((total, leg) => {
    return total * americanToDecimal(leg.odds);
  }, 1);

  return decimalToAmerican(decimalOdds);
}


// Calculate expected value.
//
// EV =
// probability of winning × profit
// minus
// probability of losing × wager
function calculateEV(wager, odds, probability) {
  const profit = calculateProfit(wager, odds);

  return (
    probability * profit -
    (1 - probability) * wager
  );
}


module.exports = {
  americanOddsToProbability,
  calculateProfit,
  americanToDecimal,
  decimalToAmerican,
  calculateParlayProbability,
  calculateParlayOdds,
  calculateEV,
};