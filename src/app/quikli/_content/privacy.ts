import { quikliApp, type Lang } from "./config";
// 段落は string、箇条書きは string[]
export type Block = string | string[];

export type DocSection = {
  id: string;
  title: string;
  blocks: Block[];
  links?: { label: string; href: string }[];
};

export type PrivacyDoc = {
  label: string;
  title: string;
  updatedLabel: string;
  intro: string;
  summary: { title: string; body: string }[];
  tocLabel: string;
  sections: DocSection[];
};

const { name, developer, supportEmail, googlePrivacyUrl, googleAdsUrl } = quikliApp;

export const privacy: Record<Lang, PrivacyDoc> = {
  en: {
    label: "PRIVACY POLICY",
    title: "Privacy Policy",
    updatedLabel: "Last updated",
    intro: `This policy explains how ${name} handles your information. In short: your lists and tables stay on your device, there is no account, and the developer does not collect your personal data.`,
    summary: [
      { title: "On your device", body: "Lists, tables, and settings are stored locally on your phone." },
      { title: "No account", body: "No sign-up, no login, and no server that holds your data." },
      { title: "Non-personalized ads", body: "Ads are served by Google AdMob without personalization." },
    ],
    tocLabel: "On this page",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          `${name} (“the app”) is developed and operated by ${developer}, an individual developer based in Japan. This policy applies to the iOS version of the app.`,
        ],
      },
      {
        id: "data-on-device",
        title: "Data stored on your device",
        blocks: [
          "The app saves the following information only in the app’s local storage on your device:",
          [
            "Checklists, items, and their checked status",
            "Event tables you create, including any names, payment status, or notes you enter",
            "Custom categories, reminder settings, language, and theme preferences",
          ],
          "This data is never sent to the developer or to any server operated by the developer. If you enter information about other people (for example, attendee names in a table), it remains on your device only.",
        ],
      },
      {
        id: "not-collected",
        title: "What we do not collect",
        blocks: [
          [
            "No account, email address, or phone number",
            "No contacts, photos, camera, microphone, or precise location",
            "No analytics or tracking tools operated by the developer",
          ],
        ],
      },
      {
        id: "notifications",
        title: "Notifications",
        blocks: [
          "Reminders are scheduled as local notifications on your device. They are not sent through a server. You can turn notifications off at any time in your device’s Settings.",
        ],
      },
      {
        id: "advertising",
        title: "Advertising (Google AdMob)",
        blocks: [
          "The app shows ads provided by Google AdMob. Ads are requested as non-personalized, which means they are not based on your past behavior or interests.",
          "Even for non-personalized ads, Google’s SDK may automatically collect certain information, such as:",
          [
            "IP address (used to estimate general location, e.g. city level)",
            "Device or advertising identifiers (used for frequency capping and aggregated reporting)",
            "Ad interactions, diagnostics, and performance data",
          ],
          "This information is collected and processed by Google under Google’s own privacy policy. The developer does not receive information that identifies you.",
        ],
        links: [
          { label: "Google Privacy Policy", href: googlePrivacyUrl },
          { label: "How Google uses information in ads", href: googleAdsUrl },
        ],
      },
      {
        id: "children",
        title: "Children",
        blocks: [
          "The app is not directed at children under 13, and the developer does not knowingly collect personal information from children.",
        ],
      },
      {
        id: "retention",
        title: "Data retention and deletion",
        blocks: [
          "Your data stays on your device until you delete it. You can delete individual lists and tables in the app, or remove all app data by uninstalling the app. Because the data is not stored on a server, the developer cannot recover it.",
        ],
      },
      {
        id: "your-rights",
        title: "Your rights",
        blocks: [
          "The developer handles personal information in accordance with Japan’s Act on the Protection of Personal Information (APPI) and other applicable laws. Since the developer does not hold your data, most requests can be handled directly on your device. For questions about data collected by Google, please refer to Google’s privacy policy.",
        ],
      },
      {
        id: "changes",
        title: "Changes to this policy",
        blocks: [
          "This policy may be updated when the app changes. Updates will be posted on this page with a new “Last updated” date.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        blocks: [`If you have any questions about this policy, please contact: ${supportEmail}`],
      },
    ],
  },

  ja: {
    label: "PRIVACY POLICY",
    title: "プライバシーポリシー",
    updatedLabel: "最終更新日",
    intro: `本ポリシーは、${name} における情報の取り扱いについて説明するものです。リストやテーブルはお使いの端末内にのみ保存され、アカウント登録は不要です。開発者がお客様の個人情報を収集することはありません。`,
    summary: [
      { title: "端末内に保存", body: "リスト・テーブル・設定はすべて端末内に保存されます。" },
      { title: "アカウント不要", body: "登録・ログインは不要で、データを保管するサーバーもありません。" },
      { title: "非パーソナライズ広告", body: "Google AdMob の広告はパーソナライズせずに配信されます。" },
    ],
    tocLabel: "目次",
    sections: [
      {
        id: "overview",
        title: "概要",
        blocks: [
          `${name}（以下「本アプリ」）は、日本在住の個人開発者 ${developer}（以下「開発者」）が開発・運営しています。本ポリシーは iOS 版の本アプリに適用されます。`,
        ],
      },
      {
        id: "data-on-device",
        title: "端末内に保存される情報",
        blocks: [
          "本アプリは、以下の情報をお使いの端末内のローカルストレージにのみ保存します。",
          [
            "チェックリスト、項目、およびチェック状態",
            "作成したイベントテーブル（入力された氏名、支払い状況、メモなどを含む）",
            "カスタムカテゴリ、リマインダー設定、言語・テーマ設定",
          ],
          "これらの情報が開発者や開発者の運営するサーバーに送信されることはありません。テーブルに他の方の情報（参加者名など）を入力した場合も、その情報は端末内にのみ保存されます。",
        ],
      },
      {
        id: "not-collected",
        title: "収集しない情報",
        blocks: [
          [
            "アカウント、メールアドレス、電話番号",
            "連絡先、写真、カメラ、マイク、詳細な位置情報",
            "開発者による解析ツールやトラッキング",
          ],
        ],
      },
      {
        id: "notifications",
        title: "通知について",
        blocks: [
          "リマインダーは端末上のローカル通知として設定され、サーバーを経由しません。通知は端末の「設定」からいつでもオフにできます。",
        ],
      },
      {
        id: "advertising",
        title: "広告について（Google AdMob）",
        blocks: [
          "本アプリは Google AdMob による広告を表示します。広告は非パーソナライズ広告としてリクエストされ、お客様の過去の行動や興味・関心に基づくものではありません。",
          "非パーソナライズ広告であっても、Google の SDK により以下のような情報が自動的に収集される場合があります。",
          [
            "IP アドレス（市区町村レベルのおおよその地域を推定するため）",
            "端末または広告識別子（表示回数の制限や集計レポートのため）",
            "広告とのやり取り、診断情報、パフォーマンスデータ",
          ],
          "これらの情報は Google のプライバシーポリシーに基づき Google が収集・処理します。開発者がお客様個人を特定できる情報を受け取ることはありません。",
        ],
        links: [
          { label: "Google プライバシーポリシー", href: googlePrivacyUrl },
          { label: "Google による広告での情報の利用", href: googleAdsUrl },
        ],
      },
      {
        id: "children",
        title: "お子様のプライバシー",
        blocks: [
          "本アプリは 13 歳未満のお子様を対象としておらず、開発者がお子様の個人情報を意図的に収集することはありません。",
        ],
      },
      {
        id: "retention",
        title: "データの保存期間と削除",
        blocks: [
          "データはお客様が削除するまで端末内に保存されます。リストやテーブルはアプリ内で個別に削除でき、アプリをアンインストールするとすべてのデータが削除されます。データはサーバーに保存されていないため、開発者が復元することはできません。",
        ],
      },
      {
        id: "your-rights",
        title: "お客様の権利",
        blocks: [
          "開発者は、個人情報の保護に関する法律（個人情報保護法）その他の関係法令を遵守します。開発者はお客様のデータを保有していないため、多くの操作は端末上で直接行えます。Google が収集する情報については、Google のプライバシーポリシーをご確認ください。",
        ],
      },
      {
        id: "changes",
        title: "本ポリシーの変更",
        blocks: [
          "本アプリの変更に伴い、本ポリシーを改定する場合があります。改定時は本ページにて「最終更新日」とともにお知らせします。",
        ],
      },
      {
        id: "contact",
        title: "お問い合わせ",
        blocks: [`本ポリシーに関するご質問は、以下までご連絡ください：${supportEmail}`],
      },
    ],
  },
};