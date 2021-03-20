export const filterListSymptom = (
  selectedSymptom: string[],
  listSymptom: string[],
  isSelected?: boolean,
): string[] =>
  isSelected
    ? listSymptom.filter((symptom) => selectedSymptom.includes(symptom))
    : listSymptom.filter((symptom) => !selectedSymptom.includes(symptom));
