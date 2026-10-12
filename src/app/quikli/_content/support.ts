import { quikliApp, type Lang } from "./config";

export type Faq = { q: string; a: string };

export type SupportDoc = {
  label: string;
  title: string;
  intro: string;
  contact: {
    title: string;
    body: string;
    cta: string;
    note: string;
  };
  faqTitle: string;
  faqs: Faq[];
  info: {
    title: string;
    platformsLabel: string;
    developerLabel: string;
    privacyLabel: string;
  };
};

const { name, supportEmail } = quikliApp;

export const support: Record<Lang, SupportDoc> = {
  en: {
    label: "SUPPORT",
    title: `${name} Support`,
    intro: "Need help, found a bug, or have an idea? You’re in the right place.",
    contact: {
      title: "Contact",
      body: `Email ${supportEmail} and I’ll get back to you as soon as I can.`,
      cta: "Send an email",
      note: "Including your device model and iOS version helps me solve issues faster.",
    },
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "Where is my data stored?",
        a: "Everything you create in Quikli — lists, tables, and settings — is stored only on your device. There is no account and no server.",
      },
      {
        q: "What happens to my data if I delete the app?",
        a: "Deleting the app removes all of its data from your device. Because nothing is stored on a server, it cannot be recovered.",
      },
      {
        q: "My reminders are not showing up.",
        a: "Open your iPhone’s Settings → Notifications → Quikli and make sure notifications are allowed. Also check that Focus or Do Not Disturb is not silencing them.",
      },
      {
        q: "How do I change the language?",
        a: "Open the Settings tab in Quikli and choose a language. English, Japanese, and Nepali are supported.",
      },
      {
        q: "Why does the app show ads?",
        a: "Ads help keep Quikli free. They are non-personalized and served by Google AdMob. See the privacy policy for details.",
      },
    ],
    info: {
      title: "App info",
      platformsLabel: "Platforms",
      developerLabel: "Developer",
      privacyLabel: "Privacy Policy",
    },
  },

  ja: {
    label: "SUPPORT",
    title: `${name} サポート`,
    intro: "ご不明な点、不具合のご報告、ご要望などはこちらからお問い合わせください。",
    contact: {
      title: "お問い合わせ",
      body: `${supportEmail} までメールでご連絡ください。できるだけ早くご返信いたします。`,
      cta: "メールを送る",
      note: "端末の機種名と iOS のバージョンをお知らせいただくと、スムーズに対応できます。",
    },
    faqTitle: "よくある質問",
    faqs: [
      {
        q: "データはどこに保存されますか？",
        a: "Quikli で作成したリスト・テーブル・設定は、すべてお使いの端末内にのみ保存されます。アカウントやサーバーはありません。",
      },
      {
        q: "アプリを削除するとデータはどうなりますか？",
        a: "アプリを削除すると、端末内のデータもすべて削除されます。サーバーには保存されていないため、復元はできません。",
      },
      {
        q: "リマインダーの通知が届きません。",
        a: "iPhone の「設定」→「通知」→「Quikli」で通知が許可されているかご確認ください。集中モードやおやすみモードがオンになっていないかもご確認ください。",
      },
      {
        q: "言語を変更するには？",
        a: "Quikli の「設定」タブから言語を選択できます。英語・日本語・ネパール語に対応しています。",
      },
      {
        q: "なぜ広告が表示されるのですか？",
        a: "広告は Quikli を無料で提供し続けるためのものです。Google AdMob による非パーソナライズ広告を表示しています。詳しくはプライバシーポリシーをご覧ください。",
      },
    ],
    info: {
      title: "アプリ情報",
      platformsLabel: "対応プラットフォーム",
      developerLabel: "開発者",
      privacyLabel: "プライバシーポリシー",
    },
  },
};