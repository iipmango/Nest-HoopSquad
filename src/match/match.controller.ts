import { Controller, Get, Headers } from '@nestjs/common';
import { MatchService } from './match.service';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get()
  allMatch() {
    this.matchService.allMatch();
  }
}
