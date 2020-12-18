//all the layer name
//base map
//china_basemap_gdp, turn on on  condition
//china_basemap,always on
//china_basemap_gdp_label, always on
//china_village_satellite, always on

//national village info
//2020_E_Village
//2020_E_Village_label, always on
//village_r_1m, always on
//nearby-all.always on
//nearby-all_label. always on

//national village public asset density
//retail_density
//school_density
//park_density
//hospital_density

//2000 village nearby dots
//nearby-taobao
//nearby-clinic
//nearby-retail
//nearby-hospital
//nearby-factory
//nearby-school
//nearby-park

//selected 50 village info
//selected-villages
//selected-villages_label
//selected-villages-poverty
//selected-villages-heritage
//selected-villages-beau
//selected-nearby,awlays on
//selected-nearby_label,always on
//selected-villages-school
//selected-villages-park
//selected-villages-hospital
//selected-villages-retail
//selected-villages-clinic
//selected-villages-plaza
//selected-villages-mobile

//china_province_label,always on
//rural_mobile
//freight
//ecommerce
//mobile_computer_ratio
//rural_wage_business
//rural_income_wage
//rural_income_b
//rural_income




var config = {
    style: 'mapbox://styles/xliuxliu/ckihdylnl61rv19p9dkqxsf01',
    accessToken: 'pk.eyJ1IjoieGxpdXhsaXUiLCJhIjoiY2tnZ2Zpd3piMHYycTJ5cGl4czZleXZpayJ9.5egPi5UdGMf6Kczfj47ahg',
    showMarkers: false,
    theme: 'light',
    alignment: 'center',
    width:50,

    chapters: [
      {
        id: '1',
        title: 'Introduction',
        description:"Despite the fast urbanization process in the past three decades, China still has 39.4% population living in the rural area (this number drops from 89.36% in 1949 to 39.4% in 2019). The lack of arable land per capita has perpetuated despite the shrinking rural population. By 2019, the arable land per capita in the rural area is still less than half of the world average. As a consequence, rural areas have always fought to find alternate development other than the traditional land-based agriculture economy.<br><br>As the land v.s population dilemma perpetuates, China's rural villages would always need to change, to evolve, and to reconfigure their setting. It is clear that villages will no longer be independent of the rest of the world, and their transformations are deeply connected to the behavior of the urban consumers, the Chinese market, and even the global economy at large.<br><br>Since the land reform in 1978, there has been a wide range of new types of rural villages. For example, there are factory villages clustered in Long River Delta and Pearl River Delta as these two regions became the base of the world manufactures. In recent years, there are also villages leveraging their proximity to the first-tier cities, seeking to develop local tourism, such as the Moganshan cluster northwest of Shanghai. In both cases, villages become more dependent on cities. Although there have been many success stories of how a poor dying village gained wealth overnight through such transformations, the long-term impact remains unclear.",
        // image: 'images/export-map.jpg',//change to text?
        location: {
            center: [105, 37.9],
            zoom: 4,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"china_basemap_gdp",opacity:0},
            {layer:"china_basemap",opacity:0},
            {layer:"china_province_label",opacity:0},
            {layer:"2020_E_Village_label",opacity:0},
            {layer:"nearby-all_label",opacity:0},
            {layer:"selected-nearby_label",opacity:0},
            {layer:"selected-nearby",opacity:0},
            {layer:"nearby-all",opacity:0},
            {layer:"village_r_1m",opacity:0},
            // {layer:"selected-village_r_1m",opacity:0.2},

            {layer:"2020_E_Village",opacity:0},
            {layer:"retail_density",opacity:0},
            {layer:"school_density",opacity:0},
            {layer:"park_density",opacity:0},
            {layer:"hospital_density",opacity:0},

            // {layer:"nearby-taobao",opacity:0},
            // {layer:"nearby-clinic",opacity:0},
            // {layer:"nearby-retail",opacity:0},
            // {layer:"nearby-hospital",opacity:0},
            // {layer:"nearby-factory",opacity:0},
            // {layer:"nearby-school",opacity:0},
            // {layer:"nearby-park",opacity:0},

            {layer:"selected-villages",opacity:0},
            {layer:"selected-villages-poverty",opacity:0},
            {layer:"selected-villages-heritage",opacity:0},
            {layer:"selected-villages-beau",opacity:0},

            {layer:"selected-villages-school",opacity:0},
            {layer:"selected-villages-park",opacity:0},
            {layer:"selected-villages-hospital",opacity:0},
            {layer:"selected-villages-retail",opacity:0},
            {layer:"selected-villages-clinic",opacity:0},
            {layer:"selected-villages-plaza",opacity:0},
            {layer:"selected-villages-mobile",opacity:0},
            //statistics
            {layer:"rural_mobile",opacity:0},
            {layer:"freight",opacity:0},
            {layer:"ecommerce",opacity:0},
            {layer:"mobie_computer_ratio",opacity:0},
            {layer:"rural_wage_business",opacity:0},
            {layer:"rural_income_wage",opacity:0},
            {layer:"rural_income_b",opacity:0},
            {layer:"rural_income",opacity:0},
          ],
        onChapterExit: [

          ]
      },
      {
        id: '2',
        title: 'Research Proposal',
        description: "Rural China has been under radical transformation since the land reform in 1978. In the past four decades, we have witnessed the growth of factory villages, tourist villages, suburban villages, and urban villages. As e-commerce becoming the fastest growing market and the network coverage of rural areas quadrupled from 2007 to 2013, reaching 46% in 2020, many villages became heavily invested in virtual business. Today, there are roughly over 5000 thousand villages that rely on this internet-based economy, yet the correlation between digital development and social welfare and cultural construction remains unclear. <br><hr>X: I'm looking at how the household space and public ground in the rural area are being transformed by e-commerce practice in villages producing culture/crafts based products. <br><br>Y: The e-commerce model is reshaping how villagers inhabit their private and public spaces. <br><br>Z: To reflect the relationship between the spatial morphology and culture construction, exploring the limits and potential of the case study villages' current spatial arrangement.",
        // image: 'images/export-map.jpg',//change to text?
        location: {
            center: [105, 37.9],
            zoom: 4,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [

          ],
        onChapterExit: [
          ]
      },
      {
        id: '3',
        title: 'Rural China in 2020 - E-Commerce Development',
        description: "E-commerce refers to the activity of electronically buying or selling of products on online service or over the internet. The development of E-commerce is highly dependent on technological groundbreakings such as fast internet, mobile apps, and digital currency. In 2020, the global E-commerce markets surpass two trillion threshold, and China’s E-commerce market size is estimated to be growing at an annual rate of 22.5% over the past few years which makes a total market size of $1.8 trillion.<br><br>The development of E-commerce business resembles the pattern of the regional economic development, with Long River Delta and Pearl River Delta top the list.<br><br>The industrial, especially the manufacturing background provides a strong foundation for the E-commerce development in these two regions.",
        // image: 'images/export-map.jpg',//change to text?
        location: {
            center: [105, 37.9],
            zoom: 4,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"china_province_label",opacity:0.2},
            {layer:"2020_E_Village_label",opacity:0.8},
            {layer:"nearby-all_label",opacity:1},
            {layer:"selected-nearby_label",opacity:1},

            {layer:"ecommerce",opacity:1},

          ],
        onChapterExit: [
            {layer:"ecommerce",opacity:0},
          ]
      },
      {
        id: '4',
        title: "Distribution of Taobao Villages",
        // image: 'img/tb1.jpg',
        // imageCredit: "<a href:'https://www.alizila.com/an-introduction-to-taobao-villages/'>aliResearch taobao villages</a>",
        description: "E-commerce villages in general refer to villages that are heavily involved in E-commerce business. However, with such a broad definition, E-commerce villages encompass a wide variety of village types.<br><br>Since 2013, Alibaba Group has been publishing an annual list of Taobao Villages.<br>As defined by AliResearch, Alibaba Group’s research arm, a Taobao Village is a cluster of rural e-tailers within an administrative village where:<br>1) Residents got started in E-commerce spontaneously primarily with the use of Taobao Marketplace;<br>2)Total annual e-commerce transaction volume is at least RMB10 million ($1.6 million);<br>3)At least 10% of village households actively engage in e-commerce or at least 100 active online shops have been opened by villagers.<br><br>By 2020, there are over 5400 Taobao Villages (pink dots) in China, amounting 1% of all rural villages.<br><br>The distribution of these villages shows a pattern of clustering along the east coast cities and scattering in inland provinces.<br><br>However, in this extensive list, many villages, especially those located in the traditional industrial areas, already have a strong industrial background.",
        location: {
            center: [105, 37.9],
            zoom: 4,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"ecommerce",opacity:1},
            {layer:"2020_E_Village",opacity:1},
          ],
        onChapterExit: [
            {layer:"ecommerce",opacity:0},
            {layer:"2020_E_Village",opacity:0},
          ]
      },
      {
        id: '5',
        title: "Rural China in 2020 - Digitalization",
        image: 'img/TBV_Network.png',
        // imageCredit: "",
        description: "Under the trend of digitalization, China began to implement digital infrastructure in rural areas. From 2007 to 2020, the rural network coverage grew from 7% to 46%. Mobile device per household in rural area was only 0.04 in 2000, and it increases to 2.6 in 2019.<br><br>Less developed areas, such as Gansu, Qinghai, Guizhou, Yunnan, and Guangxi, have higher mobile device per household.",
        location: {
            center: [105, 37.9],
            zoom: 4,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"rural_mobile",opacity:1},
            {layer:"2020_E_Village",opacity:0.5},
          ],
        onChapterExit: [
            {layer:"rural_mobile",opacity:0},
            {layer:"2020_E_Village",opacity:0},
          ]
      },
      {
        id: '6',
        title: "Rural China in 2020 - Digitalization",
        // image: 'img/wantou.gif',
        // imageCredit: "",
        description: "The distribution of Taobao Villages correlates more with the ratio of mobile device to computer per household. Zhejiang, Shandong, and Hebei all have higher ratio, which means they have closer amount of mobile devices and computer in each rural household.<br><br>The access to computer is a key for developing local e-commerce businesses.",
        location: {
            center: [105, 37.9],
            zoom: 4,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"mobie_computer_ratio",opacity:1},
            {layer:"2020_E_Village",opacity:0.5},
          ],
        onChapterExit: [
            {layer:"mobie_computer_ratio",opacity:0},
            {layer:"2020_E_Village",opacity:0},
          ]
      },
      {
        id: '7',
        title: "Rural China in 2020 - Income Distribution",
        // image: 'img/wantou.gif',
        // imageCredit: "",
        description: "for rural residents, the income is from mainly two sources:wages/salaries and business.<br><br>the net income per capita of rural area ranges from 10,000 yuan to 30,000 yuan.<br><br>The richest rural residents are in Zhejiang and Jiangsu. These two provinces are the forerunners of e-commerce villages as well.",
        location: {
            center: [105, 37.9],
            zoom: 4,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"rural_income",opacity:1},
            {layer:"2020_E_Village",opacity:0.5},
          ],
        onChapterExit: [
            {layer:"rural_income",opacity:0},
            {layer:"2020_E_Village",opacity:0},
          ]
      },
      {
        id: '8',
        title: "Rural China in 2020 - Income Distribution - Business",
        // image: 'img/wantou.gif',
        // imageCredit: "",
        description: "Isolating the income from business, it shows a different pattern: the distribution is less polarized. Rural residents in Zhejiang, Jiangsu, Shanxi, Guangdong and Hebei have relative higher income from business.",
        location: {
            center: [105, 37.9],
            zoom: 4,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"rural_wage_business",opacity:1},
            {layer:"2020_E_Village",opacity:0.5},
          ],
        onChapterExit: [
            {layer:"rural_wage_business",opacity:0},
            {layer:"2020_E_Village",opacity:0},
          ]
      },
      {
        id: '9',
        title: "Rural China in 2020 - Income Distribution - Wages/Salaries",
        // image: 'img/wantou.gif',
        // imageCredit: "",
        description: "Isolating the income from wages and salaries, it reflects a similar pattern as the net income, which means wages and salaries is the major contributing factor to the net income of rural residents.<br><br>Wages and salaries income also suggests the distribution of larger business such as factories.<br><br>Zhejiang, Jiangsu, and Guangdong have the highest income. These provinces also have a strong industrial history. It's likely that the Taobao Villages in these regions are a form of continuation of factory villages.<br><br>On the other hand, Shandong and Henan have relative lower income from wages and salaries. Taobao Villages in these two provinces are likely family run and small in size.",
        location: {
            center: [105, 37.9],
            zoom: 4,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"rural_income_wage",opacity:1},
            {layer:"2020_E_Village",opacity:0.5},
          ],
        onChapterExit: [
            {layer:"rural_income_wage",opacity:0},
            {layer:"2020_E_Village",opacity:0},
          ]
      },
      {
        id: '10',
        title: "Rural China in 2020 - Income Distribution - Wages/Business Ratio",
        // image: 'img/wantou.gif',
        // imageCredit: "",
        description: "Compare the income from wages/salaries to the income from business, the key Taobao Villages clustering regions show different levels. Zhejiang, Guangdong, Jiangsu, and Hebei have more weight on wages/salaries, whilst Shandong, Henan, and Fujian have more weight on business.",
        location: {
            center: [105, 37.9],
            zoom: 4,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"rural_wage_business",opacity:1},
            {layer:"2020_E_Village",opacity:0.5},
          ],
        onChapterExit: [
            {layer:"rural_wage_business",opacity:0},
            {layer:"2020_E_Village",opacity:0},
          ]
      },
      {
        id: '11',
        title: "E-Commerce Villages - Industrial",
        image: 'img/junpu.gif',
        // imageCredit: "",
        description: "Junpu Village is one of these industrial E-commerce village.",
        location: {
            center: [113.578, 22.8],
            zoom: 8,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"china_basemap_gdp",opacity:0.3},
            {layer:"2020_E_Village",opacity:1},
          ],
        onChapterExit: [
            {layer:"china_basemap_gdp",opacity:0},
            {layer:"2020_E_Village",opacity:0},
          ]
      },
      {
        id: '12',
        title: "E-Commerce Villages - Industrial",
        image: 'img/shiputou.gif',
        // imageCredit: "",
        description: "Shiputou village",
        location: {
            center: [120.26, 30.34],
            zoom: 8,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"china_basemap_gdp",opacity:0.3},
            {layer:"2020_E_Village",opacity:1},
          ],
        onChapterExit: [
            {layer:"china_basemap_gdp",opacity:0},
            {layer:"2020_E_Village",opacity:0},
          ]
      },
      {
        id: '13',
        title: "E-Commerce Villages - Cultural",
        image: 'img/nanshishan.gif',
        // imageCredit: "",
        description: "zoom into Henan",
        location: {
            center: [113.56, 34.538],
            zoom: 8,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"china_basemap_gdp",opacity:0.3},
            {layer:"2020_E_Village",opacity:1},
          ],
        onChapterExit: [
            {layer:"china_basemap_gdp",opacity:0},
            {layer:"2020_E_Village",opacity:0},
          ]
      },
      {
        id: '14',
        title: "E-Commerce Villages - Cultural",
        image: 'img/wantou.gif',
        // imageCredit: "",
        description: "zoom into Shandong",
        location: {
            center: [116.987, 36.968],
            zoom: 8,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"china_basemap_gdp",opacity:0.3},
            {layer:"2020_E_Village",opacity:1},
          ],
        onChapterExit: [
            {layer:"china_basemap_gdp",opacity:0},
            {layer:"2020_E_Village",opacity:0},
          ]
      },

    ]
}
