import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 16 16">
          {/* Pixel N */}
          <rect x="2" y="2" width="4" height="12" fill="#50fa7b" />
          <rect x="10" y="2" width="4" height="12" fill="#50fa7b" />
          <rect x="6" y="4" width="2" height="4" fill="#50fa7b" />
          <rect x="8" y="8" width="2" height="4" fill="#50fa7b" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
