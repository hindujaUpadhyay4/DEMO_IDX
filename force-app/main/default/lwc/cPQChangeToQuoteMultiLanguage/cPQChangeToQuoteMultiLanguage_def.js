export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"esm-238-sourceorg041222@industryapps.com","userId":"005Dp000002SV81AAT","userCurrencyCode":"USD","timeStamp":"2022-05-24T12:22:00.859Z","sOmniScriptId":"a33Dp000000c550IAS","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":true,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"scrollBehavior":"auto","saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent|1:label":null,"persistentComponent|0:label":null,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"itemsKey":"knowledgeItems","id":"vlcKnowledge","dispOutsideOmni":false}],"message":{},"mergeSavedData":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":false,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":true,"allowCancel":true},"prefillJSON":"{}","lwcId":"7522fbae-6195-2ae4-0712-df01b01284e2","labelMap":{"QuoteNavigateAction":"QuoteNavigateAction","ChangeToQuoteRemoteAction":"ChangeToQuoteRemoteAction","SetDuplicateAssetsErrorMessage":"SetDuplicateAssetsErrorMessage","GetAssetIdsToProcess":"GetAssetIdsToProcess","GetExistingAssetsFromQuoteLineItem":"GetExistingAssetsFromQuoteLineItem"},"labelKeyMap":{"New":"New","Next":"Next","Previous":"Previous","Done":"Done","changeToQuote":"Change To Quote","Continue":"Continue","GoBack":"Go Back","InProgress":"In Progress","CPQPriceListMismatchError":"The selected Price List can't be used to price the Assets. Select a different Price List."},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"DataRaptor Turbo Action","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"QuoteId","data":null,"condition":"<>"}],"operator":"AND"}},"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":null,"inProgressMessage":null,"ignoreCache":false,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"AssetIds","element":"AssetIds"},{"inputParam":"QuoteId","element":"QuoteId"}],"controlWidth":12,"bundle":"GetExistingAssetsFromQuoteLineItem","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"GetExistingAssetsFromQuoteLineItem","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bDataRaptorTurboAction":true,"JSONPath":"GetExistingAssetsFromQuoteLineItem","lwcId":"lwc0"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"existingAssetIds","data":null,"condition":"<>"}],"operator":"AND"}},"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"getFilteredAssetIdsToProcess","remoteClass":"MultiServiceAppHandler","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":null,"inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"existingAssetIds":"%existingAssetIds%","assetIds":"%AssetIds%"},"errorMessage:default":null,"errorMessage":{"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"GetAssetIdsToProcess","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"GetAssetIdsToProcess","lwcId":"lwc1"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"message","data":null,"condition":"<>"}],"operator":"AND"}},"pubsub":false,"message":{},"label":null,"elementValueMap":{"duplicateAssetsErrorMessage":"%message%"},"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"SetDuplicateAssetsErrorMessage","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetDuplicateAssetsErrorMessage","lwcId":"lwc2"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"None","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"AssetIds","data":null,"condition":"<>"}],"operator":"AND"}},"sendOnlyExtraPayload":false,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"changeToQuote","remoteClass":"OmniChangeToQuoteWrapper","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"changeToQuote","inProgressMessage":"InProgress","failureNextLabel":"Continue","failureGoBackLabel":"GoBack","failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"quoteId":"%QuoteId%","listTypeAsset":"all","isAssetsFromMultiAccount":true,"assetsData":"%assetsData%","assetIdList":"%AssetIds%","accountId":"%ContextId%"},"errorMessage:default":"CPQPriceListMismatchError","errorMessage":{"default":"CPQPriceListMismatchError","custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"ChangeToQuoteRemoteAction","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"ChangeToQuoteRemoteAction","lwcId":"lwc3"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"Submit","targetUrl":"/lightning/app/c__Industries_CPQ/r/%QuoteId%/view?duplicateAssetsErrorMessage=%duplicateAssetsErrorMessage%","targetType":"Web Page","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":null,"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"QuoteNavigateAction","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"QuoteNavigateAction","lwcId":"lwc4"}],"bReusable":true,"bpVersion":1,"bpType":"CPQ","bpSubType":"ChangeToQuote","bpLang":"Multi-Language","bHasAttachment":false,"lwcVarMap":{}};