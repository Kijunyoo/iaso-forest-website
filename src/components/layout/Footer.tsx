import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-iaso-text text-white">
      <div className="container-iaso py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">IASO FOREST</h3>
            <p className="text-white/70 mb-4">
              치유와 힐링의 프리미엄 전원마을
            </p>
            <p className="text-sm text-white/50">
              © 2026 Iaso Forest. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">바로가기</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-iaso-gold transition-colors">
                  소개말
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/70 hover:text-iaso-gold transition-colors">
                  둘러보기
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-white/70 hover:text-iaso-gold transition-colors">
                  입주가이드
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-white/70 hover:text-iaso-gold transition-colors">
                  오시는 길
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">연락처</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-white" />
                <span className="text-white">031-770-1880</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-white" />
                <span className="text-white">010-8507-7290</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white" />
                <span className="text-white">info@iasoforest.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-white mt-1" />
                <span className="text-white">경기도 양평군 양동면 이아소길<br />(금왕리 836-1)</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-white" />
                <a
                  href="http://pf.kakao.com/_KxjXkxj/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-iaso-gold transition-colors"
                >
                  카카오톡 상담
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">상담 안내</h4>
            <ul className="space-y-2 text-white">
              <li>연중무휴</li>
              <li className="text-iaso-gold mt-4">현장 방문은 예약제로 운영됩니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
