import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notificantion';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class httpModule { }
