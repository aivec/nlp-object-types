import { ObjectId, Document } from 'mongodb';

/**
 * 組織種類
 *
 * @see https://aivec.sharepoint.com/:x:/s/NLP_712/EXIsY5C2HVNAgGs9ge40Q5UBjQUNWisKEov2UnTY2r4kEw?e=0JiXNy
 * - Excel: CRUD図_
 * - Sheet: `CRUD図`
 * - Cell: `D49`
 *
 * @see https://aivec.sharepoint.com/:x:/s/NLP_712/EXVLE6golfFLqjA2w0nev84B2Tww0C1PijTMfvW_9IhMrA?e=h1Pwim
 * - Excel: コード定義一覧(NLP)
 * - Sheet: `組織種類`
 */
export interface OrganizationType extends Document {
  id?: ObjectId;
  code: string;
  name?: string;
  description?: string;
}
