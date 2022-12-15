import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notificantion';

describe('Send notification', () => {
  it('should be send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      category: 'this is aa sdas',
      content: 'social',
      recipientId: 'exemple-recipient-id',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
