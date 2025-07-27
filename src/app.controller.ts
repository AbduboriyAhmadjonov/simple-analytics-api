
import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service.js';
import { ConfigService } from './config/config.service.js';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly cfg: ConfigService
  ) {}


  @Get()
  @ApiOperation({ summary: 'Get Hello World', description: 'Returns a Hello World string.' })
  @ApiResponse({ status: 200, description: 'Hello World returned successfully.', schema: { example: 'Hello World!' } })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/environment')
  @ApiOperation({ summary: 'Get Environment', description: 'Returns the current environment.' })
  @ApiResponse({ status: 200, description: 'Environment returned successfully.', schema: { example: 'OK - development' } })
  getHealth(): string {
    const status = this.cfg.NODE_ENV;
    return `OK - ${status}`;
  }
}
