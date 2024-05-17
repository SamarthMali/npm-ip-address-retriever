import * as https from 'https';

export class IP {
   private static getIpAddress(url: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const options: https.RequestOptions = {
                hostname: url,
                path: '/?format=json',
                method: 'GET'
            };

            const req = https.request(options, (res:any) => {
                let data = '';

                // A chunk of data has been received.
                res.on('data', (chunk: Buffer) => {
                    data += chunk;
                });

                // The whole response has been received.
                res.on('end', () => {
                    const response = JSON.parse(data);
                    resolve(response.ip);
                });
            });

            req.on('error', (error:any) => {
                reject(error);
            });

            // End the request
            req.end();
        });
    }

    static async getIpv4(): Promise<string> {
        try {
            return await IP.getIpAddress('api.ipify.org');
        } catch (error) {
            console.error('Error:', error);
            return '';
        }
    }

    static async getIpv6(): Promise<string> {
        try {
            return await IP.getIpAddress('api64.ipify.org');
        } catch (error) {
            console.error('Error:', error);
            return '';
        }
    }
}
