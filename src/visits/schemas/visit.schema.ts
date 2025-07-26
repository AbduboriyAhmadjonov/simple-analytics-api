import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VisitDocument = Visit & Document;

@Schema()
export class Visit {
  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  referrer: string;

  @Prop({ required: true })
  browser: string;

  @Prop({ required: true })
  timestamp: Date;
}

export const VisitSchema = SchemaFactory.createForClass(Visit);
