const mapping: { [key: number]: string } = {
  1: "[Buster]",
  2: "[Arts]",
  3: "[Buster][Arts]",
  4: "[Study]",
  5: "[Buster][Study]",
  6: "[Arts][Study]",
  7: "[Buster][Arts][Study]",
  0: "[Balanced]",
};

export function convertFeature(code: number | undefined): string {
  return mapping[code ?? 0] || "[Balanced]";
}
