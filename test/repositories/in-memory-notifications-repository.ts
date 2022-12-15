import { Notification } from '../../src/application/entities/notification';
import { NotificationsRepository } from '../../src/application/repositories/notification-repositories';

// representa o meu baco de dados (em memória)
export class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
