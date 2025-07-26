import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from './config/config.service.js';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const cfg = app.get(ConfigService);
  await app.listen(cfg.PORT, '0.0.0.0');
  console.log(`🚀  Fastify listening on http://localhost:${cfg.PORT}`);
}
bootstrap();
