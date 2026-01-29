'use client';

import { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import RSVPModal from '@/components/rsvp/RSVPModal';

export default function FAB() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Phone Button */}
        <a
          href="tel:1588-0000"
          className="w-14 h-14 rounded-full bg-iaso-mint text-white shadow-iaso-lg flex items-center justify-center transition-transform hover:scale-105 touch-target"
          aria-label="전화 상담"
        >
          <Phone size={24} />
        </a>

        {/* RSVP Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-16 h-16 rounded-full bg-iaso-green text-white shadow-iaso-lg flex items-center justify-center transition-transform hover:scale-105 touch-target"
          aria-label="상담 예약"
        >
          <MessageCircle size={28} />
        </button>
      </div>

      {/* RSVP Modal */}
      <RSVPModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
