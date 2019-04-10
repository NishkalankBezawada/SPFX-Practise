import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'TaxonomyPickerWebPartStrings';
import TaxonomyPicker from './components/TaxonomyPicker';
import { ITaxonomyPickerProps } from './components/ITaxonomyPickerProps';
//Added By me after installing npm install @pnp/common --save
import { setup as pnpSetup } from "@pnp/common";

export interface ITaxonomyPickerWebPartProps {
  description: string;
  WebpartName: string;
  TermStoreApplication: string;
  TermSetName: string;
}

export default class TaxonomyPickerWebPart extends BaseClientSideWebPart<ITaxonomyPickerWebPartProps> {

  //Add by me
  public onInit(): Promise<void> {

    return super.onInit().then(_ => {
      pnpSetup({
        spfxContext: this.context
      });
    });
  }
  //Ends
  
  public render(): void {
    const element: React.ReactElement<ITaxonomyPickerProps > = React.createElement(
      TaxonomyPicker,
      {
        description: this.properties.description,
        WebpartName: this.properties.WebpartName,
        TermStoreApplication: this.properties.TermStoreApplication,
        TermSetName: this.properties.TermSetName
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('WebpartName', {
                  label: "Webpart Name"
                }),
                PropertyPaneTextField('TermStoreApplication', {
                  label: "TermStoreApplication"
                }), //TermSetName: string;
                PropertyPaneTextField('TermSetName', {
                  label: "TermSetName"
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
