import { Injectable } from "@nestjs/common";
import { Message, Prisma } from "@prisma/client";
import { MessageUpdatePayload } from "types";
import { PrismaService } from "./prisma.service";

@Injectable()
export class AppService {
  // инициализация сервиса `Prisma`
  constructor(private readonly prisma: PrismaService) {}

  // получение всех сообщений
  async getMessages(): Promise<Message[]> {
    return this.prisma.message.findMany();
  }

  // удаление всех сообщений - для отладки в процессе разработки
  async clearMessages(): Promise<Prisma.BatchPayload> {
    return this.prisma.message.deleteMany();
  }

  // создание сообщения
  async createMessage(data: Prisma.MessageCreateInput) {
    return this.prisma.message.create({ data });
  }

  // обновление сообщения
  async updateMessage(payload: MessageUpdatePayload) {
    const { id, text } = payload;
    return this.prisma.message.update({ where: { id }, data: { text } });
  }

  // удаление сообщения
  async removeMessage(where: Prisma.MessageWhereUniqueInput) {
    return this.prisma.message.delete({ where });
  }
}