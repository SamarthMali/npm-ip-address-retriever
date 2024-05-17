# ip-address-retriever

A TypeScript utility for retrieving the public IPv4 and IPv6 addresses using the ipify API.

## Installation

Use the package manager [npm](https://nodejs.org/en) or [yarn](https://yarnpkg.com/) to install ip-address-retriever.

```bash
npm install ip-address-retriever
yarn add ip-address-retriever
```

## Usage

```javascript
import { IP } from 'ip-address-retriever';

// Retrieve IPv4 and IPv6 addresses
async function fetchIP(): Promise<void> {
    try {
        const ipv4: string = await IP.getIpv4();
        const ipv6: string = await IP.getIpv6();
        console.log('IPv4:', ipv4);
        console.log('IPv6:', ipv6);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchIP();

```

## API

### IP.getIpv4(): Promise<string>
Returns a promise that resolves to the public IPv4 address of the client.


### IP.getIpv6(): Promise<string>
Returns a promise that resolves to the public IPv6 address of the client.

## Credit

This package utilizes the ipify [API](https://www.ipify.org/) for retrieving IP addresses
