import { isOffCenter } from "@/views/hotels/HotelDetails/utils/MapsUtils";


describe('Normal Boundary Value Testing – 9 Cases', () => {
  const initialLat = 1.0000;
  const initialLng = 103.0000;
  const threshold = 0.0005;

  const lat = {
    min: 0.9995,
    mean: 1.0000,
    max: 1.0005,
    minPlus: 0.9995 + 0.00001,
    maxMinus: 1.0005 - 0.00001,
  };

  const lng = {
    min: 102.9995,
    mean: 103.0000,
    max: 103.0005,
    minPlus: 102.9995 + 0.00001,
    maxMinus: 103.0005 - 0.00001,
  };

  test('1. (x1min, x2mean)', () => {
    expect(isOffCenter(lat.min, lng.mean, initialLat, initialLng, threshold)).toBe(false);
  });

  test('2. (x1min + 1, x2mean)', () => {
    expect(isOffCenter(lat.minPlus, lng.mean, initialLat, initialLng, threshold)).toBe(false);
  });

  test('3. (x1mean, x2mean)', () => {
    expect(isOffCenter(lat.mean, lng.mean, initialLat, initialLng, threshold)).toBe(false);
  });

  test('4. (x1max - 1, x2mean)', () => {
    expect(isOffCenter(lat.maxMinus, lng.mean, initialLat, initialLng, threshold)).toBe(false);
  });

  test('5. (x1max, x2mean)', () => {
    expect(isOffCenter(lat.max, lng.mean, initialLat, initialLng, threshold)).toBe(false);
  });

  test('6. (x1mean, x2min)', () => {
    expect(isOffCenter(lat.mean, lng.min, initialLat, initialLng, threshold)).toBe(false);
  });

  test('7. (x1mean, x2min + 1)', () => {
    expect(isOffCenter(lat.mean, lng.minPlus, initialLat, initialLng, threshold)).toBe(false);
  });

  test('8. (x1mean, x2max - 1)', () => {
    expect(isOffCenter(lat.mean, lng.maxMinus, initialLat, initialLng, threshold)).toBe(false);
  });

  test('9. (x1mean, x2max)', () => {
    expect(isOffCenter(lat.mean, lng.max, initialLat, initialLng, threshold)).toBe(false);
  });
});
