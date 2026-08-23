"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  useMotionValue,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  type Easing,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const sectionIdFromLink = (link: string) =>
  link === "/" ? "home" : link.replace(/^\//, "");

// Matches the "Let's Discuss" CTA button (from-blue-900 via-indigo-700 to-purple-600)
const indicatorGradient =
  "linear-gradient(135deg, #1e3a8a 0%, #4338ca 50%, #0b0b71 100%)";

const hopTiming = {
  duration: 0.55,
  times: [0, 0.45, 1],
  ease: ["easeOut", "easeIn"] as Easing[],
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const desktopItemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const mobileItemRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Desktop indicator motion values — the source of truth is always their
  // *live* value, so a hop triggered mid-flight of the previous one just
  // continues smoothly instead of relying on a React-state snapshot.
  const dLeft = useMotionValue(0);
  const dWidth = useMotionValue(0);
  const dTop = useMotionValue(0);
  const dHeight = useMotionValue(32);
  const dY = useMotionValue(0);

  // Mobile indicator motion values
  const mTop = useMotionValue(0);
  const mHeight = useMotionValue(0);
  const mWidth = useMotionValue(0);
  const mX = useMotionValue(0);
  const mOpacity = useMotionValue(0.3);

  const desktopMounted = useRef(false);
  const mobileMounted = useRef(false);
  // While a click-triggered smooth scroll is in flight, ignore the
  // observer's transient readings of sections it scrolls past — the
  // clicked target should stay active instead of "passing through" them.
  const suppressObserverRef = useRef(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    setVisible(true);
  });

  // Track which section is currently centered in the viewport so the
  // nav indicator follows scroll position, not just clicks. Several
  // sections are lazy-loaded (dynamic import, ssr:false) and may not exist
  // in the DOM yet on mount, so keep retrying via MutationObserver until
  // every section has been found at least once.
  useEffect(() => {
    let intersectionObserver: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const trySetup = () => {
      const sections = navItems
        .map((item) => document.getElementById(sectionIdFromLink(item.link)))
        .filter((el): el is HTMLElement => Boolean(el));

      if (sections.length === 0) return false;

      intersectionObserver?.disconnect();
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !suppressObserverRef.current) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
      );
      sections.forEach((section) => intersectionObserver!.observe(section));
      return sections.length === navItems.length;
    };

    if (!trySetup()) {
      mutationObserver = new MutationObserver(() => {
        if (trySetup()) mutationObserver?.disconnect();
      });
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      intersectionObserver?.disconnect();
      mutationObserver?.disconnect();
    };
  }, [navItems]);

  // Reset the suppression flag once scrolling has actually stopped.
  // A fixed timeout can't know how long a given scroll distance will take,
  // so instead debounce the native "scroll" event — the flag clears only
  // once no scroll activity has happened for 150ms — with "scrollend" as
  // a faster path where the browser supports it.
  useEffect(() => {
    let idleTimer: ReturnType<typeof setTimeout>;
    const clearSuppress = () => {
      suppressObserverRef.current = false;
    };
    const handleScroll = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(clearSuppress, 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scrollend", clearSuppress);
    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", clearSuppress);
    };
  }, []);

  const activeIdx = navItems.findIndex(
    (item) => sectionIdFromLink(item.link) === activeId,
  );

  // Desktop: shrink into a ball, hop upward, land and grow back into a pill.
  useEffect(() => {
    const el = desktopItemRefs.current[activeIdx];
    if (!el) return;
    const targetLeft = el.offsetLeft;
    const targetWidth = el.offsetWidth;

    if (!desktopMounted.current) {
      desktopMounted.current = true;
      dLeft.set(targetLeft);
      dWidth.set(targetWidth);
      dTop.set(0);
      dHeight.set(32);
      dY.set(0);
      return;
    }

    const ballCenterLeft = targetLeft + targetWidth / 2 - 8;

    animate(dLeft, [dLeft.get(), ballCenterLeft, targetLeft], hopTiming);
    animate(dWidth, [dWidth.get(), 16, targetWidth], hopTiming);
    animate(dTop, [0, 8, 0], hopTiming);
    animate(dHeight, [32, 16, 32], hopTiming);
    animate(dY, [0, -22, 0], hopTiming);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx]);

  useEffect(() => {
    const handleResize = () => {
      const el = desktopItemRefs.current[activeIdx];
      if (!el) return;
      dLeft.set(el.offsetLeft);
      dWidth.set(el.offsetWidth);
      dTop.set(0);
      dHeight.set(32);
      dY.set(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx]);

  // Mobile: same hop, vertical axis.
  useEffect(() => {
    if (!menuOpen) return;
    const el = mobileItemRefs.current[activeIdx];
    if (!el) return;
    const targetTop = el.offsetTop;
    const targetHeight = el.offsetHeight;
    const targetWidth = el.offsetWidth;

    if (!mobileMounted.current) {
      mobileMounted.current = true;
      mTop.set(targetTop);
      mHeight.set(targetHeight);
      mWidth.set(targetWidth);
      mX.set(0);
      mOpacity.set(0.3);
      return;
    }

    const ballCenterTop = targetTop + targetHeight / 2 - 6;

    animate(mTop, [mTop.get(), ballCenterTop, targetTop], hopTiming);
    animate(mHeight, [mHeight.get(), 12, targetHeight], hopTiming);
    animate(mWidth, [mWidth.get(), 12, targetWidth], hopTiming);
    animate(mX, [0, 14, 0], hopTiming);
    animate(mOpacity, [0.3, 0.9, 0.3], hopTiming);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx, menuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
  ) => {
    setMenuOpen(false);
    // The "home" landmark only exists while the Home page tree is mounted —
    // a reliable check regardless of what pushState has done to the URL bar.
    if (!document.getElementById("home")) return;
    e.preventDefault();
    const id = sectionIdFromLink(link);
    suppressObserverRef.current = true;
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", link);
    setActiveId(id);
    // Last-resort safety net: if the target was already fully in view,
    // scrollIntoView triggers no scroll at all, so neither the "scroll"
    // debounce nor "scrollend" would ever fire to clear the flag.
    setTimeout(() => {
      suppressObserverRef.current = false;
    }, 2000);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex flex-col w-full max-w-4xl fixed z-[5000] top-6 md:top-10 inset-x-0 mx-auto px-4 md:px-6",
          className,
        )}
      >
        <div
          className="flex items-center justify-between gap-4 py-3 px-4 md:px-6 rounded-3xl"
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            border: "1px solid rgba(255, 255, 255, 0.125)",
            boxShadow:
              "0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)",
          }}
        >
          {/* Logo + name */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-2 shrink-0"
          >
            <Image
              src="/logo_tio.png"
              alt="Tio logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="block text-white font-semibold text-sm md:text-base">
              Tio
            </span>
          </Link>

          {/* Nav links (desktop) */}
          <div className="hidden md:flex items-center justify-center gap-1 relative">
            {/* Hop indicator track — a fixed 32px band, centered on the row */}
            <div className="absolute top-1/2 left-0 right-0 h-8 -translate-y-1/2 pointer-events-none">
              {/* The ball/pill itself */}
              <motion.span
                className="absolute rounded-full"
                style={{
                  background: indicatorGradient,
                  left: dLeft,
                  top: dTop,
                  width: dWidth,
                  height: dHeight,
                  y: dY,
                }}
              />
            </div>

            {navItems.map((navItem: any, idx: number) => {
              const id = sectionIdFromLink(navItem.link);
              const isActive = activeId === id;
              return (
                <Link
                  key={`link=${idx}`}
                  ref={(el) => {
                    desktopItemRefs.current[idx] = el;
                  }}
                  href={navItem.link}
                  onClick={(e) => handleNavClick(e, navItem.link)}
                  className={cn(
                    "relative z-10 px-3 py-1.5 rounded-full text-sm transition-colors !cursor-pointer",
                    isActive
                      ? "text-white font-medium"
                      : "text-neutral-300 hover:text-white",
                  )}
                >
                  {navItem.name}
                </Link>
              );
            })}
          </div>

          {/* CTA button (desktop) */}
          <Link
            href="https://wa.me/6288972061745"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-opacity duration-300 hover:opacity-80 bg-gradient-to-br from-blue-900 via-indigo-700 to-purple-600"
          >
            Let&apos;s Discuss
          </Link>

          {/* Hamburger toggle (mobile) — morphs into an X */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col items-center justify-center gap-[5px] w-9 h-9 rounded-full text-white shrink-0"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              className="block w-5 h-[2px] rounded-full bg-white"
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="block w-5 h-[2px] rounded-full bg-white"
              animate={
                menuOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block w-5 h-[2px] rounded-full bg-white"
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </button>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, scale: 0.95, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transformOrigin: "top center",
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.85)",
                border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
              className="md:hidden mt-2 rounded-3xl"
            >
              <motion.div
                className="relative flex flex-col items-stretch gap-1 p-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                  },
                  hidden: {
                    transition: { staggerChildren: 0.03, staggerDirection: -1 },
                  },
                }}
              >
                {/* Hop indicator for the vertical list */}
                <motion.span
                  className="absolute left-4 rounded-lg pointer-events-none"
                  style={{
                    background: indicatorGradient,
                    top: mTop,
                    height: mHeight,
                    width: mWidth,
                    x: mX,
                    opacity: mOpacity,
                  }}
                />

                {navItems.map((navItem: any, idx: number) => {
                  const id = sectionIdFromLink(navItem.link);
                  const isActive = activeId === id;
                  return (
                    <motion.div
                      key={`mobile-link=${idx}`}
                      ref={(el) => {
                        mobileItemRefs.current[idx] = el;
                      }}
                      variants={{
                        hidden: { opacity: 0, x: -12 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10"
                    >
                      <Link
                        href={navItem.link}
                        onClick={(e) => handleNavClick(e, navItem.link)}
                        className={cn(
                          "block text-sm py-2 px-2 rounded-lg transition-colors",
                          isActive
                            ? "text-white font-medium"
                            : "text-neutral-200 hover:text-white hover:bg-white/[0.06]",
                        )}
                      >
                        {navItem.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  className="relative z-10"
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="https://wa.me/6288972061745"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 block text-center rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-opacity duration-300 hover:opacity-80 bg-gradient-to-br from-blue-900 via-indigo-700 to-purple-600"
                  >
                    Let&apos;s Discuss
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
