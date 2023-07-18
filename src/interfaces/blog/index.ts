import { AdInterface } from 'interfaces/ad';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface BlogInterface {
  id?: string;
  title: string;
  content: string;
  image?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  ad?: AdInterface[];
  organization?: OrganizationInterface;
  _count?: {
    ad?: number;
  };
}

export interface BlogGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  image?: string;
  organization_id?: string;
}
