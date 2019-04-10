## slidereact

Remember to Install Swiper through npm, use below command

npm install swiper --save

## React-Taxonomy-Picker
Follow these steps in your repository to make it work
**Note
1) Install pnpcommon
    npm install @pnp/common --save
      &
    npm install @pnp/logging @pnp/common @pnp/odata @pnp/sp @pnp/sp-taxonomy @pnp/sp-clientsvc --save
  **Note the the Step 2 is when you are trying to build the functionality from scratch, otherwise, its off no use
2) Write onit Function to return the Context

  public onInit(): Promise<void> {

    return super.onInit().then(_ => {
      pnpSetup({
        spfxContext: this.context
      });
    });
  }
**Note 
3) Install sp-office-ui-fabric-core
    npm i @microsoft/sp-office-ui-fabric-core
**Note
The below step is when you need to degrade the Office UI Fabric react version. 
4) npm i office-ui-fabric-react@5.124.0


gulp serve

gulp package-solution
gulp bundle --ship
gulp package-solution --ship


Also note that, the images size should be 324X368
### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
