// 产品数据 - 印度市场装载机和挖掘机
const productData = {
    // 装载机数据
    loader: {
        // 按吨位分组
        "1-2t": {
            CAT: [
                { model: "903M", tonnage: "1.9t", horsepower: "48 HP", engine: "Cat C1.7", price: "₹18-22 Lakh" }
            ],
            Komatsu: [
                { model: "WA70M-8", tonnage: "1.8t", horsepower: "46 HP", engine: "Komatsu SAA4D95LE-7", price: "₹16-20 Lakh" }
            ],
            JCB: [
                { model: "3DX", tonnage: "2.1t", horsepower: "50 HP", engine: "JCB DieselMax", price: "₹14-18 Lakh" }
            ],
            "John Deere": [
                { model: "310L", tonnage: "2.0t", horsepower: "52 HP", engine: "John Deere 3029", price: "₹17-21 Lakh" }
            ],
            "临工柳工": [
                { model: "L956F", tonnage: "5t", horsepower: "200 HP", engine: "Weichai", price: "₹28-35 Lakh" }
            ],
            "三一": [],
            "小松": []
        },
        "3-5t": {
            CAT: [
                { model: "950M", tonnage: "4.1t", horsepower: "148 HP", engine: "Cat C4.4 ACERT", price: "₹45-55 Lakh" },
                { model: "930M", tonnage: "3.5t", horsepower: "125 HP", engine: "Cat C4.4 ACERT", price: "₹38-48 Lakh" }
            ],
            Komatsu: [
                { model: "WA150PZ-8", tonnage: "4.5t", horsepower: "125 HP", engine: "Komatsu SAA4D107E-2", price: "₹42-52 Lakh" },
                { model: "WA470-8", tonnage: "5.2t", horsepower: "272 HP", engine: "Komatsu SAA6D114E-5", price: "₹65-80 Lakh" }
            ],
            Hitachi: [
                { model: "ZX350LC-6", tonnage: "35t", horsepower: "263 HP", engine: "Isuzu", price: "₹1.8-2.2 Cr" }
            ],
            JCB: [
                { model: "4DX", tonnage: "3.2t", horsepower: "74 HP", engine: "JCB DieselMax", price: "₹25-32 Lakh" },
                { model: "457", tonnage: "4.8t", horsepower: "125 HP", engine: "JCB DieselMax", price: "₹38-45 Lakh" }
            ],
            "John Deere": [
                { model: "544K", tonnage: "4.8t", horsepower: "130 HP", engine: "John Deere 6068", price: "₹40-50 Lakh" },
                { model: "644K", tonnage: "5.8t", horsepower: "180 HP", engine: "John Deere 6090", price: "₹55-68 Lakh" }
            ],
            "临工柳工": [
                { model: "L956F", tonnage: "5t", horsepower: "200 HP", engine: "Weichai", price: "₹28-35 Lakh" },
                { model: "L968F", tonnage: "6.8t", horsepower: "235 HP", engine: "Weichai", price: "₹38-48 Lakh" }
            ],
            "三一": [
                { model: "SY955", tonnage: "5.5t", horsepower: "200 HP", engine: "Yuchai", price: "₹30-38 Lakh" },
                { model: "SY965", tonnage: "6.5t", horsepower: "250 HP", engine: "Yuchai", price: "₹40-50 Lakh" }
            ],
            "小松": [
                { model: "WA380-8", tonnage: "6.2t", horsepower: "232 HP", engine: "Komatsu", price: "₹52-65 Lakh" }
            ]
        },
        "5-10t": {
            CAT: [
                { model: "966M", tonnage: "6.3t", horsepower: "212 HP", engine: "Cat C9.3 ACERT", price: "₹65-80 Lakh" },
                { model: "972M", tonnage: "7.2t", horsepower: "253 HP", engine: "Cat C9.3 ACERT", price: "₹75-95 Lakh" }
            ],
            Komatsu: [
                { model: "WA480-8", tonnage: "8.5t", horsepower: "311 HP", engine: "Komatsu SAA6D125E-5", price: "₹85-105 Lakh" }
            ],
            JCB: [
                { model: "467", tonnage: "7.8t", horsepower: "145 HP", engine: "JCB DieselMax", price: "₹45-55 Lakh" }
            ],
            "John Deere": [
                { model: "744K", tonnage: "8.4t", horsepower: "235 HP", engine: "John Deere 6090", price: "₹70-88 Lakh" }
            ],
            "临工柳工": [
                { model: "L968F", tonnage: "6.8t", horsepower: "235 HP", engine: "Weichai", price: "₹38-48 Lakh" },
                { model: "L9800", tonnage: "9.5t", horsepower: "290 HP", engine: "Weichai", price: "₹55-70 Lakh" }
            ],
            "三一": [
                { model: "SYL958", tonnage: "5.8t", horsepower: "210 HP", engine: "Yuchai", price: "₹35-45 Lakh" },
                { model: "SY970", tonnage: "9.2t", horsepower: "290 HP", engine: "Yuchai", price: "₹52-65 Lakh" }
            ],
            "小松": [
                { model: "WA470-8", tonnage: "8.7t", horsepower: "272 HP", engine: "Komatsu", price: "₹72-90 Lakh" }
            ]
        },
        "10t+": {
            CAT: [
                { model: "980M", tonnage: "10.5t", horsepower: "290 HP", engine: "Cat C9.3 ACERT", price: "₹95-120 Lakh" },
                { model: "982M", tonnage: "12.2t", horsepower: "354 HP", engine: "Cat C13 ACERT", price: "₹1.2-1.5 Cr" }
            ],
            Komatsu: [
                { model: "WA600-8", tonnage: "12.8t", horsepower: "394 HP", engine: "Komatsu SAA6D140E-5", price: "₹1.4-1.8 Cr" }
            ],
            "临工柳工": [
                { model: "L9900", tonnage: "12t", horsepower: "350 HP", engine: "Weichai", price: "₹65-85 Lakh" }
            ],
            "三一": [
                { model: "SYL1000", tonnage: "11t", horsepower: "350 HP", engine: "Yuchai", price: "₹60-78 Lakh" }
            ]
        }
    },
    // 挖掘机数据
    excavator: {
        "1-5t": {
            CAT: [
                { model: "305E2", tonnage: "5t", horsepower: "39 HP", engine: "Cat C2.4", price: "₹22-28 Lakh", bucketCapacity: "0.21 m³", operatingWeight: "5200 kg" }
            ],
            Komatsu: [
                { model: "PC30MR-5", tonnage: "3t", horsepower: "24 HP", engine: "Komatsu SAA3D68E", price: "₹18-24 Lakh", bucketCapacity: "0.11 m³", operatingWeight: "2950 kg" },
                { model: "PC56MR-5", tonnage: "5.5t", horsepower: "43 HP", engine: "Komatsu SAA4D95LE-7", price: "₹25-32 Lakh", bucketCapacity: "0.21 m³", operatingWeight: "5500 kg" }
            ],
            Hitachi: [
                { model: "ZX17U-5N", tonnage: "1.7t", horsepower: "14 HP", engine: "Isuzu", price: "₹12-16 Lakh", bucketCapacity: "0.06 m³", operatingWeight: "1750 kg" },
                { model: "ZX35U-5N", tonnage: "3.5t", horsepower: "28 HP", engine: "Isuzu", price: "₹18-24 Lakh", bucketCapacity: "0.12 m³", operatingWeight: "3500 kg" }
            ],
            JCB: [
                { model: "JS30", tonnage: "3t", horsepower: "24 HP", engine: "JCB DieselMax", price: "₹15-20 Lakh", bucketCapacity: "0.12 m³", operatingWeight: "3100 kg" },
                { model: "JS55", tonnage: "5.5t", horsepower: "40 HP", engine: "JCB DieselMax", price: "₹22-28 Lakh", bucketCapacity: "0.22 m³", operatingWeight: "5400 kg" }
            ],
            "John Deere": [
                { model: "17G", tonnage: "1.7t", horsepower: "14 HP", engine: "John Deere", price: "₹14-18 Lakh", bucketCapacity: "0.06 m³", operatingWeight: "1720 kg" },
                { model: "35G", tonnage: "3.5t", horsepower: "27 HP", engine: "John Deere", price: "₹20-26 Lakh", bucketCapacity: "0.14 m³", operatingWeight: "3600 kg" }
            ],
            "临工柳工": [
                { model: "E615F", tonnage: "1.5t", horsepower: "12 HP", engine: "Yuchai", price: "₹8-12 Lakh", bucketCapacity: "0.05 m³", operatingWeight: "1500 kg" }
            ],
            "三一": [
                { model: "SY35U", tonnage: "3.5t", horsepower: "28 HP", engine: "Yuchai", price: "₹14-19 Lakh", bucketCapacity: "0.12 m³", operatingWeight: "3400 kg" },
                { model: "SY55U", tonnage: "5.5t", horsepower: "42 HP", engine: "Yuchai", price: "₹18-24 Lakh", bucketCapacity: "0.21 m³", operatingWeight: "5200 kg" }
            ],
            "小松": [
                { model: "PC30FR-5", tonnage: "2.8t", horsepower: "20 HP", engine: "Komatsu", price: "₹16-22 Lakh", bucketCapacity: "0.09 m³", operatingWeight: "2800 kg" }
            ]
        },
        "6-15t": {
            CAT: [
                { model: "312E2", tonnage: "12t", horsepower: "82 HP", engine: "Cat C3.6", price: "₹42-52 Lakh", bucketCapacity: "0.54 m³", operatingWeight: "12500 kg", digDepth: "6720 mm", maxReach: "9810 mm" },
                { model: "320E2", tonnage: "20t", horsepower: "148 HP", engine: "Cat C4.4 ACERT", price: "₹65-80 Lakh", bucketCapacity: "1.0 m³", operatingWeight: "22000 kg", digDepth: "6720 mm", maxReach: "9810 mm" }
            ],
            Komatsu: [
                { model: "PC130-11", tonnage: "13t", horsepower: "99 HP", engine: "Komatsu SAA4D107E-1", price: "₹45-55 Lakh", bucketCapacity: "0.53 m³", operatingWeight: "13100 kg", digDepth: "6620 mm", maxReach: "9360 mm" },
                { model: "PC200-11", tonnage: "20t", horsepower: "148 HP", engine: "Komatsu SAA6D107E-1", price: "₹68-85 Lakh", bucketCapacity: "0.8 m³", operatingWeight: "19800 kg", digDepth: "6920 mm", maxReach: "9870 mm" }
            ],
            Hitachi: [
                { model: "ZX200-6G", tonnage: "20t", horsepower: "148 HP", engine: "Isuzu", price: "₹60-75 Lakh", bucketCapacity: "0.8 m³", operatingWeight: "21000 kg", digDepth: "6720 mm", maxReach: "9850 mm" },
                { model: "ZX350LC-6", tonnage: "35t", horsepower: "263 HP", engine: "Isuzu", price: "₹1.4-1.8 Cr", bucketCapacity: "1.54 m³", operatingWeight: "35000 kg", digDepth: "7240 mm", maxReach: "11910 mm" }
            ],
            JCB: [
                { model: "JS80", tonnage: "8t", horsepower: "55 HP", engine: "JCB DieselMax", price: "₹32-40 Lakh", bucketCapacity: "0.35 m³", operatingWeight: "8200 kg", digDepth: "5400 mm", maxReach: "7800 mm" },
                { model: "JS130", tonnage: "13t", horsepower: "82 HP", engine: "JCB DieselMax", price: "₹45-55 Lakh", bucketCapacity: "0.55 m³", operatingWeight: "13500 kg", digDepth: "6600 mm", maxReach: "9400 mm" },
                { model: "JS205", tonnage: "21t", horsepower: "150 HP", engine: "JCB DieselMax", price: "₹68-85 Lakh", bucketCapacity: "0.9 m³", operatingWeight: "21000 kg", digDepth: "6800 mm", maxReach: "9800 mm" }
            ],
            "John Deere": [
                { model: "75G", tonnage: "7.5t", horsepower: "54 HP", engine: "John Deere", price: "₹30-38 Lakh", bucketCapacity: "0.33 m³", operatingWeight: "7500 kg", digDepth: "5520 mm", maxReach: "8100 mm" },
                { model: "130G", tonnage: "13.5t", horsepower: "100 HP", engine: "John Deere", price: "₹48-60 Lakh", bucketCapacity: "0.6 m³", operatingWeight: "13800 kg", digDepth: "6750 mm", maxReach: "9500 mm" },
                { model: "210G", tonnage: "22t", horsepower: "164 HP", engine: "John Deere", price: "₹72-90 Lakh", bucketCapacity: "1.05 m³", operatingWeight: "22500 kg", digDepth: "7100 mm", maxReach: "10200 mm" }
            ],
            "临工柳工": [
                { model: "E6225F", tonnage: "22t", horsepower: "150 HP", engine: "Yuchai", price: "₹42-52 Lakh", bucketCapacity: "0.9 m³", operatingWeight: "22000 kg", digDepth: "6800 mm", maxReach: "9700 mm" },
                { model: "E6360F", tonnage: "36t", horsepower: "250 HP", engine: "Yuchai", price: "₹65-80 Lakh", bucketCapacity: "1.5 m³", operatingWeight: "36000 kg", digDepth: "7200 mm", maxReach: "11800 mm" }
            ],
            "三一": [
                { model: "SY135", tonnage: "13.5t", horsepower: "100 HP", engine: "Yuchai", price: "₹35-45 Lakh", bucketCapacity: "0.55 m³", operatingWeight: "13600 kg", digDepth: "6600 mm", maxReach: "9300 mm" },
                { model: "SY215", tonnage: "21t", horsepower: "150 HP", engine: "Yuchai", price: "₹48-62 Lakh", bucketCapacity: "0.85 m³", operatingWeight: "21000 kg", digDepth: "6700 mm", maxReach: "9700 mm" },
                { model: "SY365", tonnage: "36t", horsepower: "271 HP", engine: "Yuchai", price: "₹1.1-1.4 Cr", bucketCapacity: "1.5 m³", operatingWeight: "35800 kg", digDepth: "7300 mm", maxReach: "11900 mm" }
            ],
            "小松": [
                { model: "PC120-11", tonnage: "12t", horsepower: "87 HP", engine: "Komatsu", price: "₹48-60 Lakh", bucketCapacity: "0.5 m³", operatingWeight: "11800 kg", digDepth: "6550 mm", maxReach: "9300 mm" },
                { model: "PC200-11", tonnage: "20t", horsepower: "148 HP", engine: "Komatsu", price: "₹70-88 Lakh", bucketCapacity: "0.8 m³", operatingWeight: "19800 kg", digDepth: "6920 mm", maxReach: "9870 mm" }
            ]
        },
        "16-30t": {
            CAT: [
                { model: "320E2", tonnage: "20t", horsepower: "148 HP", engine: "Cat C4.4 ACERT", price: "₹65-80 Lakh", bucketCapacity: "1.0 m³", operatingWeight: "22000 kg", digDepth: "6720 mm", maxReach: "9810 mm" },
                { model: "336E2", tonnage: "36t", horsepower: "311 HP", engine: "Cat C9.3 ACERT", price: "₹1.4-1.8 Cr", bucketCapacity: "1.54 m³", operatingWeight: "36500 kg", digDepth: "7900 mm", maxReach: "11920 mm" }
            ],
            Komatsu: [
                { model: "PC210LC-11", tonnage: "21t", horsepower: "148 HP", engine: "Komatsu SAA6D107E-1", price: "₹68-85 Lakh", bucketCapacity: "0.9 m³", operatingWeight: "21300 kg", digDepth: "6920 mm", maxReach: "9870 mm" },
                { model: "PC300LC-11", tonnage: "30t", horsepower: "232 HP", engine: "Komatsu SAA6D125E-2", price: "₹1.0-1.3 Cr", bucketCapacity: "1.4 m³", operatingWeight: "30800 kg", digDepth: "7500 mm", maxReach: "11180 mm" }
            ],
            Hitachi: [
                { model: "ZX200-6G", tonnage: "20t", horsepower: "148 HP", engine: "Isuzu", price: "₹60-75 Lakh", bucketCapacity: "0.8 m³", operatingWeight: "21000 kg", digDepth: "6720 mm", maxReach: "9850 mm" },
                { model: "ZX350LC-6", tonnage: "35t", horsepower: "263 HP", engine: "Isuzu", price: "₹1.4-1.8 Cr", bucketCapacity: "1.54 m³", operatingWeight: "35000 kg", digDepth: "7240 mm", maxReach: "11910 mm" }
            ],
            JCB: [
                { model: "JS205", tonnage: "21t", horsepower: "150 HP", engine: "JCB DieselMax", price: "₹68-85 Lakh", bucketCapacity: "0.9 m³", operatingWeight: "21000 kg", digDepth: "6800 mm", maxReach: "9800 mm" },
                { model: "JS305", tonnage: "30t", horsepower: "215 HP", engine: "JCB DieselMax", price: "₹95-120 Lakh", bucketCapacity: "1.3 m³", operatingWeight: "30000 kg", digDepth: "7400 mm", maxReach: "10800 mm" }
            ],
            "John Deere": [
                { model: "210G", tonnage: "22t", horsepower: "164 HP", engine: "John Deere", price: "₹72-90 Lakh", bucketCapacity: "1.05 m³", operatingWeight: "22500 kg", digDepth: "7100 mm", maxReach: "10200 mm" },
                { model: "350G", tonnage: "35t", horsepower: "271 HP", engine: "John Deere", price: "₹1.3-1.6 Cr", bucketCapacity: "1.5 m³", operatingWeight: "35500 kg", digDepth: "7500 mm", maxReach: "11800 mm" }
            ],
            "临工柳工": [
                { model: "E6225F", tonnage: "22t", horsepower: "150 HP", engine: "Yuchai", price: "₹42-52 Lakh", bucketCapacity: "0.9 m³", operatingWeight: "22000 kg", digDepth: "6800 mm", maxReach: "9700 mm" },
                { model: "E6360F", tonnage: "36t", horsepower: "250 HP", engine: "Yuchai", price: "₹65-80 Lakh", bucketCapacity: "1.5 m³", operatingWeight: "36000 kg", digDepth: "7200 mm", maxReach: "11800 mm" }
            ],
            "三一": [
                { model: "SY215", tonnage: "21t", horsepower: "150 HP", engine: "Yuchai", price: "₹48-62 Lakh", bucketCapacity: "0.85 m³", operatingWeight: "21000 kg", digDepth: "6700 mm", maxReach: "9700 mm" },
                { model: "SY365", tonnage: "36t", horsepower: "271 HP", engine: "Yuchai", price: "₹1.1-1.4 Cr", bucketCapacity: "1.5 m³", operatingWeight: "35800 kg", digDepth: "7300 mm", maxReach: "11900 mm" }
            ],
            "小松": [
                { model: "PC200-11", tonnage: "20t", horsepower: "148 HP", engine: "Komatsu", price: "₹70-88 Lakh", bucketCapacity: "0.8 m³", operatingWeight: "19800 kg", digDepth: "6920 mm", maxReach: "9870 mm" },
                { model: "PC300LC-11", tonnage: "30t", horsepower: "232 HP", engine: "Komatsu", price: "₹1.0-1.3 Cr", bucketCapacity: "1.4 m³", operatingWeight: "30800 kg", digDepth: "7500 mm", maxReach: "11180 mm" }
            ]
        },
        "30t+": {
            CAT: [
                { model: "336E2", tonnage: "36t", horsepower: "311 HP", engine: "Cat C9.3 ACERT", price: "₹1.4-1.8 Cr", bucketCapacity: "1.54 m³", operatingWeight: "36500 kg", digDepth: "7900 mm", maxReach: "11920 mm" },
                { model: "349E2", tonnage: "50t", horsepower: "424 HP", engine: "Cat C13 ACERT", price: "₹2.0-2.5 Cr", bucketCapacity: "2.5 m³", operatingWeight: "52000 kg", digDepth: "8200 mm", maxReach: "12980 mm" }
            ],
            Komatsu: [
                { model: "PC360LC-11", tonnage: "36t", horsepower: "271 HP", engine: "Komatsu SAA6D125E-2", price: "₹1.2-1.5 Cr", bucketCapacity: "1.54 m³", operatingWeight: "36800 kg", digDepth: "7500 mm", maxReach: "11800 mm" },
                { model: "PC490LC-11", tonnage: "49t", horsepower: "359 HP", engine: "Komatsu SAA6D140E-5", price: "₹1.8-2.2 Cr", bucketCapacity: "2.3 m³", operatingWeight: "49000 kg", digDepth: "8100 mm", maxReach: "12950 mm" }
            ],
            Hitachi: [
                { model: "ZX350LC-6", tonnage: "35t", horsepower: "263 HP", engine: "Isuzu", price: "₹1.4-1.8 Cr", bucketCapacity: "1.54 m³", operatingWeight: "35000 kg", digDepth: "7240 mm", maxReach: "11910 mm" },
                { model: "ZX670LC-6", tonnage: "70t", horsepower: "512 HP", engine: "Isuzu", price: "₹3.5-4.5 Cr", bucketCapacity: "3.2 m³", operatingWeight: "70000 kg", digDepth: "7900 mm", maxReach: "13500 mm" }
            ],
            JCB: [
                { model: "JS305", tonnage: "30t", horsepower: "215 HP", engine: "JCB DieselMax", price: "₹95-120 Lakh", bucketCapacity: "1.3 m³", operatingWeight: "30000 kg", digDepth: "7400 mm", maxReach: "10800 mm" }
            ],
            "临工柳工": [
                { model: "E6360F", tonnage: "36t", horsepower: "250 HP", engine: "Yuchai", price: "₹65-80 Lakh", bucketCapacity: "1.5 m³", operatingWeight: "36000 kg", digDepth: "7200 mm", maxReach: "11800 mm" }
            ],
            "三一": [
                { model: "SY365", tonnage: "36t", horsepower: "271 HP", engine: "Yuchai", price: "₹1.1-1.4 Cr", bucketCapacity: "1.5 m³", operatingWeight: "35800 kg", digDepth: "7300 mm", maxReach: "11900 mm" },
                { model: "SY500", tonnage: "50t", horsepower: "400 HP", engine: "Yuchai", price: "₹1.8-2.3 Cr", bucketCapacity: "2.5 m³", operatingWeight: "50000 kg", digDepth: "8100 mm", maxReach: "12800 mm" }
            ],
            "小松": [
                { model: "PC360LC-11", tonnage: "36t", horsepower: "271 HP", engine: "Komatsu", price: "₹1.2-1.5 Cr", bucketCapacity: "1.54 m³", operatingWeight: "36800 kg", digDepth: "7500 mm", maxReach: "11800 mm" },
                { model: "PC700LC-11", tonnage: "70t", horsepower: "512 HP", engine: "Komatsu", price: "₹3.2-4.0 Cr", bucketCapacity: "3.2 m³", operatingWeight: "72000 kg", digDepth: "7900 mm", maxReach: "13500 mm" }
            ]
        }
    }
};

// 品牌列表
const brands = ["CAT", "Komatsu", "Hitachi", "JCB", "John Deere", "临工柳工", "三一", "小松"];

// 吨位分组
const tonnageGroups = {
    loader: ["1-2t", "3-5t", "5-10t", "10t+"],
    excavator: ["1-5t", "6-15t", "16-30t", "30t+"]
};
