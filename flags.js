  const flagCodes = {
  AED: "ae", // United Arab Emirates Dirham
  AFN: "af", // Afghan Afghani
  ALL: "al", // Albanian Lek
  AMD: "am", // Armenian Dram
  ANG: "an", // Netherlands Antillean Guilder
  AOA: "ao", // Angolan Kwanza
  ARS: "ar", // Argentine Peso
  AUD: "au", // Australian Dollar
  AZN: "az", // Azerbaijani Manat
  BAM: "ba", // Bosnia and Herzegovina Convertible Mark
  BBD: "bb", // Barbados Dollar
  BDT: "bd", // Bangladeshi Taka
  BGN: "bg", // Bulgarian Lev
  BHD: "bh", // Bahraini Dinar
  BIF: "bi", // Burundian Franc
  BMD: "bm", // Bermudian Dollar
  BND: "bn", // Brunei Dollar
  BOB: "bo", // Bolivian Boliviano
  BRL: "br", // Brazilian Real
  BSD: "bs", // Bahamian Dollar
  BTN: "bt", // Bhutanese Ngultrum
  BWP: "bw", // Botswana Pula
  BYN: "by", // Belarusian Ruble
  BZD: "bz", // Belize Dollar
  CAD: "ca", // Canadian Dollar
  CHF: "ch", // Swiss Franc
  CLP: "cl", // Chilean Peso
  CNY: "cn", // Chinese Yuan
  COP: "co", // Colombian Peso
  CRC: "cr", // Costa Rican Colon
  CUP: "cu", // Cuban Peso
  CVE: "cv", // Cape Verdean Escudo
  CZK: "cz", // Czech Koruna
  DJF: "dj", // Djiboutian Franc
  DKK: "dk", // Danish Krone
  DOP: "do", // Dominican Peso
  DZD: "dz", // Algerian Dinar
  EGP: "eg", // Egyptian Pound
  ERN: "er", // Eritrean Nakfa
  ETB: "et", // Ethiopian Birr
  EUR: "eu", // Euro
  FJD: "fj", // Fijian Dollar
  FKP: "fk", // Falkland Islands Pound
  GBP: "gb", // British Pound
  GEL: "ge", // Georgian Lari
  GHS: "gh", // Ghanaian Cedi
  GIP: "gi", // Gibraltar Pound
  GMD: "gm", // Gambian Dalasi
  GNF: "gn", // Guinean Franc
  GTQ: "gt", // Guatemalan Quetzal
  GYD: "gy", // Guyanaese Dollar
  HKD: "hk", // Hong Kong Dollar
  HNL: "hn", // Honduran Lempira
  HRK: "hr", // Croatian Kuna
  HTG: "ht", // Haitian Gourde
  HUF: "hu", // Hungarian Forint
  IDR: "id", // Indonesian Rupiah
  ILS: "il", // Israeli New Shekel
  INR: "in", // Indian Rupee
  IQD: "iq", // Iraqi Dinar
  IRR: "ir", // Iranian Rial
  ISK: "is", // Icelandic Krona
  JMD: "jm", // Jamaican Dollar
  JOD: "jo", // Jordanian Dinar
  JPY: "jp", // Japanese Yen
  KES: "ke", // Kenyan Shilling
  KGS: "kg", // Kyrgyzstani Som
  KHR: "kh", // Cambodian Riel
  KMF: "km", // Comorian Franc
  KPW: "kp", // North Korean Won
  KRW: "kr", // South Korean Won
  KWD: "kw", // Kuwaiti Dinar
  KYD: "ky", // Cayman Islands Dollar
  KZT: "kz", // Kazakhstani Tenge
  LAK: "la", // Lao Kip
  LBP: "lb", // Lebanese Pound
  LKR: "lk", // Sri Lankan Rupee
  LRD: "lr", // Liberian Dollar
  LSL: "ls", // Lesotho Loti
  LYD: "ly", // Libyan Dinar
  MAD: "ma", // Moroccan Dirham
  MDL: "md", // Moldovan Leu
  MGA: "mg", // Malagasy Ariary
  MKD: "mk", // Macedonian Denar
  MMK: "mm", // Myanmar Kyat
  MNT: "mn", // Mongolian Tugrik
  MOP: "mo", // Macanese Pataca
  MRO: "mr", // Mauritanian Ouguiya
  MUR: "mu", // Mauritian Rupee
  MVR: "mv", // Maldivian Rufiyaa
  MWK: "mw", // Malawian Kwacha
  MXN: "mx", // Mexican Peso
  MYR: "my", // Malaysian Ringgit
  MZN: "mz", // Mozambican Metical
  NAD: "na", // Namibian Dollar
  NGN: "ng", // Nigerian Naira
  NIO: "ni", // Nicaraguan Cordoba
  NOK: "no", // Norwegian Krone
  NPR: "np", // Nepalese Rupee
  NZD: "nz", // New Zealand Dollar
  OMR: "om", // Omani Rial
  PAB: "pa", // Panamanian Balboa
  PEN: "pe", // Peruvian Sol
  PGK: "pg", // Papua New Guinean Kina
  PHP: "ph", // Philippine Peso
  PKR: "pk", // Pakistani Rupee
  PLN: "pl", // Polish Zloty
  PYG: "py", // Paraguayan Guarani
  QAR: "qa", // Qatari Riyal
  RON: "ro", // Romanian Leu
  RSD: "rs", // Serbian Dinar
  RUB: "ru", // Russian Ruble
  RWF: "rw", // Rwandan Franc
  SAR: "sa", // Saudi Riyal
  SBD: "sb", // Solomon Islands Dollar
  SCR: "sc", // Seychellois Rupee
  SDG: "sd", // Sudanese Pound
  SEK: "se", // Swedish Krona
  SGD: "sg", // Singapore Dollar
  SHP: "sh", // Saint Helena Pound
  SLL: "sl", // Sierra Leonean Leone
  SOS: "so", // Somali Shilling
  SRD: "sr", // Surinamese Dollar
  STD: "st", // Sao Tome and Principe Dobra
  SYP: "sy", // Syrian Pound
  SZL: "sz", // Swazi Lilangeni
  THB: "th", // Thai Baht
  TJS: "tj", // Tajikistani Somoni
  TMT: "tm", // Turkmenistani Manat
  TND: "tn", // Tunisian Dinar
  TOP: "to", // Tongan Paʻanga
  TRY: "tr", // Turkish Lira
  TTD: "tt", // Trinidad and Tobago Dollar
  TWD: "tw", // Taiwan Dollar
  TZS: "tz", // Tanzanian Shilling
  UAH: "ua", // Ukrainian Hryvnia
  UGX: "ug", // Ugandan Shilling
  USD: "us", // United States Dollar
  UYU: "uy", // Uruguayan Peso
  UZS: "uz", // Uzbekistan Som
  VEF: "ve", // Venezuelan Bolívar
  VND: "vn", // Vietnamese Dong
  VUV: "vu", // Vanuatu Vatu
  WST: "ws", // Samoan Tala
  XAF: "cm", // Central African CFA Franc
  XCD: "ag", // East Caribbean Dollar
  XOF: "bj", // West African CFA Franc
  XPF: "pf", // CFP Franc
  YER: "ye", // Yemeni Rial
  ZAR: "za", // South African Rand
  ZMW: "zm", // Zambian Kwacha
  ZWL: "zw"  // Zimbabwean Dollar
};

// const urunler = [
//   {urunAdi: "Iphone 11", fiyat: 13000},
//   {urunAdi: "Iphone 12", fiyat: 14000},
//   {urunAdi: "Iphone 13", fiyat: 15000},
//   {urunAdi: "Iphone 14", fiyat: 22000}
// ];


// const sonuc = urunler.filter(urun => urun.fiyat >13000);

// console.log(sonuc);