import { FlexCardMixin } from "vlocity_cmt/flexCardMixin";
    import { CurrentPageReference } from 'lightning/navigation';
    import {interpolateWithRegex, interpolateKeyValue, loadCssFromStaticResource } from "vlocity_cmt/flexCardUtility";
    
          import { LightningElement, api, track, wire } from "lwc";
          import pubsub from "vlocity_cmt/pubsub";
          import { getRecord } from "lightning/uiRecordApi";
          
          import data from "./definition";
          
          import styleDef from "./styleDefinition";
              
          export default class cfESM_SelfService_CreateOrder extends FlexCardMixin(LightningElement){
              currentPageReference;        
              @wire(CurrentPageReference)
              setCurrentPageReference(currentPageReference) {
                this.currentPageReference = currentPageReference;
              }
              @api debug;
              @api recordId;
              @api objectApiName;
              
              @track record;
              @track _sessionApiVars = {};
        @api set cfAssetPageApi(val) {
          if(typeof val !== "undefined") {
            this._sessionApiVars["AssetPageApi"] = val;
          }
        } get cfAssetPageApi() {
          return this._sessionApiVars["AssetPageApi"] || "Assets__c";
        }
      
              @track Label={CMEXSelfServiceCreateOrderAssetsBtn:"Go to Assets",
        CMEXSelfServiceCreateOrderFromExistingAssetsInfo:"Add, remove, or modify asset characteristics.",
        CMEXSelfServiceCreateOrderFromExistingAssets:"Create an Order from Existing Assets",
        CMEXSelfServiceCreateOrderExistingAssetsTab:"Existing Asset",
        CmexSelfServiceWelcomeText:"Welcome to the Enterprise Self-Service Portal.",
        CmexSelfServiceWelcomeTag:"Welcome"
        };
              pubsubEvent = [];
              customEvent = [];
              
              connectedCallback() {
                super.connectedCallback();
                this.setStyleDefinition(styleDef);
                data.Session = {} //reinitialize on reload
                
                
                this.customLabels = this.Label;
                      
                this.setDefinition(data);
 this.registerEvents();
                
                
              }
              
              disconnectedCallback(){
                super.disconnectedCallback();
                    
                    

                  this.unregisterEvents();
              }

              registerEvents() {
                
            this.customEventName0 = interpolateWithRegex(`esm_selfservice_user_info`,this._allMergeFields,this._regexPattern,"noparse");
            this.customEvent[0] = this.handleEventAction.bind(this, data.events[0],0);

            this.template.addEventListener(this.customEventName0,this.customEvent[0]);

          
              }

              unregisterEvents(){
                
            this.template.removeEventListener(this.customEventName0,this.customEvent[0]);

              }
            
              renderedCallback() {
                super.renderedCallback();
                
              }
          }