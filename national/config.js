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
//mobie_computer_ratio
//rural_wage_business
//rural_income_wage
//rural_income_b
//rural_income




var config = {
    style: 'mapbox://styles/xliuxliu/ckihdylnl61rv19p9dkqxsf01',
    accessToken: 'pk.eyJ1IjoieGxpdXhsaXUiLCJhIjoiY2tnZ2Zpd3piMHYycTJ5cGl4czZleXZpayJ9.5egPi5UdGMf6Kczfj47ahg',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    width:50,

    chapters: [
      {
        id: '1',
        title: 'Analysis of public asset distribution of 5400+ Taobao Villages',
        description:"For each village, I researched the location and the total count of different types of public assets including hospitals,  schools, and  parks.",
        // image: 'images/export-map.jpg',//change to text?
        location: {
            center: [105, 37.9],
            zoom: 3.61,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            // {layer:"china_province_label",opacity:1},
            // {layer:"2020_E_Village_label",opacity:1},
            // {layer:"nearby-all_label",opacity:1},
            // {layer:"selected-nearby_label",opacity:1},
            // {layer:"selected-nearby",opacity:1},
            // {layer:"nearby-all",opacity:1},
            {layer:"village_r_1m",opacity:0},
            {layer:"china_basemap_gdp",opacity:0},
            // {layer:"china_basemap",opacity:0},

            {layer:"2020_E_Village",opacity:0},
            {layer:"retail_density",opacity:0},
            {layer:"school_density",opacity:0.2},
            {layer:"park_density",opacity:0.2},
            {layer:"hospital_density",opacity:0.2},

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
            // //statistics
            {layer:"rural_mobile",opacity:0},
            {layer:"freight",opacity:0},
            {layer:"ecommerce",opacity:0},
            {layer:"mobie_computer_ratio",opacity:0},
            {layer:"rural_income_wage",opacity:0},
            {layer:"rural_income_b",opacity:0},
            {layer:"rural_income",opacity:0},
            {layer:"rural_wage_business",opacity:0},

          ],
        onChapterExit: [
            {layer:"village_r_1m",opacity:0},
            {layer:"china_basemap_gdp",opacity:0},
            // {layer:"china_basemap",opacity:0},

            {layer:"2020_E_Village",opacity:0},
            {layer:"retail_density",opacity:0},
            {layer:"school_density",opacity:0},
            {layer:"park_density",opacity:0},
            {layer:"hospital_density",opacity:0},

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

            {layer:"rural_mobile",opacity:0},
            {layer:"freight",opacity:0},
            {layer:"ecommerce",opacity:0},
            {layer:"mobie_computer_ratio",opacity:0},
            {layer:"rural_income_wage",opacity:0},
            {layer:"rural_income_b",opacity:0},
            {layer:"rural_income",opacity:0},
            {layer:"rural_wage_business",opacity:0},

          ]
      },
      {
        id: '2',
        title: 'Distribution of Schools',
        description: "",
        location: {
            center: [105, 37.9],
            zoom: 3.61,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"school_density",opacity:1},
          ],
        onChapterExit: [
            {layer:"school_density",opacity:0},
          ]
      },
      {
        id: '3',
        title: "Distribution of Parks",
        // image: 'img/TBV_Network.png',
        // imageCredit: "",
        description: "",
        location: {
            center: [105, 37.9],
            zoom: 3.61,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"park_density",opacity:1},
          ],
        onChapterExit: [
          {layer:"park_density",opacity:0},

          ]
      },
      {
        id: '4',
        title: "Distribution of Hospitals",
        description: "",
        location: {
            center: [105, 37.9],
            zoom: 3.61,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {layer:"hospital_density",opacity:1},
        ],
        onChapterExit: [
          {layer:"hospital_density",opacity:0},

          ]
      },
      {
        id: '5',
        title: "Distribution of Retail",
        description:"Density of retail locations reflects the development of local commerce.",
        location: {
            center: [105, 37.9],
            zoom: 3.61,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
          {layer:"retail_density",opacity:1},
          ],
        onChapterExit: [
          {layer:"retail_density",opacity:0},
          ]
      },
      {
        id: '6',
        title: "Click Village Name to zoom in",
        description:'I selected 50 villages, some are villages producing local craft/heritage product, some are villages titled by Alibaba Group as "the most beautiful Taobao Village", and some are villages located in at risk areas.',
        location: {
            center: [105, 37.9],
            zoom: 3.61,
            pitch: 0,
            bearing: 0
            },
          onChapterEnter: [
            {layer:"selected-villages",opacity:1},
            {layer:"china_basemap_gdp",opacity:1},

          ],
        onChapterExit: [
            {layer:"selected-villages",opacity:0},
            {layer:"china_basemap_gdp",opacity:0},
        ]
        },
    ]
}
