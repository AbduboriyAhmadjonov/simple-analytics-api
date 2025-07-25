import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from './config/env.js';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  const cfg = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(cfg.PORT, '0.0.0.0');
}
bootstrap();
