# onpremise-storage-unit

jetlexa-official/onpremise-storage-unit is a server-side application which enables Jetlexa companies to create a custom storage unit in their own servers.

## Installation
First, we need to configure the company data in constants folder
constants/company.data.ts
```typescript
type ICDNConfig = {
    COMPANY: string,
    COMPANY_NAME: string,
    END_POINT: string
}

const config: ICDNConfig = {
    COMPANY: "", //Company ID from app.jetlexa.com
    COMPANY_NAME: "", //Company Title from Jetlexa.com
    END_POINT: "", //Endpoint of the current server (https://example.com/api)
}

export default config;
```
Use the package manager [npm](https://npmjs.com/) to install packages and run scripts on jetlexa-official/onpremise-storage-unit.
```bash
npm run start:production
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)