import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonResponse } from './models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<CommonResponse<any>> {
    return {
      status: 200,
      data: await this.appService.getPicOfTheDay(),
    };
  }
}
