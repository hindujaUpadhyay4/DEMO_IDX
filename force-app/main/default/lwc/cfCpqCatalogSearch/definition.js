let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\"options\": [{\"name\":\"\"}], \"value\": \"\", \"selectedCatalogsForPills\": [] }","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1626637993059-p8x4y54kx","label":"Action","stateAction":{"eventName":"cpqutils_{recordId}","extraParams":{"ContextId":"{recordId}","cartId":"{recordId}","includeAllCatalogs":"true","ipMethod":"CPQ_GetCatalogs","searchCatalog":"yes","utilMethod":"catalogSearch","value":"{action.value}"},"hasExtraParams":true,"id":"flex-action-1626163659599","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"multiselectcataloglist","displayLabel":"multiselectcataloglist:basetypeaheadinputchange","element":"action","eventLabel":"pubsub","eventname":"basetypeaheadinputchange","eventtype":"pubsub","key":"event-0","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1626637993059-ifbkfos7o","label":"productlistDataSet","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"value","fieldValue":"{action.name}"},{"fieldName":"options","fieldValue":"{action.value}"}],"id":"flex-action-1623418971062","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cataloglist","element":"action","eventLabel":"pubsub","eventname":"cataloglist","eventtype":"pubsub","key":"event-1","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1626637993059-7u7p4irnb","label":"Action","stateAction":{"eventName":"cpqutils_{recordId}","extraParams":{"cartId":"{recordId}","type":"multiSelect","utilMethod":"catalogSearch","value":"{action.event.detail}"},"hasExtraParams":true,"id":"flex-action-1626163748804","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"multiselectcataloglist","displayLabel":"multiselectcataloglist:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-2","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1626637993059-tz7ds43ov","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"selectedCatalogsForPills","fieldValue":"{action.catalogs}"},{"fieldName":"value","fieldValue":"{action.typedQueryValue}"}],"id":"flex-action-1626638017383","subType":"PubSub","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:selectedcatalogsevent","element":"action","eventLabel":"pubsub","eventname":"selectedcatalogsevent","eventtype":"pubsub","key":"event-3","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCatalogSearch_1_Vlocity","Id":"0RbDp000000CVyoCAY","ManageableState":"unmanaged","MasterLabel":"cfCpqCatalogSearch_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","states":[{"actions":[],"childCards":["cpqPills"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"Typeahead-0","name":"Typeahead","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":0,"label":"options","value":"{options}"},{"id":1,"label":"placeholder","value":" {Label.CPQSearch}"},{"id":2,"label":"iconNameLeft","value":"utility:search"},{"id":3,"label":"name","value":"multiselectcataloglist"},{"id":4,"label":"value","value":"{value}"}],"label":"{Label.CPQCategory}","name":"multiselectcataloglist","type":"typeahead","value":"{value}"},"record":"{record}","type":"typeahead"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"cpqPills","cardNode":"{record.selectedCatalogsForPills}","isChildCardTrackingEnabled":false,"parentAttribute":{"onRemoveChannelName":"cpqutils_{recordId}","onRemoveEventName":"cpq_ui_event","utilMethod":"catalogSearch"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"margin-top","container":{"class":""},"customClass":"margin-top","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"margin-top","container":{"class":""},"customClass":"margin-top","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"none","type":"around"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"cpqCatalogSearch","Id":"a5aDp000000LxWJAA4","vlocity_cmt__GlobalKey__c":"cpqCatalogSearch/Vlocity/1/1623333126756"};
  export default definition