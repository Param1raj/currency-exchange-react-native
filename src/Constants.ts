import European_Union from '../assets/images/Flag_of_Europe.svg.png';
import United_State from '../assets/images/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.webp';
import China from '../assets/images/Flag_of_the_Peoples_Republic_of_China.svg.webp';
import UAE from '../assets/images/Flag_of_the_United_Arab_Emirates.svg.png';
import Saudi_Arabia from '../assets/images/Flag_of_Saudi_Arabia.svg.png';
import Russia from '../assets/images/Flag_of_Russia.svg.png';
import Indonesia from '../assets/images/Flag_of_Indonesia.svg.webp';
import Iraq from '../assets/images/Flag_of_Iraq.svg.png';
import Singapore from '../assets/images/Flag_of_Singapore.svg.webp';

export const data = {
  countryData: [
    {
      name: 'Euro',
      image: European_Union,
      rupeesPerUnit: 89.0,
      currencySign: '€',
    },
    {
      name: 'Dollar',
      image: United_State,
      rupeesPerUnit: 74.5,
      currencySign: '$',
    },
    {
      name: 'Yuan',
      image: China,
      rupeesPerUnit: 11.5,
      currencySign: '¥',
    },
    {
      name: 'Dirham',
      image: UAE,
      rupeesPerUnit: 20.25,
      currencySign: 'د.إ',
    },
    {
      name: 'Riyal',
      image: Saudi_Arabia,
      rupeesPerUnit: 19.85,
      currencySign: '﷼',
    },
    {
      name: 'Ruble',
      image: Russia,
      rupeesPerUnit: 1.0,
      currencySign: '₽',
    },
    {
      name: 'Rupiah',
      image: Indonesia,
      rupeesPerUnit: 0.0053,
      currencySign: 'Rp',
    },
    {
      name: 'Dinar',
      image: Iraq,
      rupeesPerUnit: 0.05,
      currencySign: 'د.ع',
    },
    {
      name: 'Singapore Dollar',
      image: Singapore,
      rupeesPerUnit: 55.0,
      currencySign: 'S$',
    },
  ],
};
