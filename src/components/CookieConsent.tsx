"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "cookie_consent_v1";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-20 left-0 right-0 z-50 px-4 max-w-[640px] mx-auto">
      <div className="bg-gray-900 text-white rounded-2xl p-4 shadow-xl">
        <p className="text-xs leading-relaxed mb-3 text-gray-200">
          当サイトはサービス改善・広告表示のために Cookie を使用しています。
          詳しくは
          <Link href="/privacy" className="underline text-white ml-1" onClick={accept}>
            プライバシーポリシー
          </Link>
          をご覧ください。
        </p>
        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 bg-white text-gray-900 text-xs font-bold rounded-xl py-2 hover:bg-gray-100 transition"
          >
            同意して続ける
          </button>
          <Link
            href="/privacy"
            className="text-xs text-gray-400 py-2 px-3 hover:text-white transition"
            onClick={accept}
          >
            詳細
          </Link>
        </div>
      </div>
    </div>
  );
}
