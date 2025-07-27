
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { VisitsService } from './visits.service.js';
import { CreateVisitDto } from './dto/create-visit.dto.js';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Visits')
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
  @ApiOperation({ summary: 'Get daily summary', description: 'Returns the number of visits per day for the last 7 days.' })
  @ApiResponse({ status: 200, description: 'Daily summary returned successfully.', schema: { example: [{ date: '2025-07-28', visits: 10 }] } })
  getDailySummary() {
    return this.visitsService.getDailySummary();
  }


  @Get('/summary/top-referrers')
  @ApiOperation({ summary: 'Get top referrers', description: 'Returns the top referrers.' })
  @ApiResponse({ status: 200, description: 'Top referrers returned successfully.', schema: { example: [{ referrer: 'https://google.com', count: 5 }] } })
  getTopReferrers() {
    return this.visitsService.getTopReferrers();
  }


  @Get('/summary/browser-usage')
  @ApiOperation({ summary: 'Get browser usage', description: 'Returns browser usage statistics for the last 7 days.' })
  @ApiResponse({ status: 200, description: 'Browser usage returned successfully.', schema: { example: [{ name: 'Chrome', visits: 7 }] } })
  getBrowserUsage() {
    return this.visitsService.getBrowserUsage();
  }


  @Post('/track')
  @ApiOperation({ summary: 'Track a visit', description: 'Tracks a new visit.' })
  @ApiBody({ type: CreateVisitDto })
  @ApiResponse({ status: 201, description: 'Visit tracked successfully.', schema: { example: '{ "url": "https://example.com", "referrer": "https://google.com", "browser": "Chrome" }' } })
  trackVisit(@Body() CreateVisitDto: CreateVisitDto) {
    return this.visitsService.trackVisit(CreateVisitDto);
  }


  @Delete('/visits')
  @ApiOperation({ summary: 'Delete all visits', description: 'Deletes all visit records.' })
  @ApiResponse({ status: 200, description: 'All visits deleted.', schema: { example: '{ "message": "All visits deleted" }' } })
  deleteAllVisits() {
    return this.visitsService.deleteAllVisits();
  }
}
