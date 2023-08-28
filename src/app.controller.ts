import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  returnBody(@Body() body: any): string {
    return {
      ...body,
      serverMessage: 'Hello from server',
    };
  }
}
