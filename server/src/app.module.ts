import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WsModule } from './WebSocket/ws.module';

@Module({
  imports: [WsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
