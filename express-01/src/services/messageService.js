import { Message } from '../models/Message.js';

export const messageService = {
  async updateMessage(messageId, data) {
    const message = await Message.findByPk(messageId);
    if (!message) {
      throw new Error('Message not found');
    }
    return await message.update(data);
  }
};
