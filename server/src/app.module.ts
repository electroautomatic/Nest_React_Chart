import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { PrismaService } from "./prisma.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, AppService, AppGateway],
})
export class AppModule {}
