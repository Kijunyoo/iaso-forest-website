'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import RSVPModal from '@/components/rsvp/RSVPModal';

export default function FAB() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
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
