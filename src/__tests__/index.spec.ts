import { reformatLicenseKey } from '../index';

describe('ReformatLicenseKey', () => {
    it ('should format the license key into equal groups, with the first group having the remaining characters if the group size is even and the total number of characters is even', () => {
        const licenseKey = '5F3Z-2e-9-w';
        const newLicenseKey = reformatLicenseKey(licenseKey, 4);
        expect(newLicenseKey).toBe('5F3Z-2E9W')
    });
    
    it ('should format the license key into equal groups, with the first group having the remaining characters if the group size is even and the total number of characters is odd', () => {
        const licenseKey = '2-5g-3-J';
        const newLicenseKey = reformatLicenseKey(licenseKey, 2);
        expect(newLicenseKey).toBe('2-5G-3J')
    });
})