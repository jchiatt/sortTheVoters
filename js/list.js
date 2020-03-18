const houseList = [
  {
    Last: 'Mr.Speaker',
    Party: 'R',
  },
  {
    Last: 'Carpenter',
    District: '1',
    Party: 'R',
  },
  {
    Last: 'Bain',
    District: '2',
    Party: 'R',
  },
  {
    Last: 'Arnold',
    District: '3',
    Party: 'R',
  },
  {
    Last: 'Steverson',
    District: '4',
    Party: 'R',
  },
  {
    Last: 'Faulkner',
    District: '5',
    Party: 'D',
  },
  {
    Last: 'Criswell',
    District: '6',
    Party: 'R',
  },
  {
    Last: 'Hopkins',
    District: '7',
    Party: 'R',
  },
  {
    Last: 'Lamar',
    District: '8',
    Party: 'R',
  },
  {
    Last: 'Burnett',
    District: '9',
    Party: 'D',
  },
  {
    Last: 'Williamson',
    District: '10',
    Party: 'R',
  },
  {
    Last: 'Jackson',
    District: '11',
    Party: 'D',
  },
  {
    Last: 'Deweese',
    District: '12',
    Party: 'R',
  },
  {
    Last: 'Massengill',
    District: '13',
    Party: 'R',
  },
  {
    Last: 'Creekmore IV',
    District: '14',
    Party: 'R',
  },
  {
    Last: 'Huddleston',
    District: '15',
    Party: 'R',
  },
  {
    Last: 'Thompson',
    District: '16',
    Party: 'D',
  },
  {
    Last: 'Aguirre',
    District: '17',
    Party: 'R',
  },
  {
    Last: 'Turner',
    District: '18',
    Party: 'R',
  },
  {
    Last: 'Boyd',
    District: '19',
    Party: 'R',
  },
  {
    Last: 'Brown',
    District: '20',
    Party: 'R',
  },
  {
    Last: 'Bell',
    District: '21',
    Party: 'R',
  },
  {
    Last: 'Lancaster',
    District: '22',
    Party: 'D',
  },
  {
    Last: 'Beckett',
    District: '23',
    Party: 'R',
  },
  {
    Last: 'Hale',
    District: '24',
    Party: 'R',
  },
  {
    Last: 'Eubanks',
    District: '25',
    Party: 'R',
  },
  {
    Last: 'Paden',
    District: '26',
    Party: 'D',
  },
  {
    Last: 'Walker',
    District: '27',
    Party: 'D',
  },
  {
    Last: 'Darnell',
    District: '28',
    Party: 'R',
  },
  {
    Last: 'Coleman',
    District: '29',
    Party: 'D',
  },
  {
    Last: 'Hudson',
    District: '29',
    Party: 'D',
  },
  {
    Last: 'Rosebud',
    District: '30',
    Party: 'D',
  },
  {
    Last: 'Anthony',
    District: '31',
    Party: 'D',
  },
  {
    Last: 'Osborne',
    District: '32',
    Party: 'D',
  },
  {
    Last: 'Reynolds',
    District: '33',
    Party: 'D',
  },
  {
    Last: 'Horan',
    District: '34',
    Party: 'R',
  },
  {
    Last: 'Hood',
    District: '35',
    Party: 'R',
  },
  {
    Last: 'Gibbs',
    District: '36',
    Party: 'D',
  },
  {
    Last: 'Chism',
    District: '37',
    Party: 'R',
  },
  {
    Last: 'Taylor',
    District: '38',
    Party: 'D',
  },
  {
    Last: 'McLean',
    District: '39',
    Party: 'R',
  },
  {
    Last: 'McCray',
    District: '40',
    Party: 'D',
  },
  {
    Last: 'Karriem',
    District: '41',
    Party: 'D',
  },
  {
    Last: 'Mickens',
    District: '42',
    Party: 'D',
  },
  {
    Last: 'Roberson',
    District: '43',
    Party: 'R',
  },
  {
    Last: 'Bounds',
    District: '44',
    Party: 'R',
  },
  {
    Last: 'Evans',
    District: '45',
    Party: 'D',
  },
  {
    Last: 'Evans',
    District: '43',
    Party: 'D',
  },
  {
    Last: 'Oliver',
    District: '46',
    Party: 'R',
  },
  {
    Last: 'Clark',
    District: '47',
    Party: 'D',
  },
  {
    Last: 'White',
    District: '48',
    Party: 'R',
  },
  {
    Last: 'Bailey',
    District: '49',
    Party: 'D',
  },
  {
    Last: 'Hines',
    District: '50',
    Party: 'D',
  },
  {
    Last: 'Straughter',
    District: '51',
    Party: 'D',
  },
  {
    Last: 'Kinkade',
    District: '52',
    Party: 'R',
  },
  {
    Last: 'Mangold',
    District: '53',
    Party: 'R',
  },
  {
    Last: 'Ford',
    District: '54',
    Party: 'R',
  },
  {
    Last: 'Denton',
    District: '55',
    Party: 'D',
  },
  {
    Last: 'Gunn',
    District: '56',
    Party: 'R',
  },
  {
    Last: 'Blackmon',
    District: '57',
    Party: 'D',
  },
  {
    Last: 'Bomgar',
    District: '58',
    Party: 'R',
  },
  {
    Last: 'Powell',
    District: '59',
    Party: 'R',
  },
  {
    Last: 'Shanks',
    District: '60',
    Party: 'R',
  },
  {
    Last: 'Newman',
    District: '61',
    Party: 'R',
  },
  {
    Last: 'Weathersby',
    District: '62',
    Party: 'R',
  },
  {
    Last: 'Foster',
    District: '63',
    Party: 'D',
  },
  {
    Last: 'Yates',
    District: '64',
    Party: 'D',
  },
  {
    Last: 'Bell',
    District: '65',
    Party: 'D',
  },
  {
    Last: 'Dortch',
    District: '66',
    Party: 'D',
  },
  {
    Last: 'Banks',
    District: '67',
    Party: 'D',
  },
  {
    Last: 'Summers',
    District: '68',
    Party: 'D',
  },
  {
    Last: 'Clarke',
    District: '69',
    Party: 'D',
  },
  {
    Last: 'Brown',
    District: '70',
    Party: 'D',
  },
  {
    Last: 'Crudup',
    District: '71',
    Party: 'D',
  },
  {
    Last: 'Campbell',
    District: '72',
    Party: 'D',
  },
  {
    Last: 'Gibbs',
    District: '72',
    Party: 'D',
  },
  {
    Last: 'Ford',
    District: '73',
    Party: 'R',
  },
  {
    Last: 'Yancey',
    District: '74',
    Party: 'R',
  },
  {
    Last: 'Miles',
    District: '75',
    Party: 'D',
  },
  {
    Last: 'Holloway',
    District: '76',
    Party: 'D',
  },
  {
    Last: 'Wallace',
    District: '77',
    Party: 'R',
  },
  {
    Last: 'Rushing',
    District: '78',
    Party: 'R',
  },
  {
    Last: 'Tullos',
    District: '79',
    Party: 'R',
  },
  {
    Last: 'Scott',
    District: '80',
    Party: 'D',
  },
  {
    Last: 'Horne',
    District: '81',
    Party: 'R',
  },
  {
    Last: 'Young',
    District: '82',
    Party: 'D',
  },
  {
    Last: 'Calvert',
    District: '83',
    Party: 'R',
  },
  {
    Last: 'Shirley',
    District: '84',
    Party: 'R',
  },
  {
    Last: 'Harness',
    District: '85',
    Party: 'D',
  },
  {
    Last: 'Barnett',
    District: '86',
    Party: 'R',
  },
  {
    Last: 'Andrews',
    District: '87',
    Party: 'R',
  },
  {
    Last: 'Staples',
    District: '88',
    Party: 'R',
  },
  {
    Last: 'Shows',
    District: '89',
    Party: 'R',
  },
  {
    Last: 'Scoggin',
    District: '89',
    Party: 'R',
  },
  {
    Last: 'Sanford',
    District: '90',
    Party: 'R',
  },
  {
    Last: 'Evans',
    District: '91',
    Party: 'D',
  },
  {
    Last: 'Currie',
    District: '92',
    Party: 'R',
  },
  {
    Last: 'Ladner',
    District: '93',
    Party: 'R',
  },
  {
    Last: 'Johnson',
    District: '94',
    Party: 'D',
  },
  {
    Last: 'McKnight',
    District: '95',
    Party: 'R',
  },
  {
    Last: 'Cockerham',
    District: '96',
    Party: 'D',
  },
  {
    Last: 'Mims',
    District: '97',
    Party: 'R',
  },
  {
    Last: 'Porter',
    District: '98',
    Party: 'D',
  },
  {
    Last: 'Pigott',
    District: '99',
    Party: 'R',
  },
  {
    Last: 'Morgan',
    District: '100',
    Party: 'R',
  },
  {
    Last: 'McCarty',
    District: '101',
    Party: 'R',
  },
  {
    Last: 'McGee',
    District: '102',
    Party: 'R',
  },
  {
    Last: 'Watson',
    District: '103',
    Party: 'D',
  },
  {
    Last: 'Byrd',
    District: '104',
    Party: 'R',
  },
  {
    Last: 'Goodin',
    District: '105',
    Party: 'R',
  },
  {
    Last: 'Frierson',
    District: '106',
    Party: 'R',
  },
  {
    Last: 'Owen',
    District: '106',
    Party: 'R',
  },
  {
    Last: 'McLeod',
    District: '107',
    Party: 'R',
  },
  {
    Last: 'Hobgood-Wilkes',
    District: '108',
    Party: 'R',
  },
  {
    Last: 'Barton',
    District: '109',
    Party: 'R',
  },
  {
    Last: 'Anderson',
    District: '110',
    Party: 'D',
  },
  {
    Last: 'Busby',
    District: '111',
    Party: 'R',
  },
  {
    Last: 'Read',
    District: '112',
    Party: 'R',
  },
  {
    Last: 'Zuber',
    District: '113',
    Party: 'R',
  },
  {
    Last: 'Guice',
    District: '114',
    Party: 'R',
  },
  {
    Last: 'Patterson',
    District: '115',
    Party: 'R',
  },
  {
    Last: 'Eure',
    District: '116',
    Party: 'R',
  },
  {
    Last: 'Felsher',
    District: '117',
    Party: 'R',
  },
  {
    Last: 'Haney',
    District: '118',
    Party: 'R',
  },
  {
    Last: 'Williams-Barnes',
    District: '119',
    Party: 'D',
  },
  {
    Last: 'Bennett',
    District: '120',
    Party: 'R',
  },
  {
    Last: 'Crawford',
    District: '121',
    Party: 'R',
  },
  {
    Last: 'Anderson',
    District: '122',
    Party: 'R',
  },
];

