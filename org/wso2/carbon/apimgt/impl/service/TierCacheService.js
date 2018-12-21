var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":25,"id":32785,"methods":[{"el":24,"sc":5,"sl":22}],"name":"TierCacheService","sl":21}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_200":{"methods":[{"sl":22}],"name":"testTiers","pass":true,"statements":[{"sl":23}]},"test_28":{"methods":[{"sl":22}],"name":"testAPILifecycle","pass":true,"statements":[{"sl":23}]},"test_401":{"methods":[{"sl":22}],"name":"testSubscription","pass":true,"statements":[{"sl":23}]},"test_402":{"methods":[{"sl":22}],"name":"testSubscription","pass":true,"statements":[{"sl":23}]},"test_453":{"methods":[{"sl":22}],"name":"testAPITags","pass":true,"statements":[{"sl":23}]},"test_525":{"methods":[{"sl":22}],"name":"testSubscription","pass":true,"statements":[{"sl":23}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [401, 402, 200, 525, 453, 28], [401, 402, 200, 525, 453, 28], [], []]
