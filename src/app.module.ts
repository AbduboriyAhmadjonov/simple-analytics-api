import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from './config/config.module.js';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service.js';
import { VisitsModule } from './visits/visits.module.js';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      useFactory: async (cfg: ConfigService) => ({
        uri: cfg.MONGODB_URI,
      }),
      inject: [ConfigService],
    }),
    VisitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
