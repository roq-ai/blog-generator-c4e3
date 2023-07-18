import { BlogInterface } from 'interfaces/blog';
import { GetQueryInterface } from 'interfaces';

export interface AdInterface {
  id?: string;
  title: string;
  content: string;
  keywords: string;
  blog_id?: string;
  created_at?: any;
  updated_at?: any;

  blog?: BlogInterface;
  _count?: {};
}

export interface AdGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  keywords?: string;
  blog_id?: string;
}
