import { ICommit } from "./commit";

export interface IBranch {
  name: string;
  commit: ICommit;
  protected: boolean;
}