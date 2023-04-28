export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"esm-238-sourceorg041222@industryapps.com","userId":"005Dp000002SV81AAT","userCurrencyCode":"USD","timeStamp":"2022-05-24T08:50:12.749Z","sOmniScriptId":"a33Dp000000c54fIAC","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"scrollBehavior":"auto","saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":"","itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":"","itemsKey":"knowledgeItems","id":"vlcKnowledge","dispOutsideOmni":false}],"message":{},"mergeSavedData":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":false,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":false,"allowCancel":true},"prefillJSON":"{}","lwcId":"c326dd4a-328b-f93e-7a61-ea593ef022cc","labelMap":{"Batch Success Message":"Success:Batch Success Message","ServiceIdentifier":"Number Assignment:ServiceIdentifier","ConnectDate":"Installation:ConnectDate","BillingAccount":"Payment:BillingAccount","Success":"Success","UpdateCartItemsBatch":"UpdateCartItemsBatch","UpdateCartItems":"UpdateCartItems","Number Assignment":"Number Assignment","Installation":"Installation","Payment":"Payment","GetRecordTypeForBillingAccount":"GetRecordTypeForBillingAccount","AccountRecordType":"AccountRecordType"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[true,false],"show":null,"pubsub":false,"message":{},"label":null,"elementValueMap":{"SObjectType":"Account","DeveloperName":"Billing","AccountId":"%AccountId%"},"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"AccountRecordType","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"AccountRecordType","lwcId":"lwc0"},{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[true,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":null,"inProgressMessage":"In Progress","ignoreCache":false,"failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"dataRaptor Input Parameters":[{"inputParam":"DeveloperName","element":"DeveloperName"},{"inputParam":"SObjectType","element":"SObjectType"}],"controlWidth":12,"businessEvent":"","businessCategory":"","bundle":"GetRecordTypeByObjectType","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"GetRecordTypeForBillingAccount","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"GetRecordTypeForBillingAccount","lwcId":"lwc1"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":null,"saveMessage":"","saveLabel":"","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"","nextWidth":3,"nextLabel":"Next","message":{},"label":"Payment","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"Payment":"","BillingAccount":""},"aggElements":{}},"offSet":0,"name":"Payment","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Lookup","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"placeholder":"","label":"Search Billing Account","inputWidth":12,"hide":false,"helpText":"","help":false,"errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"defaultValue":null,"dataSource":{"type":"SObject","mapItems":{"phase2MapItems":[{"InterfaceFieldAPIName__c":"BillingAccount:Id","DomainObjectFieldAPIName__c":"name","DomainObjectCreationOrder__c":1,"DomainObjectAPIName__c":"JSON"},{"InterfaceFieldAPIName__c":"BillingAccount:Name","DomainObjectFieldAPIName__c":"value","DomainObjectCreationOrder__c":1,"DomainObjectAPIName__c":"JSON"}],"phase1MapItems":[{"InterfaceObjectName__c":"Account","InterfaceObjectLookupOrder__c":1,"InterfaceFieldAPIName__c":"RecordTypeId","FilterValue__c":"recId","FilterOperator__c":"=","DomainObjectFieldAPIName__c":"BillingAccount"},{"InterfaceObjectName__c":"Account","InterfaceObjectLookupOrder__c":1,"InterfaceFieldAPIName__c":"ParentId","FilterValue__c":"accId","FilterOperator__c":"=","DomainObjectFieldAPIName__c":"BillingAccount"}],"inputParameters":[{"inputParam":"accId","element":"AccountId"},{"inputParam":"recId","element":"RecordTypeId"}]}},"controlWidth":12,"conditionType":"Hide if False","clearValue":true,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"BillingAccount","level":1,"JSONPath":"Payment:BillingAccount","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bLookup":true,"lwcId":"lwc20-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"Payment","lwcId":"lwc2"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Next","message":{},"label":"Installation","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"Installation":"","ConnectDate":""},"aggElements":{}},"offSet":0,"name":"Installation","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Date","rootIndex":3,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"modelDateFormat":"yyyy-MM-dd","minDate":"","maxDate":"","label":"Connect Date","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"dateType":"string","dateFormat":"MM-dd-yyyy","controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"ConnectDate","level":1,"JSONPath":"Installation:ConnectDate","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bDate":true,"lwcId":"lwc30-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"Installation","lwcId":"lwc3"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Save","message":{},"label":"NumberAssignment","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"Number Assignment":"","ServiceIdentifier":""},"aggElements":{}},"offSet":0,"name":"Number Assignment","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","placeholder":"","pattern":"","minLength":0,"maxLength":80,"mask":"","label":"Service Identifier","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"ServiceIdentifier","level":1,"JSONPath":"Number Assignment:ServiceIdentifier","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc40-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"Number Assignment","lwcId":"lwc4"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"group":{"rules":[{"field":"BillingAccount","data":null,"condition":"<>"},{"field":"Installation:ConnectDate","data":null,"condition":"<>"},{"field":"ServiceIdentifier","data":null,"condition":"<>"}],"operator":"OR"}},{"field":"RecordCount","data":"10","condition":"<="}],"operator":"AND"}},"sendOnlyExtraPayload":true,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"updateCartItemsByField","remoteClass":"B2BCmexAppHandler","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":null,"inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{"objectType":"QuoteLineItem","fieldValues":{"vlocity_cmt__ServiceIdentifier__c":"%ServiceIdentifier%","vlocity_cmt__ConnectDate__c":"%Installation:ConnectDate%","vlocity_cmt__BillingAccountId__c":"%BillingAccount%"},"cartItemIds":"%CartItemIds%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"controlWidth":12,"conditionType":"Hide if False","businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"UpdateCartItems","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"UpdateCartItems","lwcId":"lwc5"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"group":{"rules":[{"field":"BillingAccount","data":null,"condition":"<>"},{"field":"Installation:ConnectDate","data":null,"condition":"<>"},{"field":"ServiceIdentifier","data":null,"condition":"<>"}],"operator":"OR"}},{"field":"RecordCount","data":"10","condition":">"}],"operator":"AND"}},"sendOnlyExtraPayload":true,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"updateCartItemsByFieldInBatch","remoteClass":"B2BCmexAppHandler","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":null,"inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{"objectType":"QuoteLineItem","fieldValues":{"vlocity_cmt__ServiceIdentifier__c":"%ServiceIdentifier%","vlocity_cmt__ConnectDate__c":"%Installation:ConnectDate%","vlocity_cmt__BillingAccountId__c":"%BillingAccount%"},"cartItemIds":"%CartItemIds%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"controlWidth":12,"conditionType":"Hide if False","businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"UpdateCartItemsBatch","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"UpdateCartItemsBatch","lwcId":"lwc6"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":"0","previousLabel":"","nextWidth":"0","nextLabel":"","message":{},"label":"Success","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"Success":""},"aggElements":{}},"offSet":0,"name":"Success","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text Block","rootIndex":7,"response":null,"propSetMap":{"textKey":"","text":"<p>We have submitted records to updated. Please refresh the screen, or check the Quote after sometime.</p>","show":{"group":{"rules":[{"field":"RecordCount","data":"10","condition":">"}],"operator":"AND"}},"sanitize":false,"label":"TextBlock1","dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"Batch Success Message","level":1,"JSONPath":"Success:Batch Success Message","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc70-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"Success","lwcId":"lwc7"}],"bReusable":false,"bpVersion":1,"bpType":"ESM","bpSubType":"QuoteEnrichForAll","bpLang":"English","bHasAttachment":false,"lwcVarMap":{}};