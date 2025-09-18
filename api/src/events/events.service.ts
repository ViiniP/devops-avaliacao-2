import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(@InjectRepository(Event) private repo: Repository<Event>) {}

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const event = await this.repo.findOne({ where: { id } });
    if (!event) throw new NotFoundException(`Evento ${id} não encontrado`);
    return event;
  }

  create(dto: CreateEventDto) {
    const event = this.repo.create(dto);
    return this.repo.save(event);
  }

  async update(id: number, dto: UpdateEventDto) {
    const event = await this.findOne(id);
    Object.assign(event, dto);
    return this.repo.save(event);
  }

  async remove(id: number) {
    const event = await this.findOne(id);
    await this.repo.remove(event);
  }
}
