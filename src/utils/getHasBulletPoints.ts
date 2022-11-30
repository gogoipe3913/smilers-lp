export function getHasBulletPoints(content: string): boolean {
  return content.startsWith("・");
}
