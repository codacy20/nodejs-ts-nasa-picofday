import { Injectable } from '@nestjs/common';
const fetch = require('node-fetch');
import { config } from 'dotenv';

// const key = config().parsed.key;
const key = "TEMP disable as we don't have any key";
@Injectable()
export class AppService {
  getPicOfTheDay(): Promise<any> {
    return Promise.resolve(JSON.stringify({ name: 'John' }));
    // return fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`).then(
    //   (response) => response.json(),
    // );
  }
}
