let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":null,"value":{}},"enableLwc":true,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCartFlexTableContainer_1_Vlocity","Id":"0Rb5i000001dC0zCAA","ManageableState":"unmanaged","MasterLabel":"cfCpqCartFlexTableContainer_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"selectableMode":"Multi","states":[{"actions":[],"childCards":["cpqCartFlexTable","cpqSpinner"],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-0-FlexCard-0","key":"element_element_block_0_0_childCardPreview_0_0","name":"FlexCard","parentElementKey":"element_block_0_0","property":{"cardName":"cpqCartFlexTable","cardNode":"{record.data}","isChildCardTrackingEnabled":false,"parentAttribute":{"cartId":"{Parent.cartId}","cartType":"shoppingCart","cartView":"summaryview","showSupplementalAction":"true"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Block-0-Action-1","key":"element_element_block_0_0_action_1_0","name":"Action","parentElementKey":"element_block_0_0","property":{"actionList":[{"actionIndex":0,"draggable":false,"isOpen":true,"key":"1656055806605-3w9g6gaxt","label":"Action","stateAction":{"eventName":"cpqutils_{recordId}","extraParams":{"cartId":"{Parent.cartId}","ipMethod":"CPQ_GetCartItems","lastRecordId":"{actions.nextproducts.remote.params.lastRecordId}","offerType":"Summary","pagesize":"10","utilMethod":"loadMoreFunctionality"},"hasExtraParams":true,"id":"flex-action-1657101633949","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event"}}],"buttonVariant":"outline-brand","card":"{card}","data-conditions":{"group":[{"field":"actions.nextproducts","hasMergeField":false,"id":"state-new-condition-7","operator":"!=","type":"custom","value":"undefined"},{"field":"load","hasMergeField":false,"id":"state-new-condition-14","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"\\{Label.CPQLoadMore}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"center","color":""}}}],"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-0-FlexCard-2","key":"element_element_block_0_0_childCardPreview_2_0","name":"FlexCard","parentElementKey":"element_block_0_0","property":{"cardName":"cpqSpinner","cardNode":"","data-conditions":{"group":[{"field":"load","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"parentAttribute":{"size":"medium"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":true,"label":"\\{Label.CPQProductsInCart} ({total})","record":"{record}","styles":{"label":{"color":"#181818"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-line-items_block slds-p-around_x-small ","container":{"class":"cpq__cart-line-items_block"},"customClass":"","elementStyleProperties":{"styles":{"label":{"color":"#181818"}}},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-line-items_block slds-p-around_x-small ","container":{"class":"cpq__cart-line-items_block"},"customClass":"","elementStyleProperties":{"styles":{"label":{"color":"#181818"}}},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[{"field":"total","hasMergeField":false,"id":"state-new-condition-7","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"NonZeroProducts","omniscripts":[],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"none","type":"around"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}},{"actions":[],"childCards":["cpqCartEmptyState"],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-0-FlexCard-0","key":"element_element_block_0_1_childCardPreview_0_1","name":"FlexCard","parentElementKey":"element_block_0_1","property":{"cardName":"cpqCartEmptyState","cardNode":"","isChildCardTrackingEnabled":true,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":true,"label":"\\{Label.CPQProductsInCart} (0)","record":"{record}","styles":{"label":{"color":"#181818"}}},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-line-items_block slds-p-around_x-small ","container":{"class":"cpq__cart-line-items_block"},"elementStyleProperties":{"styles":{"label":{"color":"#181818"}}},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-line-items_block slds-p-around_x-small ","container":{"class":"cpq__cart-line-items_block"},"elementStyleProperties":{"styles":{"label":{"color":"#181818"}}},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[{"field":"total","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"ZeroProducts","omniscripts":[],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"none","type":"around"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"cpqCartFlexTableContainer","Id":"0ko5i000000XxiNIAG","OmniUiCardKey":"cpqCartFlexTableContainer/Vlocity/1/1655983191868","OmniUiCardType":"Child"};
  export default definition