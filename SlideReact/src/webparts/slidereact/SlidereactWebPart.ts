import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { 
  BaseClientSideWebPart,
  PropertyPaneToggle

} from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { SPHttpClient } from '@microsoft/sp-http';
import * as strings from 'SlidereactWebPartStrings';
import Slidereact from './components/Slidereact';
import { ISlidereactProps } from './components/ISlidereactProps';
import {realdata} from './services/Mock';

export class ListItem {

  public title: string;
  public description:string;
  public imageUrl: string;
}

export interface ISlidereactWebPartProps {
  description: string;
  enableNavigation: boolean;
  enablePagination: boolean;
  enableAutoplay: boolean;
  delayAutoplay: number;
  disableAutoplayOnInteraction: boolean;
  slidesPerView: string;
  slidesPerGroup: string;
  spaceBetweenSlides: string;
  enableGrabCursor: boolean;
  enableLoop: boolean;
  listItems : string;
}

export default class SlidereactWebPart extends BaseClientSideWebPart<ISlidereactWebPartProps> {
  public listretrievedItems = [];
  public render(): void {
    debugger;
    this.context.statusRenderer.displayLoadingIndicator(this.domElement,'document');
    debugger;
        //return response.json();
        const element: React.ReactElement<ISlidereactProps > = React.createElement(
          Slidereact,
          {
            swiperOptions: this.properties,
            //listService : response.json,
            spcontext: this.context,
            siteurl: this.context.pageContext.web.absoluteUrl
          }
        );
    
        ReactDom.render(element, this.domElement);
    
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Swiper Options'
          },
          displayGroupsAsAccordion: true,
          groups: [
            {
              groupName: strings.GeneralGroupName,
              groupFields: [
                PropertyPaneToggle('enableNavigation', {
                  label: strings.EnableNavigation
                }),
                PropertyPaneToggle('enablePagination', {
                  label: strings.EnablePagination,
                  checked: true
                }),
                PropertyPaneTextField('slidesPerView', {
                  label: strings.SlidesPerWiew,
                  value: '5'
                })
              ]
            },
            {
              groupName: strings.AutoplayGroupName,
              groupFields: [
                PropertyPaneToggle('enableAutoplay', {
                  label: strings.EnableAutoplay
                }),
                PropertyPaneTextField('delayAutoplay', {
                  label: strings.DelayAutoplay,
                  description: strings.Miliseconds,
                  value: '2500',
                  disabled: !this.properties.enableAutoplay
                }),
                PropertyPaneToggle('disableAutoplayOnInteraction', {
                  label: strings.DisableAutoplayOnInteraction,
                  disabled: !this.properties.enableAutoplay
                })
              ],
              isCollapsed: true
            },
            {
              groupName: strings.AdvancedGroupName,
              groupFields: [
                PropertyPaneTextField('slidesPerGroup', {
                  label: strings.SlidesPerGroup,
                  value: '5'
                }),
                PropertyPaneTextField('spaceBetweenSlides', {
                  label: strings.SpaceBetweenSlides,
                  description: strings.InPixels,
                  value: '5'
                }),
                PropertyPaneToggle('enableGrabCursor', {
                  label: strings.EnableGrabCursor
                }),
                PropertyPaneToggle('enableLoop', {
                  label: strings.EnableLoop
                })
              ],
              isCollapsed: true
            }
          ]
        }
      ]
    };
  }
  public getItems() : any{
    this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + `/_api/web/lists/getbytitle('ImageSources')/items`, SPHttpClient.configurations.v1)
      .then((response)=> {
        debugger;
            return response.json();
      });
  }
}

export interface IListServce {
  getItems(): Promise<Array<ListItem>>;
}

