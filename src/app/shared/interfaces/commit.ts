import { IUser } from "./user";

export interface ICommit {
  sha?: string;
  node_id?: string;
  html_url?: string;
  commit?: ICommitDetail;
  author?: IUser;
}

export interface ICommitDetail {
  author?: IUser;
  committer?: IUser;
  message?: string;
}
