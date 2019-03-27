import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as loader from '@microsoft/sp-loader';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneDropdown, IWebPartContext } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { IDigestCache, DigestCache } from '@microsoft/sp-http';
import * as strings from 'ReactDropFilesWebPartStrings';
import ReactDropFiles from './components/ReactDropFiles';
import { IReactDropFilesProps } from './components/IReactDropFilesProps';
//import { PropertyPaneDropdown } from '@microsoft/sp-webpart-base/lib/propertyPane/propertyPaneFields/propertyPaneDropdown/PropertyPaneDropdown';
//require("filepicker.css");
//require("./dropzone.css");
//require("..reactDropFiles/filepicker.css");
export interface IReactDropFilesWebPartProps {
  description: string;
  listName: string;
  uploadFilesTo:string;
}

export default class ReactDropFilesWebPart extends BaseClientSideWebPart<IReactDropFilesWebPartProps> {
  public digest:string="";
  public constructor(context:IWebPartContext){
    super();    
    loader.SPComponentLoader.loadCss('https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css');
  }
  /*protected onInit(): Promise<void> {
    return new Promise<void>((resolve: () => void, reject: (error: any) => void): void => {
      const digestCache: IDigestCache = this.context.serviceScope.consume(DigestCache.serviceKey);
      digestCache.fetchDigest(this.context.pageContext.web.serverRelativeUrl).then((digest: string): void => {
        // use the digest here
        this.digest=digest;
        resolve();
      });
    });
  }*/
  public render(): void {
    const element: React.ReactElement<IReactDropFilesProps > = React.createElement(
      ReactDropFiles,
      {
        listName: this.properties.listName,
        digest: this.digest,
        context: this.context,
        description: this.properties.description,
        uploadFilesTo:this.properties.uploadFilesTo
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
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('listName', {
                  label: 'List Name'
                }),
                PropertyPaneDropdown('uploadFilesTo',{
                  label:'Upload files to',
                  options:[{key:'DocumentLibrary',text:'Document Library'},
                           {key:'List',text:'As item attachments'} ]
                }),
                PropertyPaneTextField('Description', {
                  label: strings.DescriptionFieldLabel
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
