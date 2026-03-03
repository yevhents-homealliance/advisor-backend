import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdvisorsModule } from './advisors/advisors.module';

@Module({
  imports: [AdvisorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
