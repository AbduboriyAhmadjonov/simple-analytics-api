// src/config/config.module.ts
import { Module, Global } from '@nestjs/common';
import { ConfigService } from './env.js';

@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
