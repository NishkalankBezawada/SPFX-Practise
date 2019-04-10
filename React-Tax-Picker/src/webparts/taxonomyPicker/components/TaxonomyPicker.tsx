import * as React from 'react';
import styles from './TaxonomyPicker.module.scss';
import { ITaxonomyPickerProps } from './ITaxonomyPickerProps';
import { escape } from '@microsoft/sp-lodash-subset';

// Controls
import TermsPickerComponent, { ITaxonomyTerm } from './TermsPickerComponent';
import { DefaultButton, IButtonProps, Button } from 'office-ui-fabric-react/lib/Button';
import { Search } from '@pnp/sp';

export interface ITaxonomyPickerWebpartState {
  SingleSelectFieldTerms: ITaxonomyTerm[],
  MultiSelectFieldTerms: ITaxonomyTerm[]
}

/* Export ITaxonomyPickerWebpartState to use the props mentioned above*/
export default class TaxonomyPicker extends React.Component<ITaxonomyPickerProps, ITaxonomyPickerWebpartState> {
  public termstoreapplname: string = this.props.TermStoreApplication;
  public termsetName: string = this.props.TermSetName;
  public wpName: string = this.props.WebpartName;

  constructor(props, state: ITaxonomyPickerWebpartState) {
    super(props);

    this.state = {
      SingleSelectFieldTerms: [],
      MultiSelectFieldTerms: []

      // Supply array in the below format for a pre-populated control.
      //SingleSelectFieldTerms:[{name:"<Term-Label>", key="<Term-GUID>"}],
      //MultiSelectFieldTerms:[{name:"<Term-Label>", key="<Term-GUID>"}, {name:"<Term-Label>", key="<Term-GUID>"}]
    }

  }
  

  public render(): React.ReactElement<ITaxonomyPickerProps> {
    /*return (
      <div className={ styles.taxonomyPicker }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );*/
    return (
      <div>
        <div className={ styles.WebpartHeading }>{escape(this.props.WebpartName)}</div>
        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-lg12">
              <TermsPickerComponent IsMultiValue={false} TermSetId='<TERM-SET-ID>' LabelText='Terms 1 (You can only choose one term)' SelectedTerms={this.state.SingleSelectFieldTerms} />
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-lg12">
              <TermsPickerComponent IsMultiValue={true} TermSetId='<TERM-SET-ID>' LabelText='Terms 2 (You can choose multiple terms)' SelectedTerms={this.state.MultiSelectFieldTerms} />
            </div>
          </div>
        </div>
        <div>
        </div>
        <br />
        <br />
        <DefaultButton
          primary={true}
          text="Show selected values"
          onClick={this._showTaxonomyControlValues.bind(this)}
        />
      </div>
    );
  }
  
  private _showTaxonomyControlValues() {

    if (this.state.SingleSelectFieldTerms.length > 0) {
      alert("Single-Select term Label and GUID : \n" + this.state.SingleSelectFieldTerms[0].name + " - " + this.state.SingleSelectFieldTerms[0].key);
    }
    if (this.state.MultiSelectFieldTerms.length > 0) {
      let multiSelectValues = this.state.MultiSelectFieldTerms.map(trm => {
        return trm.name + " - " + trm.key
      }).join(' | ');

      alert("Multi-select term Label and GUID : \n" + multiSelectValues);
      //Search(multiSelectValues);
    }
  }

  public search(termseperated){

  }
}

