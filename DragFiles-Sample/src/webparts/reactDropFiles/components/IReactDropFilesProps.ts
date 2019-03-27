import { IWebPartContext } from "@microsoft/sp-webpart-base";

export interface IReactDropFilesProps {
  description: string;
  listName: string;
  digest:string;
  context: IWebPartContext;
  uploadFilesTo: string;
}
