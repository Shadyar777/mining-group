import { getListIconResources } from './getListIconResources.tsx';

const listIcons = getListIconResources();
export const getIconForResource = (resourceName: string) => {
  const matchedIconObj = listIcons.find(
    (iconObj) => iconObj.name === resourceName,
  );
  return matchedIconObj ? matchedIconObj.icon : null;
};
