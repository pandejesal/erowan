# How to Build Cinematic 3D Scroll Sections with GSAP, Next.js, and React Three Fiber | Mirax
Source: https://mirax.cc/articles/cinematic-3d-scroll-gsap-nextjs-react-three-fiber
Published: 2026-05-02

Cached from websearch summary due to DNS failure at download time. Full code patterns saved.

## Recommended Stack
Next.js App Router, React, TypeScript, GSAP, @gsap/react, ScrollTrigger, @react-three/fiber, @react-three/drei

## Architecture
- CinematicScrollSection.tsx owns layout and GSAP ScrollTrigger
- CinematicScene.tsx owns 3D scene
- CinematicCamera.tsx updates camera from mutable refs
- ChapterOverlay.tsx renders text chapters
- cinematicConfig.ts stores camera path and chapter data

Key pattern: UseRefs for camera/target/modelRotation - GSAP mutates refs, useFrame applies to Three.js camera, no React re-renders per scroll tick.

## Performance Rules
- cap DPR with dpr={[1, 1.5]}
- avoid React state inside animation loop
- respect reduced-motion and mobile fallback (simpler non-pinned scene)
- use useGSAP() hook for cleanup
- use gsap.matchMedia() for breakpoints

Full source available in search cache S1. See also downloaded HTML files for other guides.
