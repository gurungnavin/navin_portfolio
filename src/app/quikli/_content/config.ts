// Quikli 共通情報（連絡先・日付などはここだけを更新する）
export const quikliApp = {
  name: "Quikli",
  developer: "Navin Gurung",
  supportEmail: "navingurung865@gmail.com",
  platforms: ["iOS"],
  lastUpdated: "2026-10-12",
  googlePrivacyUrl: "https://policies.google.com/privacy",
  googleAdsUrl: "https://policies.google.com/technologies/ads",
} as const;

export type Lang = "en" | "ja";

export const LANGS: readonly Lang[] = ["en", "ja"] as const;

export function resolveLang(value: string | string[] | undefined): Lang {
  return value === "ja" ? "ja" : "en";
}