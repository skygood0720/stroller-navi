"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    href: "/",
    label: "ホーム",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" className={`w-5 h-5 ${active ? "fill-brand-500" : "fill-gray-400"}`}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    href: "/spots",
    label: "スポット",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" className={`w-5 h-5 ${active ? "fill-brand-500" : "fill-gray-400"}`}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    href: "/articles",
    label: "記事",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" className={`w-5 h-5 ${active ? "fill-brand-500" : "fill-gray-400"}`}>
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
  },
  {
    href: "/baby-goods",
    label: "商品",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" className={`w-5 h-5 ${active ? "fill-brand-500" : "fill-gray-400"}`}>
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.9 18 9 18h12v-2H9.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 23.43 5H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    ),
  },
  {
    href: "/weaning-tracker",
    label: "離乳食",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" className={`w-5 h-5 ${active ? "fill-brand-500" : "fill-gray-400"}`}>
        <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z" />
      </svg>
    ),
  },
  {
    href: "/favorites",
    label: "お気に入り",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" className={`w-5 h-5 ${active ? "fill-brand-500" : "fill-gray-400"}`}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-lg safe-area-pb">
      <div className="max-w-[640px] mx-auto flex">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-colors ${
                active ? "text-brand-500" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {item.icon(active)}
              <span className={`text-[9px] font-bold leading-none ${active ? "text-brand-500" : "text-gray-400"}`}>
                {item.label}
              </span>
              {active && (
                <span className="absolute bottom-0 w-8 h-0.5 bg-brand-500 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
