"use client";

import { Suspense, lazy } from "react";

// Lazy load the Spline component
const Spline = lazy(() => import("@splinetool/react-spline/next"));

export function SplineScene() {
  return (
    <div className="absolute inset-0">
      <Suspense 
        fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20 animate-pulse">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400 text-sm">Loading 3D Scene...</p>
            </div>
          </div>
        }
      >
        <Spline
          scene="https://prod.spline.design/QP2-GPmAXKm9CJIg/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            right: 0,
            transform: "scale(1.2)",
          }}
        />
      </Suspense>
    </div>
  );
}
