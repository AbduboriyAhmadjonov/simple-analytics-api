import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service.js';
import { ConfigService } from './config/config.service.js';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly cfg: ConfigService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health')
  getHealth(): string {
    const status = this.cfg.NODE_ENV;
    return `OK - ${status}`;
  }
}
