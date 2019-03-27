import * as React from 'react';
import { render } from "react-dom";
import styles from './ReactDropFiles.module.scss';
import { IReactDropFilesProps } from './IReactDropFilesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPHttpClient, SPHttpClientResponse, SPHttpClientConfiguration, ISPHttpClientOptions } from '@microsoft/sp-http';
//import Dropzone from 'react-dropzone';
import Dropzonecomponent from 'react-dropzone-component/dist/react-dropzone';
require('../../reactDropFiles/filepicker.css');
require('../../reactDropFiles/dropzone.css');

export default class ReactDropFiles extends React.Component<IReactDropFilesProps, {}> {
  
  public render(): React.ReactElement<IReactDropFilesProps> {
    let _context = this.props.context;
    let _digest = this.props.digest;
    Dropzonecomponent.autoDiscover = false;
    let _listName = this.props.listName;
    let _fileUploadTo=this.props.uploadFilesTo;
    let _parent = this;
    let _webpartName = this.props.description;
    let myDropzone;
    let eventHandlers = {
      // This one receives the dropzone object as the first parameter
      // and can be used to additional work with the dropzone.js
      // object
      init: function(dz){       
       myDropzone=dz;
      },
      removedfile: function(file){    
        console.log(file);    
      },
      processing: function (file, xhr) {
        console.log(file);
        if(_fileUploadTo=="DocumentLibrary"){
          console.log('_fileUploadTo is true-'+_fileUploadTo);
          if (file != undefined || file != null) {
            let spOpts : ISPHttpClientOptions  = {
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              body: file        
            };
            var url = `${_context.pageContext.web.absoluteUrl}/_api/Web/Lists/getByTitle('${_listName}')/RootFolder/Files/Add(url='${file.name}', overwrite=true)`;
            _context.spHttpClient.post(url, SPHttpClient.configurations.v1, spOpts).then((response: SPHttpClientResponse) => {

              console.log(`Status code uploaded: ${response.status}`);
              console.log(`Status text: ${response.statusText}`);
              myDropzone.removeFile(file);
              response.json().then((responseJSON: JSON) => {
                console.log(responseJSON);
              });
            });
          }
        }
        //myDropzone.options.url = `${_context.pageContext.web.absoluteUrl}/_api/web/Lists/getbytitle('${_listName}')/rootfolder/files/add(overwrite=true,url='${file.name}')`;          
      },
      sending: function (file, xhr) {
        let _send = xhr.send;
        xhr.send = function () {
          _send.call(xhr, file);
        };
      },
      error:function(file,error,xhr){
        if(_fileUploadTo!="DocumentLibrary")
          alert(`File '${file.name}' is already exists, please rename your file or select another file.`);
        if(myDropzone)
          myDropzone.removeFile(file);
      }
     };
     var djsConfig = {
      headers: {
        "X-RequestDigest": _digest
      },
      addRemoveLinks:true
    };
    var componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.gif', '.pdf', '.docx', '.ppt', '.xls'],
      showFiletypeIcon: true,
      postUrl: '/uploadHandler'
  };
  //<h1>${escape(this.props.description)}</h1>
    return (
      <div>
        <h1>Use this Webpart to drag and drop files in SharePoint Document Library</h1>
        <Dropzonecomponent config={componentConfig} eventHandlers={eventHandlers} djsConfig={djsConfig}>Drop your files Here</Dropzonecomponent>
      </div>
    );
  }
}
