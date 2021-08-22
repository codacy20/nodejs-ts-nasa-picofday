import { Injectable } from '@nestjs/common';
const fetch = require('node-fetch');
import { config } from 'dotenv';

const key = config().parsed.key;
@Injectable()
export class AppService {
  getPicOfTheDay(): Promise<JSON> {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`).then(
      (response) => response.json(),
    );
  }
}
