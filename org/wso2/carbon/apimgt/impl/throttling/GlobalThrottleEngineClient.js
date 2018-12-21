var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":241,"id":35152,"methods":[{"el":47,"sc":5,"sl":43},{"el":60,"sc":5,"sl":49},{"el":64,"sc":5,"sl":62},{"el":69,"sc":5,"sl":66},{"el":105,"sc":5,"sl":77},{"el":110,"sc":5,"sl":107},{"el":131,"sc":5,"sl":121},{"el":152,"sc":5,"sl":141},{"el":157,"sc":5,"sl":155},{"el":179,"sc":5,"sl":165},{"el":202,"sc":5,"sl":188},{"el":240,"sc":5,"sl":208}],"name":"GlobalThrottleEngineClient","sl":38}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_147":{"methods":[{"sl":43},{"sl":49},{"sl":62},{"sl":66},{"sl":107},{"sl":121},{"sl":155},{"sl":165}],"name":"LoginWithEmailUserNameTestCase","pass":true,"statements":[{"sl":44},{"sl":50},{"sl":51},{"sl":53},{"sl":55},{"sl":57},{"sl":59},{"sl":63},{"sl":67},{"sl":108},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130},{"sl":156},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":172}]},"test_157":{"methods":[{"sl":43},{"sl":49},{"sl":62},{"sl":66},{"sl":107},{"sl":121},{"sl":155},{"sl":165}],"name":"testWebSocketAPIThrottling","pass":true,"statements":[{"sl":44},{"sl":50},{"sl":51},{"sl":53},{"sl":55},{"sl":57},{"sl":59},{"sl":63},{"sl":67},{"sl":108},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130},{"sl":156},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":172}]},"test_196":{"methods":[{"sl":43},{"sl":49},{"sl":62},{"sl":66},{"sl":107},{"sl":121},{"sl":155},{"sl":165}],"name":"testSDKGeneration","pass":true,"statements":[{"sl":44},{"sl":50},{"sl":51},{"sl":53},{"sl":55},{"sl":57},{"sl":59},{"sl":63},{"sl":67},{"sl":108},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130},{"sl":156},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":172}]},"test_309":{"methods":[{"sl":43},{"sl":49},{"sl":62},{"sl":66},{"sl":107},{"sl":121},{"sl":155},{"sl":165}],"name":"testPagination","pass":true,"statements":[{"sl":44},{"sl":50},{"sl":51},{"sl":53},{"sl":55},{"sl":57},{"sl":59},{"sl":63},{"sl":67},{"sl":108},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130},{"sl":156},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":172}]},"test_317":{"methods":[{"sl":43},{"sl":49},{"sl":62},{"sl":66},{"sl":107},{"sl":121},{"sl":155},{"sl":165}],"name":"testWebSocketAPIThrottling","pass":true,"statements":[{"sl":44},{"sl":50},{"sl":51},{"sl":53},{"sl":55},{"sl":57},{"sl":59},{"sl":63},{"sl":67},{"sl":108},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130},{"sl":156},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":172}]},"test_434":{"methods":[{"sl":43},{"sl":49},{"sl":62},{"sl":66},{"sl":107},{"sl":121},{"sl":155},{"sl":165}],"name":"testSDKGenerationForPrivateAPIs","pass":true,"statements":[{"sl":44},{"sl":50},{"sl":51},{"sl":53},{"sl":55},{"sl":57},{"sl":59},{"sl":63},{"sl":67},{"sl":108},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130},{"sl":156},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":172}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [], [], [], [], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [], [157, 196, 317, 434, 309, 147], [], [157, 196, 317, 434, 309, 147], [], [157, 196, 317, 434, 309, 147], [], [157, 196, 317, 434, 309, 147], [], [], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [], [], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [], [], [], [], [], [], [], [], [], [], [], [], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [], [], [], [], [], [], [], [], [157, 196, 317, 434, 309, 147], [], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [], [157, 196, 317, 434, 309, 147], [157, 196, 317, 434, 309, 147], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
