export const FAMILY_CODE_KEY = "family_room_code";

export function getFamilyCode(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(FAMILY_CODE_KEY);
}

export function setFamilyCode(code: string): void {
  localStorage.setItem(FAMILY_CODE_KEY, code.toUpperCase());
}

export function clearFamilyCode(): void {
  localStorage.removeItem(FAMILY_CODE_KEY);
}

export function generateFamilyCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    if (i === 4) code += "-";
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export function normalizeFamilyCode(raw: string): string {
  return raw.replace(/[^A-Za-z0-9]/g, "").toUpperCase().slice(0, 8);
}

export function formatFamilyCode(code: string): string {
  const clean = code.replace(/-/g, "");
  if (clean.length <= 4) return clean;
  return `${clean.slice(0, 4)}-${clean.slice(4)}`;
}