const senateList = [
  {
    Last: 'Boyd',
    District: '0',
    Party: 'R',
  },
  {
    Last: 'Carter',
    District: '0',
    Party: 'R',
  },
  {
    Last: 'Chism',
    District: '0',
    Party: 'R',
  },
  {
    Last: 'DeLano',
    District: '0',
    Party: 'R',
  },
  {
    Last: 'Johnson',
    District: '0',
    Party: 'R',
  },
  {
    Last: 'McCaughn',
    District: '0',
    Party: 'R',
  },
  {
    Last: 'McLendon',
    District: '0',
    Party: 'R',
  },
  {
    Last: 'Michel',
    District: '0',
    Party: 'R',
  },
  {
    Last: 'Sparks',
    District: '0',
    Party: 'R',
  },
  {
    Last: 'Suber',
    District: '0',
    Party: 'R',
  },
  {
    Last: 'Thompson',
    District: '0',
    Party: 'R',
  },
  {
    Last: 'Whaley',
    District: '0',
    Party: 'R',
  },
  {
    Last: 'England',
    District: '0',
    Party: 'R',
  },
  {
    Last: 'Tate',
    District: '0',
    Party: 'R',
  },
  {
    Last: 'Thomas',
    District: '0',
    Party: 'D',
  },
  {
    Last: 'Massey',
    District: '1',
    Party: 'R',
  },
  {
    Last: 'Parker',
    District: '2',
    Party: 'R',
  },
  {
    Last: 'Browning',
    District: '3',
    Party: 'R',
  },
  {
    Last: 'Parks',
    District: '4',
    Party: 'R',
  },
  {
    Last: 'Wilemon',
    District: '5',
    Party: 'D',
  },
  {
    Last: 'McMahan',
    District: '6',
    Party: 'R',
  },
  {
    Last: 'Bryan',
    District: '7',
    Party: 'D',
  },
  {
    Last: 'Jolly',
    District: '8',
    Party: 'D',
  },
  {
    Last: 'Tollison',
    District: '9',
    Party: 'R',
  },
  {
    Last: 'Stone',
    District: '10',
    Party: 'D',
  },
  {
    Last: 'Jackson',
    District: '11',
    Party: 'D',
  },
  {
    Last: 'Simmons',
    District: '12',
    Party: 'D',
  },
  {
    Last: 'Simmons',
    District: '13',
    Party: 'D',
  },
  {
    Last: 'Chassaniol',
    District: '14',
    Party: 'R',
  },
  {
    Last: 'Jackson',
    District: '15',
    Party: 'R',
  },
  {
    Last: 'Turner-Ford',
    District: '16',
    Party: 'D',
  },
  {
    Last: 'Younger',
    District: '17',
    Party: 'R',
  },
  {
    Last: 'Branning',
    District: '18',
    Party: 'R',
  },
  {
    Last: 'Blackwell',
    District: '19',
    Party: 'R',
  },
  {
    Last: 'Harkins',
    District: '20',
    Party: 'R',
  },
  {
    Last: 'Blackmon',
    District: '21',
    Party: 'D',
  },
  {
    Last: 'Clarke',
    District: '22',
    Party: 'R',
  },
  {
    Last: 'Hopson',
    District: '23',
    Party: 'R',
  },
  {
    Last: 'Jordan',
    District: '24',
    Party: 'D',
  },
  {
    Last: 'Longwitz',
    District: '25',
    Party: 'R',
  },
  {
    Last: 'Horhn',
    District: '26',
    Party: 'D',
  },
  {
    Last: 'Frazier',
    District: '27',
    Party: 'D',
  },
  {
    Last: 'Norwood',
    District: '28',
    Party: 'D',
  },
  {
    Last: 'Blount',
    District: '29',
    Party: 'D',
  },
  {
    Last: 'Kirby',
    District: '30',
    Party: 'R',
  },
  {
    Last: 'Burton',
    District: '31',
    Party: 'R',
  },
  {
    Last: 'Jackson',
    District: '32',
    Party: 'D',
  },
  {
    Last: 'Carmichael',
    District: '33',
    Party: 'R',
  },
  {
    Last: 'Barnett',
    District: '34',
    Party: 'D',
  },
  {
    Last: 'Caughman',
    District: '35',
    Party: 'R',
  },
  {
    Last: 'Butler',
    District: '36',
    Party: 'D',
  },
  {
    Last: 'Dearing',
    District: '37',
    Party: 'D',
  },
  {
    Last: 'Witherspoon',
    District: '38',
    Party: 'D',
  },
  {
    Last: 'Doty',
    District: '39',
    Party: 'R',
  },
  {
    Last: 'Hill',
    District: '40',
    Party: 'R',
  },
  {
    Last: 'Fillingane',
    District: '41',
    Party: 'R',
  },
  {
    Last: 'McDaniel',
    District: '42',
    Party: 'R',
  },
  {
    Last: 'DeBar',
    District: '43',
    Party: 'R',
  },
  {
    Last: 'Polk',
    District: '44',
    Party: 'R',
  },
  {
    Last: 'Hudson',
    District: '45',
    Party: 'R',
  },
  {
    Last: 'Moran',
    District: '46',
    Party: 'R',
  },
  {
    Last: 'Seymour',
    District: '47',
    Party: 'R',
  },
  {
    Last: 'Dawkins',
    District: '48',
    Party: 'D',
  },
  {
    Last: 'Tindell',
    District: '49',
    Party: 'R',
  },
  {
    Last: 'Gollott',
    District: '50',
    Party: 'R',
  },
  {
    Last: 'Watson',
    District: '51',
    Party: 'R',
  },
  {
    Last: 'Wiggins',
    District: '52',
    Party: 'R',
  },
];

