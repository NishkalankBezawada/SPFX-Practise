import { ISlidereactWebPartProps } from '../SlidereactWebPart';
import { ListItem } from '../SlidereactWebPart';
import { IListServce } from '../SlidereactWebPart';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface ISlidereactProps {
  //description: string;
  swiperOptions: ISlidereactWebPartProps;
  //listService:  IListServce;
  spcontext: WebPartContext;
  siteurl: string
}
