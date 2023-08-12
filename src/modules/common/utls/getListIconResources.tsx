import Gold from '../../../svgs/ResourscesIcon/Gold.tsx';
import Silver from '../../../svgs/ResourscesIcon/Silver.tsx';
import Copper from '../../../svgs/ResourscesIcon/Copper.tsx';
import IronOre from '../../../svgs/ResourscesIcon/IronOre.tsx';
import Oil from '../../../svgs/ResourscesIcon/Oil.tsx';
import Coal from '../../../svgs/ResourscesIcon/Coal.tsx';
import OresOfNonFerrousMetals from '../../../svgs/ResourscesIcon/OresOfNonFerrousMetals.tsx';
import UndergroundDrinkingWater from '../../../svgs/ResourscesIcon/UndergroundDrinkingWater.tsx';
import Gas from '../../../svgs/ResourscesIcon/Gas.tsx';

export const getListIconResources = () => {
  return [
    {
      id: 1,
      name: 'Золото рассыпное',
      icon: <Gold />,
    },
    {
      id: 2,
      name: 'Серебро',
      icon: <Silver />,
    },
    {
      id: 3,
      name: 'Медь',
      icon: <Copper />,
    },
    {
      id: 4,
      name: 'Железная руда',
      icon: <IronOre />,
    },
    {
      id: 5,
      name: 'Нефть',
      icon: <Oil />,
    },
    {
      id: 6,
      name: 'Уголь',
      icon: <Coal />,
    },
    {
      id: 7,
      name: 'Руды цветных металлов',
      icon: <OresOfNonFerrousMetals />,
    },
    {
      id: 8,
      name: 'Воды подземные питьевые',
      icon: <UndergroundDrinkingWater />,
    },
    {
      id: 9,
      name: 'Природный газ',
      icon: <Gas />,
    },
  ];
};
