import { IUser } from "./user";

export interface IRepository {
  id?: number;
  node_id?: string;
  name?: string;
  full_name?: string;
  private?: boolean;
  html_url?: string;
  description?: string;
  owner?: IUser;
  ssh_url?: string;
  language?: string;
}