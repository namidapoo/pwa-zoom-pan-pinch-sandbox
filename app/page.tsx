"use client";

import ZoomArea from "./components/ZoomArea";
import { HexGrid, Hexagon, Layout } from "react-hexgrid";
import { useCallback } from "react";

export default function Home() {
  const handleButtonClick = useCallback(() => {
    alert("ボタンがクリックされました！");
  }, []);

  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <header className="mb-2 text-center">
        <h1 className="text-2xl font-bold">ズーム・パン・ピンチのサンプル</h1>
        <p className="text-gray-600 dark:text-gray-400">
          react-zoom-pan-pinchを使用した特定エリアのズーム機能のデモ
        </p>
      </header>

      {/* 押下可能なエリア外のボタン */}
      <div className="flex justify-center my-2">
        <button
          onClick={handleButtonClick}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors touch-auto"
        >
          アラートを表示
        </button>
      </div>
    
      <main className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="mb-4 text-center">
            以下のエリア内でのみズーム操作が可能です。ページ全体はズーム対象外です。
          </p>
          
          {/* ズーム可能なエリア */}
          <ZoomArea height="600px">
            <HexGrid
						width="100vw"
						height="100vh"
						viewBox="-200 -200 400 400" // 十分に大きくして余白を作る（見切れるのを防ぐ）
					>
						<Layout
							size={{ x: 10, y: 10 }}
							flat={false}
							spacing={1.04}
							origin={{ x: 0, y: 0 }}
						>
              <Hexagon
                key={"0"}
                q={0}
                r={0}
                s={0}
                fill={"#000000"}
                stroke={"#000000"}
                strokeWidth={0.5}
              >
                <text
                  x="0"
                  y="0"
                  textAnchor="middle"
                  dominantBaseline="central"
                  style={{
                    fontSize: "0.6em",
                    fill: "#000000",
                    stroke: "none",
                    fontWeight: "normal",
                  }}
                >
                  S
                </text>
              </Hexagon>
						</Layout>
					</HexGrid>
          </ZoomArea>
        </div>
        
        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-xl font-bold mb-2">使用方法</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>ズームエリア内でマウスホイールを使用してズームイン/アウト</li>
            <li>タッチデバイスではピンチジェスチャーでズーム</li>
            <li>ドラッグまたはスワイプで表示位置を移動</li>
            <li>コントロールボタンを使用して操作することも可能</li>
          </ul>
        </div>
      </main>
      
      <footer className="mt-16 text-center text-sm text-gray-500">
        <p>react-zoom-pan-pinchを使用したデモページ</p>
      </footer>
    </div>
  );
}
