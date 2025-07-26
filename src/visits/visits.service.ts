import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Visit, VisitDocument } from './schemas/visit.schema.js';
import { Model } from 'mongoose';
import { CreateVisitDto } from './dto/create-visit.dto.js';

@Injectable()
export class VisitsService {
  constructor(
    @InjectModel(Visit.name) private readonly visitModel: Model<VisitDocument>
  ) {}

  async getDailySummary(): Promise<{ date: string; visits: number }[]> {
    try {
      const result = await this.visitModel.aggregate([
        {
          $group: {
            _id: {
              $dateToString: { format: '%Y-%m-%d', date: '$timestamp' },
            },
            visits: { $sum: 1 },
          },
        },
        { $sort: { _id: -1 } },
        { $limit: 7 },
      ]);

      if (!result || result.length === 0) {
        return [];
      }

      return result.map((r) => ({
        date: r._id,
        visits: r.visits,
      }));
    } catch (error) {
      console.error('Error fetching daily summary:', error);
      throw new Error('Failed to fetch daily summary');
    }
  }

  async getTopReferrers(): Promise<string> {
    const visits = await this.visitModel.find({}).exec();
    return JSON.stringify(visits);
  }

  async getBrowserUsage(): Promise<string> {
    const visits = await this.visitModel.find({}).exec();
    return JSON.stringify(visits);
  }

  async trackVisit(dto: CreateVisitDto): Promise<string> {
    const visit = new this.visitModel(dto);
    try {
      await visit.save();
      return JSON.stringify(visit);
    } catch (error) {
      return JSON.stringify({ error: 'Failed to track visit' });
    }
  }

  async deleteAllVisits(): Promise<string> {
    await this.visitModel.deleteMany({}).exec();
    return JSON.stringify({ message: 'All visits deleted' });
  }
}
