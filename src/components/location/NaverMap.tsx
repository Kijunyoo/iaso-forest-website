'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

interface Marker {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: 'main' | 'transport' | 'nature' | 'amenity';
}

interface NaverMapProps {
  center: { lat: number; lng: number };
  zoom?: number;
  markers?: Marker[];
  height?: string;
  variant?: 'wide' | 'detail';
}

// 네이버 지도 타입 선언 (any 타입 사용)
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}

const markerColors: Record<string, string> = {
  main: '#2C5F2D',
  transport: '#3B82F6',
  nature: '#22C55E',
  amenity: '#F59E0B',
};

export default function NaverMap({
  center,
  zoom = 15,
  markers = [],
  height = '400px',
  variant = 'detail',
}: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(true);

  useEffect(() => {
    // API 키 체크
    const apiKey = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;
    if (!apiKey) {
      setHasApiKey(false);
      return;
    }

    // 네이버 지도 스크립트가 없으면 동적으로 로드
    if (typeof window !== 'undefined' && !window.naver) {
      const script = document.createElement('script');
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${apiKey}`;
      script.async = true;
      script.onload = initMap;
      script.onerror = () => setHasApiKey(false);
      document.head.appendChild(script);
    } else if (typeof window !== 'undefined') {
      initMap();
    }

    function initMap() {
      if (!mapRef.current || !window.naver) return;

      const mapOptions = {
        center: new window.naver.maps.LatLng(center.lat, center.lng),
        zoom: zoom,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      };

      const map = new window.naver.maps.Map(mapRef.current, mapOptions);
      mapInstanceRef.current = map;
      setIsLoaded(true);

      // 마커 추가
      markers.forEach((marker) => {
        const markerInstance = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(marker.lat, marker.lng),
          map: map,
          icon: {
            content: `
              <div style="
                background-color: ${markerColors[marker.type] || markerColors.main};
                color: white;
                padding: 8px 12px;
                border-radius: 20px;
                font-size: 13px;
                font-weight: 600;
                box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                white-space: nowrap;
              ">
                ${marker.name}
              </div>
            `,
            anchor: new window.naver.maps.Point(50, 20),
          },
        });

        // 메인 마커에 정보창 추가
        if (marker.type === 'main') {
          const infoWindow = new window.naver.maps.InfoWindow({
            content: `
              <div style="padding: 15px; max-width: 250px;">
                <h3 style="margin: 0 0 8px; font-size: 16px; font-weight: 700; color: #2C5F2D;">
                  ${marker.name}
                </h3>
                <p style="margin: 0; font-size: 14px; color: #666;">
                  경기도 양평군 양동면 금왕리 836-1
                </p>
              </div>
            `,
          });

          window.naver.maps.Event.addListener(markerInstance, 'click', () => {
            if (infoWindow.getMap()) {
              infoWindow.close();
            } else {
              infoWindow.open(map, markerInstance);
            }
          });
        }
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
      }
    };
  }, [center, zoom, markers]);

  // Cloudinary 정적 지도 이미지 URL
  const fallbackMapImage = 'https://res.cloudinary.com/dp79vfxyf/image/upload/iaso_forest/canva/map';

  // API 키가 없거나 로드 실패 시 Cloudinary 이미지 fallback
  if (!hasApiKey) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-iaso shadow-iaso"
        style={{ height }}
      >
        {/* Cloudinary 정적 지도 이미지 */}
        <img
          src={fallbackMapImage}
          alt="이아소 포레스트 위치 지도"
          className="w-full h-full object-cover"
          onError={(e) => {
            // 이미지 로드 실패 시 placeholder 표시
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        {/* 이미지 로드 실패 시 placeholder */}
        <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-iaso-green-50 to-iaso-beige-50">
          <MapPin className="w-12 h-12 text-iaso-green mb-4" />
          <h3 className="text-lg font-bold text-iaso-text mb-2">이아소 포레스트</h3>
          <p className="text-iaso-text-light mb-4">경기도 양평군 양동면 금왕리 836-1</p>
        </div>
        {/* 네이버 지도 링크 오버레이 */}
        <a
          href={`https://map.naver.com/p/search/${encodeURIComponent('양동면 이아소길')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-iaso-green px-4 py-2 rounded-full text-sm font-medium shadow-lg transition-colors"
        >
          네이버 지도에서 보기 →
        </a>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-iaso shadow-iaso">
      <div
        ref={mapRef}
        style={{ height, width: '100%' }}
        className="bg-gray-100"
      />
      {/* 로딩 상태 표시 */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-gray-500">지도를 불러오는 중...</div>
        </div>
      )}
    </div>
  );
}
