import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CronService } from './cron/cron.service';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { TransactionModule } from './transaction/transaction.module';
import { TransactionService } from './transaction/transaction.service';
import { TecnobackApi } from './tecnoback/api.service';

@Module({
  imports: [ScheduleModule.forRoot(),
            HttpModule,
            TransactionModule
          ],
  controllers: [AppController],
  providers: [AppService, CronService, TransactionService, TecnobackApi],
})
export class AppModule {}
