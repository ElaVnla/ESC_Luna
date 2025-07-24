import Big from 'big.js';

export function isOffCenter(
  currentLat: number,
  currentLng: number,
  initialLat: number,
  initialLng: number,
  threshold = 0.0005
): boolean {

  const bigNumberThreshold = Big(threshold);
  const latdiff = Big(currentLat).minus(initialLat).abs();
  const lngdiff = Big(currentLng).minus(initialLng).abs();



  return (
    latdiff.gt(bigNumberThreshold) ||
    lngdiff.gt(bigNumberThreshold)
  );
}