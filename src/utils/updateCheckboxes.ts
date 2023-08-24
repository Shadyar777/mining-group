export const updateCheckboxes = (checkboxes: any[], data: string[]) => {
  return checkboxes.map((checkbox) => ({
    ...checkbox,
    isChecked: data.includes(checkbox.name),
  }));
};
