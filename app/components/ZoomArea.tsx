'use client';

import { ReactNode } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface ZoomAreaProps {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export default function ZoomArea({ 
  children, 
  width = '100%', 
  height = '400px',
  className = '' 
}: ZoomAreaProps) {
  return (
    <div style={{ width, height }} className={`border border-gray-300 rounded-lg overflow-hidden ${className}`}>
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
        centerOnInit
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="flex gap-2 p-2 bg-gray-100 dark:bg-gray-800">
              <button 
                onClick={() => zoomIn()} 
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                +
              </button>
              <button 
                onClick={() => zoomOut()} 
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                -
              </button>
              <button 
                onClick={() => resetTransform()} 
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                リセット
              </button>
            </div>
            <div className="h-[calc(100%-40px)] bg-white dark:bg-gray-900">
              <TransformComponent>
                <div className="p-4">
                  {children}
                </div>
              </TransformComponent>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
} 