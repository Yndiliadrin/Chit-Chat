import { Controller, Get } from '@nestjs/common';

@Controller('room')
export class RoomController {
  @Get()
  getAll() {
    return 'Return all room';
  }
}
