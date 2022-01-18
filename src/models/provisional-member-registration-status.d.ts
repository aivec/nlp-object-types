import { ObjectId } from 'mongodb';

export interface ProvisionalMemberRegistrationStatus {
  id?: ObjectId;
  code: string;
  name?: string;
  description?: string;
}
