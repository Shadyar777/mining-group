type CheckedNames = {
  name: string;
  isChecked: boolean;
};

export const getCheckedNames = <T extends CheckedNames>(
  data: T[],
): string[] => {
  return data.filter((item) => item.isChecked).map((item) => item.name);
};
