import { ObjectId, Document } from 'mongodb';

export interface ProvisionalMemberRegistrationStatus extends Document {
  id?: ObjectId;
  code: string;
  name?: string;
  description?: string;
}
