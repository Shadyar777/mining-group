import Gold from '../../../svgs/ResourscesIcon/Gold.tsx';
import Silver from '../../../svgs/ResourscesIcon/Silver.tsx';
import Copper from '../../../svgs/ResourscesIcon/Copper.tsx';
import IronOre from '../../../svgs/ResourscesIcon/IronOre.tsx';
import Oil from '../../../svgs/ResourscesIcon/Oil.tsx';
import OresOfNonFerrousMetals from '../../../svgs/ResourscesIcon/OresOfNonFerrousMetals.tsx';
import UndergroundDrinkingWater from '../../../svgs/ResourscesIcon/UndergroundDrinkingWater.tsx';
import Coal from '../../../svgs/ResourscesIcon/Coal.tsx';
import Gas from '../../../svgs/ResourscesIcon/Gas.tsx';

export const getIconResourceByName = (name: string) => {
  const resources = {
    золото: Gold,
    серебро: Silver,
    медь: Copper,
    'железная руда': IronOre,
    нефть: Oil,
    уголь: Coal,
    'руды цветных металлов': OresOfNonFerrousMetals,
    'воды подземные питьевые': UndergroundDrinkingWater,
    'природный газ': Gas,
  };

  return resources[name.toLowerCase()] ?? 'not fount';
};
