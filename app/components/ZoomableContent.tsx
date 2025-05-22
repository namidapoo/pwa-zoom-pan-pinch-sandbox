'use client';

import Image from 'next/image';

export default function ZoomableContent() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold">ズーム可能なコンテンツ</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        ピンチ・ズームまたはマウスホイールでズームができます。ドラッグで移動できます。
      </p>
      <div className="relative w-[500px] h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="ズーム可能な風景画像"
          fill
          className="object-cover rounded"
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <h3 className="font-bold mb-2">ズーム機能</h3>
          <p>このエリア内でズーム、パン、ピンチ操作が可能です。</p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <h3 className="font-bold mb-2">使い方</h3>
          <p>コントロールボタンまたはジェスチャーを使用してください。</p>
        </div>
      </div>
    </div>
  );
} 