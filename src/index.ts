export function reformatLicenseKey(licenseKey: string, charNumberGroup: number): string {
    // Replace all special characters from the string and make it all uppercase
    const newLicenseKey = licenseKey.replace(/-/g, '').toUpperCase();
    
    // Calculates the size of the first group or, if 0, sets the default size to charNumberGroup
    const firstGroupLength = newLicenseKey.length % charNumberGroup || charNumberGroup;

    // Create a new formatted string with value of first group as default
    let formattedString = newLicenseKey.slice(0, firstGroupLength);

    // console.log({ newLicenseKey, firstGroupLength, formattedString })
    
    // Create the groups, with the number of characters passed by parameter
    for (let i = firstGroupLength; i < newLicenseKey.length; i += charNumberGroup) {
        formattedString += '-' + newLicenseKey.slice(i, i + charNumberGroup);
    }

    return formattedString;
}

// Test cases
console.log(reformatLicenseKey("5F3Z-2e-9-w", 4));  // Output: "5F3Z-2E9W"
console.log(reformatLicenseKey("2-5g-3-J", 2));     // Output: "2-5G-3J"