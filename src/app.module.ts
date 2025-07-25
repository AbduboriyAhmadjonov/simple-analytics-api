import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from './config/config.module.js';
import { MongooseModule } from '@nestjs/mongoose';
// import { VisitsModule } from './visits/visits.module.js';

@Module({
  // imports: [MongooseModule.forRoot('', ConfigModule), ConfigModule],
  // imports: [MongooseModule.forRoot('mongodb://localhost/nest'), VisitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
