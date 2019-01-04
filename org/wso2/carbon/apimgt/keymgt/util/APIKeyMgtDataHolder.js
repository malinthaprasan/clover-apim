var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":172,"id":63636,"methods":[{"el":53,"sc":5,"sl":51},{"el":57,"sc":5,"sl":55},{"el":62,"sc":5,"sl":60},{"el":66,"sc":5,"sl":64},{"el":70,"sc":5,"sl":68},{"el":74,"sc":5,"sl":72},{"el":78,"sc":5,"sl":76},{"el":82,"sc":5,"sl":80},{"el":86,"sc":5,"sl":84},{"el":90,"sc":5,"sl":88},{"el":133,"sc":5,"sl":94},{"el":141,"sc":5,"sl":135},{"el":145,"sc":5,"sl":143},{"el":150,"sc":5,"sl":148},{"el":154,"sc":5,"sl":152},{"el":163,"sc":5,"sl":161},{"el":167,"sc":5,"sl":165},{"el":171,"sc":5,"sl":169}],"name":"APIKeyMgtDataHolder","sl":36}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":76},{"sl":152}],"name":"testAPIStateChangeAndRejectWorkflow","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_102":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testInvokeGETResource","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_103":{"methods":[{"sl":51}],"name":"testApiInvocation","pass":true,"statements":[{"sl":52}]},"test_105":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testRefreshTokenAPITestCase","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_107":{"methods":[{"sl":76}],"name":"testEnvironment","pass":true,"statements":[{"sl":77}]},"test_109":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":148},{"sl":152}],"name":"testSpecificUserJWTClaims","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":149},{"sl":153}]},"test_111":{"methods":[{"sl":76},{"sl":152}],"name":"testApplicationCreation","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_112":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testTokenAPITestCase","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_114":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testInvokeAPIBeforeChangeAPILifecycleToRetired","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_116":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":148},{"sl":152}],"name":"testEnableJWTAndClaims","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":149},{"sl":153}]},"test_118":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":148},{"sl":152}],"name":"testEnableJWTAndClaims","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":149},{"sl":153}]},"test_119":{"methods":[{"sl":51},{"sl":76},{"sl":152}],"name":"testNewAPIInvokeAfterImport","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":153}]},"test_122":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testInvokeGETResourceWithSecuredEndPointPasswordOnlyNumbersAndLetters","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_123":{"methods":[{"sl":51},{"sl":143}],"name":"testImplicit","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_124":{"methods":[{"sl":51},{"sl":143}],"name":"testAPIInvocationAfterAddingDynamicEndpoint","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_126":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":148},{"sl":152}],"name":"testEnableJWTAndClaims","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":149},{"sl":153}]},"test_13":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testHttpPatchSupport","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_136":{"methods":[{"sl":76}],"name":"testUpdateGrantTypesAndCallback","pass":true,"statements":[{"sl":77}]},"test_139":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":148},{"sl":152}],"name":"testAPIAccessWhenJWTCachingEnabledTestCase","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":149},{"sl":153}]},"test_146":{"methods":[{"sl":76},{"sl":152}],"name":"testApplicationCreation","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_147":{"methods":[{"sl":76},{"sl":152}],"name":"testTokenEqualityBeforeExpiration","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_15":{"methods":[{"sl":76},{"sl":152}],"name":"testJWTTokenAPITestCase","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_152":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":148},{"sl":152}],"name":"testSpecificUserJWTClaims","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":149},{"sl":153}]},"test_154":{"methods":[{"sl":76},{"sl":152}],"name":"callBackUrlUpdateTestCase","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_160":{"methods":[{"sl":76}],"name":"testSubscription","pass":true,"statements":[{"sl":77}]},"test_161":{"methods":[{"sl":76},{"sl":143},{"sl":152}],"name":"testWebSocketAPIInvocation","pass":true,"statements":[{"sl":77},{"sl":144},{"sl":153}]},"test_166":{"methods":[{"sl":76}],"name":"testApplications","pass":true,"statements":[{"sl":77}]},"test_17":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testTokenAPITestCase","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_175":{"methods":[{"sl":51}],"name":"APIInvocationFailure","pass":true,"statements":[{"sl":52}]},"test_176":{"methods":[{"sl":51},{"sl":143}],"name":"testInvokePOSTAndGETResourceAfterAddingPOSTResource","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_177":{"methods":[{"sl":51},{"sl":143}],"name":"testImplicit","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_179":{"methods":[{"sl":76},{"sl":152}],"name":"testApplicationCreation","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_18":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":148},{"sl":152}],"name":"testAPIAccessWhenJWTCachingEnabledTestCase","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":149},{"sl":153}]},"test_182":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testNewAPIInvoke","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_184":{"methods":[{"sl":76},{"sl":152}],"name":"testHostObjectTestCase","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_185":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testDefaultVersionAPI","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_187":{"methods":[{"sl":76},{"sl":143},{"sl":152}],"name":"testWebSocketAPIInvocation","pass":true,"statements":[{"sl":77},{"sl":144},{"sl":153}]},"test_188":{"methods":[{"sl":51},{"sl":76},{"sl":143}],"name":"testAuthCode","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144}]},"test_19":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":148},{"sl":152}],"name":"testAPIAccessWhenJWTCachingEnabledTestCase","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":149},{"sl":153}]},"test_190":{"methods":[{"sl":51},{"sl":143}],"name":"CheckCORSHeadersInResponse","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_191":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testAccessibilityOfPublishedOldAPIAndPublishedCopyAPI","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_193":{"methods":[{"sl":76}],"name":"testApplications","pass":true,"statements":[{"sl":77}]},"test_197":{"methods":[{"sl":76},{"sl":152}],"name":"testJWTTokenAPITestCase","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_198":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testInvokeAPIBeforeChangeAPIContext","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_2":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testAPIWithLocationHeader","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_201":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testUriEncodingInTemplate","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_202":{"methods":[{"sl":76},{"sl":152}],"name":"testApplicationCreation","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_203":{"methods":[{"sl":51},{"sl":143}],"name":"testImplicit","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_210":{"methods":[{"sl":76},{"sl":152}],"name":"testApplicationCreation","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_213":{"methods":[{"sl":51},{"sl":76},{"sl":143}],"name":"testInvokeGETResourceWithAuthTypeApplicationUser","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144}]},"test_223":{"methods":[{"sl":51},{"sl":143}],"name":"testInvokeNewAPIAfterSubscribeTheNewVersion","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_224":{"methods":[{"sl":76},{"sl":152}],"name":"testDAOTestCase","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_229":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"generateApplicationKeyWithoutScope","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_23":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"copyAPILifeCycleTestCase","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_235":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testInvokeNewAPIWithoutSubscribeTheNewVersion","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_236":{"methods":[{"sl":76}],"name":"testSubscription","pass":true,"statements":[{"sl":77}]},"test_238":{"methods":[{"sl":76},{"sl":143}],"name":"testWebSocketAPIThrottling","pass":true,"statements":[{"sl":77},{"sl":144}]},"test_24":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testAPIErrorResponse","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_240":{"methods":[{"sl":51},{"sl":143}],"name":"testUpdatedHTTPTransportTenant","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_241":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testDefaultVersionAPI","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_247":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"copyAndDepricateAPILifeCycleTestCase","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_248":{"methods":[{"sl":76},{"sl":152}],"name":"testApplicationCreationWithoutCallBackURL","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_252":{"methods":[{"sl":51},{"sl":143}],"name":"testInvokeGETResourceWithSecuredEndPointComplexPassword","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_255":{"methods":[{"sl":51},{"sl":143}],"name":"testCreateAndPublishAPIWithOAuth2","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_261":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testAPIThrottling_1","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_268":{"methods":[{"sl":76}],"name":"testUpdateGrantTypesAndCallback","pass":true,"statements":[{"sl":77}]},"test_27":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testInvokeAllResources","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_271":{"methods":[{"sl":76},{"sl":152}],"name":"testHostObjectTestCase","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_272":{"methods":[{"sl":76},{"sl":152}],"name":"testTokenEqualityBeforeExpiration","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_273":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testRoundRobinAlgorithmInProductionEndpoints","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_279":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testInvokeResourceWithAuthTypeApplicationAndApplicationUser","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_283":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":148},{"sl":152}],"name":"testSpecificUserJWTClaims","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":149},{"sl":153}]},"test_285":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testNewAPIInvoke","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_287":{"methods":[{"sl":51},{"sl":143}],"name":"testInvokeResourceWithAuthTypeApplication","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_290":{"methods":[{"sl":76},{"sl":152}],"name":"testDAOTestCase","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_293":{"methods":[{"sl":51}],"name":"testInvokeNewAPIBeforeSubscribeTheNewVersion","pass":true,"statements":[{"sl":52}]},"test_295":{"methods":[{"sl":76},{"sl":152}],"name":"testRegenerateConsumerSecret","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_3":{"methods":[{"sl":51},{"sl":143}],"name":"testHTTPTransportBeforeUpdateInTenant","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_30":{"methods":[{"sl":51},{"sl":143}],"name":"testHTTPTransportBeforeUpdate","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_304":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testInvokeAPIBeforeChangeAPILifecycleToBlock","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_32":{"methods":[{"sl":51},{"sl":143}],"name":"testAPIInvocationBeforeAddingNewMediation","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_33":{"methods":[{"sl":51},{"sl":143}],"name":"testAPIInvocationAfterAddingNewMediation","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_335":{"methods":[{"sl":76},{"sl":152}],"name":"testApplicationCreation","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_337":{"methods":[{"sl":51}],"name":"testAPIAccessWithInvalidToken","pass":true,"statements":[{"sl":52}]},"test_340":{"methods":[{"sl":51},{"sl":76},{"sl":143}],"name":"testAuthCode","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144}]},"test_342":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testAPIWithRelativeUrlLocationHeader","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_344":{"methods":[{"sl":51},{"sl":143}],"name":"testUpdatedHTTPTransport","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_345":{"methods":[{"sl":51},{"sl":76},{"sl":143}],"name":"testAuthCode","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144}]},"test_350":{"methods":[{"sl":51},{"sl":76},{"sl":152}],"name":"testNewAPIInvokeAfterImport","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":153}]},"test_353":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":148},{"sl":152}],"name":"testAPIAccessWhenJWTCachingEnabledTestCase","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":149},{"sl":153}]},"test_355":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testInvokingWithSilverTier","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_359":{"methods":[{"sl":76}],"name":"testGetApplicationScope","pass":true,"statements":[{"sl":77}]},"test_36":{"methods":[{"sl":76},{"sl":152}],"name":"testAPICreationTenant","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_372":{"methods":[{"sl":51},{"sl":143}],"name":"testImplicit","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_379":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"CheckAccessControlAllowCredentialsHeadersWithAnyOrigin","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_380":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testAPIApplicationLifeCycleITestCase","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_387":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testUriEncodingInTemplate","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_39":{"methods":[{"sl":76},{"sl":152}],"name":"testAPIStateChangeAndApproveWorkflow","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_395":{"methods":[{"sl":76},{"sl":152}],"name":"testAPICreation","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_399":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testAPIErrorResponse","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_4":{"methods":[{"sl":76},{"sl":152}],"name":"testKeyGenerationResponseContainsGrantTypesAndCallback","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_404":{"methods":[{"sl":51}],"name":"testApiInvocation","pass":true,"statements":[{"sl":52}]},"test_405":{"methods":[{"sl":76}],"name":"testAPIs","pass":true,"statements":[{"sl":77}]},"test_406":{"methods":[{"sl":76}],"name":"testGenerateAccessTokenWithOpenIdScope","pass":true,"statements":[{"sl":77}]},"test_409":{"methods":[{"sl":152}],"name":"testTokenGenerationWithClientCredentialsGrant","pass":true,"statements":[{"sl":153}]},"test_411":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"CheckAccessControlAllowCredentialsHeadersWithSpecificOrigin","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_424":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testInvokingWithGoldTier","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_43":{"methods":[{"sl":76}],"name":"testSubscription","pass":true,"statements":[{"sl":77}]},"test_437":{"methods":[{"sl":76},{"sl":152}],"name":"testKeyGenerationWithoutGrantTypesNorCallback","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_44":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testAccessibilityOfDeprecateOldAPIAndPublishedCopyAPI","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_441":{"methods":[{"sl":76}],"name":"testAPITags","pass":true,"statements":[{"sl":77}]},"test_444":{"methods":[{"sl":76}],"name":"testGenerateAccessTokenWithOpenIdScope","pass":true,"statements":[{"sl":77}]},"test_470":{"methods":[{"sl":51},{"sl":143}],"name":"testInvokePOSTAndGetResourceAfterAddingURLPattern","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_48":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testRefreshTokenAPITestCase","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_486":{"methods":[{"sl":152}],"name":"testTokenGenerationWithClientCredentialsGrant","pass":true,"statements":[{"sl":153}]},"test_487":{"methods":[{"sl":76},{"sl":152}],"name":"testKeyGenerationWithoutGrantTypesNorCallback","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_49":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testDigestAuthentication","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_494":{"methods":[{"sl":76},{"sl":152}],"name":"testWorkflowCallbackRestAPI","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_50":{"methods":[{"sl":76}],"name":"testTiers","pass":true,"statements":[{"sl":77}]},"test_504":{"methods":[{"sl":76},{"sl":152}],"name":"testKeyGenerationResponseContainsGrantTypesAndCallback","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_52":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testSetScopeToResourceTestCase","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_53":{"methods":[{"sl":51}],"name":"APIInvocationFailure","pass":true,"statements":[{"sl":52}]},"test_56":{"methods":[{"sl":76},{"sl":143}],"name":"testWebSocketAPIThrottling","pass":true,"statements":[{"sl":77},{"sl":144}]},"test_6":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":148},{"sl":152}],"name":"testSpecificUserJWTClaims","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":149},{"sl":153}]},"test_64":{"methods":[{"sl":51}],"name":"testAPIAccessWithInvalidToken","pass":true,"statements":[{"sl":52}]},"test_65":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":148},{"sl":152}],"name":"testEnableJWTAndClaims","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":149},{"sl":153}]},"test_68":{"methods":[{"sl":76},{"sl":152}],"name":"testTokenEncryptionWithScopes","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_69":{"methods":[{"sl":51},{"sl":143}],"name":"testInvokeAPIAfterChangeAPIContextWithNewContext","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_75":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testRoundRobinAlgorithmInProductionAndSandboxEndpoints","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_79":{"methods":[{"sl":51},{"sl":76},{"sl":143}],"name":"testAuthCode","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144}]},"test_81":{"methods":[{"sl":76},{"sl":152}],"name":"testApplicationCreationWithoutCallBackURL","pass":true,"statements":[{"sl":77},{"sl":153}]},"test_84":{"methods":[{"sl":76}],"name":"testUpdateAPIwhichHasThumbnail","pass":true,"statements":[{"sl":77}]},"test_86":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testSetScopeToResourceTestCase","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_89":{"methods":[{"sl":51},{"sl":143}],"name":"CheckCORSHeadersInResponse","pass":true,"statements":[{"sl":52},{"sl":144}]},"test_94":{"methods":[{"sl":76}],"name":"testCreateAPIWithScopesAndUpdate","pass":true,"statements":[{"sl":77}]},"test_95":{"methods":[{"sl":51},{"sl":76},{"sl":143},{"sl":152}],"name":"testInvokeOldAPIBeforeSubscribeTheNewVersion","pass":true,"statements":[{"sl":52},{"sl":77},{"sl":144},{"sl":153}]},"test_97":{"methods":[{"sl":76}],"name":"testAPILifecycle","pass":true,"statements":[{"sl":77}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [283, 340, 175, 337, 2, 344, 353, 372, 52, 123, 17, 48, 3, 114, 252, 304, 122, 86, 355, 49, 255, 124, 152, 190, 198, 350, 23, 201, 18, 379, 118, 404, 53, 240, 177, 380, 64, 33, 213, 185, 399, 223, 387, 119, 279, 203, 75, 89, 102, 32, 182, 30, 44, 116, 139, 65, 241, 345, 27, 191, 6, 273, 103, 105, 112, 287, 13, 19, 235, 176, 95, 470, 411, 188, 229, 293, 79, 247, 424, 342, 24, 109, 126, 69, 285, 261], [283, 340, 175, 337, 2, 344, 353, 372, 52, 123, 17, 48, 3, 114, 252, 304, 122, 86, 355, 49, 255, 124, 152, 190, 198, 350, 23, 201, 18, 379, 118, 404, 53, 240, 177, 380, 64, 33, 213, 185, 399, 223, 387, 119, 279, 203, 75, 89, 102, 32, 182, 30, 44, 116, 139, 65, 241, 345, 27, 191, 6, 273, 103, 105, 112, 287, 13, 19, 235, 176, 95, 470, 411, 188, 229, 293, 79, 247, 424, 342, 24, 109, 126, 69, 285, 261], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [283, 340, 2, 147, 353, 94, 81, 52, 17, 15, 179, 494, 395, 48, 50, 114, 107, 304, 122, 36, 86, 355, 272, 49, 152, 136, 198, 350, 23, 290, 201, 18, 379, 111, 1, 268, 118, 210, 238, 4, 437, 380, 56, 68, 236, 187, 504, 97, 213, 335, 185, 399, 487, 387, 197, 248, 359, 119, 295, 39, 279, 75, 102, 202, 182, 193, 44, 116, 139, 65, 241, 160, 345, 406, 27, 191, 224, 184, 6, 273, 105, 441, 112, 13, 19, 161, 235, 43, 146, 95, 411, 188, 229, 444, 79, 247, 424, 342, 271, 405, 24, 84, 166, 109, 126, 154, 285, 261], [283, 340, 2, 147, 353, 94, 81, 52, 17, 15, 179, 494, 395, 48, 50, 114, 107, 304, 122, 36, 86, 355, 272, 49, 152, 136, 198, 350, 23, 290, 201, 18, 379, 111, 1, 268, 118, 210, 238, 4, 437, 380, 56, 68, 236, 187, 504, 97, 213, 335, 185, 399, 487, 387, 197, 248, 359, 119, 295, 39, 279, 75, 102, 202, 182, 193, 44, 116, 139, 65, 241, 160, 345, 406, 27, 191, 224, 184, 6, 273, 105, 441, 112, 13, 19, 161, 235, 43, 146, 95, 411, 188, 229, 444, 79, 247, 424, 342, 271, 405, 24, 84, 166, 109, 126, 154, 285, 261], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [283, 340, 2, 344, 353, 372, 52, 123, 17, 48, 3, 114, 252, 304, 122, 86, 355, 49, 255, 124, 152, 190, 198, 23, 201, 18, 379, 118, 238, 240, 177, 380, 56, 33, 187, 213, 185, 399, 223, 387, 279, 203, 75, 89, 102, 32, 182, 30, 44, 116, 139, 65, 241, 345, 27, 191, 6, 273, 105, 112, 287, 13, 19, 161, 235, 176, 95, 470, 411, 188, 229, 79, 247, 424, 342, 24, 109, 126, 69, 285, 261], [283, 340, 2, 344, 353, 372, 52, 123, 17, 48, 3, 114, 252, 304, 122, 86, 355, 49, 255, 124, 152, 190, 198, 23, 201, 18, 379, 118, 238, 240, 177, 380, 56, 33, 187, 213, 185, 399, 223, 387, 279, 203, 75, 89, 102, 32, 182, 30, 44, 116, 139, 65, 241, 345, 27, 191, 6, 273, 105, 112, 287, 13, 19, 161, 235, 176, 95, 470, 411, 188, 229, 79, 247, 424, 342, 24, 109, 126, 69, 285, 261], [], [], [], [283, 353, 152, 18, 118, 116, 139, 65, 6, 19, 109, 126], [283, 353, 152, 18, 118, 116, 139, 65, 6, 19, 109, 126], [], [], [283, 2, 147, 353, 81, 52, 17, 15, 179, 494, 395, 48, 114, 304, 122, 36, 86, 355, 272, 49, 152, 198, 350, 486, 23, 290, 201, 18, 379, 111, 1, 118, 210, 4, 437, 380, 68, 187, 504, 335, 185, 399, 487, 387, 197, 248, 119, 295, 39, 279, 75, 102, 202, 182, 44, 116, 139, 65, 241, 27, 191, 224, 184, 6, 273, 105, 112, 13, 19, 161, 235, 146, 95, 411, 229, 247, 424, 342, 271, 24, 109, 126, 154, 285, 409, 261], [283, 2, 147, 353, 81, 52, 17, 15, 179, 494, 395, 48, 114, 304, 122, 36, 86, 355, 272, 49, 152, 198, 350, 486, 23, 290, 201, 18, 379, 111, 1, 118, 210, 4, 437, 380, 68, 187, 504, 335, 185, 399, 487, 387, 197, 248, 119, 295, 39, 279, 75, 102, 202, 182, 44, 116, 139, 65, 241, 27, 191, 224, 184, 6, 273, 105, 112, 13, 19, 161, 235, 146, 95, 411, 229, 247, 424, 342, 271, 24, 109, 126, 154, 285, 409, 261], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
