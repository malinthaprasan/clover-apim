var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":588,"id":41880,"methods":[{"el":84,"sc":5,"sl":82},{"el":88,"sc":5,"sl":86},{"el":92,"sc":5,"sl":90},{"el":96,"sc":5,"sl":94},{"el":100,"sc":5,"sl":98},{"el":104,"sc":5,"sl":102},{"el":108,"sc":5,"sl":106},{"el":112,"sc":5,"sl":110},{"el":116,"sc":5,"sl":114},{"el":120,"sc":5,"sl":118},{"el":124,"sc":5,"sl":122},{"el":128,"sc":5,"sl":126},{"el":132,"sc":5,"sl":130},{"el":136,"sc":5,"sl":134},{"el":140,"sc":5,"sl":138},{"el":144,"sc":5,"sl":142},{"el":149,"sc":5,"sl":146},{"el":154,"sc":5,"sl":151},{"el":228,"sc":5,"sl":156},{"el":285,"sc":5,"sl":233},{"el":384,"sc":5,"sl":291},{"el":402,"sc":5,"sl":389},{"el":480,"sc":5,"sl":407},{"el":557,"sc":5,"sl":485},{"el":586,"sc":5,"sl":562}],"name":"APIStateChangeWSWorkflowExecutor","sl":69}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_107":{"methods":[{"sl":86},{"sl":122},{"sl":156},{"sl":233},{"sl":389},{"sl":407},{"sl":485},{"sl":562}],"name":"testAPIStateChangeAndApproveWorkflow","pass":true,"statements":[{"sl":87},{"sl":123},{"sl":158},{"sl":163},{"sl":164},{"sl":165},{"sl":167},{"sl":171},{"sl":173},{"sl":174},{"sl":177},{"sl":179},{"sl":181},{"sl":184},{"sl":185},{"sl":187},{"sl":189},{"sl":190},{"sl":191},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":211},{"sl":214},{"sl":227},{"sl":235},{"sl":240},{"sl":241},{"sl":243},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":248},{"sl":250},{"sl":251},{"sl":252},{"sl":254},{"sl":255},{"sl":257},{"sl":258},{"sl":259},{"sl":260},{"sl":261},{"sl":262},{"sl":263},{"sl":264},{"sl":267},{"sl":284},{"sl":393},{"sl":394},{"sl":397},{"sl":398},{"sl":400},{"sl":401},{"sl":409},{"sl":411},{"sl":412},{"sl":413},{"sl":414},{"sl":416},{"sl":417},{"sl":418},{"sl":419},{"sl":421},{"sl":422},{"sl":423},{"sl":424},{"sl":426},{"sl":427},{"sl":428},{"sl":429},{"sl":431},{"sl":432},{"sl":433},{"sl":434},{"sl":436},{"sl":437},{"sl":438},{"sl":439},{"sl":441},{"sl":442},{"sl":443},{"sl":444},{"sl":446},{"sl":447},{"sl":448},{"sl":449},{"sl":451},{"sl":452},{"sl":453},{"sl":454},{"sl":456},{"sl":457},{"sl":458},{"sl":459},{"sl":461},{"sl":462},{"sl":463},{"sl":464},{"sl":466},{"sl":467},{"sl":468},{"sl":469},{"sl":471},{"sl":472},{"sl":473},{"sl":476},{"sl":477},{"sl":479},{"sl":488},{"sl":490},{"sl":492},{"sl":493},{"sl":495},{"sl":498},{"sl":499},{"sl":500},{"sl":501},{"sl":502},{"sl":503},{"sl":504},{"sl":506},{"sl":507},{"sl":508},{"sl":509},{"sl":511},{"sl":512},{"sl":513},{"sl":514},{"sl":516},{"sl":518},{"sl":519},{"sl":522},{"sl":523},{"sl":524},{"sl":525},{"sl":547},{"sl":551},{"sl":552},{"sl":553},{"sl":555},{"sl":563},{"sl":565},{"sl":568},{"sl":569},{"sl":570},{"sl":571},{"sl":576},{"sl":577},{"sl":578},{"sl":582},{"sl":585}]},"test_260":{"methods":[{"sl":156},{"sl":233},{"sl":389},{"sl":407},{"sl":485},{"sl":562}],"name":"testAPIStateChangeAndRejectWorkflow","pass":true,"statements":[{"sl":158},{"sl":163},{"sl":164},{"sl":165},{"sl":167},{"sl":171},{"sl":173},{"sl":174},{"sl":177},{"sl":184},{"sl":185},{"sl":187},{"sl":189},{"sl":190},{"sl":191},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":211},{"sl":214},{"sl":227},{"sl":235},{"sl":240},{"sl":241},{"sl":243},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":248},{"sl":250},{"sl":251},{"sl":252},{"sl":254},{"sl":255},{"sl":257},{"sl":258},{"sl":259},{"sl":284},{"sl":393},{"sl":400},{"sl":401},{"sl":409},{"sl":411},{"sl":412},{"sl":413},{"sl":414},{"sl":416},{"sl":417},{"sl":418},{"sl":419},{"sl":421},{"sl":422},{"sl":423},{"sl":424},{"sl":426},{"sl":427},{"sl":428},{"sl":429},{"sl":431},{"sl":432},{"sl":433},{"sl":434},{"sl":436},{"sl":437},{"sl":438},{"sl":439},{"sl":441},{"sl":442},{"sl":443},{"sl":444},{"sl":446},{"sl":447},{"sl":448},{"sl":449},{"sl":451},{"sl":452},{"sl":453},{"sl":454},{"sl":456},{"sl":457},{"sl":458},{"sl":459},{"sl":461},{"sl":462},{"sl":463},{"sl":464},{"sl":466},{"sl":467},{"sl":468},{"sl":469},{"sl":471},{"sl":472},{"sl":473},{"sl":476},{"sl":477},{"sl":479},{"sl":488},{"sl":490},{"sl":551},{"sl":552},{"sl":553},{"sl":555},{"sl":563},{"sl":565},{"sl":568},{"sl":569},{"sl":570},{"sl":571},{"sl":576},{"sl":577},{"sl":578},{"sl":582},{"sl":585}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [107], [107], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [107], [107], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [260, 107], [], [260, 107], [], [], [], [], [260, 107], [260, 107], [260, 107], [], [260, 107], [], [], [], [260, 107], [], [260, 107], [260, 107], [], [], [260, 107], [], [107], [], [107], [], [], [260, 107], [260, 107], [], [260, 107], [], [260, 107], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [260, 107], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [260, 107], [], [], [260, 107], [], [], [], [], [], [], [], [], [], [], [], [], [260, 107], [], [], [], [], [], [260, 107], [], [260, 107], [], [], [], [], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [260, 107], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [107], [107], [107], [107], [107], [], [], [107], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [260, 107], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [260, 107], [], [], [], [260, 107], [107], [], [], [107], [107], [], [260, 107], [260, 107], [], [], [], [], [], [260, 107], [], [260, 107], [], [260, 107], [260, 107], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [260, 107], [], [260, 107], [260, 107], [260, 107], [], [], [260, 107], [260, 107], [], [260, 107], [], [], [], [], [], [260, 107], [], [], [260, 107], [], [260, 107], [], [107], [107], [], [107], [], [], [107], [107], [107], [107], [107], [107], [107], [], [107], [107], [107], [107], [], [107], [107], [107], [107], [], [107], [], [107], [107], [], [], [107], [107], [107], [107], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [107], [], [], [], [260, 107], [260, 107], [260, 107], [], [260, 107], [], [], [], [], [], [], [260, 107], [260, 107], [], [260, 107], [], [], [260, 107], [260, 107], [260, 107], [260, 107], [], [], [], [], [260, 107], [260, 107], [260, 107], [], [], [], [260, 107], [], [], [260, 107], [], [], []]
