'use client';

import { useEffect, useRef, useState } from 'react';

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

  useEffect(() => {
    // 네이버 지도 스크립트가 없으면 동적으로 로드
    if (!window.naver) {
      const script = document.createElement('script');
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
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
