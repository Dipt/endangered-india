(function(){
//detect browser
var isFirefox = false;
var isIE = false;
if(navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
  isFirefox = true;
}
if ($('html').is('.ie6, .ie7, .ie8, ie9, ie')) {
  isIE = true;
}

var intronames = ['Animals',
                     'Birds',
                     'Reptiles',
                     'Amphibians'
                    ];
var currentIntro = 1;

var indiashard = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#191919" points="60.216,289.52 61.745,57.389 48.653,146.503"/><polygon fill="#262626" points="60.216,289.52 76.528,183.881 58.833,162.167"/><polygon fill="#353535" points="76.528,183.881 58.833,163.833 61.745,57.389"/><polygon fill="#191919" points="124.253,277.289 96.659,177.676 117.917,115.567"/><polygon fill="#262626" points="124.253,277.289 107.923,179.458 121.085,151.25"/><polygon fill="#262626" points="124.253,277.289 123.489,174.8 117.917,115.567"/><polygon fill="#353535" points="123.489,174.8 107.923,179.458 117.917,115.567"/><polygon fill="#191919" points="183.803,272.784 137.839,190.252 147.194,190.252"/><polygon fill="#262626" points="137.839,190.252 147.375,190.875 117.917,89.488"/><polygon fill="#353535" points="183.803,272.784 146.592,190.252 117.917,89.488"/><polygon fill="#353535" points="183.803,272.784 176.201,238.575 203.512,93.43"/><polygon fill="#191919" points="183.381,272.784 208.58,207.321 189.483,212.831"/><polygon fill="#262626" points="208.58,207.321 189.167,215.522 203.512,93.43"/><polygon fill="#353535" points="223.925,282.076 215.68,139.87 225.404,80.883"/><polygon fill="#191919" points="223.925,282.076 237.019,127.903 223.966,172.873"/><polygon fill="#262626" points="223.925,175.5 237.019,127.903 225.404,80.883"/><polygon fill="#191919" points="223.925,56.826 301.362,190.283 304.583,189.372"/><polygon fill="#353535" points="312.829,181.136 304.171,189.372 223.925,56.826"/><polygon fill="#262626" points="223.925,282.076 308.394,224.214 315.996,183.107"/><polygon fill="#353535" points="223.925,282.076 298.258,223.085 315.996,183.107"/><polygon fill="#353535" points="349.609,73.586 352.375,146.875 334.248,263.071"/><polygon fill="#191919" points="334.248,263.071 361.328,187.612 351.153,141.749"/><polygon fill="#262626" points="351.22,144.678 361.328,187.612 349.609,73.586"/><polygon fill="#353535" points="373.857,212.812 376.814,268.843 396.978,89.565"/><polygon fill="#262626" points="376.625,268.375 404.917,124.125 396.945,89.488"/><polygon fill="#191919" points="436.223,183.107 404.688,125.362 396.945,89.488"/><polygon fill="#262626" points="453.68,272.784 436.223,183.107 404.496,124.474"/><polygon fill="#191919" points="436.125,183.107 453.5,272.375 451.146,238.152"/><polygon fill="#353535" points="388.417,206.958 391.063,193.75 420.79,173.815"/><polygon fill="#191919" points="436.223,183.107 388.417,206.958 420.79,173.815"/></svg>';

var introTriangle = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#2FA3CC" points="190.9,179.4 132,281.7 250,281.6"/><polygon fill="#EF3737" points="308.9,179.4 250,281.7 368,281.6"/><polygon fill="#1ABC9C" points="249.9,77.1 191,179.4 309,179.3"/><polygon fill="#F1C40F" points="309,179.6 191,179.4 249.9,281.7"/><polygon fill="#16A085" points="249.9,77.1 220.5,128.3 279.5,128.2"/><polygon fill="#2ECCAE" points="220.4,128.3 191,179.4 250,179.3"/><polygon fill="#66DDC6" points="279.5,128.3 250,179.4 309,179.3"/><polygon fill="#6CCAEA" points="190.9,179.4 161.5,230.5 220.5,230.5"/><polygon fill="#D35400" points="249.9,179.4 220.5,230.5 279.5,230.5"/><polygon fill="#F27575" points="309,179.4 279.5,230.5 338.5,230.5"/><polygon fill="#2D91C9" points="161.4,230.5 132,281.7 191,281.6"/><polygon fill="#37BCDB" points="220.4,230.5 191,281.7 250,281.6"/><polygon fill="#F44D4D" points="279.5,230.5 250,281.7 309,281.6"/><polygon fill="#DD3636" points="338.5,230.5 309,281.7 368,281.6"/><polygon fill="#16A085" points="250,128.3 235.2,153.8 264.8,153.8"/><polygon fill="#F39C12" points="220.5,179.4 205.7,205 235.2,204.9"/><polygon fill="#2C3E50" points="191,230.5 176.2,256.1 205.7,256.1"/><polygon fill="#F39C12" points="279.5,179.4 264.8,205 294.3,204.9"/><polygon fill="#F39C12" points="250,230.5 235.2,256.1 264.8,256.1"/><polygon fill="#D12828" points="309,230.5 294.3,256.1 323.8,256.1"/><polygon fill="#66DDC6" points="264.8,102.7 235.2,102.7 250,128.3"/><polygon fill="#37BCDB" points="176.2,256.2 146.7,256.1 161.4,281.7"/><polygon fill="#DD3636" points="294.3,256.2 264.8,256.1 279.5,281.7"/><polygon fill="#6CCAEA" points="235.2,256.2 205.7,256.1 220.5,281.7"/><polygon fill="#F1C40F" points="264.8,205 235.2,205 250,230.5"/><polygon fill="#2FA3CC" points="205.7,205 176.2,205 191,230.5"/><polygon fill="#1ABC9C" points="235.2,153.9 205.7,153.8 220.5,179.4"/><polygon fill="#2ECCAE" points="294.3,153.9 264.8,153.8 279.5,179.4"/><polygon fill="#F44D4D" points="323.8,205 294.3,205 309,230.5"/><polygon fill="#F27575" points="353.3,256.2 323.8,256.1 338.5,281.7"/></svg>'

var aboutHeader = "About Endangered India";
var aboutBody = "<strong>sss</strong> aa <a href='https://soundcloud.com/skinkofficial/skink-radio-025-showtek'>showtek</a>";

var name = ['Siberian Crane',
            'Barasingha',
            'Himalayan Wolf',
            'Narcondam Hornbill',
            'Indian Wild Ass',
            'White Bellied Heron',
            'Great Indian Bustard',
            'Tibetian Antelope',
            'Red Panda',
            'Roseline Shark',
            'Indian Bear',
            'Markhor',
            'Forest Owlet',
            'Red Headed Vulture',
            'Indian Elephant',
            'Nicobar Flying Fox',
            "Gunther's Bush Frog",
            'Nilgiri Tahr',
            'Lion Tailed Macaque',
            'Sociable Lapwing',
            'Nilgiri Marten',
            'Indian Rhino',
            'Dhole',
            'Bengal Florican',
            'Gharial',
            'Smooth Coated Otter',
            'Golden Langur',
            'Yak',
            'Himalayan Quail',
            'Assam Roofed Turtle'
           ];

var bckcolor = ['#4393c9',
                '#84A5DD',
                '#64d6e2',
                '#FDAED4',
                '#785ebb',
                '#a09de5',
                '#A0CADB',
                '#79BBB5',
                '#F6D860',
                '#9988CD',
                '#EDB948',
                '#FDACB4',
                '#dbbe39',
                '#DFBC94',
                '#3CCAD1',
                '#F68F6F',
                '#9787EA',
                '#4393c9',
                '#FD9372',
                '#9B7AD5',
                '#de89ac',
                '#98BFF6',
                '#FEC54F',
                '#9784ED',
                '#F4C3C5',
                '#63C5AB',
                '#F4696B',
                '#E794AE',
                '#9B7FE6',
                '#EF9F64',
                '#87C4A3'
               ];

var speciesdetail = ['detail html here, might bloat up js file :(',
                     'detail html here, might bloat up js file :(',
                     'detail html here, might bloat up js file :(',
                     'hggh',
                     'detail html here, might bloat up js file :(',
                     'detail html here, might bloat up js file :(',
                     'detail html here, might bloat up js file :(',
                     'aadadad',
                     'asdasdsdaqw',
                     'asdasd',
                     'asdasdasdasdasd',
                     'asdasdalcmasc',
                     'asdaasdasd',
                     'asdads',
                     'asdadasdasdqw',
                     'ffxdadawdcvvv',
                     'dqwdvterfsdvs',
                     'asdasasdasdasw',
                     'ygygljbjkjk',
                     'asdasasdasd',
                     'weowowmwfewfds',
                     'adasqfewwjfiow',
                     'adadqwqwfqcasca',
                     'oemowemcoqmoeofwpmcd',
                     'adadaqwdqwqw',
                     'asidqwodhqidouqxnasca',
                     'aihofqoiwqdnoqqqw',
                     'yovsdnowejncklwc',
                     'qjdpqwiqx',
                     'weofwpofmwwecmwecec'
                    ]

var speciessvg = ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#292E30" points="97.667,77.249 144.611,100 170.89,77.249"/><polygon fill="#202628" points="67.833,79.667 170.89,77.249 97.375,68.25"/><polygon fill="#1A1F21" points="86.5,55.083 170.89,77.249 56.5,65.004"/><polygon fill="#161A1C" points="170.89,77.249 40.5,46.75 82.833,43.833"/><polygon fill="#0E1011" points="170.89,77.249 34.958,29.853 136.5,39"/><polygon fill="#EDEDED" points="216.987,164.313 144.611,100 195,55.083"/><polygon fill="#F9F9F9" points="136.5,39 207.703,118.193 195,55.083"/><polygon fill="#F9F9F9" points="223.125,203.5 195,201.312 216.987,164.313"/><polygon fill="#0E1011" points="220.875,187.5 186,258.875 221.556,195.218"/><polygon fill="#F6F6F6" points="223.125,203.5 251.449,108.395 195,55.083"/><polygon fill="#FBFBFB" points="223.125,203.5 290.313,128.563 251.25,108.292"/><polygon fill="#F9F9F9" points="282.833,102.833 251.25,108.813 290,129"/><polygon fill="#F9F9F9" points="284.471,108.813 318.75,46.75 326.5,41.25"/><polygon fill="#F4F4F4" points="318.75,46.75 284.471,108.813 277.063,103.926"/><polygon fill="#F9F9F9" points="313.375,41.875 318.75,46.75 301.808,70.583"/><polygon fill="#C63C3C" points="318.75,46.75 313.375,41.875 312.667,47.5"/><polygon fill="#AA3131" points="313.375,41.875 321,38.663 318.75,46.75"/><polygon fill="#F2C949" points="314,42.525 316.061,41.748 315.146,44.002"/><polygon fill="#AA3131" points="326.5,41.25 318.375,46.75 339.75,21"/><polygon fill="#8C2C2C" points="318.75,46.75 320.404,39.225 339.75,21"/><polygon fill="#F9F9F9" points="240.329,223.662 223.125,203.5 256.563,184.599"/><polygon fill="#0E1011" points="240.329,193.775 191,262.333 233.272,197.764"/><polygon fill="#F6F6F6" points="223.125,203.5 290.196,128.502 350.5,131.5"/><polygon fill="#EDEDED" points="329.25,195 350.5,131.5 255.5,184.599"/><polygon fill="#F9F9F9" points="306.25,155.896 350.5,131.5 386.034,173.5"/><polygon fill="#292E30" points="329.25,195 382.917,228.083 339.75,163.624"/><polygon fill="#202628" points="389,239 339.75,163.624 387.125,216.25"/><polygon fill="#1A1F21" points="406,241.5 400.125,217.125 339.75,163.624"/><polygon fill="#161A1C" points="429.5,247.313 339.75,163.624 410.25,215.5"/><polygon fill="#0E1011" points="446.167,245.049 386.034,173.5 339.75,163.624"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#333333" points="154,90.833 91.75,23.25 158.333,103.833"/><polygon fill="#4C4C4C" points="121.802,58.446 127.167,65 119.743,17.053"/><polygon fill="#333333" points="122.296,35.631 142.892,18.303 121.833,41.833"/><polygon fill="#4C4C4C" points="138.501,79.831 83.292,67.459 143.621,85.993"/><polygon fill="#333333" points="106.095,73.451 97.125,46.994 111.25,75.125"/><polygon fill="#8E6E5C" points="154,105.25 190.25,105.25 162.125,145.462"/><polygon fill="#4C4C4C" points="159.333,108.333 165.108,105.25 142.892,65"/><polygon fill="#4C4C4C" points="200.935,65 178.719,105.25 184.493,108.333"/><polygon fill="#333333" points="185.493,103.833 252.077,23.25 189.827,90.833"/><polygon fill="#4C4C4C" points="200.206,85.993 260.535,67.459 205.326,79.831"/><polygon fill="#333333" points="232.577,75.125 246.702,46.994 237.732,73.451"/><polygon fill="#4C4C4C" points="224.084,17.053 216.66,65 222.025,58.446"/><polygon fill="#333333" points="221.993,41.833 200.935,18.303 221.531,35.631"/><polygon fill="#8E6E5C" points="185.916,127.738 159.333,112.333 173.25,185.167"/><polygon fill="#7F5F4A" points="182.5,123 173.25,185.167 202.331,156.75"/><polygon fill="#876751" points="182.5,145.462 190.25,105.25 162.125,145.462"/><polygon fill="#383838" points="163.5,120.781 163.5,116.708 166.883,116.708"/><polygon fill="#383838" points="180.25,120.781 177.188,116.708 180.25,116.708"/><polygon fill="#383838" points="172.125,138.375 182.5,145.462 162.125,145.462"/><polygon fill="#8E6E5C" points="223.5,230.75 200.917,153.782 173.25,185.167"/><polygon fill="#705749" points="208.161,285.333 196.5,215.5 206.5,217.167"/><polygon fill="#7F5F4A" points="223.5,230.75 196.5,215.5 173.25,185.167"/><polygon fill="#8E6E5C" points="222.236,294.041 223.5,230.25 213.581,225.148"/><polygon fill="#876751" points="298.5,231.667 200.587,153.782 223.083,230.75"/><polygon fill="#8E6E5C" points="292.146,231.667 200.587,153.782 335.167,168.833"/><polygon fill="#7F5F4A" points="200.613,153.872 335.232,169.098 304.5,150.167"/><polygon fill="#705749" points="324,279.833 314.512,239.333 335.167,168.833"/><polygon fill="#876751" points="321.766,235.105 291.583,231.583 335.167,168.833"/><polygon fill="#8E6E5C" points="307.661,233.125 316.25,291.25 321.832,234.779"/><polygon fill="#7F5F4A" points="343.125,195.5 334.802,168.833 332,195.875"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#F9F7F2" points="159.167,55.833 165.833,139.004 236.156,89.053"/><polygon fill="#EDEADD" points="165.833,59.625 156.319,30.819 149.833,64.357"/><polygon fill="#E8E4D1" points="187.621,116.678 149.833,64.357 148.167,92.5"/><polygon fill="#E8E4D1" points="181.833,53.167 187.621,116.678 149.833,64.357"/><polygon fill="#7F7970" points="171.859,78.414 170.323,73.575 163.929,74.247"/><polygon fill="#F8F8F8" points="153.052,95.493 174.715,108.769 176,88"/><polygon fill="#E8E4D1" points="181.833,53.167 173.712,116.605 212.5,61.5"/><polygon fill="#7F7970" points="193.773,73.575 191.023,78.414 199.189,74.331"/><polygon fill="#EDEADD" points="197.125,58.5 207.319,30.819 212.319,61.319"/><polygon fill="#E8E4D1" points="212.5,61.5 173.712,116.605 216.5,92.5"/><polygon fill="#7F7970" points="173.712,116.605 187.621,116.678 180.667,108.769"/><polygon fill="#F8F8F8" points="211.463,95.338 186.936,109.155 185.833,88"/><polygon fill="#FCFBF0" points="165.833,139.004 234,88 212.5,190.009"/><polygon fill="#F4F1EA" points="165.833,139.004 212.188,188.813 212.5,250.604"/><polygon fill="#FCFBF0" points="212.5,250.604 212.5,271.454 197.404,214"/><polygon fill="#F4F1EA" points="198.667,271.454 207,249.907 212.5,271.454"/><polygon fill="#F8F6F1" points="212.188,188.813 339.5,139.5 234,88"/><polygon fill="#E2DECC" points="309.679,178.526 290.819,158.319 212.188,188.813"/><polygon fill="#F4F1EA" points="233.07,180.438 212.188,188.813 229.667,259"/><polygon fill="#FCFBF0" points="221.329,225.49 229.667,259 227.833,278.536"/><polygon fill="#F4F1EA" points="214.824,278.167 224.995,253.649 227.833,278.536"/><polygon fill="#F4F1EA" points="301,246.809 303.436,179.013 266.044,182.823"/><polygon fill="#FCFBF0" points="311.167,240.5 301.667,214.999 299.24,278.536"/><polygon fill="#F4F1EA" points="299.24,278.536 290.061,279 300.662,247.803"/><polygon fill="#FCFBF0" points="233.458,88 339.5,139.5 315.25,95.249"/><polygon fill="#FCFBF0" points="290.819,158.319 329.5,199.75 339.5,139.5"/><polygon fill="#F4F1EA" points="329.55,199.446 339.5,238.5 291,158.5"/><polygon fill="#FCFBF0" points="342.5,279 339.5,238.5 303.436,179.013"/><polygon fill="#F4F1EA" points="342.5,279 330.192,246.809 329.621,282.015"/><polygon fill="#F4F1EA" points="332.753,177.836 339.5,139.5 368.5,228.854"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#CEB58D" points="241.092,276.167 267.859,280.083 268.175,193.038"/><polygon fill="#B79F7B" points="241.092,276.167 268.175,193.038 236.282,196.544"/><polygon fill="#684931" points="359.5,183 173,203.5 153,193.25"/><polygon fill="#262626" points="249,149.583 218.833,134.5 221.699,197.167"/><polygon fill="#262626" points="266.699,126.167 281.634,191.559 245.125,150.625"/><polygon fill="#333333" points="281.366,190.383 225.026,190.833 247,149"/><polygon fill="#A9A792" points="228.173,184.841 220.352,188.75 223.167,203.5"/><polygon fill="#A9A792" points="279.625,200.25 274.669,183 282.796,186.318"/><polygon fill="#262626" points="204.672,145 223.167,184.167 208.5,115"/><polygon fill="#333333" points="221.699,100.667 222.178,182.073 207.5,115"/><polygon fill="#333333" points="274.669,102.5 252,95.5 278.157,176.333"/><polygon fill="#262626" points="286.5,121 278.157,183 273.625,102.404"/><polygon fill="#E56D1C" points="247,149 266.699,126.167 221.692,137.583"/><polygon fill="#EF7D30" points="221.699,137.875 220.352,79 266.699,126.167"/><polygon fill="#E56D1C" points="268.092,65.012 264.833,91.167 252,41.333"/><polygon fill="#EF7D30" points="268.092,96.75 254.5,87.667 252,41.333"/><polygon fill="#E07127" points="263.083,126.167 252,41.333 220.352,79"/><polygon fill="#E07127" points="252,41.333 215.339,34.5 255.255,66.25"/><polygon fill="#EF7D30" points="241.718,55.358 217.053,35.855 229.385,70.454"/><polygon fill="#EF7D30" points="220.352,79 251.333,70.454 209.333,64.833"/><polygon fill="#D65D4D" points="239.677,56 222.028,49 230.222,61.397"/><polygon fill="#EFEFEF" points="234.485,56 230.688,58.192 228.188,53.808"/><polygon fill="#D65D4D" points="222.178,49.22 198.031,44.929 217.053,35.855"/><polygon fill="#EA833D" points="222.178,49 185.833,56 198.667,44.929"/><polygon fill="#EAC271" points="166.5,80.667 188.75,55.358 222.178,49"/><polygon fill="#EAB178" points="230.434,61.333 166.35,80.667 222.028,49"/><polygon fill="#EAA97D" points="229.385,68.249 166.5,80.667 230.284,60.894"/><polygon fill="#F2D8AA" points="198.392,62.528 166.5,80.667 182.446,62.529"/><polygon fill="#EFC9A3" points="198.392,62.528 203.83,69.094 166.5,80.667"/><polygon fill="#EAB692" points="204.006,73.26 203.83,69.094 166.5,80.667"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><g id="Layer_1_1_"><polygon fill="#565656" points="376.847,150 382,197.5 374.806,178.167"/><polygon fill="#F2E9E2" points="373.75,132 374.806,178.167 380,106.5"/><polygon fill="#EDD8CA" points="367.5,157.5 321.171,150 380,106.5"/><polygon fill="#F2D8C7" points="321.171,150 380,106.5 343.154,78.482"/><polygon fill="#F2E9E2" points="367.5,157.5 374.631,216.132 321.171,150"/><polygon fill="#F7F2F0" points="370.033,272 374.631,216.132 355.82,192.449"/><polygon fill="#AAA9A9" points="362.25,272 370.033,272 365.225,241.75"/><polygon fill="#E2D3C9" points="355.82,192.449 321.171,150 357.5,222.25"/><polygon fill="#F2E9E2" points="357.5,222.25 344.048,195.497 351.5,272"/><polygon fill="#AAA9A9" points="351.5,272 342.25,272 348.722,243.486"/><polygon fill="#EFD0BF" points="343.154,78.482 208.5,91 321.171,150"/><polygon fill="#F2D8C7" points="208.5,91 241.479,164.382 321.171,150"/><polygon fill="#F7F2F0" points="328.403,164.382 321.171,150 196.5,172.5"/><polygon fill="#F2E4DA" points="208.5,91 196.5,172.5 241.479,164.382"/><polygon fill="#E2D3C9" points="203.5,271.808 196.5,172.5 208.625,170.312"/><polygon fill="#F4EEEA" points="196.5,172.5 211.75,271.808 216.75,168.845"/><polygon fill="#AAA9A9" points="208.625,249.285 211.75,271.808 203.5,271.808"/><polygon fill="#AAA9A9" points="203.5,271.808 196.5,271.808 201.981,250.251"/><polygon fill="#F4EBE6" points="208.5,91 163.25,74.5 196.5,172.5"/><polygon fill="#F2E4DA" points="196.5,172.5 136.5,110 163.25,74.5"/><polygon fill="#E2CBBC" points="169.333,45.5 164.278,72.466 161,61.583"/><polygon fill="#F2E4DA" points="169.333,89.25 161,61.583 141,61.583"/><polygon fill="#F7F2F0" points="141,61.583 155,147 169.333,89.25"/><polygon fill="#565656" points="157,88.025 162,89.25 161.375,92.485"/><polygon fill="#F7F2F0" points="143,146.75 141,61.583 155,147"/><polygon fill="#E2CBBC" points="155,147 143,146.75 162.083,127.691"/><polygon fill="#F2E4DA" points="131,87 141,61.583 143,146.75"/><polygon fill="#EADAD3" points="143,146.75 137,127.691 162.083,127.691"/><polygon fill="#565656" points="140.25,88.388 134.776,89.762 135.323,92.485"/><polygon fill="#E2CBBC" points="141,61.583 136.718,72.466 131,45.5"/></g></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><g id="Layer_2" display="none"><image display="inline" overflow="visible" width="700" height="488" xlink:href="../species/bhutan_white_bellied_heron.jpg" transform="matrix(0.5008 0 0 0.5008 74.7084 39.0467)"></image></g><g id="Layer_1"><polygon fill="#9B7059" points="77.806,257.091 205.833,272.5 83.167,268.5"/><polygon fill="#774F3E" points="78.25,291 88.5,291 61.833,127.724"/><polygon fill="#191E2B" points="170.443,90.099 114.5,106.167 173.375,100.25"/><polygon fill="#D1D1CF" points="175.597,115.45 152.593,178.285 114.667,176.5"/><polygon fill="#E2E1DC" points="107.833,221.5 152.593,178.285 116.833,174.5"/><polygon fill="#D1D1CF" points="186.667,118.5 175.597,115.45 152.593,178.285"/><polygon fill="#D1D1CF" points="116.833,174.5 175.597,115.45 157.526,109.581"/><polygon fill="#202638" points="152.593,183.25 151.676,179.171 186.667,118.5"/><polygon fill="#0C0E15" points="152.593,178.285 152.593,183.25 107.833,221.5"/><polygon fill="#202638" points="126.636,205.432 106.333,222.667 109.25,231.167"/><polygon fill="#272B38" points="128.417,189.75 143.5,266 127.167,202.833"/><polygon fill="#3D4254" points="127.167,202.833 133.68,161.25 128.499,167.846"/><polygon fill="#272B38" points="166.75,268.5 152.167,193.833 150.5,206"/><polygon fill="#191E2B" points="136.58,142.998 173.09,110.069 157.021,108.125"/><polygon fill="#283042" points="99.833,157.5 157.526,109.581 116.833,174.5"/><polygon fill="#283042" points="213.5,104.583 268.5,95.167 250,114"/><polygon fill="#202638" points="250,114 170.443,90.099 172,100.25"/><polygon fill="#283042" points="157.021,110 171.532,97.948 250,114"/><polygon fill="#202638" points="152.188,109 250,114 186.667,118.5"/><polygon fill="#3D4254" points="150.5,206 158.625,160.5 153,168"/><polygon fill="#202638" points="107.292,223.375 99.833,157.5 117.333,172.333"/><polygon fill="#0C0E15" points="109.25,231.167 98,216.25 99.833,157.5"/><polygon fill="#202638" points="100.164,157.5 171.862,97.948 114.831,106.167"/><polygon fill="#283042" points="266.75,104.583 333.305,142.04 295.636,98.133"/><polygon fill="#202638" points="295.636,98.133 268.5,95.167 250,114"/><polygon fill="#D1D1CF" points="358.5,182.042 333.305,142.04 310.547,129.285"/><polygon fill="#E2E1DC" points="358.5,182.042 333.305,142.04 321.035,135.163"/><polygon fill="#202638" points="308.59,113.232 269.75,105.974 333.305,142.04"/><polygon fill="#E5A857" points="315.668,127.161 319.167,128 317.292,129.285"/><polygon fill="#191E2B" points="186.667,118.5 179.878,116.63 173.09,142.04"/></g></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><g id="Layer_2" display="none"><image display="inline" overflow="visible" width="3000" height="1924" xlink:href="../species/gr8 indian bustard.jpg" transform="matrix(0.169 0 0 0.169 -59.983 -20.2301)"></image></g><g id="Layer_1"><polygon fill="#FEFBED" points="273,206.8 284,266 269,218"/><polygon fill="#FEFBED" points="248.3,259.7 258,230.5 257.3,217.2"/><polygon fill="#FAF3E4" points="261.3,207.7 255.4,203.9 258,230.5"/><polygon fill="#F4F3EE" points="239.9,58.2 192.5,44.2 235.3,61.6"/><polygon fill="#B6A89E" points="298.5,178 261.8,191.5 236.2,180.5"/><polygon fill="#C4B3AD" points="272.4,179.6 255.4,131.5 208,159.6"/><polygon fill="#DDCDC3" points="307.8,190 255.4,134.4 271.5,179.1"/><polygon fill="#FAF3E4" points="262,201.3 263,190.9 236.2,180.5"/><polygon fill="#EDE9D6" points="270.3,222 236.2,180.5 273,206.8"/><polygon fill="#C2B2A7" points="303.2,188.3 292.3,145.9 328.2,172.4"/><polygon fill="#B8AFA7" points="303.8,186.8 343.2,194.8 328.2,171.8"/><polygon fill="#6B6B6B" points="200.5,150 236.2,180.5 209.5,170.5"/><polygon fill="#565656" points="331.7,177.2 343.2,192.8 338.2,193.3"/><polygon fill="#EDEDED" points="204.9,102.2 217,119.8 236.2,67.5"/><polygon fill="#F4F6F3" points="204.1,147.5 204.9,102.2 225.3,122.8"/><polygon fill="#E5E3DA" points="220.5,72.5 201.6,47.5 237.5,60"/><polygon fill="#F4F3EE" points="219.4,73.3 204.9,102.2 236.2,67.5"/><polygon fill="#DBD8D2" points="239.9,58.2 236.2,67.5 219.4,73.3"/><polygon fill="#F4F3EE" points="192.5,44.2 220.5,72.5 205.7,49.6"/><polygon fill="#565656" points="239.9,58.2 229.7,47.2 204.9,47.9"/><polygon fill="#FFFFFF" points="226.9,54.9 227.5,52.1 217,51.5"/><polygon fill="#C4B3AD" points="231.8,127.5 200.5,150 265.9,131.2"/><polygon fill="#B6A9A3" points="225.3,122.8 233.5,127.5 200.5,150"/><polygon fill="#A89892" points="233.5,127.5 266.7,130.7 295,147.5"/><polygon fill="#606060" points="237.7,182.4 210.4,158.7 274.4,179.8"/><polygon fill="#6D6D6D" points="318.5,188.5 329.3,197.5 270.9,179.1"/><polygon fill="#858383" points="345.5,206.8 310.8,186.8 343.2,192.8"/><polygon fill="#D1C0B4" points="302.3,184.7 254.8,134.4 292.3,145.9"/><polygon fill="#B5A8A3" points="200.5,150 210.4,158.7 254.8,134.4"/><polygon fill="#F4F6F3" points="220.5,139.6 209.1,144.2 217.5,138.4"/></g></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><g id="Layer_2_1_" display="none"><rect x="-8.833" y="-18.167" display="inline" fill="#27292B" stroke="#000000" stroke-miterlimit="10" width="514" height="326.667"/></g><g id="Layer_1"><g id="Layer_2" display="none"><image display="inline" overflow="visible" enable-background="new    " width="400" height="385" xlink:href="../species/4 Tibetan Antelope .jpg" transform="matrix(0.8615 0 0 0.8615 76.8731 -19.1667)"></image></g><g id="Layer_1_1_"><polygon fill="#EFE8E8" points="139.5,156.833 134.833,203.833 125.833,173.833"/><polygon fill="#F4EEED" points="148.371,213.375 134.704,203.833 137.219,178.51"/><polygon fill="#B2B1B1" points="169.333,227 137.348,178.51 155.5,221"/><polygon fill="#EAE1DC" points="153.691,238.438 153.691,279.5 144.799,246.25"/><polygon fill="#EFE8E8" points="144.799,246.25 169.333,227 155.5,221"/><polygon fill="#F4EEED" points="179.583,243 190.333,215.974 137.348,178.51"/><polygon fill="#EAE1DC" points="192.917,280.667 171.778,254.061 179.583,243"/><polygon fill="#EFE8E8" points="179.583,243 171.778,254.061 169.333,227"/><polygon fill="#EFE8E8" points="136.375,179.75 139.5,156.833 183.254,144.069"/><polygon fill="#F4EEED" points="183.254,144.069 190.333,217.115 137.348,178.875"/><polygon fill="#EFE8E8" points="189.667,216.75 253.215,142.75 182.5,144.083"/><polygon fill="#DDD1CD" points="264.5,255.079 264.5,221.079 252.5,219.667"/><polygon fill="#EAE1DC" points="250.271,143.063 267.938,221.313 189.667,216.75"/><polygon fill="#EFE8E8" points="264.5,255.079 257.37,280.745 255.379,228.163"/><polygon fill="#DDD1CD" points="282.5,253.5 279.625,203.592 264.5,221"/><polygon fill="#EFE8E8" points="274.833,239.273 277.201,279.5 282.5,253.5"/><polygon fill="#EFE8E8" points="264.5,221 250,142.75 315,131"/><polygon fill="#F4EEED" points="313.354,131.832 331.184,144.25 264.5,221"/><polygon fill="#EFE8E8" points="302.302,115.978 312.333,112.333 298.829,103.477"/><polygon fill="#EFE8E8" points="336.559,116.956 327.442,113.25 341.09,103.477"/><polygon fill="#EAE1DC" points="302.302,115.978 319.825,108.164 311.658,155.5"/><polygon fill="#EAE1DC" points="330.262,155.5 336.559,116.956 319.825,108.164"/><polygon fill="#BFB1AF" points="315.704,132.972 313.354,127.514 316.646,127.514"/><polygon fill="#BFB1AF" points="327.442,127.514 323.856,127.514 325.06,132.972"/><polygon fill="#565656" points="345.75,51 323.542,125.822 322.08,119"/><polygon fill="#686868" points="326.941,105.036 345.75,51 353,9.5"/><polygon fill="#565656" points="318.188,119.219 317,126.406 286.947,50.266"/><polygon fill="#686868" points="330.262,155.5 319.825,108.164 311.658,155.5"/><polygon fill="#686868" points="311.658,104.86 274.75,9.5 287.167,51"/><polygon fill="#565656" points="311.658,155.5 330.262,155.5 320.96,144.25"/></g></g></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><g id="Layer_2" display="none" opacity="0.5"><image display="inline" overflow="visible" enable-background="new    " width="484" height="347" xlink:href="../species/red panda.jpg" transform="matrix(0.8666 0 0 0.8666 33.7864 41.2949)"></image></g><g id="Layer_1_1_"><polygon fill="#77341F" points="296.125,180.375 78.958,184.042 116.375,104.375"/><polygon fill="#EF923F" points="292.5,179.833 333.006,148.244 432.5,245.833"/><polygon fill="#D17B34" points="292.5,179.833 432.5,245.833 428,274.5"/><polygon fill="#633212" points="432.5,245.833 433.347,278.25 393.431,250.349"/><polygon fill="#7F3F14" points="410.946,224.772 368.074,232.633 404.48,218.35"/><polygon fill="#91471D" points="382.855,197.138 346.083,216.856 375.706,190.127"/><polygon fill="#BF6B33" points="292.5,179.833 333.006,148.244 267.75,103.833"/><polygon fill="#AF5920" points="349.959,164.872 357.534,172.302 322.475,200.775"/><polygon fill="#160F0E" points="250,218.894 223,188.658 205.833,218.325"/><polygon fill="#1E1513" points="241.333,208.833 267.75,239.5 233,239.5"/><polygon fill="#2D1D19" points="224.75,194.25 267.75,239.5 275.643,182.75"/><polygon fill="#1E1513" points="60,222.833 83.5,188.658 87.833,222.833"/><polygon fill="#2D1D19" points="76,170 87.833,222.833 111.524,181.658"/><polygon fill="#2D1D19" points="109.167,181.658 171.845,188.658 171.845,240.75"/><polygon fill="#5E2819" points="209.357,199.199 108.167,181.658 292.5,179.833"/><polygon fill="#1E1513" points="171.845,240.75 145.657,215.095 134.25,240.75"/><polygon fill="#B45428" points="222.75,83.5 104.75,105.75 267.75,103.833"/><polygon fill="#9B4726" points="112.75,103.833 292.5,179.833 267.75,103.833"/><polygon fill="#E0A957" points="115,83.5 56.333,166.333 123.667,155.667"/><polygon fill="#E0A957" points="56.333,166.333 123.527,154.5 37.5,107"/><polygon fill="#E0A957" points="89.345,181.658 56.333,164.872 123.527,154.5"/><polygon fill="#DD9333" points="41.143,118.476 89.345,181.658 116.826,98.701"/><polygon fill="#FFEEDC" points="56.333,166.333 62.75,146.798 89.345,181.658"/><polygon fill="#FFEEDC" points="89.345,181.658 123.667,155.667 103.852,137.866"/><polygon fill="#FCF8F5" points="89.345,181.658 62.75,146.798 103.852,137.866"/><polygon fill="#77341F" points="93.762,146.798 93.762,151.571 99.375,151.571"/><polygon fill="#77341F" points="70.479,156.928 76,154.816 74.525,150.616"/><polygon fill="#1E1513" points="89.345,181.658 81.938,171.949 93.207,170"/><polygon fill="#EFA852" points="89.345,181.658 53.348,156.928 56.333,166.333"/><polygon fill="#EFA852" points="122.161,143.127 123.667,155.667 89.345,181.658"/></g></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><g id="Layer_1"><polygon fill="#DDDED5" points="246.5,56.837 209.5,119.5 287.62,132.22"/><polygon fill="#DDDED5" points="216.868,194.494 260.833,186.833 249.417,238.167"/><polygon fill="#DDDED5" points="333.833,176.833 316.833,219.167 285.896,186.011"/><polygon fill="#FFEB78" points="385,150 84.469,142.763 385,191.5"/><polygon fill="#F2E199" points="321.024,181.695 385,191.5 385,173.833"/><polygon fill="#FFEB78" points="412.5,156.793 84.469,142.763 212,115.5"/><polygon fill="#FCDC59" points="385,163 212,115.5 275,161.763"/><polygon fill="#E84A46" points="193.358,141.808 113.696,140.722 65.127,170.122"/><polygon fill="#ED6B6B" points="65.127,170.122 84.469,142.763 124.44,134.218"/><polygon fill="#F2E4B8" points="216.868,194.494 390.455,173.194 65.127,170.122"/><polygon fill="#F2E4B8" points="65.127,170.122 101.087,159.513 403.987,173.833"/><polygon fill="#FF9A22" points="101.087,159.513 192,141.75 249.126,142.763"/><polygon fill="#F9D43A" points="278.25,163.5 97.476,159.513 249.126,142.763"/><polygon fill="#565656" points="385,173.833 103.5,159.833 385,163"/><polygon fill="#CECECA" points="385,150 385,189 467,123.5"/><polygon fill="#DDDED5" points="385,150 457.5,227.5 385,191.5"/><polygon fill="#ED6B6B" points="224.051,117.603 229.5,119.5 242.5,71.167"/><polygon fill="#565656" points="430.893,135.169 440.017,132.22 429.609,153.368"/><polygon fill="#565656" points="429.609,213.65 419.457,208.61 429.609,197.685"/><polygon fill="#FFEB78" points="417.295,163.204 430.893,135.169 417.295,139.563"/><polygon fill="#FFEB78" points="419.457,208.61 419.457,186.833 406.329,202.091"/><polygon fill="#E84A46" points="248.485,82 248.485,123.33 241.521,121.896"/><polygon fill="#ED6B6B" points="295.294,184.87 301.205,184.145 313.833,205.668"/><polygon fill="#E84A46" points="229.104,192.992 244.25,223.5 222.833,193.762"/><polygon fill="#FCEDA7" points="214.139,194.494 382.271,173.833 100.771,159.833"/><polygon fill="#FF9A22" points="259.595,125.75 265.207,126.458 257.75,101.75"/><polygon fill="#565656" points="91.125,159.833 97.313,153.752 103.5,159.833"/><polygon fill="#565656" points="91.451,159.513 103.5,159.833 97.313,164.978"/><polygon fill="#565656" points="395.155,160.855 408.297,150.631 392.133,157.625"/><polygon fill="#565656" points="397.833,188.75 385,179.167 385,173.833"/></g></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><g id="Layer_1"><polygon fill="#333333" points="199.167,287.5 234.625,287.5 234.625,255.833"/><polygon fill="#2B2B2B" points="262.25,237.25 213,275.5 207,227.75"/><polygon fill="#3F3F3F" points="242.711,69.232 226.167,196.167 205.75,94.25"/><polygon fill="#333333" points="300.117,228.262 295.25,281.5 256.5,237.5"/><polygon fill="#333333" points="291.351,207.54 300.117,228.262 303.09,145.625"/><polygon fill="#2B2B2B" points="278.135,291.167 304.567,292.167 278.135,261.761"/><polygon fill="#333333" points="228.167,31.5 265.5,19 242.263,72.667"/><polygon fill="#3A3A3A" points="303.09,145.625 289.246,71.167 293.5,205"/><polygon fill="#333333" points="258.833,239.5 207,227.75 226.451,188.991"/><polygon fill="#3F3F3F" points="241.833,71.167 294,87.833 294,211.167"/><polygon fill="#3F3F3F" points="259.065,240.413 225.252,190.75 294.5,204.333"/><polygon fill="#756E6D" points="208.75,22.167 234.208,20.542 217.375,25.625"/><polygon fill="#2B2B2B" points="258.833,239.5 293.5,205 300.117,228.262"/><polygon fill="#3A3A3A" points="241.833,71.167 294,205 225.252,191.379"/><polygon fill="#333333" points="207,94.25 190.625,145.625 218.841,157.211"/><polygon fill="#2B2B2B" points="197.731,123.329 213.75,140 190.625,145.625"/><polygon fill="#3A3A3A" points="265.5,19 297.667,89.667 241.833,71.167"/><polygon fill="#3A3A3A" points="242.711,70.667 225.252,23.333 204.211,97.833"/><polygon fill="#3F3F3F" points="265.5,19 233.667,19.433 219.838,37.842"/><polygon fill="#2B2B2B" points="294.5,113.756 309.833,138.083 258.833,136.833"/><polygon fill="#333333" points="269.75,80.417 309.833,138.083 294,87.833"/><polygon fill="#333333" points="253.375,10.467 264.792,7.359 262.125,17.875"/><polygon fill="#3A3A3A" points="244,1.5 208.75,14.625 265.697,19.433"/><polygon fill="#3A3A3A" points="208.75,22.167 214.807,12.428 265.5,19"/><polygon fill="#2B2B2B" points="205.75,15.667 208.75,22.167 214.807,12.428"/><polygon fill="#917B78" points="208.75,22.167 214.807,12.428 232.727,20.829"/><polygon fill="#917B78" points="219.838,37.842 232.727,20.829 212.313,26.5"/><polygon fill="#BCBCBC" points="234.896,11.987 238.583,10.467 233.91,9.742"/><polygon fill="#D8C1AB" points="242.711,80.417 217.167,97.833 246.563,86.75"/><polygon fill="#C4AE9D" points="271.667,95.167 243.521,87.792 242.711,80.417"/></g></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><g id="Layer_1_1_"><polygon fill="#F4F0ED" points="304.689,227.833 275.917,242.435 251.598,222.5"/><polygon fill="#F4F0ED" points="251.598,222.5 285.369,133.209 315.04,133.209"/><polygon fill="#F7F6F5" points="251.598,222.5 167.833,153.833 285.369,133.209"/><polygon fill="#F7F6F5" points="251.598,222.5 304.689,227.833 310.167,132.2"/><polygon fill="#C9C9C9" points="258.285,91.222 287.902,120.055 293.833,115.5"/><polygon fill="#C9C9C9" points="310.167,120.055 302.167,115.5 327.446,83.776"/><polygon fill="#F7F6F5" points="280.5,115.5 318.671,115.643 293.833,164"/><polygon fill="#F4F0ED" points="308.674,164 318.671,115.643 293.833,164"/><polygon fill="#F4F0ED" points="151.167,227.833 167.833,153.833 275.917,242.435"/><polygon fill="#565656" points="289.5,128.538 292.833,124.667 293.833,128.538"/><polygon fill="#E5D9CF" points="251.598,222.5 151.167,227.833 275.917,242.435"/><polygon fill="#F7F6F5" points="145.167,182.5 151.167,227.833 167.833,153.833"/><polygon fill="#EDE6DF" points="195.167,286.598 216.502,235.481 182.384,231.487"/><polygon fill="#EDE6DF" points="275.917,242.435 304.689,227.833 290.327,289"/><polygon fill="#C9C9C9" points="252.907,50.557 264.451,48.276 241.679,24.833"/><polygon fill="#C9C9C9" points="257.21,87.009 264.451,48.276 282.193,88.869"/><polygon fill="#E5E5E5" points="248.71,84.683 282.193,81.512 293.833,115.5"/><polygon fill="#E5E5E5" points="277.211,77.302 238.636,53.377 267.599,47.5"/><polygon fill="#E5E5E5" points="258.285,41.929 226.673,28.611 241.679,24.833"/><polygon fill="#C9C9C9" points="322.766,19.484 309.987,47.237 320.873,45.655"/><polygon fill="#EDE6DF" points="151.167,227.833 163.167,289 184.477,226.064"/><polygon fill="#E5E5E5" points="322.766,19.484 337.171,18.144 313.447,39.722"/><polygon fill="#EDE6DF" points="258,289 275.917,242.435 251.598,222.5"/><polygon fill="#E5D9CF" points="148.444,203.75 145.167,182.5 137.75,232.467"/><polygon fill="#565656" points="297.138,156.633 300.913,162.067 304.689,156.633"/><polygon fill="#565656" points="307,124.667 310.167,128.538 306.252,128.538"/><polygon fill="#C9C9C9" points="306.978,88.543 309.987,47.237 322.766,77.539"/><polygon fill="#E5E5E5" points="335,74 305.25,112.5 305.25,82.625"/><polygon fill="#E5E5E5" points="306.97,47.532 334.332,43.699 307.77,76.797"/><polygon fill="#F4F0ED" points="280.5,115.5 318.671,115.643 299.586,105"/></g></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#C69071" points="273.5,96.25 223.541,157.939 180.081,99.258"/><polygon fill="#C6977D" points="222.915,41.5 273.5,96.25 172.25,96.25"/><polygon fill="#DDBFB1" points="273.5,96.25 222.915,81.167 172.25,96.25"/><polygon fill="#DDBFB1" points="224.167,115.307 172.25,96.25 273.5,96.25"/><polygon fill="#F4B558" points="227,87.235 218.83,87.235 222.915,108.375"/><polygon fill="#FFC44D" points="205.375,77.083 211.688,77.083 210.885,70.744"/><polygon fill="#7C4E3C" points="173.997,271.583 182.048,253.695 166.312,153.764"/><polygon fill="#6D402C" points="170.477,217.615 172.25,208.5 300.126,290.833"/><polygon fill="#F7A83E" points="218.83,87.235 222.915,81.167 227,87.235"/><polygon fill="#E8D4CD" points="246.532,218.968 223.541,157.939 208.351,177.667"/><polygon fill="#C69071" points="186.833,53.833 172.25,96.25 222.915,41.5"/><polygon fill="#C69071" points="273.5,96.25 222.915,41.5 260.5,53.833"/><polygon fill="#C6977D" points="180.081,99.258 223.541,157.939 204.167,177.667"/><polygon fill="#C6977D" points="335,266.5 300.126,277 313.763,217.208"/><polygon fill="#DBAA91" points="255.252,143.609 313.763,217.208 300.126,277"/><polygon fill="#DDBFB1" points="326.117,245.883 223.541,157.939 246.532,218.968"/><polygon fill="#C6977D" points="273.5,96.25 302,124.25 223.541,157.939"/><polygon fill="#DBAA91" points="186.833,53.833 183.833,63.333 222.875,73.625"/><polygon fill="#DDBFB1" points="212.667,241.292 250,220.141 238.025,210.304"/><polygon fill="#664536" points="204.167,177.667 208.351,177.667 223.541,157.939"/><polygon fill="#C69071" points="294.725,172.116 223.541,157.939 302,124.25"/><polygon fill="#E8D4CD" points="275.42,228.738 237.131,255.257 258.047,222.862"/><polygon fill="#C69071" points="211.231,54.126 222.875,73.625 235,53.833"/><polygon fill="#424242" points="218.989,237.71 212.667,241.292 219.5,247.25"/><polygon fill="#424242" points="243.333,250.962 245.169,263.167 237.131,255.257"/><polygon fill="#B27C60" points="344.25,255.257 293.167,169.5 302,124.25"/><polygon fill="#C6977D" points="223.541,157.939 293.167,169.5 344.25,255.257"/><polygon fill="#DBAA91" points="222.875,73.625 263.361,63.167 260.5,53.833"/><polygon fill="#FFC44D" points="235.125,70.744 234.25,77.083 240.917,77.083"/><polygon fill="#664536" points="223.541,157.939 344.25,255.257 320.881,244.112"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#3A3A3A" points="149,211 277.75,107.648 211,150"/><polygon fill="#444444" points="310.662,161.922 260.5,118.5 314.505,102.25"/><polygon fill="#3A3A3A" points="305.068,109.1 281.5,86 296.5,89"/><polygon fill="#A54C4C" points="304.36,107.648 314.505,104.863 316.5,75.167"/><polygon fill="#B75A5A" points="304.36,107.648 321.718,62.509 299.25,78.167"/><polygon fill="#B75A5A" points="322.333,62.142 296.5,57.5 299.083,78.833"/><polygon fill="#A54C4C" points="304.36,107.648 296.5,89 296.5,57.5"/><polygon fill="#A54C4C" points="333,64.75 307.833,52.833 296.5,57.5"/><polygon fill="#444444" points="321.718,62.509 316.5,75.167 334.25,74.667"/><polygon fill="#3A3A3A" points="336.667,64.75 336.667,76.997 320.833,61.833"/><polygon fill="#494949" points="313.707,116.5 260.5,118.5 281.5,86"/><polygon fill="#494949" points="260.5,118.5 273.5,202.5 311.197,161.327"/><polygon fill="#444444" points="276.667,198.5 155.818,205.344 260.5,118.5"/><polygon fill="#444444" points="325.067,126.032 321.718,150 275,200.375"/><polygon fill="#494949" points="217.898,153.843 324.96,126.803 276.667,198.5"/><polygon fill="#3A3A3A" points="217.898,153.843 313.707,116.5 326.063,126.803"/><polygon fill="#444444" points="161.384,208.082 276.667,198.5 219,155"/><polygon fill="#494949" points="276.667,198.5 157.708,257.75 161.384,206.149"/><polygon fill="#994B4B" points="257.375,257.926 284.167,265.278 256.125,265.278"/><polygon fill="#994B4B" points="259.747,252.375 253.5,240.25 256.125,265.278"/><polygon fill="#B75A5A" points="248.625,268.07 275.833,269.833 250.5,259.375"/><polygon fill="#444444" points="242.827,214.82 276.667,198.5 254.625,252.375"/><polygon fill="#B75A5A" points="254.625,252.375 248.625,268.07 249.694,236.68"/><polygon fill="#3A3A3A" points="256.873,246.88 276.667,198.5 259.747,252.375"/><polygon fill="#3A3A3A" points="161.384,259.375 276.667,198.5 153.917,257.75"/><polygon fill="#3A3A3A" points="161.5,205.344 217.898,153.843 161.325,209.091"/><polygon fill="#3A3A3A" points="161.5,205.344 153.917,257.75 159.25,257"/><polygon fill="#FFF57B" points="310.43,60.63 306.079,61.875 309.266,64.75"/><polygon fill="#E0A6A6" points="322.333,61.461 315.64,61.302 316.377,76.997"/><polygon fill="#E09090" points="315.64,61.302 319.106,58.171 336.667,64.75"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><g id="Layer_1"><polygon fill="#4D4D4D" points="391.25,255.5 373.75,255.5 381.5,173.25"/><polygon fill="#4D4D4D" points="354.75,195.96 301.25,177.25 345,175"/><polygon fill="#5E5E5E" points="376.833,261.333 358.02,203.833 353.5,258.5"/><polygon fill="#4D4D4D" points="396,128.333 402.624,207.75 405.778,124.628"/><polygon fill="#636363" points="405.778,124.628 288.5,54.833 368.167,72.5"/><polygon fill="#5E5E5E" points="288.5,54.833 406.125,124.344 347.167,180.876"/><polygon fill="#636363" points="376.833,261.333 345,175 405.778,124.628"/><polygon fill="#4D4D4D" points="243.833,163.485 235.833,255.5 205.585,150"/><polygon fill="#636363" points="345,175 288.5,54.833 270.833,185.48"/><polygon fill="#636363" points="215.167,154.067 115.5,138.313 149.5,73.167"/><polygon fill="#5E5E5E" points="272.939,185.208 207.167,152.167 288.5,54.833"/><polygon fill="#636363" points="292,255.5 273.207,182.965 207.167,152.167"/><polygon fill="#5E5E5E" points="291.843,254.893 270.5,261.333 207.167,152.167"/><polygon fill="#636363" points="207.167,152.167 235.833,255.5 203.625,253.688"/><polygon fill="#636363" points="167.833,52.5 149.5,73.167 246,62.833"/><polygon fill="#636363" points="207.342,152.83 203.5,66.044 288.5,54.833"/><polygon fill="#EDEDED" points="93.091,135.743 115.008,150.556 115.5,145.833"/><polygon fill="#636363" points="113.25,207.25 115.885,137.101 100.734,195.96"/><polygon fill="#5E5E5E" points="112.759,207.689 149.5,143.15 115.5,137.833"/><polygon fill="#636363" points="88.706,229.164 113.25,207.25 101.567,192.722"/><polygon fill="#5E5E5E" points="100.734,195.96 80.796,222.661 89.083,229.583"/><polygon fill="#4D4D4D" points="177.75,147.567 152.032,162 147.833,133.167"/><polygon fill="#C9C9C9" points="150.42,150 113.5,159.135 149.5,143.15"/><polygon fill="#EDEDED" points="113.5,159.135 127.275,155.726 95.75,149"/><polygon fill="#4C4C4C" points="164.847,94.304 166.625,105.375 154.833,97.5"/><polygon fill="#5E5E5E" points="207.167,65.561 207.167,152.167 149.5,73.167"/><polygon fill="#4D4D4D" points="177.75,69.441 215.167,132.167 236.933,61.635"/><polygon fill="#EDEDED" points="203.5,253.833 214.875,254.563 203.688,244.167"/><polygon fill="#EDEDED" points="280.208,258.833 270.438,261.479 265.418,252.688"/><polygon fill="#EDEDED" points="354.125,248.503 353.406,258.578 362.633,259.703"/></g></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><g id="Layer_1_1_"><polygon fill="#282727" points="178.8,85.007 140.89,96.028 225.294,117.599"/><polygon fill="#332F2D" points="223.106,115.996 175.978,190.322 140.89,96.028"/><polygon fill="#161616" points="190.379,151.045 265.529,69.815 355.605,32.167"/><polygon fill="#161616" points="397.5,77.204 341.988,37.927 355.605,32.167"/><polygon fill="#282727" points="270.112,74.324 341.988,37.927 384.68,68.133"/><polygon fill="#282727" points="268.734,268.352 244.878,138.215 187.674,151.477"/><polygon fill="#332F2D" points="243.228,139.524 284.128,131.683 260.013,221.6"/><polygon fill="#282727" points="338.846,122.242 272.475,72.942 190.379,151.045"/><polygon fill="#332F2D" points="338.846,122.242 271.29,73.538 344.08,69.815"/><polygon fill="#161616" points="140.89,96.028 146.352,110.706 124.656,125.384"/><polygon fill="#332F2D" points="162.543,182.988 190.379,151.045 263.471,260.473"/><polygon fill="#282727" points="263.471,260.473 154.244,175.135 206.527,224.886"/><polygon fill="#B27246" points="181.075,200.667 151.626,172.574 169.693,161.344"/><polygon fill="#99592E" points="157.91,138.215 169.693,161.344 190.379,151.045"/><polygon fill="#99592E" points="137.224,149.78 151.626,138.215 154.244,141.566"/><polygon fill="#332F2D" points="137.224,149.474 136.602,162.014 169.693,161.344"/><polygon fill="#3A2D23" points="200.504,166.203 190.379,151.045 239.469,104.021"/><polygon fill="#332F2D" points="243.228,269.4 256.7,256.242 261.541,258.965"/><polygon fill="#332F2D" points="268.734,268.352 266.402,282.667 264.503,262.017"/><polygon fill="#6B462C" points="239.469,104.021 190.379,151.045 195.923,159.345"/><polygon fill="#B27246" points="190.379,151.045 195.923,159.345 169.693,161.344"/><polygon fill="#99592E" points="195.923,159.345 181.075,200.667 169.693,161.344"/><polygon fill="#282727" points="169.693,161.344 153.516,140.634 137.224,149.78"/><polygon fill="#B27246" points="157.91,138.215 151.626,138.215 169.693,161.344"/><polygon fill="#7F4646" points="147.715,154.198 150.71,152.715 147.233,151.477"/><polygon fill="#332F2D" points="169.693,161.344 151.626,172.574 149.826,159.773"/><polygon fill="#282727" points="135.784,161.727 150.71,161.344 144.479,165.249"/><polygon fill="#282727" points="150.71,161.344 151.626,172.574 139.297,167.803"/><polygon fill="#161616" points="140.89,96.028 156.589,138.215 146.352,120.933"/><polygon fill="#161616" points="135.784,161.727 145.033,164.976 139.297,167.803"/></g></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><g id="Layer_1_1_"><polygon fill="#E4F99B" points="288.5,234.833 339.772,218.451 210.5,222.292"/><polygon fill="#9BBF4C" points="301,259.5 408.75,167.75 348.917,224.505"/><polygon fill="#AFE24D" points="312.167,201.167 301,122.5 387.5,150"/><polygon fill="#ABE038" points="305,125.5 314.821,223.75 176.5,201.167"/><polygon fill="#9BBF4C" points="383.457,147.917 379.833,133.5 315.996,113.165"/><polygon fill="#B5E85D" points="391.333,146.833 307.139,203.591 306.5,223.75"/><polygon fill="#AFE24D" points="355.144,216.003 306.5,223.75 408.75,167.75"/><polygon fill="#ABE038" points="408.75,167.75 306.5,223.75 391.333,146.833"/><polygon fill="#B5E85D" points="408.75,167.75 370.833,228.833 315.996,276.833"/><polygon fill="#AAD35B" points="293.75,276.833 408.75,167.75 342.741,245.38"/><polygon fill="#AAD35B" points="288.5,99 191.167,125.5 306,126.378"/><polygon fill="#AFE24D" points="305,125.5 216.25,158.25 150.167,124.5"/><polygon fill="#B5E85D" points="178,203.75 216.25,158.25 305,125.5"/><polygon fill="#B5E85D" points="387.5,150 305,125.5 288.5,99"/><polygon fill="#ABE038" points="106.167,187.167 216.25,158.25 181,202.5"/><polygon fill="#9BBF4C" points="153.25,124.5 118.859,144.545 129.167,116"/><polygon fill="#AAD35B" points="97.833,167.75 109.5,150 153.25,124.5"/><polygon fill="#B5E85D" points="97.833,167.75 153.25,124.5 216.25,158.25"/><polygon fill="#AFE24D" points="216.25,158.25 97.833,167.75 106.167,187.167"/><polygon fill="#D3EF86" points="210.5,222.292 314.821,223.75 106.167,187.167"/><polygon fill="#9BBF4C" points="239.261,254.951 241.5,248.31 191.167,252.652"/><polygon fill="#B5E85D" points="239.261,259.693 191.167,266 240.38,251.63"/><polygon fill="#ABE038" points="239.261,259.693 234.27,226.642 256.784,229.734"/><polygon fill="#333333" points="137.01,179.065 132.235,162.375 161.249,176.562"/><polygon fill="#333333" points="161.208,177 163.5,152.167 132.235,162.375"/><polygon fill="#F0F01A" points="139.5,177 140.5,162.375 136.055,162.375"/><polygon fill="#EAE426" points="138.704,173.836 138.5,177 158.667,174.625"/><polygon fill="#EAE426" points="161.208,158.917 161.208,155.25 139.5,161.5"/><polygon fill="#F0F01A" points="158.667,174.625 156.504,174.625 159.485,159.122"/><polygon fill="#9BBF4C" points="175.647,210.558 181.94,212.677 141.667,213.333"/></g></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#3D3023" points="241,217 250,250 238.116,250"/><polygon fill="#514133" points="250,250 244.612,173 230.049,189.5"/><polygon fill="#3D3023" points="213,189 313.269,186.583 305,173.933"/><polygon fill="#3D3023" points="353.833,138.895 379.874,119.25 347.5,125.167"/><polygon fill="#3D3023" points="326.5,258.5 341.5,258.5 341.5,173"/><polygon fill="#3D3023" points="129,121 143.727,81.5 139.5,129.167"/><polygon fill="#5E4A35" points="166.114,81.5 217.833,110 191,157"/><polygon fill="#3D3023" points="191,157 175.547,110 157.523,114"/><polygon fill="#514133" points="208.5,105.333 191,157 253.167,100"/><polygon fill="#3D3023" points="225.25,225.75 220.5,261 233,261"/><polygon fill="#3D3023" points="357,265 341.5,267.5 345.207,229.389"/><polygon fill="#5E4A35" points="348.664,210.347 305,175.5 357,265"/><polygon fill="#5E4A35" points="307.868,177.789 250,100 191,157"/><polygon fill="#514133" points="250,100 306.33,177.789 324,107.167"/><polygon fill="#514133" points="348.664,210.347 303.433,175.246 357,129.167"/><polygon fill="#5E4A35" points="357,129.167 324,107.167 305,175.5"/><polygon fill="#514133" points="305,175.5 213,189 191,157"/><polygon fill="#F4ECD7" points="143.727,81.5 144.201,75.626 129,121"/><polygon fill="#514133" points="167.5,75.626 175.547,110 139.5,129.167"/><polygon fill="#3D3023" points="139.5,129.167 143.727,81.5 167.916,77.492"/><polygon fill="#999487" points="177.462,75 178.047,64.313 172.438,67.063"/><polygon fill="#999487" points="143.727,81.5 168.417,56.346 144.938,66.5"/><polygon fill="#AFAA9E" points="193.5,75 188.5,60.8 177,65"/><polygon fill="#AFAA9E" points="168.076,78.085 143.727,81.5 167.916,69.417"/><polygon fill="#AFAA9E" points="173,53.5 188.5,60.8 152.065,66.24"/><polygon fill="#A3A098" points="188.5,60.8 143.727,81.5 152.396,65.633"/><polygon fill="#F4ECD7" points="143.727,81.5 139.5,129.167 152.396,77.492"/><polygon fill="#5E4A35" points="233,261 213,189 240,173"/><polygon fill="#B29A64" points="157.262,91.958 159.98,88.711 155.066,88.958"/><polygon fill="#231E19" points="129,121 136.364,116 139.5,129.167"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#282828" points="339.237,160.972 278.196,259.918 273.262,205.5"/><polygon fill="#282828" points="205,257.75 229.835,179.167 200,162.333"/><polygon fill="#282828" points="257.167,259.918 278.196,259.918 276.125,219.167"/><polygon fill="#282828" points="190.483,257.322 205,257.75 204.875,205.5"/><polygon fill="#3A3A3A" points="296.5,205.5 243.833,115.5 286.979,96.228"/><polygon fill="#3A3A3A" points="339.237,160.972 273.262,138.187 296.5,205.5"/><polygon fill="#F9EECA" points="291.5,87.575 267.333,133.833 317.26,87.575"/><polygon fill="#F9EECA" points="358.75,102.917 352.25,155.5 336.181,91.769"/><polygon fill="#F9EECA" points="352.5,155.5 325.948,108.046 267.333,133.833"/><polygon fill="#FFFBED" points="326.224,112.856 352.25,155.5 336.181,91.769"/><polygon fill="#FFFBED" points="317.26,87.575 322.18,112.055 267.333,133.833"/><polygon fill="#5B5B5B" points="329.5,139.833 311.708,136.625 325.25,104.833"/><polygon fill="#3A3A3A" points="323.5,118.625 336.181,91.769 317.26,87.575"/><polygon fill="#E2BD69" points="322.18,112.055 311.708,107.458 320.971,106.039"/><polygon fill="#E2BD69" points="326.224,112.856 335.5,111.188 328.706,107.601"/><polygon fill="#F9EECA" points="317.26,170.5 267.333,133.833 352.292,155.313"/><polygon fill="#303030" points="301.167,264.5 276.125,264.5 278.196,224.167"/><polygon fill="#3A3A3A" points="296.5,205.5 253.167,186.833 301.167,264.5"/><polygon fill="#303030" points="245.75,114.5 214.918,175.685 296.5,205.5"/><polygon fill="#3A3A3A" points="214.918,178.5 193.824,115.5 245.75,114.5"/><polygon fill="#303030" points="123.5,201.125 122.333,166.75 136.125,199"/><polygon fill="#3A3A3A" points="170.75,163 215.957,173.621 239,259.918"/><polygon fill="#303030" points="240.25,259.918 219,259.918 170.75,163"/><polygon fill="#303030" points="136.125,199 121.273,148.874 122.006,167.838"/><polygon fill="#3A3A3A" points="111.528,131.208 119.75,120 122.333,168.982"/><polygon fill="#303030" points="128.333,101.133 111.528,131.208 143.25,98.25"/><polygon fill="#3A3A3A" points="158.625,89.888 128.333,101.133 167.5,98.25"/><polygon fill="#303030" points="176.375,114.5 176.75,98.25 158.625,89.888"/><polygon fill="#3A3A3A" points="196.285,116.667 176.092,97.946 170.75,163"/><polygon fill="#303030" points="216.899,176.254 195.167,115.5 170.75,163"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><g id="Layer_1_1_"><polygon fill="#353130" points="272.659,50.75 265.167,62.167 299,53.833"/><polygon fill="#1E1C1C" points="299,53.833 272.659,50.939 287.625,47.125"/><polygon fill="#F1E0D9" points="293.188,79.938 308.5,71.813 286,52.667"/><polygon fill="#F1E0D9" points="265.087,62.417 271.333,56 286,52.667"/><polygon fill="#F4EBE9" points="286,52.667 307.833,72.167 299,53.833"/><polygon fill="#F4EBE9" points="286,52.667 265.167,62.167 293.833,79.5"/><polygon fill="#1E1C1C" points="261,117.25 246.833,205.033 294.5,178.833"/><polygon fill="#353130" points="294.5,178.833 305.617,142.5 250,118.5"/><polygon fill="#111010" points="160.166,208.497 246.833,205.033 251.589,184.25"/><polygon fill="#353130" points="287.917,62.833 306.917,68.833 294.5,56.938"/><polygon fill="#726C6A" points="292.333,103 305.617,142.5 260.667,126.167"/><polygon fill="#F4EBE9" points="292.333,103 265.167,62.167 248.75,113.25"/><polygon fill="#F1E0D9" points="292.333,103 293.833,79.5 265.167,62.167"/><polygon fill="#F1E0D9" points="271.75,176.75 284.716,152.638 264.167,123.5"/><polygon fill="#F4EBE9" points="265.167,121.833 271.75,176.75 254.069,184.25"/><polygon fill="#F1E0D9" points="208.535,189.75 254.069,184.25 265.167,124.92"/><polygon fill="#0A0A0A" points="160.897,209.073 181.505,186.633 156.167,210.333"/><polygon fill="#1E1C1C" points="268.333,279.833 250,227.833 251.589,219.083"/><polygon fill="#353130" points="250,227.833 252.622,201.851 257.857,198.974"/><polygon fill="#1E1C1C" points="240.413,218.75 237.577,226.015 243.25,279.833"/><polygon fill="#353130" points="242.661,205.2 246.833,205.033 237.577,226.015"/><polygon fill="#111010" points="305.73,73.268 287.917,62.833 305.617,67.566"/><polygon fill="#1E1C1C" points="305.617,67.566 302.938,69.625 324.5,73.268"/><polygon fill="#F4EBE9" points="208.535,189.75 268.5,121.167 161.827,208.109"/><polygon fill="#F1E0D9" points="292.333,103 161.827,208.109 248.75,113.25"/><polygon fill="#353130" points="324.5,73.268 303.116,69.488 305.73,73.268"/><polygon fill="#1E1C1C" points="287.917,62.833 294.5,56.938 265.167,66.134"/><polygon fill="#0A0A0A" points="290.667,60.371 293.563,63.125 294.5,59.092"/><polygon fill="#0A0A0A" points="208.535,189.75 156.167,210.333 254.069,184.25"/><polygon fill="#BCB1AF" points="292.333,103 298.443,121.167 265.167,124.92"/></g></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#1C1C1C" points="229.283,263 230.501,192.75 207,263"/><polygon fill="#2B2B2B" points="204.56,164.285 207,263 230.501,196.749"/><polygon fill="#1C1C1C" points="304.5,147.75 299.5,241.5 321,241.5"/><polygon fill="#1C1C1C" points="353.5,68 312.447,51.503 262.707,85.5"/><polygon fill="#2B2B2B" points="265.583,83.286 299.473,132.375 353.5,68"/><polygon fill="#2B2B2B" points="263.838,247.5 271.634,173.335 242.082,247.5"/><polygon fill="#2B2B2B" points="261.085,155.5 242.082,247.5 275.333,173.335"/><polygon fill="#1C1C1C" points="291.75,191.434 265.583,176.5 265.583,83.286"/><polygon fill="#1C1C1C" points="286.434,90.797 263.84,83.286 305,150"/><polygon fill="#2B2B2B" points="265.583,83.286 305,150 301,241.5"/><polygon fill="#1C1C1C" points="257.75,46.667 238.167,103 212.622,46.667"/><polygon fill="#1C1C1C" points="200,72.667 215,46.667 193.333,44.333"/><polygon fill="#2B2B2B" points="214,46.833 200,72.667 238.167,103"/><polygon fill="#2B2B2B" points="272.838,132.375 249.332,203.945 269,263"/><polygon fill="#1C1C1C" points="250.135,201.5 247.5,263 269,263"/><polygon fill="#F5C032" points="248,208 274.164,187.75 274.164,128.337"/><polygon fill="#1C1C1C" points="271.667,68 275.333,40.167 254.917,47.375"/><polygon fill="#2B2B2B" points="271.667,68 255.833,46.667 238.167,103"/><polygon fill="#EDB026" points="231.5,198 210,113 238.167,166.25"/><polygon fill="#F5C032" points="203.667,163.167 210,113 231.5,198"/><polygon fill="#EDB026" points="248,208 274.164,128.337 238.167,166.25"/><polygon fill="#F5C032" points="274.164,128.337 238.167,166.25 210,113"/><polygon fill="#EDB026" points="204.88,79.173 274.164,128.337 210,113"/><polygon fill="#F5C032" points="274.164,128.337 265.111,80.805 238.167,103"/><polygon fill="#995E60" points="237.516,81.833 229.283,95.94 245.749,95.078"/><polygon fill="#111111" points="214,68 222,65 220.833,72.667"/><polygon fill="#111111" points="256.165,68 248.5,65 250,72.667"/><polygon fill="#F4F4F4" points="200,72.667 238.167,103 217.5,96"/><polygon fill="#F4F4F4" points="261,88.833 238.167,103 271.667,68"/><polygon fill="#F4F4F4" points="245.749,95.078 229.283,95.94 238.167,103"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#969696" points="343.765,218.513 217.75,227.25 340.541,162.25"/><polygon fill="#A3A3A3" points="250.156,210.095 128.5,188.5 217.75,227.25"/><polygon fill="#969696" points="154.25,252 128.5,187.25 174.51,208.476"/><polygon fill="#B7B7B7" points="275.303,223.26 314,273.5 279,275.5"/><polygon fill="#ADADAD" points="275.303,223.26 300.833,219.5 314,273.5"/><polygon fill="#B7B7B7" points="337.833,115 343.765,190.25 279,214.75"/><polygon fill="#ADADAD" points="380.331,178.779 342.173,231.333 337.833,115"/><polygon fill="#B7B7B7" points="400.394,195.953 392.5,187.25 412.281,174.494"/><polygon fill="#A3A3A3" points="408.581,269.668 404,247.233 432.654,240.451"/><polygon fill="#C1C1C1" points="407.895,245.52 337.833,232.833 381.833,273.5"/><polygon fill="#C1C1C1" points="381.833,176.833 399.5,188.5 407.895,245.52"/><polygon fill="#B7B7B7" points="408.581,269.668 407.895,245.52 381.833,273.5"/><polygon fill="#B7B7B7" points="407.895,245.52 337.833,233.833 381.833,176.833"/><polygon fill="#C1C1C1" points="366.712,201.082 377.5,187.201 353.833,174.494"/><polygon fill="#565656" points="386.25,234.167 382,228.833 388.333,228.5"/><polygon fill="#A3A3A3" points="106,102.938 81.739,158.26 98.896,146.875"/><polygon fill="#A3A3A3" points="311.792,234.167 279,214.75 330.035,195.342"/><polygon fill="#B7B7B7" points="305.544,247.233 335.5,242 326.937,201.082"/><polygon fill="#A3A3A3" points="290.25,244.75 304.5,277.167 335.5,242"/><polygon fill="#ADADAD" points="304.5,91.5 337.833,115 279,214.75"/><polygon fill="#B7B7B7" points="304.5,91.5 158.5,79 284.75,219.5"/><polygon fill="#ADADAD" points="284.75,219.5 162.272,199.171 158.5,79"/><polygon fill="#B7B7B7" points="106,102.938 165.378,128.948 158.5,79"/><polygon fill="#ADADAD" points="86.952,176 106,102.938 165.378,128.948"/><polygon fill="#B7B7B7" points="86.952,176 161.583,214.75 165.378,128.948"/><polygon fill="#B7B7B7" points="187.833,274 154.25,252 167.211,224.157"/><polygon fill="#A3A3A3" points="187.833,274 156.833,274 154.25,252"/><polygon fill="#B7B7B7" points="149.75,275.5 108.619,187.25 110.5,242"/><polygon fill="#ADADAD" points="143.402,205.31 138.25,252 86.952,176"/><polygon fill="#A3A3A3" points="112.75,275.5 114.692,245.381 149.75,275.5"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#C1712F" points="327.333,58.854 279.167,94.5 286.509,193.679"/><polygon fill="#D1986D" points="340.402,57.5 352.55,69.627 356.333,36"/><polygon fill="#A35413" points="366.833,102 355,102 320.333,59.333"/><polygon fill="#B7651C" points="320.333,59.333 343,57.5 366.833,102"/><polygon fill="#A35413" points="360.917,80.25 364.024,96.755 343,57.5"/><polygon fill="#C1712F" points="340.402,145.81 306.507,174.75 314.5,242.833"/><polygon fill="#CC8A5E" points="315.487,97.978 346.957,110.613 339.25,148.75"/><polygon fill="#D1986D" points="339.549,147.988 286.167,194.833 315.487,94.5"/><polygon fill="#B7651C" points="355,102 320.333,59.333 308.5,97.978"/><polygon fill="#D1986D" points="328.5,58.673 308.5,34.833 316.599,71.53"/><polygon fill="#7F3B08" points="308.5,97.978 361.833,115.5 355,102"/><polygon fill="#C1712F" points="223.167,64.833 198,139.75 279.167,94.5"/><polygon fill="#D1986D" points="210.083,173.458 204.167,205.5 223.167,245.5"/><polygon fill="#B7651C" points="198,139.75 286.509,193.679 279.167,94.5"/><polygon fill="#C1712F" points="264.016,179.974 280.25,275.75 286.509,193.679"/><polygon fill="#C1712F" points="216.205,207.167 232.866,160.994 198,139.75"/><polygon fill="#B7651C" points="198,139.75 223.167,64.833 174.5,71.167"/><polygon fill="#C1712F" points="174.5,71.167 156.833,248.833 198,139.75"/><polygon fill="#A35413" points="165.205,176.224 174.5,71.167 154,102.292"/><polygon fill="#6D3007" points="161.041,148.75 137.849,130.833 154,102.292"/><polygon fill="#D1986D" points="314.295,241.151 318.833,273.5 328.839,188.326"/><polygon fill="#B7651C" points="337,273.5 321.567,240.5 318.833,273.5"/><polygon fill="#B7651C" points="298.523,275.75 283.398,234.467 280.25,275.75"/><polygon fill="#B7651C" points="169.659,214.849 177.417,251.5 156.833,248.833"/><polygon fill="#230C01" points="366.833,102 361.833,115.5 355,102"/><polygon fill="#230C01" points="339.549,85.333 337.833,79.75 328.5,82.167"/><polygon fill="#B7651C" points="223.167,245.5 236.083,242.833 217.6,214.849"/><polygon fill="#4C1D02" points="161.041,148.75 122,189.25 137.849,130.833"/><polygon fill="#230C01" points="359.833,80.333 356.75,83.174 354.314,78.625"/><polygon fill="#230C01" points="137.849,130.833 122,189.25 93.75,201.75"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#AA755F" points="284.5,204 299,231.57 289,198"/><polygon fill="#AA755F" points="246.95,246.727 299,231.57 296.507,226.83"/><polygon fill="#AA755F" points="232.625,242.25 252.496,244.5 246.95,246.727"/><polygon fill="#AA755F" points="259.333,206.667 263.77,201.93 272.25,240.5"/><polygon fill="#915946" points="265.251,282.25 272.25,240.5 267.962,229.268"/><polygon fill="#AA755F" points="245.226,282.25 265.251,282.25 265.792,276.25"/><polygon fill="#282828" points="352.833,200.598 331.167,167.604 294.5,140.375"/><polygon fill="#212121" points="244.833,173.667 284.5,204 325.25,166.5"/><polygon fill="#282828" points="228.5,170.902 259.333,206.667 308.5,154.167"/><polygon fill="#1E1E1E" points="306,182.813 294.5,187.333 345.089,198"/><polygon fill="#1E1E1E" points="250.705,128.694 220.875,98.625 222,134.833"/><polygon fill="#492D27" points="229.125,154.021 250,128 294.5,140.375"/><polygon fill="#1E1E1E" points="231.813,152.007 228.5,170.902 222,134.833"/><polygon fill="#C8D1D5" points="228.5,170.902 231.25,152.75 246.95,185.5"/><polygon fill="#E6EBED" points="231.25,152.75 294.5,187.333 246.95,185.5"/><polygon fill="#1E1E1E" points="309.112,184.5 294.5,187.333 231.25,152.75"/><polygon fill="#282828" points="222,134.833 250,128 231.25,152.75"/><polygon fill="#1E1E1E" points="227.072,71.77 235.79,99.583 242.875,57.875"/><polygon fill="#282828" points="244.417,123.083 227.667,73.167 220.875,98.625"/><polygon fill="#1E1E1E" points="215.857,48.68 242.875,57.875 230.875,45.625"/><polygon fill="#1E1E1E" points="227.667,73.167 219.333,52.333 214.333,56.833"/><polygon fill="#282828" points="217.167,48.5 227.667,73.167 242.875,57.875"/><polygon fill="#3F3F3F" points="219.406,52.453 214.333,56.833 196.5,51.333"/><polygon fill="#4C4C4C" points="196.5,51.333 219.243,52.594 217.167,48.5"/><polygon fill="#663E33" points="262.333,167.667 294.5,140.375 231.25,152.75"/><polygon fill="#492D27" points="309.112,184.5 294.5,140.375 262.333,167.667"/><polygon fill="#663E33" points="348,194.833 294.5,140.375 308.5,184.618"/><polygon fill="#492D27" points="348,194.833 294.5,140.375 327.75,169.125"/><polygon fill="#1E1E1E" points="348,194.833 280.5,176.333 352.833,200.598"/><polygon fill="#4C4C4C" points="232.477,54.083 227.072,54.542 226.079,51.75"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#75936A" points="49.233,181.274 150.087,173.628 53.25,184.471"/><polygon fill="#627F55" points="152.857,183.321 53.25,184.471 140.25,174.083"/><polygon fill="#5F755A" points="151,171.59 161.749,179.277 200.25,165.25"/><polygon fill="#75936A" points="159.583,188.25 220.499,189.78 140.25,174.083"/><polygon fill="#5F755A" points="49.233,170.503 49.233,181.274 63.114,180.451"/><polygon fill="#586D54" points="200.25,165.25 161.749,178.42 217.917,189.75"/><polygon fill="#586D54" points="142.333,166.083 151.25,172.252 169.392,169.222"/><polygon fill="#627F55" points="142.333,166.083 161.749,178.42 140.25,174.083"/><polygon fill="#E8E846" points="147.996,175.646 142.94,174.626 143.54,171.59"/><polygon fill="#5F755A" points="200.25,165.25 275.188,188.917 216.375,189.75"/><polygon fill="#586D54" points="247.833,170.136 200.25,165.25 273.75,188.917"/><polygon fill="#5F755A" points="311.583,191.002 386.083,191.468 419.75,181.616"/><polygon fill="#5F755A" points="247.833,170.136 273.75,189.75 290.25,167.917"/><polygon fill="#586D54" points="273.75,188.917 325.5,191.002 290.25,167.917"/><polygon fill="#5F755A" points="347.851,175.701 324.083,191.002 290.25,167.917"/><polygon fill="#586D54" points="419.75,181.616 324.083,191.002 346.417,175.583"/><polygon fill="#586D54" points="463,191.468 419.75,181.616 381.167,191.468"/><polygon fill="#A2BC9B" points="203,180.833 324.083,191.002 217.917,189.75"/><polygon fill="#A2BC9B" points="201.911,180.5 159.583,188.25 217.917,189.75"/><polygon fill="#75936A" points="182.25,196.75 217.917,189.75 196.801,185.491"/><polygon fill="#75936A" points="291.583,186.186 308.25,191.396 279.25,196.75"/><polygon fill="#627F55" points="287.171,171.835 276.997,184.784 308.25,191.396"/><polygon fill="#627F55" points="217.417,189.458 196.667,173.792 185.405,183.001"/><polygon fill="#435140" points="161.994,178.337 159.225,176.492 169.392,169.222"/><polygon fill="#435140" points="207.649,176.492 200.25,165.25 204.686,166.692"/><polygon fill="#435140" points="247.833,170.136 242.986,169.638 264.417,182.687"/><polygon fill="#435140" points="311.061,182.116 290.25,167.917 288.017,170.871"/><polygon fill="#435140" points="342.308,178.42 338.812,180.833 302.5,171.59"/><polygon fill="#3A4437" points="342.308,178.42 390.5,181.616 338.812,180.833"/><polygon fill="#435140" points="415.5,189.125 429.642,185.916 451.25,190.375"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#75614E" points="377.917,243.833 401.75,154.586 374.5,180.667"/><polygon fill="#7C6755" points="400.75,128 352.5,129.167 383.314,185.083"/><polygon fill="#7C6755" points="384,175.76 377.046,227.737 333.5,224.5"/><polygon fill="#6B5747" points="401.75,154.586 382.957,183.554 400.75,128"/><polygon fill="#3F3228" points="397,116.25 400.848,128.292 358.167,117.5"/><polygon fill="#2D241D" points="397.417,116.5 377.115,107.917 358.313,117.813"/><polygon fill="#5E4C3F" points="364.25,143.75 400.848,127.8 352.25,129"/><polygon fill="#44372E" points="400.75,128 352.5,129.167 358.833,117.5"/><polygon fill="#6B5747" points="400.94,127.611 364.25,143.75 394.267,142.999"/><polygon fill="#2D241D" points="307.083,223.167 313.833,242.5 353.833,131.507"/><polygon fill="#75614E" points="352.5,129.167 313.833,242.5 383.314,183.25"/><polygon fill="#44372E" points="401.75,154.586 377.917,243.833 394,243.833"/><polygon fill="#2D241D" points="214.333,225.75 195.677,178.662 240.667,209.136"/><polygon fill="#3F3228" points="348.833,117.5 352.5,129.167 359.67,117.098"/><polygon fill="#44372E" points="400.75,128 395.75,116.25 406.5,116.25"/><polygon fill="#070707" points="368.375,124.156 366.313,120.781 364.25,124.156"/><polygon fill="#070707" points="373.689,129.304 383.314,129.167 378.501,135.858"/><polygon fill="#070707" points="386.5,123.333 388.5,119.781 390.917,123.333"/><polygon fill="#44372E" points="331.25,242.5 313.833,242.5 333.5,225.75"/><polygon fill="#44372E" points="307.083,223.167 322.5,147 348.574,142.667"/><polygon fill="#3F3228" points="307.083,223.167 253.25,216.75 323.667,147"/><polygon fill="#44372E" points="323.667,147 246,226.833 268.73,125.771"/><polygon fill="#3F3228" points="247.167,230.25 268.73,125.771 219.167,132.512"/><polygon fill="#3F3228" points="230.75,239 257.5,239 198.125,161.125"/><polygon fill="#44372E" points="247.167,225.75 176.5,161.125 219.167,132.512"/><polygon fill="#3F3228" points="122.5,237.333 198.125,180.32 176.5,161.125"/><polygon fill="#44372E" points="122.5,237.333 170.167,212.167 201.667,176.302"/><polygon fill="#44372E" points="195.677,237.333 197.348,179.631 220.25,237.333"/><polygon fill="#44372E" points="122.5,237.333 144.486,207.577 92.167,241.167"/><polygon fill="#3F3228" points="92.167,241.167 115.054,226.473 51.833,242.5"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#FFF2BD" points="220.313,78.667 204.333,73.167 187.833,95.5"/><polygon fill="#FFF6D2" points="226.803,87.657 252.002,124.118 219.5,105.887"/><polygon fill="#FFF2BD" points="252.002,124.118 217.817,113.833 222.25,126.75"/><polygon fill="#A5734E" points="316.863,32.431 335.167,21.167 338.634,245.583"/><polygon fill="#915C3F" points="338.634,245.583 317.36,32.126 327.167,256.732"/><polygon fill="#A5734E" points="325,200.25 331.905,178.694 171.25,68.5"/><polygon fill="#915C3F" points="272.837,155.551 152.833,65.063 171.25,68.5"/><polygon fill="#FFF6D2" points="268.5,112.25 268.5,162.5 250.539,122.227"/><polygon fill="#FFF2BD" points="252.002,124.118 268.5,112.25 215.676,77.171"/><polygon fill="#FFF2BD" points="262.362,198.017 268.5,162.5 252.002,124.118"/><polygon fill="#FFF6D2" points="262.167,196.5 270.526,264.667 268.5,162.5"/><polygon fill="#FFF2BD" points="262.167,259.167 262.167,196.5 274.828,294.667"/><polygon fill="#FFF6D2" points="262.167,258.125 274.828,294.667 262.167,288"/><polygon fill="#FFF6D2" points="210.742,50.53 204.333,73.167 226.125,84.11"/><polygon fill="#FFEDA1" points="210.742,50.53 226.125,85.292 242.865,50.902"/><polygon fill="#FFF2BD" points="226.573,59.25 204.333,47 215.875,32.431"/><polygon fill="#FFF6D2" points="215.676,32.496 236.659,32.431 226.573,59.25"/><polygon fill="#FFF2BD" points="236.458,32.432 226.573,59.25 248,48.271"/><polygon fill="#FFF2BD" points="225.5,85.625 242.865,50.902 260.5,67"/><polygon fill="#FFF6D2" points="268.5,112.25 260.5,67 222.424,85.892"/><polygon fill="#FFEEA9" points="246.691,90.961 232.833,84.24 243.667,61.333"/><polygon fill="#FFF0B0" points="246.691,90.961 199.5,103.125 232.833,84.24"/><polygon fill="#333333" points="232.833,42.125 226.573,42.625 237.333,36.083"/><polygon fill="#383838" points="220.313,41.667 222.25,49.125 219.5,46.75"/><polygon fill="#333333" points="229.417,54.417 223.375,54.417 220.313,41.667"/><polygon fill="#333333" points="214.125,35.375 220.313,42.125 226.573,42.625"/><polygon fill="#333333" points="232.833,42.125 230.583,49.125 233.583,46.583"/><polygon fill="#383838" points="229.417,54.417 232.833,42.125 220.313,42.125"/><polygon fill="#CCA183" points="223.344,44.375 224.188,45.966 222.438,45.966"/><polygon fill="#CCA183" points="229.292,44.375 230.083,45.966 228.542,45.966"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#181413" points="127.708,91.577 135.789,182.796 106.25,200.074"/><polygon fill="#211B1A" points="249.962,80.97 204.41,112.082 273.844,240.946"/><polygon fill="#181413" points="300.114,272.248 340.615,220.376 223.572,193.385"/><polygon fill="#211B1A" points="185.115,258.317 189.945,229.985 126.315,178.058"/><polygon fill="#211B1A" points="314.516,41.873 203.229,113.127 275.777,22.465"/><polygon fill="#2B2322" points="203.229,270.578 204.413,108.822 264.286,203.422"/><polygon fill="#2B2322" points="226.637,51.262 203.229,114.428 275.777,22.465"/><polygon fill="#211B1A" points="340.615,216.479 300.114,272.248 344.536,272.248"/><polygon fill="#211B1A" points="254.783,270.578 264.375,202.795 203.229,270.578"/><polygon fill="#211B1A" points="205.179,111.734 168.952,49.59 226.637,51.262"/><polygon fill="#2B2322" points="168.952,49.59 127.708,91.577 205.626,111.389"/><polygon fill="#2B2322" points="141.642,258.317 126.315,178.058 186.229,258.317"/><polygon fill="#2B2322" points="126.315,178.058 191.018,234.317 127.708,91.577"/><polygon fill="#211B1A" points="205.179,110.69 203.461,270.578 127.708,91.577"/><polygon fill="#211B1A" points="344.594,217.566 314.234,41.787 267.699,204.991"/><polygon fill="#211B1A" points="344.662,217.158 307.917,240.946 267.593,204.22"/><polygon fill="#181413" points="259.274,95.378 236.887,91.577 250.731,78.95"/><polygon fill="#2B2322" points="267.788,205.647 314.516,41.873 248.095,72.097"/><polygon fill="#181413" points="384.686,82.473 363.395,93.33 370.15,76.119"/><polygon fill="#2B2322" points="313.897,41.577 344.423,218.211 369.665,68.238"/><polygon fill="#181413" points="281.908,138.765 346.56,138.765 312.376,49.59"/><polygon fill="#211B1A" points="372.384,72.978 346.56,138.765 312.376,49.59"/><polygon fill="#211B1A" points="246.98,74.392 312.376,49.59 281.908,138.765"/><polygon fill="#B7AB8F" points="284.88,138.765 340.615,138.765 332.812,201.188"/><polygon fill="#C1B69A" points="332.812,201.188 293.054,201.188 284.88,138.765"/><polygon fill="#E2D9C9" points="293.054,201.188 332.812,201.188 312.933,175.3"/><polygon fill="#C1B69A" points="223.572,25.066 241.184,67.679 228.449,65.335"/><polygon fill="#AFA07E" points="258.72,69.939 250.856,81.534 228.449,65.335"/><polygon fill="#C1B69A" points="394.399,63.523 398.833,25.066 382.416,67.1"/><polygon fill="#AFA07E" points="369.364,80.67 394.399,63.523 362.442,69.103"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#7A695E" points="99.5,231.167 194,150.25 194,204.886"/><polygon fill="#1C1C1C" points="289.5,104.667 265.25,75 308.667,92.25"/><polygon fill="#6B7282" points="241.833,132.5 303.167,157.864 296.697,121.933"/><polygon fill="#5D6370" points="297,122.823 252.704,110.225 241.833,132.5"/><polygon fill="#1C1C1C" points="296.535,122.705 290.167,102.75 252.25,111.5"/><polygon fill="#232323" points="290.5,104 265.25,75 252.25,111.5"/><polygon fill="#232323" points="307.5,93 298.445,74.826 265.25,75"/><polygon fill="#1C1C1C" points="298.606,75.15 265.25,75 283.389,66.255"/><polygon fill="#5D6370" points="303.167,157.864 273.297,145.512 286.375,196.167"/><polygon fill="#838384" points="219.75,237.083 286.375,196.167 193.15,226.057"/><polygon fill="#82756E" points="194,226.5 166.956,212.407 257.974,154.952"/><polygon fill="#6B7282" points="274.625,146.061 210.487,181.075 286.375,196.167"/><polygon fill="#5D6370" points="286.375,196.167 194,226.5 227.181,183.312"/><polygon fill="#232323" points="166.956,212.407 207.833,205.464 259.687,154.216"/><polygon fill="#C93A3A" points="223.034,242.013 232.503,241.485 234.313,267.833"/><polygon fill="#E44140" points="264.5,264.098 231.049,260.363 234.313,267.833"/><polygon fill="#E44140" points="227.181,247.43 232.503,241.485 236.25,269.5"/><polygon fill="#C93A3A" points="236.25,269.5 264.5,270.236 232.75,260.75"/><polygon fill="#757677" points="246.555,220.621 218.813,236.5 228,248.5"/><polygon fill="#EFEFEF" points="302.197,82.285 301.75,86.5 284.63,67.623"/><polygon fill="#EFEFEF" points="297.438,123.875 259.687,113.382 295.335,117.931"/><polygon fill="#E2E2E2" points="286.375,69.547 265.25,75 284.63,67.623"/><polygon fill="#E2E2E2" points="272.5,83.913 284.63,96.5 279.5,86.5"/><polygon fill="#C93A3A" points="319.5,93 302.106,96.5 298.333,92.5"/><polygon fill="#EFEFEF" points="274.94,71.311 269.372,73.431 257.974,95.428"/><polygon fill="#BA4F4F" points="294,80.25 290.5,82.285 294,83.913"/><polygon fill="#61676D" points="275.469,146.41 193.893,150.341 241.833,132.5"/><polygon fill="#6E7072" points="274.625,146.061 194,150.25 163,207"/><polygon fill="#838384" points="207,204 163,207 257.974,154.952"/><polygon fill="#E44140" points="298.75,93 302.197,82.285 319.5,93"/></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="500px" height="300px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve"><polygon fill="#5C6D1F" points="372.25,180.75 247.75,203 318,215.167"/><polygon fill="#1C1C1C" points="366.5,182.75 247.75,203 319,210.441"/><polygon fill="#353535" points="356.25,183.25 381.918,162.5 407.585,179.867"/><polygon fill="#1C1C1C" points="335.622,195.664 313.674,156.735 247.75,203"/><polygon fill="#444444" points="154.5,199.696 119.436,219.386 126.215,182.13"/><polygon fill="#5C6D1F" points="247.75,203 172.833,215.167 318,215.167"/><polygon fill="#667529" points="247.75,203 172.833,215.167 151.046,199.586"/><polygon fill="#444444" points="309.75,148.75 386,150 337.833,135.456"/><polygon fill="#3A3A3A" points="386,150 370.5,136.75 329.167,133.75"/><polygon fill="#3A3A3A" points="386,150 387.5,171.5 321,146.25"/><polygon fill="#444444" points="331.333,149.104 340.263,192.75 387.5,171.5"/><polygon fill="#353535" points="340.263,192.75 239.833,146.349 330.25,135.456"/><polygon fill="#444444" points="328,250.5 307.224,207.376 286.448,234.091"/><polygon fill="#3A3A3A" points="289,186.792 286.448,234.091 316.5,205.833"/><polygon points="357.583,153.375 360.083,160.568 351.75,160.568"/><polygon fill="#444444" points="266.853,183.089 299.417,162.5 316.519,206.422"/><polygon fill="#5C6D1F" points="335.622,133.75 241.25,207.376 305.911,172.875"/><polygon fill="#EAA949" points="214.5,42.833 241.25,52.5 262.823,74.508"/><polygon fill="#94A553" points="262.823,74.508 303.646,167.75 226.115,84.836"/><polygon fill="#94A553" points="226.115,84.836 223.291,61.004 173.982,99.503"/><polygon fill="#859E3E" points="173.982,99.503 185,209 226.115,84.836"/><polygon fill="#7B8E33" points="357.583,135.456 346.167,135.456 241.25,52.5"/><polygon fill="#DB9435" points="328,141 241.25,52.5 346.167,135.456"/><polygon fill="#859E3E" points="303.646,167.75 328,141 262.823,74.508"/><polygon fill="#859E3E" points="247.75,203 303.646,167.75 226.115,84.836"/><polygon fill="#94A553" points="185,209 226.115,84.836 247.75,203"/><polygon fill="#94A553" points="173.982,99.503 185,209 128,193.196"/><polygon fill="#859E3E" points="128,193.196 173.982,99.503 104.5,153.752"/><polygon fill="#7B8E33" points="104.5,153.752 223.291,61.004 122.5,127.833"/><polygon fill="#859E3E" points="214.5,42.833 226.115,84.836 262.823,74.508"/></svg>'
                 ];

var FirefoxPath = ['siberiancrane',
                   'himalayanwolf',
                   'barasingha',
                   'narcondamhornbill',
                   'indianass',
                   'whitebelliedheron',
                   'greatindianbustard',
                   'tibetianantelope',
                   'redpanda',
                   'roselineshark',
                   'indianbear',
                   'markhor',
                   'forestowlet',
                   'redheadedvulture',
                   'indianelephant',
                   'nicobarflyingfox',
                   'guntherbushfrog',
                   'nilgiritahr',
                   'liontailedmacaque',
                   'sociablelapwing',
                   'nilgirimarten',
                   'indianrhino',
                   'dhole',
                   'bengalflorican',
                   'gharial',
                   'smoothcoatedotter',
                   'goldenlangur',
                   'yak',
                   'himalayanquail',
                   'assamroofedturtle'
                  ];

var currentSelection = 0;
var shuffle;
var shuffleOn = false;
var speciesCount = speciessvg.length;
var shine;
var blink;
var movespecies;
var moveone;
var movetwo;

var change = function(points, colors, type) {
  var animateshards = function(shard, i, speed) {
    var polygon = 'polygon(' + points[i][0][0] + '% ' + points[i][0][1] + '%,' + points[i][1][0] + '% '
                  + points[i][1][1] + '%,' + points[i][2][0] + '% '+ points[i][2][1] + '%)';
    setTimeout(function(){
      console.log(points[i]);
      shard.css({
          "-moz-clip-path": polygon,
          "clip-path": polygon,
          "-ms-clip-path": polygon,
          "background": colors[i],
          "z-index": i-31,
          "-webkit-clip-path": polygon,
            });
    }, speed);
  };

  $('.shard').each(function(i, obj) {
        animateshards($(this), i, i*type);
  });
};

var prepshard = function(AIsvg, ht, wt) {
  var points = [];
  var colors = [];
  var height = ht;
  var width = wt;

  var extractPoints = function (shardstring) {
    var sidestring = shardstring.split(" ");
    var percentpoints = [];
    var i;

    for( i = 0; i < sidestring.length; i++ ) {
      var point = sidestring[i].split(",");
      point[0] = parseFloat(point[0])/(width/100);
      point[1] = parseFloat(point[1])/(height/100);
      percentpoints.push(point);
    }
    return percentpoints;
  }

  var setColorsandPoints = function(shardstring) {
      colors.push(shardstring.substr(shardstring.indexOf("#"),7));
      points.push(extractPoints(shardstring.substring(shardstring.lastIndexOf("point")+8,shardstring.lastIndexOf('"'))));
  };

  var buildshards = function (svgstring) {
      var polygonElementPos = svgstring.lastIndexOf("<polygon");
      if ( polygonElementPos === -1 ) {
        return;
      }
      else {
        setColorsandPoints(svgstring.substring(polygonElementPos+8, svgstring.lastIndexOf("/>")+2));
        buildshards(svgstring.substring(0,polygonElementPos));
      }
  };
  buildshards(AIsvg);
  return [points, colors];
};

var shimmer = function () {
  var shineshards = function(shard, i) {
    setTimeout(function(){
      shard.addClass('shine');
    },i*20);
    setTimeout(function(){
      shard.removeClass('shine');
    },i*100);
  };

  $('.shimmerlayer').each(function(i, obj) {
        shineshards($(this),i+1);
  });
};

var blinkHeading = function(){
  $('#intro-change').fadeOut(300,function(){
    $('#intro-change').css('color', bckcolor[(currentIntro)%4]);
    $('#intro-change').html(intronames[(currentIntro)%4]).fadeIn(300, function(){
      if( currentIntro === 0 ){
        $('#intro-change').fadeOut(300);
      }
      else {
        currentIntro++;
      }
    });
  });
};

var showGreeting = function(){
  currentIntro = 0;
  clearInterval(blink);
  $('#intro-change').fadeOut(300);
  $('#introbtn').fadeOut(500);
  $('.introbody').fadeIn(2500);
};

var introHideElements = function(){
  $('#overlay').hide();
  $('#aboutwrapper').hide();
  $('.circlebtn').hide();
  $('#name').hide();
  $('#counter').hide();
  $('.introbody').hide();
  $('#introbtn').hide();
};

var changeFirefoxImage = function(image) {
  $('.wrapper').fadeOut(500, function(){
    $('.wrapper').css('background-image', 'url(' + image + ')');
    $('.wrapper').fadeIn(500);
  });
};

var setIndia = function(){
  if(isFirefox) {
    changeFirefoxImage('images/india.svg');
  }
  else {
    var pointsandcolors = prepshard(indiashard, 300, 500);
    change(pointsandcolors[0].reverse(),pointsandcolors[1].reverse(), 30);
  }
};

var showTriangle = function() {
  if(isFirefox) {
    changeFirefoxImage('images/intro.svg');
  }
  else {
    setTimeout(function(){
      var pointsandcolors = prepshard(introTriangle, 300, 500);
      change(pointsandcolors[0].reverse(),pointsandcolors[1].reverse(), 40);
      changebodybackground('#ecf0f1');
    }, 100);
  }
};

var BeginShowcase = function() {
  setTimeout(function(){
    $('#intro-heading').fadeOut(1000);
    $('.introbody').fadeOut(1000);
    setCurrentValues();
    $('.circlebtn').fadeIn(1000);
    $('#name').fadeIn(1000);
    $('#counter').fadeIn(1000);
  },3000);
};

var setAboutDetails = function() {
  $('#detailheader').html(aboutHeader);
  $('#detailbody').html(aboutBody);
};

var setInfoDetails = function() {
  $('#detailheader').html(name[currentSelection]);
  $('#detailbody').html(speciesdetail[currentSelection]);
};

var shuffleoff = function() {
  if ( shuffleOn === true ) {
    clearInterval(shuffle);
    shuffleOn = false;
    $('#shuffle').removeClass('shuffleon');
  }
};

var changebodybackground = function(color) {
  $('body').css('background',color);
};

var changenumber = function(number){
  $('#counter').fadeOut(500,function(){
    $(this).html((number+1)+'/'+(speciesCount));
    $('#counter').fadeIn(500);
  });
};

var changename = function(name){
  $('#name').fadeOut(500,function(){
    $(this).html(name);
    $('#name').fadeIn(500);
  });
};

var aboutView = function(){
    clearInterval(shine);
    shuffleoff();
    $('#overlay').fadeIn(500);
    $('#aboutwrapper').fadeIn(700);
    setAboutDetails();
};

var infoView = function(){
  clearInterval(shine);
  shuffleoff();
  $('#overlay').fadeIn(500);
  $('#aboutwrapper').fadeIn(700);
  setInfoDetails();
};

var PrevSelection = function(){
  shuffleoff();
  if( currentSelection === 0 ) {
    currentSelection = speciesCount - 1;
  }
  else {
    currentSelection = currentSelection - 1;
  }
};

var NextSelection = function(){
  shuffleoff();
  if( currentSelection === speciesCount - 1 ) {
    currentSelection = 0;
  }
  else {
    currentSelection = currentSelection + 1;
  }
};

var shuffleSpecies = function() {
  currentSelection = Math.random() * speciesCount >> 0;
  setCurrentValues();
};

var setCurrentValues = function() {
  if(isFirefox) {
    changeFirefoxImage('images/' + FirefoxPath[currentSelection] + '.svg');
  }
  else {
    var pointsandcolors = prepshard(speciessvg[currentSelection], 300, 500);
    change(pointsandcolors[0].reverse(),pointsandcolors[1].reverse(), 30);
  }
  changebodybackground(bckcolor[currentSelection]);
  changenumber(currentSelection);
  changename(name[currentSelection]);
};

var setupStart = function(){
    introHideElements();
    blink = setInterval(blinkHeading, 1000);
    showTriangle();
    setTimeout(function(){
      $('#introbtn').fadeIn(500);
    },1500);
};

$(window).load(function() {
    // $('.messageholder').hide();
    if(isIE === true) {
      $('#browsermessage').text('Looks like you are using Internet Explorer. The features used here are not supported by Internet Explorer. Kindly install a Webkit based browser such as Google Chrome or Apple Safari. Alternatively try viewing this page on your smartphone, it should work there.');
      $('#acceptbtn').hide();
      $('.messageholder').fadeIn(500);
      return;
    }
    if(isFirefox === true) {
      $('#browsermessage').text('You are using a non - webkit based browser. If you proceed, you will be unable to view the trasistions taking place. It is advised you use a webkit browser(Chrome, Opera, Safari and almost any mobile browser)');
      $('.messageholder').fadeIn(500);
    }
    else {
    	$('.load-screen').slideUp(500);
      setupStart();
    }
});

$('#acceptbtn').click(function() {
  $('.load-screen').slideUp(500);
  $('.messageholder').fadeOut(250);
  setupStart();
});

$('#introbtn').click(function() {
    showGreeting();
    setIndia();
    shine = setInterval(shimmer, 4000);
    BeginShowcase();
});

$('#about').click(function(){
    aboutView();
});

$('#info').click(function(){
    infoView();
});

$('#shuffle').click(function(){
    if( shuffleOn === false ) {
      shuffleSpecies();
      shuffle = setInterval(shuffleSpecies, 2500);
      shuffleOn = true;
      $('#shuffle').addClass('shuffleon');
    }
    else {
      shuffleoff();
    }
});

$('#prev').click(function(){
    PrevSelection();
    setCurrentValues();
});

$('#next').click(function(){
    NextSelection();
    setCurrentValues();
});

$('#closebtn').click(function(){
  $('#aboutwrapper').fadeOut(300);
  $('#overlay').fadeOut(500);
  shine = setInterval(shimmer, 4000);
});

})();