const previousSenateList = [
  {
    Last: 'Brown',
    District: '17',
    Party: 'R',
  },
  {
    Last: 'Butler',
    District: '38',
    Party: 'D',
  },
  {
    Last: 'Collins',
    District: ' 6',
    Party: 'R',
  },
  {
    Last: 'Gandy',
    District: '43',
    Party: 'R',
  },
  {
    Last: 'Hale',
    District: '10',
    Party: 'D',
  },
  {
    Last: 'Jones',
    District: '21',
    Party: 'D',
  },
  {
    Last: 'Lee',
    District: '35',
    Party: 'R',
  },
  {
    Last: 'Montgomery',
    District: '34',
    Party: 'D',
  },
  {
    Last: 'Smith',
    District: '47',
    Party: 'R',
  },
  {
    Last: 'Sojourner',
    District: '37',
    Party: 'R',
  },
  {
    Last: 'Ward',
    District: '18',
    Party: 'R',
  },
];

const previousHouseList = [
  {
    Last: 'Alday',
    District: '25',
    Party: 'R',
  },
  {
    Last: 'Aldridge',
    District: '17',
    Party: 'R',
  },
  {
    Last: 'Broomfield',
    District: '110',
    Party: 'D',
  },
  {
    Last: 'Brown',
    District: '66',
    Party: 'D',
  },
  {
    Last: 'Buck',
    District: ' 5',
    Party: 'D',
  },
  {
    Last: 'Burnett',
    District: ' 9',
    Party: 'D',
  },
  {
    Last: 'Coleman',
    District: '65',
    Party: 'D',
  },
  {
    Last: 'DeBar',
    District: '105',
    Party: 'R',
  },
  {
    Last: 'Dickson',
    District: '42',
    Party: 'D',
  },
  {
    Last: 'Eaton',
    District: '79',
    Party: 'D',
  },
  {
    Last: 'Espy',
    District: '26',
    Party: 'D',
  },
  {
    Last: 'Evans',
    District: '70',
    Party: 'D',
  },
  {
    Last: 'Flaggs',
    District: '55',
    Party: 'D',
  },
  {
    Last: 'Gardner',
    District: '11',
    Party: 'D',
  },
  {
    Last: 'Hamilton',
    District: ' 6',
    Party: 'R',
  },
  {
    Last: 'Harrison',
    District: '41',
    Party: 'D',
  },
  {
    Last: 'Howell',
    District: '46',
    Party: 'R',
  },
  {
    Last: 'Jennings',
    District: ' 7',
    Party: 'R',
  },
  {
    Last: 'Lane',
    District: '86',
    Party: 'D',
  },
  {
    Last: 'Lott',
    District: '101',
    Party: 'R',
  },
  {
    Last: 'Malone',
    District: '45',
    Party: 'D',
  },
  {
    Last: 'Martinson',
    District: '58',
    Party: 'R',
  },
  {
    Last: 'Mayo',
    District: '12',
    Party: 'R',
  },
  {
    Last: 'Moak',
    District: '53',
    Party: 'D',
  },
  {
    Last: 'Nelson',
    District: '40',
    Party: 'R',
  },
  {
    Last: 'Oberhousen',
    District: '73',
    Party: 'D',
  },
  {
    Last: 'Smith',
    District: '27',
    Party: 'D',
  },
  {
    Last: 'Stringer',
    District: '87',
    Party: 'D',
  },
  {
    Last: 'Taylor',
    District: '28',
    Party: 'R',
  },
  {
    Last: 'Upshaw',
    District: '95',
    Party: 'R',
  },
  {
    Last: 'Warren',
    District: '90',
    Party: 'D',
  },
  {
    Last: 'Whittington',
    District: '34',
    Party: 'D',
  },
];
