import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
config();

@Injectable()
export class ConfigService {
  private static get(name: string): string {
    const value = process.env[name];
    if (value === undefined) {
      throw new Error(`Environment variable '${name}' is missing`);
    }
    return value;
  }

  private static getNumber(name: string, fallback?: number): number {
    const value = process.env[name];
    if (value === undefined && fallback !== undefined) return fallback;
    const parsed = Number(value);
    if (Number.isNaN(parsed)) {
      throw new Error(`Environment variable '${name}' must be a number`);
    }
    return parsed;
  }

  public readonly NODE_ENV = ConfigService.get('NODE_ENV') || 'development';
  public readonly PORT = ConfigService.getNumber('PORT', 3000);
  public readonly MONGODB_URI = ConfigService.get('MONGODB_URI');
}
