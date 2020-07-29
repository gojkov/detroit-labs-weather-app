import { Store } from './Store';
import { IP_API_KEY, API_KEY } from './App';

describe('Tests', () => {
    test('Store is truthy', () => {
        expect(Store).toBeTruthy();
    });
    test('OpenWeatherMap API key is mine', () => {
        expect(API_KEY).toBe(`bb10b69a4c319571b3ff6623ff802dea`);
    });
    test('IP API key is mine', () => {
        expect(IP_API_KEY).toBe(`692425e26661c560e75e3f79adcc1567`);
    });
});
