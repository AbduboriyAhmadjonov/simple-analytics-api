import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { VisitsService } from './visits.service.js';
import { CreateVisitDto } from './dto/create-visit.dto.js';

@Controller('visits')
export class VisitsController {
  /**
    GET /summary/daily
    GET /summary/top-referrers
    GET /summary/browser-usage
    POST /track
    DELETE /visits
   */
  constructor(private readonly visitsService: VisitsService) {}
  @Get('/summary/daily')
  getDailySummary() {
    return this.visitsService.getDailySummary();
  }

  @Get('/summary/top-referrers')
  getTopReferrers() {
    return this.visitsService.getTopReferrers();
  }

  @Get('/summary/browser-usage')
  getBrowserUsage() {
    return this.visitsService.getBrowserUsage();
  }

  @Post('/track')
  trackVisit(@Body() CreateVisitDto: CreateVisitDto) {
    return this.visitsService.trackVisit(CreateVisitDto);
  }

  @Delete('/visits')
  deleteAllVisits() {
    return this.visitsService.deleteAllVisits();
  }
}
