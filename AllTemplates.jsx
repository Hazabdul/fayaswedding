import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Heart,
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  Phone,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Send,
  Sparkles,
  Flower2,
  Navigation,
  CheckCircle2,
  Users,
  Gift,
  Music2,
  Utensils,
  Crown,
  Feather,
  Gem,
  Share2,
} from "lucide-react";

import heroBg from "./assets/hero-bg.jpg";
import groomPhoto from "./assets/groom.jpg";
import bridePhoto from "./assets/bride.jpg";
import resortPhoto from "./assets/resort.jpg";
import roomPhoto from "./assets/room.jpeg";
import weddingMusic from "./assets/soft-wedding-music.m4a";

import gallery1 from "./src/assets/images/img5.jpg";
import gallery2 from "./src/assets/images/img6.jpg";
import gallery3 from "./src/assets/images/img7.jpg";
import gallery4 from "./src/assets/images/img8.jpg";
import gallery5 from "./src/assets/images/img9.jpg";
import gallery6 from "./src/assets/images/img10.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MUSIC_FALLBACK_URL =
  "https://archive.org/download/sitar-instrumental/sitar-instrumental.mp3";

const STYLE_ID = "artist-luxury-wedding-template-styles";

const styles = `
:root {
  --ivory: #fffaf3;
  --cream: #f8efe3;
  --champagne: #ead6ad;
  --gold: #c79b3b;
  --deep-gold: #8f6723;
  --plum: #5b174f;
  --berry: #8b2d6d;
  --rose: #c66b8f;
  --ink: #211b20;
  --muted: #786d72;
  --shadow-soft: 0 24px 70px rgba(91,23,79,0.14);
  --shadow-card: 0 18px 45px rgba(33,27,32,0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  color: inherit;
}

.artist-wedding-page {
  min-height: 100vh;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 8% 6%, rgba(199,155,59,0.18), transparent 29rem),
    radial-gradient(circle at 94% 8%, rgba(198,107,143,0.14), transparent 27rem),
    radial-gradient(circle at 50% 58%, rgba(91,23,79,0.06), transparent 34rem),
    linear-gradient(180deg, var(--ivory), var(--cream) 48%, #fff7ef);
  color: var(--ink);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.artist-wedding-page img {
  display: block;
  max-width: 100%;
}

.page-layer {
  position: relative;
  z-index: 2;
}

.wedding-canvas {
  position: fixed;
  inset: 0;
  z-index: 9998;
  pointer-events: none;
}

.cinematic-intro {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.intro-veil {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  background:
    radial-gradient(circle at center, rgba(234,214,173,0.14), transparent 24rem),
    linear-gradient(135deg, var(--plum), #2a1026);
}

.intro-veil-left {
  left: 0;
}

.intro-veil-right {
  right: 0;
}

.intro-mark {
  position: relative;
  z-index: 2;
  width: min(280px, 76vw);
  aspect-ratio: 1;
  border-radius: 999px;
  display: grid;
  place-items: center;
  text-align: center;
  color: var(--champagne);
  background: rgba(255,255,255,0.06);
  box-shadow:
    0 30px 90px rgba(0,0,0,0.28),
    inset 0 0 0 14px rgba(255,255,255,0.025);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.intro-mark-ring {
  position: absolute;
  inset: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  pointer-events: none;
  transform: rotate(-90deg);
}

.ring-track {
  stroke: rgba(234, 214, 173, 0.14);
}

.ring-draw {
  stroke: url(#gold-gradient);
  stroke-linecap: round;
}

.monogram-text {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.left-char, .right-char {
  display: inline-block;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(52px, 12vw, 88px);
  letter-spacing: -0.08em;
  line-height: 1;
}

.dot-char {
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(52px, 12vw, 88px);
  letter-spacing: -0.08em;
  line-height: 1;
  color: var(--gold);
  animation: pulse-dot 2s infinite ease-in-out;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 0.5; transform: scale(0.9); }
  50% { opacity: 1; transform: scale(1.15); }
}

.intro-mark small {
  position: absolute;
  bottom: 58px;
  left: 28px;
  right: 28px;
  color: rgba(255,255,255,0.68);
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  line-height: 1.7;
}

.cursor-aura {
  position: fixed;
  z-index: 1;
  width: 280px;
  height: 280px;
  left: 0;
  top: 0;
  pointer-events: none;
  border-radius: 999px;
  background:
    radial-gradient(circle, rgba(199,155,59,0.14), transparent 62%),
    radial-gradient(circle, rgba(198,107,143,0.08), transparent 72%);
  transform: translate(-50%, -50%);
  filter: blur(2px);
  opacity: 0;
  mix-blend-mode: multiply;
}

.scroll-jewel {
  position: fixed;
  z-index: 120;
  top: 78px;
  right: 24px;
  width: 5px;
  height: 120px;
  border-radius: 999px;
  background: rgba(199,155,59,0.16);
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(199,155,59,0.16);
}

.scroll-jewel-progress {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 0%;
  border-radius: inherit;
  background: linear-gradient(180deg, var(--champagne), var(--gold), var(--plum));
}

.floating-ornament {
  position: fixed;
  z-index: 1;
  pointer-events: none;
  opacity: 0.62;
  color: var(--gold);
  filter: drop-shadow(0 18px 30px rgba(91,23,79,0.12));
}

.floating-ornament.one {
  top: 18%;
  left: 5%;
}

.floating-ornament.two {
  top: 54%;
  right: 5%;
  color: var(--rose);
}

.floating-controls {
  position: fixed;
  z-index: 100;
  top: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
}

.language-switcher-pill,
.music-toggle {
  pointer-events: auto;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.language-switcher-pill {
  display: inline-flex;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255,255,255,0.72);
  border: 1px solid rgba(199,155,59,0.26);
  box-shadow: 0 18px 48px rgba(33,27,32,0.13);
}

.language-switcher-pill button {
  border: 0;
  background: transparent;
  color: var(--plum);
  font-size: 11px;
  letter-spacing: 0.04em;
  padding: 9px 13px;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
}

.language-switcher-pill button.active {
  color: #fff;
  background: linear-gradient(135deg, var(--plum), var(--berry));
  box-shadow: 0 10px 24px rgba(91,23,79,0.24);
}

.music-toggle {
  width: 44px;
  height: 44px;
  border: 1px solid rgba(199,155,59,0.3);
  border-radius: 999px;
  background: rgba(255,255,255,0.72);
  color: var(--plum);
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: 0 18px 48px rgba(33,27,32,0.13);
  transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.music-toggle.playing {
  background: linear-gradient(135deg, var(--plum), var(--berry));
  color: #fff;
}

.luxury-nav {
  position: fixed;
  z-index: 90;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
  padding: 7px;
  border-radius: 999px;
  background: rgba(255,255,255,0.68);
  border: 1px solid rgba(199,155,59,0.24);
  box-shadow: 0 20px 54px rgba(33,27,32,0.16);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
}

.luxury-nav button {
  border: 0;
  background: transparent;
  color: var(--plum);
  cursor: pointer;
  padding: 10px 13px;
  border-radius: 999px;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 900;
  transition: 0.28s ease;
}

.luxury-nav button:hover {
  color: #fff;
  background: linear-gradient(135deg, var(--plum), var(--berry));
  box-shadow: 0 10px 24px rgba(91,23,79,0.2);
}

.hero {
  position: relative;
  min-height: 100svh;
  padding: 98px 18px 50px;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 112%;
  object-fit: cover;
  opacity: 0.16;
  transform: scale(1.08);
  will-change: transform;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255,250,243,0.42), rgba(255,250,243,0.95) 76%),
    radial-gradient(circle at 50% 14%, rgba(199,155,59,0.19), transparent 28rem);
}

.hero-light-beam {
  position: absolute;
  z-index: 1;
  width: 38vw;
  height: 120vh;
  top: -20vh;
  pointer-events: none;
  opacity: 0.22;
  filter: blur(18px);
  transform: rotate(18deg);
  background: linear-gradient(
    180deg,
    transparent,
    rgba(234,214,173,0.34),
    transparent
  );
}

.beam-one {
  left: 8%;
}

.beam-two {
  right: 4%;
  opacity: 0.16;
  transform: rotate(-16deg);
}

.hero-art-frame {
  position: absolute;
  inset: 34px;
  z-index: 1;
  pointer-events: none;
  opacity: 0.6;
}

.corner {
  position: absolute;
  width: 74px;
  height: 74px;
}

.corner-tl {
  top: 0;
  left: 0;
  border-top: 1px solid rgba(199,155,59,0.48);
  border-left: 1px solid rgba(199,155,59,0.48);
  border-radius: 26px 0 0 0;
}

.corner-tr {
  top: 0;
  right: 0;
  border-top: 1px solid rgba(199,155,59,0.48);
  border-right: 1px solid rgba(199,155,59,0.48);
  border-radius: 0 26px 0 0;
}

.corner-bl {
  bottom: 0;
  left: 0;
  border-bottom: 1px solid rgba(199,155,59,0.48);
  border-left: 1px solid rgba(199,155,59,0.48);
  border-radius: 0 0 0 26px;
}

.corner-br {
  bottom: 0;
  right: 0;
  border-bottom: 1px solid rgba(199,155,59,0.48);
  border-right: 1px solid rgba(199,155,59,0.48);
  border-radius: 0 0 26px 0;
}

.hero-monogram {
  position: absolute;
  z-index: 2;
  top: 62px;
  left: 50%;
  transform: translateX(-50%);
  width: 72px;
  height: 72px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: var(--plum);
  background: rgba(255,255,255,0.64);
  border: 1px solid rgba(199,155,59,0.24);
  box-shadow: 0 18px 48px rgba(33,27,32,0.12);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.hero-monogram span {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 22px;
  color: var(--deep-gold);
  letter-spacing: -0.08em;
}

.hero-shell {
  position: relative;
  z-index: 2;
  width: min(1140px, 100%);
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 18px;
}

.hero-panel {
  position: relative;
  min-height: 640px;
  border-radius: 42px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
}

.hero-panel::after {
  content: "";
  position: absolute;
  inset: 16px;
  border: 1px solid rgba(234,214,173,0.22);
  border-radius: 30px;
  pointer-events: none;
}

.hero-date-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 38px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 0%, rgba(234,214,173,0.25), transparent 19rem),
    radial-gradient(circle at 100% 90%, rgba(198,107,143,0.28), transparent 22rem),
    linear-gradient(145deg, rgba(91,23,79,0.98), rgba(139,45,109,0.92));
}

.hero-date-panel::before {
  content: "";
  position: absolute;
  width: 330px;
  height: 330px;
  right: -150px;
  top: -120px;
  border-radius: 999px;
  border: 1px solid rgba(234,214,173,0.19);
}

.hero-content-panel {
  padding: clamp(34px, 5vw, 58px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.76), rgba(255,250,243,0.8)),
    radial-gradient(circle at 50% 0%, rgba(234,214,173,0.22), transparent 23rem);
  border: 1px solid rgba(255,255,255,0.76);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.eyebrow,
.section-kicker,
.micro-label {
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-weight: 800;
}

.eyebrow {
  color: var(--deep-gold);
}

.hero-date-panel .eyebrow {
  text-align: center;
  color: rgba(255,255,255,0.72);
}

.script-title {
  margin: 18px 0 8px;
  text-align: center;
  color: #fff;
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
  font-size: clamp(54px, 8vw, 88px);
  line-height: 0.86;
  font-weight: 400;
  letter-spacing: -0.065em;
}

.script-title span {
  display: block;
  margin: 14px 0;
  color: var(--champagne);
  font-family: Inter, ui-sans-serif, system-ui;
  font-size: 0.28em;
  font-style: normal;
  letter-spacing: 0.34em;
  text-transform: uppercase;
}

.gold-line {
  width: 86px;
  height: 1px;
  margin: 26px auto;
  background: linear-gradient(90deg, transparent, var(--champagne), transparent);
}

.calendar-card {
  position: relative;
  z-index: 1;
  width: min(310px, 100%);
  margin: 0 auto;
  padding: 19px;
  border-radius: 28px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(234,214,173,0.23);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.12);
}

.calendar-month-name {
  margin-bottom: 15px;
  text-align: center;
  color: var(--champagne);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 20px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 7px;
}

.calendar-day-header,
.calendar-day-cell {
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 999px;
  font-size: 11px;
}

.calendar-day-header {
  color: rgba(255,255,255,0.52);
  font-weight: 800;
}

.calendar-day-cell {
  color: rgba(255,255,255,0.84);
}

.calendar-day-circled {
  color: var(--plum);
  background: var(--champagne);
  font-weight: 900;
  box-shadow: 0 0 0 7px rgba(234,214,173,0.15);
}

.hero-mini-names {
  position: relative;
  z-index: 1;
  margin-top: 30px;
  text-align: center;
}

.hero-mini-names h3 {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(22px, 4vw, 31px);
  line-height: 1.1;
  font-weight: 400;
  color: #ffffff !important;
}

.hero-mini-names .amp {
  margin: 5px 0;
  color: var(--champagne);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 25px;
  font-style: italic;
}

.content-top {
  text-align: center;
}

.hero-date-large {
  margin-top: 10px;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(38px, 8vw, 66px);
  line-height: 0.92;
  font-weight: 500;
  letter-spacing: -0.04em;
}

.hero-date-large span {
  display: block;
  margin-top: 8px;
  color: var(--muted);
  font-family: Inter, ui-sans-serif, system-ui;
  font-size: 13px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

.weekday {
  margin-top: 10px;
  color: var(--deep-gold);
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 900;
}

.couple-avatar-row {
  margin: 36px auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-img {
  width: 122px;
  height: 122px;
  border-radius: 999px;
  object-fit: cover;
  border: 6px solid #fff;
  box-shadow: var(--shadow-card);
}

.avatar-img:first-child {
  margin-right: -18px;
}

.avatar-img:last-child {
  margin-left: -18px;
}

.avatar-heart {
  position: relative;
  z-index: 2;
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rose), var(--plum));
  border: 4px solid #fff;
  box-shadow: 0 16px 34px rgba(91,23,79,0.19);
}

.hero-names {
  margin: 0;
  text-align: center;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(48px, 9vw, 82px);
  font-weight: 400;
  letter-spacing: -0.07em;
  line-height: 0.92;
}

.hero-names span {
  display: block;
  margin: 12px 0;
  color: var(--gold);
  font-family: Inter, ui-sans-serif, system-ui;
  font-size: 0.28em;
  letter-spacing: 0.34em;
  text-transform: uppercase;
}

.hero-subcopy {
  max-width: 470px;
  margin: 24px auto 0;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.85;
}

.editorial-ribbon {
  width: min(430px, 100%);
  margin: 26px auto 0;
  padding: 11px 16px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  color: var(--deep-gold);
  background: rgba(234,214,173,0.22);
  border: 1px solid rgba(199,155,59,0.18);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 14px;
  font-style: italic;
}

.countdown-grid {
  margin: 30px auto 0;
  max-width: 560px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.countdown-card {
  padding: 15px 8px;
  text-align: center;
  border-radius: 22px;
  background: rgba(248,239,227,0.72);
  border: 1px solid rgba(199,155,59,0.16);
}

.countdown-number {
  display: block;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(24px, 5vw, 36px);
  line-height: 1;
}

.countdown-label {
  display: block;
  margin-top: 7px;
  color: var(--deep-gold);
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 900;
}

.hero-actions {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.primary-button,
.gold-button,
.ghost-button {
  position: relative;
  isolation: isolate;
  border: 0;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  cursor: pointer;
  padding: 14px 23px;
  border-radius: 999px;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 900;
  transition: transform 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;
  will-change: transform;
}

.primary-button,
.gold-button {
  color: #fff;
  background: linear-gradient(135deg, var(--gold), var(--deep-gold));
  box-shadow: 0 18px 38px rgba(143,103,35,0.23);
}

.ghost-button {
  color: var(--plum);
  background: rgba(255,255,255,0.58);
  border: 1px solid rgba(199,155,59,0.25);
}

.section {
  position: relative;
  padding: 82px 18px;
}

.section-inner {
  width: min(1120px, 100%);
  margin: 0 auto;
}

.section-heading {
  margin-bottom: 44px;
  text-align: center;
}

.section-kicker {
  margin-bottom: 14px;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--deep-gold);
}

.section-title {
  margin: 0;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(38px, 7vw, 62px);
  font-weight: 400;
  letter-spacing: -0.055em;
  line-height: 0.96;
}

.section-copy {
  max-width: 650px;
  margin: 17px auto 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.85;
}

.luxury-divider {
  width: min(720px, calc(100% - 36px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 18px;
  align-items: center;
  color: var(--deep-gold);
  opacity: 0.76;
}

.luxury-divider > span {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(199,155,59,0.48));
}

.luxury-divider > span:last-child {
  background: linear-gradient(90deg, rgba(199,155,59,0.48), transparent);
}

.luxury-divider div {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 9px 14px;
  border-radius: 999px;
  background: rgba(255,255,255,0.56);
  border: 1px solid rgba(199,155,59,0.18);
}

.luxury-divider small {
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 900;
}

.couple-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 90px minmax(0, 1fr);
  gap: 24px;
  align-items: center;
}

.couple-card {
  position: relative;
  padding: 16px 16px 29px;
  overflow: hidden;
  border-radius: 34px;
  background: rgba(255,255,255,0.72);
  border: 1px solid rgba(199,155,59,0.18);
  box-shadow: var(--shadow-card);
}

.couple-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 8%, rgba(199,155,59,0.18), transparent 16rem),
    radial-gradient(circle at 88% 0%, rgba(198,107,143,0.14), transparent 14rem);
}

.couple-photo-wrap {
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 28px;
  aspect-ratio: 4 / 4.8;
}

.portrait-corner {
  position: absolute;
  z-index: 2;
  width: 58px;
  height: 58px;
  pointer-events: none;
  border-color: rgba(234,214,173,0.82);
}

.portrait-corner-tl {
  top: 14px;
  left: 14px;
  border-top: 1px solid;
  border-left: 1px solid;
}

.portrait-corner-br {
  right: 14px;
  bottom: 14px;
  border-right: 1px solid;
  border-bottom: 1px solid;
}

.couple-photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease, filter 0.7s ease;
}

.couple-card:hover .couple-photo-wrap img {
  transform: scale(1.06);
  filter: brightness(0.92);
}

.couple-info {
  position: relative;
  z-index: 1;
  padding: 25px 12px 0;
  text-align: center;
}

.role-pill {
  display: inline-flex;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(199,155,59,0.13);
  color: var(--deep-gold);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 900;
}

.couple-name {
  margin: 15px 0 9px;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(30px, 5vw, 44px);
  line-height: 1;
  font-weight: 400;
}

.couple-meta {
  margin: 0;
  color: var(--muted);
  line-height: 1.75;
  font-size: 13px;
}

.phone-link {
  margin-top: 15px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--plum);
  font-size: 12px;
  font-weight: 900;
}

.couple-center {
  min-height: 340px;
  position: relative;
  display: grid;
  place-items: center;
}

.couple-center::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(180deg, transparent, rgba(199,155,59,0.4), transparent);
}

.center-heart {
  position: relative;
  z-index: 1;
  width: 70px;
  height: 70px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--plum), var(--berry));
  color: #fff;
  border: 8px solid var(--ivory);
  box-shadow: var(--shadow-card);
}

.invitation-section {
  padding-top: 28px;
}

.invitation-card {
  position: relative;
  width: min(870px, 100%);
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  padding: clamp(38px, 7vw, 76px);
  border-radius: 44px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.82), rgba(255,250,243,0.88)),
    radial-gradient(circle at top, rgba(234,214,173,0.2), transparent 21rem);
  border: 1px solid rgba(199,155,59,0.23);
  box-shadow: var(--shadow-soft);
}

.invitation-card::before {
  content: "";
  position: absolute;
  inset: 15px;
  border-radius: 32px;
  border: 1px solid rgba(199,155,59,0.18);
  pointer-events: none;
}

.invitation-card::after {
  content: "❦";
  position: absolute;
  left: 50%;
  bottom: 26px;
  transform: translateX(-50%);
  color: rgba(199,155,59,0.42);
  font-size: 28px;
}

.invite-title {
  position: relative;
  margin: 0;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(36px, 8vw, 66px);
  line-height: 0.96;
  font-weight: 400;
  letter-spacing: -0.055em;
}

.invite-text {
  position: relative;
  max-width: 680px;
  margin: 27px auto 0;
  color: var(--ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(19px, 4vw, 26px);
  line-height: 1.58;
}

.invite-details {
  position: relative;
  max-width: 630px;
  margin: 23px auto 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.9;
}

.family-row {
  position: relative;
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.family-box,
.rsvp-mini-card {
  border-radius: 25px;
  padding: 19px;
  background: rgba(255,255,255,0.64);
  border: 1px solid rgba(199,155,59,0.16);
}

.family-title {
  color: var(--deep-gold);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 900;
}

.family-name {
  margin-top: 8px;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 18px;
}

.art-editorial-section {
  padding-top: 38px;
}

.art-editorial-card {
  position: relative;
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  min-height: 560px;
  overflow: hidden;
  border-radius: 46px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.72), rgba(255,250,243,0.84)),
    radial-gradient(circle at 85% 12%, rgba(198,107,143,0.14), transparent 24rem);
  border: 1px solid rgba(199,155,59,0.2);
  box-shadow: var(--shadow-soft);
}

.art-editorial-card::before {
  content: "❦";
  position: absolute;
  z-index: 3;
  top: 28px;
  right: 34px;
  color: rgba(199,155,59,0.34);
  font-size: 42px;
}

.art-editorial-image {
  position: relative;
  overflow: hidden;
  min-height: 560px;
  clip-path: ellipse(88% 100% at 18% 50%);
}

.art-editorial-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, transparent 60%, rgba(255,250,243,0.9)),
    radial-gradient(circle at center, transparent, rgba(33,27,32,0.28));
}

.art-editorial-image img {
  width: 100%;
  height: 112%;
  object-fit: cover;
  filter: saturate(0.86) contrast(0.94);
  will-change: transform;
}

.art-editorial-copy {
  padding: clamp(34px, 6vw, 76px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.art-large-copy {
  max-width: 560px;
  margin: 26px 0 0;
  color: var(--ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(22px, 4vw, 34px);
  line-height: 1.45;
  letter-spacing: -0.035em;
}

.art-signature {
  margin-top: 34px;
  display: inline-grid;
  gap: 8px;
  align-self: flex-start;
  padding: 20px 24px;
  border-radius: 26px;
  color: var(--plum);
  background: rgba(248,239,227,0.72);
  border: 1px solid rgba(199,155,59,0.17);
}

.art-signature span {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 36px;
  color: var(--deep-gold);
  letter-spacing: -0.08em;
}

.art-signature small {
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.venue-card {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  overflow: hidden;
  border-radius: 42px;
  background: rgba(255,255,255,0.76);
  border: 1px solid rgba(199,155,59,0.18);
  box-shadow: var(--shadow-soft);
}

.venue-img-wrap {
  min-height: 500px;
  overflow: hidden;
}

.venue-img-wrap img {
  width: 100%;
  height: 112%;
  object-fit: cover;
  will-change: transform;
}

.venue-panel {
  padding: clamp(32px, 5vw, 58px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.venue-name {
  margin: 9px 0 13px;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(38px, 6vw, 62px);
  line-height: 0.96;
  font-weight: 400;
  letter-spacing: -0.055em;
}

.venue-address {
  color: var(--muted);
  line-height: 1.78;
  font-size: 14px;
}

.info-grid {
  margin: 30px 0;
  display: grid;
  gap: 12px;
}

.info-card {
  display: grid;
  grid-template-columns: 46px 1fr;
  gap: 13px;
  align-items: center;
  padding: 14px;
  border-radius: 23px;
  background: rgba(248,239,227,0.72);
  border: 1px solid rgba(199,155,59,0.14);
}

.info-icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: rgba(199,155,59,0.14);
  color: var(--deep-gold);
}

.info-label {
  color: var(--deep-gold);
  font-size: 10px;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  font-weight: 900;
}

.info-value {
  margin-top: 4px;
  color: var(--ink);
  font-size: 13px;
  line-height: 1.55;
}

.timeline-wrap {
  position: relative;
  width: min(900px, 100%);
  margin: 0 auto;
  padding: 8px 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 18px;
  bottom: 18px;
  width: 1px;
  transform: translateX(-50%);
  background: rgba(199,155,59,0.2);
  overflow: hidden;
}

.timeline-progress {
  position: absolute;
  inset: 0 0 auto;
  height: 0%;
  background: linear-gradient(180deg, var(--gold), var(--plum));
}

.timeline-item {
  position: relative;
  width: calc(50% - 34px);
  margin-bottom: 22px;
  padding: 22px;
  border-radius: 28px;
  background: rgba(255,255,255,0.72);
  border: 1px solid rgba(199,155,59,0.18);
  box-shadow: 0 16px 38px rgba(33,27,32,0.09);
}

.timeline-item:nth-child(odd) {
  margin-right: auto;
  text-align: right;
}

.timeline-item:nth-child(even) {
  margin-left: auto;
}

.timeline-dot {
  position: absolute;
  top: 28px;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: var(--champagne);
  border: 4px solid var(--plum);
  box-shadow: 0 0 0 7px rgba(199,155,59,0.12);
}

.timeline-item:nth-child(odd) .timeline-dot {
  right: -43px;
}

.timeline-item:nth-child(even) .timeline-dot {
  left: -43px;
}

.timeline-time {
  color: var(--deep-gold);
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 900;
}

.timeline-title {
  margin: 9px 0 7px;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 25px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 9px;
}

.timeline-item:nth-child(odd) .timeline-title {
  justify-content: flex-end;
}

.timeline-copy {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.7;
}

.gallery-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.gallery-tab-btn {
  border: 1px solid rgba(199, 155, 59, 0.25);
  background: rgba(255, 255, 255, 0.65);
  color: var(--plum);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 999px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.gallery-tab-btn:hover {
  background: rgba(199, 155, 59, 0.12);
  transform: translateY(-2px);
}

.gallery-tab-btn.active {
  color: #fff;
  background: linear-gradient(135deg, var(--plum), var(--berry));
  border-color: transparent;
  box-shadow: 0 8px 20px rgba(91, 23, 79, 0.2);
}

.modern-masonry-grid {
  column-count: 3;
  column-gap: 16px;
  width: 100%;
}

@media (max-width: 900px) {
  .modern-masonry-grid {
    column-count: 2;
  }
}

@media (max-width: 600px) {
  .modern-masonry-grid {
    column-count: 1;
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(199, 155, 59, 0.18);
  box-shadow: 0 12px 36px rgba(33, 27, 32, 0.08);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  width: 100%;
  display: block;
  padding: 0;
  text-align: left;
}

.masonry-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px rgba(33, 27, 32, 0.16);
}

.masonry-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.masonry-item:hover img {
  transform: scale(1.03);
}

.masonry-item-info {
  position: absolute;
  inset: auto 0 0;
  padding: 24px 20px 16px;
  background: linear-gradient(to top, rgba(33, 27, 32, 0.9) 0%, rgba(33, 27, 32, 0.4) 60%, transparent 100%);
  color: #fff;
  opacity: 0;
  transition: opacity 0.35s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.masonry-item:hover .masonry-item-info {
  opacity: 1;
}

.masonry-item-info h4 {
  margin: 0;
  font-family: Georgia, serif;
  font-size: 16px;
  letter-spacing: 0.02em;
}

.masonry-item-info p {
  margin: 4px 0 0;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--champagne);
}


.rsvp-section .section-inner,
.blessing-section .section-inner,
.map-section .section-inner {
  padding: clamp(24px, 4vw, 46px);
  border-radius: 44px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.62), rgba(248,239,227,0.78)),
    radial-gradient(circle at top right, rgba(198,107,143,0.13), transparent 18rem);
  border: 1px solid rgba(199,155,59,0.16);
  box-shadow: var(--shadow-soft);
}

.rsvp-grid,
.blessing-grid,
.map-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 22px;
  margin-top: 34px;
}

.rsvp-card,
.rsvp-summary,
.blessing-form,
.blessing-board,
.map-card,
.map-details {
  border-radius: 31px;
  background: rgba(255,255,255,0.74);
  border: 1px solid rgba(199,155,59,0.17);
  box-shadow: 0 12px 34px rgba(33,27,32,0.07);
  padding: clamp(23px, 4vw, 34px);
}

.card-title {
  margin: 0 0 20px;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 29px;
  font-weight: 400;
}

.form-group {
  margin-bottom: 14px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  color: var(--deep-gold);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 900;
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  border: 1px solid rgba(199,155,59,0.22);
  background: rgba(255,250,243,0.76);
  border-radius: 18px;
  padding: 14px 15px;
  outline: none;
  color: var(--ink);
  font-size: 14px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  border-color: rgba(91,23,79,0.46);
  box-shadow: 0 0 0 4px rgba(91,23,79,0.08);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.success-message {
  margin-top: 14px;
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(199,155,59,0.12);
  color: var(--deep-gold);
  font-size: 13px;
  text-align: center;
  font-weight: 800;
}

.rsvp-mini-grid {
  display: grid;
  gap: 12px;
}

.rsvp-mini-card {
  display: flex;
  gap: 13px;
  align-items: flex-start;
}

.rsvp-mini-icon {
  width: 43px;
  height: 43px;
  flex: 0 0 43px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: var(--deep-gold);
  background: rgba(199,155,59,0.13);
}

.rsvp-mini-card h4 {
  margin: 0 0 5px;
  color: var(--plum);
  font-size: 14px;
}

.rsvp-mini-card p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.65;
}

.map-card {
  overflow: hidden;
  padding: 0;
  min-height: 430px;
}

.map-frame {
  width: 100%;
  height: 100%;
  min-height: 430px;
  border: 0;
  filter: saturate(0.85) contrast(0.95);
}

.map-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.quote-section {
  padding-top: 34px;
  padding-bottom: 34px;
}

.quote-card {
  position: relative;
  width: min(880px, 100%);
  margin: 0 auto;
  padding: clamp(38px, 7vw, 78px);
  text-align: center;
  border-radius: 44px;
  overflow: hidden;
  background:
    radial-gradient(circle at top, rgba(234,214,173,0.24), transparent 22rem),
    linear-gradient(135deg, rgba(91,23,79,0.96), rgba(139,45,109,0.9));
  color: #fff;
  box-shadow: var(--shadow-soft);
}

.quote-card::before {
  content: "";
  position: absolute;
  inset: 15px;
  border-radius: 32px;
  border: 1px solid rgba(234,214,173,0.22);
  pointer-events: none;
}

.quote-mark {
  position: absolute;
  top: 8px;
  left: 34px;
  color: rgba(234,214,173,0.22);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 160px;
  line-height: 1;
}

.quote-card p {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(25px, 5vw, 43px);
  line-height: 1.35;
  letter-spacing: -0.045em;
}

.quote-card span {
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-top: 28px;
  color: var(--champagne);
  font-size: 11px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  font-weight: 900;
}

.board-head {
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.note-count {
  white-space: nowrap;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(91,23,79,0.08);
  color: var(--plum);
  font-size: 11px;
  font-weight: 900;
}

.blessings-list {
  max-height: 430px;
  overflow: auto;
  padding-right: 5px;
}

.blessings-list::-webkit-scrollbar {
  width: 6px;
}

.blessings-list::-webkit-scrollbar-thumb {
  background: rgba(199,155,59,0.38);
  border-radius: 999px;
}

.blessing-item {
  padding: 18px;
  border-radius: 23px;
  background: rgba(248,239,227,0.68);
  border: 1px solid rgba(199,155,59,0.13);
  margin-bottom: 12px;
}

.blessing-text {
  margin: 0;
  color: var(--ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 16px;
  line-height: 1.65;
}

.blessing-meta {
  margin-top: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted);
  font-size: 11px;
}

.blessing-author {
  color: var(--plum);
  font-weight: 900;
}

.empty-state {
  padding: 34px;
  text-align: center;
  color: var(--muted);
  border-radius: 24px;
  background: rgba(248,239,227,0.6);
}

.footer {
  position: relative;
  overflow: hidden;
  padding: 62px 18px 92px;
  text-align: center;
  color: #fff;
  background:
    radial-gradient(circle at top, rgba(199,155,59,0.18), transparent 22rem),
    linear-gradient(135deg, var(--plum), #2a1026);
}

.footer::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 7px;
  background: repeating-linear-gradient(
    90deg,
    var(--gold) 0 26px,
    var(--champagne) 26px 52px
  );
}

.footer::after {
  content: "";
  position: absolute;
  left: 50%;
  top: -120px;
  width: 460px;
  height: 460px;
  transform: translateX(-50%);
  border-radius: 999px;
  background: radial-gradient(circle, rgba(199,155,59,0.18), transparent 66%);
  pointer-events: none;
}

.footer-ornament {
  position: relative;
  z-index: 1;
  width: 58px;
  height: 58px;
  margin: 0 auto 18px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: var(--champagne);
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(234,214,173,0.24);
}

.footer-small {
  position: relative;
  z-index: 1;
  margin: 0 0 12px;
  color: var(--champagne);
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-weight: 900;
}

.footer-names {
  position: relative;
  z-index: 1;
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(36px, 7vw, 64px);
  font-weight: 400;
  letter-spacing: -0.055em;
}

.footer-divider {
  position: relative;
  z-index: 1;
  width: min(280px, 100%);
  margin: 22px auto 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 13px;
  color: var(--champagne);
}

.footer-divider span {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(234,214,173,0.54));
}

.footer-divider span:last-child {
  background: linear-gradient(90deg, rgba(234,214,173,0.54), transparent);
}

.footer-quote {
  position: relative;
  z-index: 1;
  max-width: 680px;
  margin: 20px auto 0;
  color: rgba(255,255,255,0.76);
  line-height: 1.85;
  font-size: 14px;
}

.footer-address {
  position: relative;
  z-index: 1;
  margin-top: 30px;
  color: var(--champagne);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 900;
}

.footer-copy {
  position: relative;
  z-index: 1;
  margin-top: 18px;
  color: rgba(255,255,255,0.48);
  font-size: 12px;
}

.studio-link:hover {
  color: #fff !important;
  border-bottom-color: #fff !important;
}

.lightbox-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(8,6,8,0.96);
}

.lightbox-img {
  max-width: min(100%, 980px);
  max-height: 82svh;
  object-fit: contain;
  border-radius: 22px;
  border: 1px solid rgba(234,214,173,0.35);
  box-shadow: 0 28px 90px rgba(0,0,0,0.44);
}

.lightbox-button {
  position: absolute;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(234,214,173,0.36);
  border-radius: 999px;
  color: #fff;
  background: rgba(255,255,255,0.08);
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: background 0.25s ease;
}

.lightbox-button:hover {
  background: rgba(199,155,59,0.38);
}

.lightbox-close {
  top: 18px;
  right: 18px;
}

.lightbox-prev {
  left: 18px;
}

.lightbox-next {
  right: 18px;
}

.reveal,
.line-reveal,
.timeline-item,
.countdown-card,
.modern-collage-card,
.rsvp-card,
.rsvp-summary,
.map-card,
.map-details,
.blessing-form,
.blessing-board,
.art-editorial-card,
.art-signature,
.quote-card,
.luxury-divider {
  will-change: transform, opacity;
}

@media (max-width: 900px) {
  .hero {
    padding: 84px 12px 30px;
    align-items: flex-start;
  }

  .hero-art-frame {
    inset: 22px;
  }

  .hero-monogram {
    top: 78px;
    width: 60px;
    height: 60px;
  }

  .hero-shell {
    grid-template-columns: 1fr;
  }

  .hero-panel {
    min-height: auto;
    border-radius: 34px;
  }

  .hero-date-panel,
  .hero-content-panel {
    padding: 36px 22px;
  }

  .countdown-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .couple-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .couple-center {
    min-height: 66px;
  }

  .couple-center::before {
    width: 100%;
    height: 1px;
    top: 50%;
    bottom: auto;
    background: linear-gradient(90deg, transparent, rgba(199,155,59,0.4), transparent);
  }

  .center-heart {
    width: 58px;
    height: 58px;
    border-width: 7px;
  }

  .art-editorial-card {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .art-editorial-image {
    min-height: 320px;
    clip-path: none;
  }

  .venue-card,
  .rsvp-grid,
  .blessing-grid,
  .map-grid {
    grid-template-columns: 1fr;
  }

  .venue-img-wrap {
    min-height: 290px;
  }

  .timeline-line {
    left: 12px;
  }

  .timeline-item,
  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    width: calc(100% - 42px);
    margin-left: 42px;
    margin-right: 0;
    text-align: left;
  }

  .timeline-item:nth-child(odd) .timeline-dot,
  .timeline-item:nth-child(even) .timeline-dot {
    left: -39px;
    right: auto;
  }

  .timeline-item:nth-child(odd) .timeline-title {
    justify-content: flex-start;
  }



  .lightbox-prev,
  .lightbox-next {
    top: auto;
    bottom: 24px;
  }

  .lightbox-prev {
    left: calc(50% - 58px);
  }

  .lightbox-next {
    right: calc(50% - 58px);
  }
}

@media (max-width: 640px) {
  .scroll-jewel {
    display: none;
  }

  .luxury-nav {
    left: 12px;
    right: 12px;
    bottom: 12px;
    transform: none;
    overflow-x: auto;
    justify-content: flex-start;
  }

  .luxury-nav::-webkit-scrollbar {
    display: none;
  }

  .luxury-nav button {
    white-space: nowrap;
    padding: 9px 11px;
  }
}

@media (max-width: 520px) {
  .floating-controls {
    top: 12px;
    left: 12px;
    right: 12px;
  }

  .language-switcher-pill button {
    padding: 8px 10px;
    font-size: 10px;
  }

  .music-toggle {
    width: 40px;
    height: 40px;
  }

  .intro-mark {
    width: 230px;
  }

  .intro-mark small {
    bottom: 42px;
    font-size: 9px;
  }

  .hero {
    padding-bottom: 78px;
  }

  .hero-panel {
    box-shadow: 0 18px 48px rgba(91,23,79,0.13);
  }

  .section {
    padding: 60px 14px;
  }

  .script-title {
    font-size: 58px;
  }

  .avatar-img {
    width: 96px;
    height: 96px;
    border-width: 5px;
  }

  .avatar-heart {
    width: 42px;
    height: 42px;
  }

  .editorial-ribbon {
    border-radius: 22px;
    font-size: 13px;
  }

  .corner {
    width: 46px;
    height: 46px;
  }

  .countdown-grid {
    gap: 8px;
  }

  .countdown-card {
    border-radius: 18px;
    padding: 13px 5px;
  }

  .family-row {
    grid-template-columns: 1fr;
  }

  .art-large-copy {
    font-size: 23px;
  }

  .section-title {
    letter-spacing: -0.06em;
  }



  .quote-card {
    border-radius: 34px;
  }

  .quote-mark {
    font-size: 110px;
    left: 18px;
  }

  .quote-card p {
    font-size: 26px;
  }

  .luxury-divider {
    width: calc(100% - 28px);
    gap: 10px;
  }

  .blessing-meta {
    align-items: flex-start;
    flex-direction: column;
  }

  .lightbox-img {
    max-height: 74svh;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}
`;

const TRANSLATIONS = {
  en: {
    saveTheDate: "Save the Date",
    wedding: "Wedding",
    on: "Date",
    sunday: "Sunday",
    sep: "September",
    september: "September",
    year2026: "2026",
    togetherWithFamilies: "Together with their families",
    heartilyInvites: "Heartily invites you",
    groomTitle: "The Groom",
    brideTitle: "The Bride",
    groomName: "Muhammad Fayas .A",
    brideName: "Keerthi Anilkumar",
    groomParents: "Son of Late Abdul Jabbar",
    brideParents: "Daughter of Anilkumar",
    groomHome: "Hailing from Thiruvananthapuram, Kerala",
    brideHome: "Hailing from Kollam, Kerala",
    invitationTitle: "Our Wedding Invitation",
    inviteText:
      "Together with our families, we cordially invite you to share our happiness and celebrate our wedding.",
    inviteDetails:
      "Please join us for our wedding celebration followed by a party and feast on the scenic backwaters of Kappil, Kerala.",
    groomSide: "Groom's Side",
    groomSideFamily: "Family of Late Abdul Jabbar",
    brideSide: "Bride's Side",
    brideSideFamily: "Family of Anilkumar",
    venueTitle: "The Wedding Venue",
    ceremonyTime: "Wedding Celebration",
    muhurthamTime: "4:00 PM onwards",
    venueLocation: "Venue Location",
    lakesideResort: "Scenic lakeside resort near Kappil Beach backwaters",
    openMap: "Open Location Map",
    galleryTitle: "Wedding Gallery",
    gallerySubtitle:
      "A modern gallery of beautiful memories, resort moments, and the surroundings of our celebration.",
    galleryAll: "All",
    galleryCouple: "Couple",
    galleryVenue: "Resort & Venue",
    galleryMoments: "Moments",
    blessingBoardTitle: "Wedding Blessing Board",
    blessingBoardSubtitle:
      "Your blessings and presence mean the world to us. Please share a warm note of blessing or congratulations.",
    leaveBlessing: "Leave a Blessing",
    yourName: "Your Name",
    relation: "Relation / Note",
    blessingMessage: "Your Blessing Message",
    sendBlessing: "Send Blessing",
    thankYou: "Thank you for your warm blessings.",
    wishesAndBlessings: "Wishes & Blessings",
    notes: "Notes",
    noBlessingsYet: "No blessings posted yet. Be the first to bless.",
    footerQuote:
      "May your blessings follow us as we walk together, leaving footprints of love on the shores of life.",
    footerAddress: "Serene Lake Resort, Kappil • September 13, 2026",
    footerCopyright: "© 2026 Fayas & Keerthi. Together Forever.",
    callGroom: "Call Groom",
    exploreBtn: "Explore Wedding",
    saveToCalendar: "Save to Calendar",
    shareBtn: "Share",
    copied: "Copied!",
    happyCoupleTitle: "The Happy Couple",
    happyCoupleSubtitle:
      "With hearts full of love, we introduce the bride and the groom as they begin this beautiful lifetime journey together.",
    daysAbbr: ["S", "M", "T", "W", "T", "F", "S"],
    dateStringFormatted: "Sunday, September 13, 2026",
    brideExtra: "Surrounded by love and blessings",
    countdown: ["Days", "Hours", "Mins", "Secs"],
    scheduleTitle: "Wedding Day Timeline",
    scheduleSubtitle:
      "A graceful celebration planned with love, blessings, music, feast, and memories.",
    rsvpTitle: "RSVP",
    rsvpSubtitle:
      "Kindly let us know if you will be joining us for the celebration.",
    rsvpName: "Guest Name",
    rsvpGuests: "Number of Guests",
    rsvpAttendance: "Will You Attend?",
    rsvpMessage: "Message",
    attending: "Joyfully attending",
    notAttending: "Unable to attend",
    rsvpSend: "Submit RSVP",
    rsvpThanks: "Thank you. Your RSVP has been saved.",
    rsvpNoteTitle: "Your Presence Is Our Gift",
    rsvpNote:
      "We look forward to celebrating this beautiful day with our loved ones by the serene backwaters of Kappil.",
    mapTitle: "Location & Directions",
    mapSubtitle:
      "Join us at Serene Lake Resort, a scenic lakeside venue near Kappil Beach backwaters.",
    mapHelp:
      "Use the location button to open directions in Google Maps. Please plan to arrive a little early for a relaxed welcome.",
  },
  ml: {
    saveTheDate: "സേവ് ദി ഡേറ്റ്",
    wedding: "വിവാഹം",
    on: "തീയതി",
    sunday: "ഞായറാഴ്ച",
    sep: "സെപ്റ്റംബർ",
    september: "സെപ്റ്റംബർ",
    year2026: "2026",
    togetherWithFamilies: "കുടുംബാംഗങ്ങളുടെ സ്നേഹാദരങ്ങളോടെ",
    heartilyInvites: "ഹൃദയപൂർവ്വം ക്ഷണിക്കുന്നു",
    groomTitle: "വരൻ",
    brideTitle: "വധു",
    groomName: "മുഹമ്മദ് ഫയാസ് .എ",
    brideName: "കീർത്തി അനിൽകുമാർ",
    groomParents: "പരേതനായ അബ്ദുൽ ജബ്ബാറിന്റെ മകൻ",
    brideParents: "അനിൽകുമാറിന്റെ മകൾ",
    groomHome: "തിരുവനന്തപുരം സ്വദേശി",
    brideHome: "കൊല്ലം സ്വദേശി",
    invitationTitle: "വിവാഹ ക്ഷണം",
    inviteText:
      "ഞങ്ങളുടെ വിവാഹത്തോടനുബന്ധിച്ച് നടക്കുന്ന സ്നേഹാഘോഷങ്ങളിൽ പങ്കുചേരുന്നതിനായി ബന്ധുമിത്രാദികളായ നിങ്ങളെ എല്ലാവരെയും സസ്‌നേഹം ക്ഷണിക്കുന്നു.",
    inviteDetails:
      "കപ്പിൽ കായൽക്കരയിൽ വെച്ചു നടക്കുന്ന വിവാഹ ആഘോഷങ്ങളിലേക്കും തുടർന്ന് നടക്കുന്ന സ്നേഹവിരുന്നിലേക്കും നിങ്ങളെ സ്വാഗതം ചെയ്യുന്നു.",
    groomSide: "വരന്റെ കുടുംബം",
    groomSideFamily: "അബ്ദുൽ ജബ്ബാറിന്റെ കുടുംബം",
    brideSide: "വധുവിന്റെ കുടുംബം",
    brideSideFamily: "അനിൽകുമാറിന്റെ കുടുംബം",
    venueTitle: "വിവാഹ വേദി",
    ceremonyTime: "വിവാഹ ആഘോഷം",
    muhurthamTime: "വൈകുന്നേരം 04:00 മുതൽ",
    venueLocation: "വിവാഹ സ്ഥലം",
    lakesideResort: "കാപ്പിൽ കായലിന്റെ മനോഹരമായ തീരത്ത്",
    openMap: "വഴി കാണിക്കുന്ന മാപ്പ്",
    galleryTitle: "ചിത്രങ്ങൾ",
    gallerySubtitle: "ഞങ്ങളുടെ ജീവിതത്തിലെ മനോഹരമായ നിമിഷങ്ങളുടെ ചിത്രങ്ങൾ.",
    galleryAll: "എല്ലാം",
    galleryCouple: "വധൂവരന്മാർ",
    galleryVenue: "റിസോർട്ട് & വേദി",
    galleryMoments: "മനോഹര നിമിഷങ്ങൾ",
    blessingBoardTitle: "ആശംസാ ബോർഡ്",
    blessingBoardSubtitle:
      "ഞങ്ങളുടെ പുതിയ ജീവിതയാത്രക്ക് നിങ്ങളുടെ പ്രാർത്ഥനകളും അനുഗ്രഹങ്ങളും ആശംസകളും അറിയിക്കൂ.",
    leaveBlessing: "ആശംസകൾ അറിയിക്കാം",
    yourName: "നിങ്ങളുടെ പേര്",
    relation: "ബന്ധം / കുറിപ്പ്",
    blessingMessage: "നിങ്ങളുടെ ആശംസ",
    sendBlessing: "ആശംസ അയക്കുക",
    thankYou: "നിങ്ങളുടെ ആശംസകൾക്ക് നന്ദി.",
    wishesAndBlessings: "ആശംസകൾ",
    notes: "സന്ദേശങ്ങൾ",
    noBlessingsYet: "ആദ്യമായി ആശംസ അറിയിക്കുന്നവർ നിങ്ങളാകൂ.",
    footerQuote:
      "ഞങ്ങളുടെ പുതിയ ജീവിതയാത്രയിൽ നിങ്ങളുടെ സ്നേഹവും അനുഗ്രഹവും എന്നും കൂടെയുണ്ടാകുമെന്ന് പ്രത്യാശിക്കുന്നു.",
    footerAddress: "സെറീൻ ലേക്ക് റിസോർട്ട്, കാപ്പിൽ • സെപ്റ്റംബർ 13, 2026",
    footerCopyright: "© 2026 ഫയാസ് & കീർത്തി. എന്നും ഒന്നായി.",
    callGroom: "വരനെ വിളിക്കുക",
    exploreBtn: "വിവാഹവിവരങ്ങൾ",
    saveToCalendar: "കലണ്ടറിൽ ചേർക്കുക",
    shareBtn: "പങ്കുവെക്കുക",
    copied: "കോപ്പി ചെയ്തു!",
    happyCoupleTitle: "വധൂവരന്മാർ",
    happyCoupleSubtitle:
      "സ്നേഹനിർഭരമായ ഹൃദയത്തോടെ, ഞങ്ങൾ വധൂവരന്മാരെ പരിചയപ്പെടുത്തുന്നു.",
    daysAbbr: ["ഞാ", "തി", "ചൊ", "ബു", "വ്യാ", "വെ", "ശ"],
    dateStringFormatted: "ഞായറാഴ്ച, 2026 സെപ്റ്റംബർ 13",
    brideExtra: "സ്നേഹവും അനുഗ്രഹവും നിറഞ്ഞ്",
    countdown: ["ദിവസം", "മണി", "മിനിറ്റ്", "സെക്കന്റ്"],
    scheduleTitle: "വിവാഹ ദിന പരിപാടികൾ",
    scheduleSubtitle:
      "സ്നേഹവും അനുഗ്രഹവും സ്നേഹവിരുന്നും നിറഞ്ഞ ആഘോഷം.",
    rsvpTitle: "ആർ.എസ്.വി.പി",
    rsvpSubtitle: "വിവാഹ ആഘോഷത്തിൽ പങ്കെടുക്കുമോ എന്ന് ദയവായി അറിയിക്കൂ.",
    rsvpName: "അതിഥിയുടെ പേര്",
    rsvpGuests: "അതിഥികളുടെ എണ്ണം",
    rsvpAttendance: "പങ്കെടുക്കുമോ?",
    rsvpMessage: "സന്ദേശം",
    attending: "സന്തോഷത്തോടെ പങ്കെടുക്കും",
    notAttending: "പങ്കെടുക്കാൻ സാധിക്കില്ല",
    rsvpSend: "ആർ.എസ്.വി.പി അയക്കുക",
    rsvpThanks: "നന്ദി. നിങ്ങളുടെ RSVP സേവ് ചെയ്തു.",
    rsvpNoteTitle: "നിങ്ങളുടെ സാന്നിധ്യമാണ് സമ്മാനം",
    rsvpNote:
      "കപ്പിൽ കായൽക്കരയിൽ പ്രിയപ്പെട്ടവരോടൊപ്പം ഈ മനോഹരമായ ദിവസം ആഘോഷിക്കാൻ ഞങ്ങൾ കാത്തിരിക്കുന്നു.",
    mapTitle: "ലൊക്കേഷനും വഴിയും",
    mapSubtitle:
      "കാപ്പിൽ ബീച്ച് കായലിനടുത്തുള്ള സെറീൻ ലേക്ക് റിസോർട്ടിലേക്ക് സ്വാഗതം.",
    mapHelp:
      "Google Maps-ൽ വഴി കാണാൻ ലൊക്കേഷൻ ബട്ടൺ ഉപയോഗിക്കുക. സുഖമായി എത്താൻ കുറച്ച് നേരത്തെ എത്തുക.",
  },
};

const ART_QUOTES = {
  en: {
    monogram: "F · K",
    artLine: "Two hearts, one beautiful beginning",
    editorialTitle: "A Celebration Written in Gold",
    editorialCopy:
      "Between the calm of the lake and the warmth of family, we begin a story made of devotion, grace, and forever.",
    closingSmall: "With love, blessings, and joy",
    quote:
      "May this day be remembered not only for its beauty, but for the love that gathered around it.",
  },
  ml: {
    monogram: "F · K",
    artLine: "രണ്ട് ഹൃദയങ്ങൾ, ഒരു മനോഹര തുടക്കം",
    editorialTitle: "സ്നേഹത്തിൽ എഴുതപ്പെട്ട ആഘോഷം",
    editorialCopy:
      "കായലിന്റെ ശാന്തതയിലും കുടുംബങ്ങളുടെ അനുഗ്രഹത്തിലും, സ്നേഹവും വിശ്വാസവും നിറഞ്ഞ ഒരു പുതിയ കഥ ആരംഭിക്കുന്നു.",
    closingSmall: "സ്നേഹത്തോടും അനുഗ്രഹങ്ങളോടും സന്തോഷത്തോടും കൂടി",
    quote:
      "ഈ ദിവസത്തിന്റെ സൗന്ദര്യം മാത്രമല്ല, അതിന് ചുറ്റും കൂടിയ സ്നേഹവും എന്നും ഓർമ്മിക്കപ്പെടട്ടെ.",
  },
};

function injectStyles() {
  if (typeof document === "undefined") return;

  const existingStyle = document.getElementById(STYLE_ID);
  if (existingStyle) return;

  const styleTag = document.createElement("style");
  styleTag.id = STYLE_ID;
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
}

function getReducedMotionPreference() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function LuxuryDivider({ label = "Fayas & Keerthi" }) {
  return (
    <div className="luxury-divider" aria-hidden="true">
      <span />
      <div>
        <Heart size={13} fill="currentColor" />
        <small>{label}</small>
      </div>
      <span />
    </div>
  );
}

const WEDDING_DATE = new Date("2026-09-13T16:00:00+05:30");

export default function KeralaWeddingTemplate() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const countdownRefs = useRef([]);

  const [lang, setLang] = useState("en");
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [rsvpData, setRsvpData] = useState({
    name: "",
    guests: "1",
    attendance: "attending",
    message: "",
  });
  const [isRsvpSubmitted, setIsRsvpSubmitted] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  const t = TRANSLATIONS[lang];
  const art = ART_QUOTES[lang];

  const monogramParts = useMemo(() => {
    const parts = art.monogram.split(/\s+/);
    if (parts.length === 3) {
      return { left: parts[0], dot: parts[1], right: parts[2] };
    }
    return { left: "F", dot: "·", right: "K" };
  }, [art.monogram]);

  const [copiedLink, setCopiedLink] = useState(false);

  const handleShareInvitation = async () => {
    const shareData = {
      title: "Wedding Invitation | Muhammad Fayas & Keerthi Anilkumar",
      text: "We cordially invite you to celebrate our wedding at Serene Lake Resort, Kappil, Kerala.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // cancelled or error
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedLink(true);
        window.setTimeout(() => setCopiedLink(false), 2500);
      } catch (err) {
        // failed
      }
    }
  };

  const handleSaveToCalendar = () => {
    const title = "Wedding | Muhammad Fayas & Keerthi Anilkumar";
    const description = "Join us for our wedding celebration and feast at Serene Lake Resort, Kappil.";
    const location = "Serene Lake Resort, Kappil Rd, Kappil, Edava, Kerala 695311, India";

    const startStr = "20260913T103000Z";
    const endStr = "20260913T143000Z";

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Trired Global//Wedding Invitation//EN",
      "BEGIN:VEVENT",
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      `DTSTART:${startStr}`,
      `DTEND:${endStr}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Fayas_Keerthi_Wedding.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const galleryItems = useMemo(
    () =>
      [
        { src: groomPhoto, category: "couple", title: lang === "en" ? "The Groom" : "വരൻ" },
        { src: bridePhoto, category: "couple", title: lang === "en" ? "The Bride" : "വധു" },
        { src: roomPhoto, category: "venue", title: lang === "en" ? "Resort Stay" : "റിസോർട്ട് റൂം" },
        { src: resortPhoto, category: "venue", title: lang === "en" ? "Serene Resort" : "ലേക്ക് റിസോർട്ട്" },
        { src: gallery1, category: "celebration", title: lang === "en" ? "Traditional Vibes" : "ആഘോഷങ്ങൾ" },
        { src: gallery2, category: "celebration", title: lang === "en" ? "Cherished Moments" : "മനോഹര നിമിഷങ്ങൾ" },
        { src: gallery3, category: "celebration", title: lang === "en" ? "Elegant Decor" : "വിവാഹ അലങ്കാരം" },
        { src: gallery4, category: "celebration", title: lang === "en" ? "Happy Celebrations" : "സന്തോഷ നിമിഷങ്ങൾ" },
        { src: gallery5, category: "celebration", title: lang === "en" ? "Resort Landscape" : "റിസോർട്ട് കാഴ്ച" },
        { src: gallery6, category: "celebration", title: lang === "en" ? "Lake View" : "കായൽ ഭംഗി" },
      ].filter((item) => item.src),
    [lang, groomPhoto, bridePhoto, roomPhoto, resortPhoto, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]
  );

  const filteredGalleryItems = useMemo(() => {
    if (activeCategory === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, galleryItems]);

  const filteredGalleryImages = useMemo(
    () => filteredGalleryItems.map((item) => item.src),
    [filteredGalleryItems]
  );

  const timelineItems = useMemo(
    () => [
      {
        time: lang === "en" ? "04:00 PM" : "വൈകുന്നേരം 04:00",
        title: lang === "en" ? "Guest Arrival" : "അതിഥികളെ സ്വാഗതം",
        copy:
          lang === "en"
            ? "A warm lakeside welcome for family and friends."
            : "കുടുംബാംഗങ്ങളെയും സുഹൃത്തുക്കളെയും സ്നേഹത്തോടെ സ്വാഗതം ചെയ്യുന്നു.",
        icon: Users,
      },
      {
        time: lang === "en" ? "04:30 PM" : "വൈകുന്നേരം 04:30",
        title: lang === "en" ? "Celebration Party" : "വിവാഹ ആഘോഷം",
        copy:
          lang === "en"
            ? "Music, fun, and beautiful memories under the evening sky."
            : "സായഹ്നത്തിൽ സംഗീതവും മനോഹരമായ നിമിഷങ്ങളും.",
        icon: Sparkles,
      },
      {
        time: lang === "en" ? "06:00 PM" : "വൈകുന്നേരം 06:00",
        title: lang === "en" ? "Wedding Feast" : "സ്നേഹവിരുന്ന്",
        copy:
          lang === "en"
            ? "A celebratory feast by the serene backwaters."
            : "കായൽക്കരയിൽ സ്നേഹപൂർവ്വം ഒരുക്കിയ വിരുന്ന്.",
        icon: Utensils,
      },
    ],
    [lang]
  );

  useEffect(() => {
    injectStyles();
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const distance = Math.max(WEDDING_DATE.getTime() - now.getTime(), 0);

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (getReducedMotionPreference()) return;

    countdownRefs.current.forEach((node) => {
      if (!node) return;

      gsap.fromTo(
        node,
        { y: 8, opacity: 0.55 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        }
      );
    });
  }, [countdown]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || getReducedMotionPreference()) return;

    const context = canvas.getContext("2d");
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];

    const setSize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const makeParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 42 + 18,
      speedY: Math.random() * -0.35 - 0.16,
      speedX: Math.random() * 0.22 - 0.11,
      alpha: Math.random() * 0.06 + 0.03,
      hue: Math.random() > 0.5 ? "199,155,59" : "139,45,109",
    });

    const resetParticle = (particle) => {
      particle.x = Math.random() * width;
      particle.y = height + particle.radius;
      particle.radius = Math.random() * 42 + 18;
      particle.speedY = Math.random() * -0.35 - 0.16;
      particle.speedX = Math.random() * 0.22 - 0.11;
      particle.alpha = Math.random() * 0.06 + 0.03;
      particle.hue = Math.random() > 0.5 ? "199,155,59" : "139,45,109";
    };

    window.triggerIntroFireworks = () => {
      const centerX = width / 2;
      const centerY = height / 2;
      for (let i = 0; i < 90; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5.5 + 1.5;
        particles.push({
          x: centerX,
          y: centerY,
          radius: Math.random() * 3.5 + 1,
          speedX: Math.cos(angle) * speed,
          speedY: Math.sin(angle) * speed,
          gravity: 0.1,
          alpha: 1.0,
          decay: Math.random() * 0.013 + 0.007,
          hue: Math.random() > 0.6 ? "234,214,173" : "199,155,59",
          isFirework: true,
        });
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        if (particle.isFirework) {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.speedY += particle.gravity;
          particle.alpha -= particle.decay;

          if (particle.alpha <= 0) {
            particles.splice(i, 1);
            continue;
          }

          context.beginPath();
          context.fillStyle = `rgba(${particle.hue}, ${particle.alpha})`;
          context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          context.fill();
        } else {
          particle.y += particle.speedY;
          particle.x += particle.speedX + Math.sin(particle.y / 90) * 0.12;

          if (particle.y < -particle.radius) resetParticle(particle);

          const gradient = context.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.radius
          );

          gradient.addColorStop(0, `rgba(${particle.hue}, ${particle.alpha})`);
          gradient.addColorStop(1, `rgba(${particle.hue}, 0)`);

          context.beginPath();
          context.fillStyle = gradient;
          context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          context.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    setSize();
    particles = Array.from({ length: 34 }, makeParticle);
    window.addEventListener("resize", setSize);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setSize);
      delete window.triggerIntroFireworks;
    };
  }, []);

  useEffect(() => {
    if (getReducedMotionPreference()) return;

    const aura = document.querySelector(".cursor-aura");
    if (!aura) return;

    const moveAura = (event) => {
      gsap.to(aura, {
        x: event.clientX,
        y: event.clientY,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      });
    };

    const hideAura = () => {
      gsap.to(aura, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveAura);
    window.addEventListener("mouseleave", hideAura);

    return () => {
      window.removeEventListener("mousemove", moveAura);
      window.removeEventListener("mouseleave", hideAura);
    };
  }, []);

  useEffect(() => {
    const reduceMotion = getReducedMotionPreference();

    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      if (reduceMotion) {
        gsap.set(
          ".cinematic-intro, .intro-veil, .intro-mark, .hero-bg, .hero-panel, .hero-date-panel, .hero-content-panel, .hero-art-frame, .hero-monogram, .hero-light-beam, .reveal, .line-reveal, .timeline-item, .modern-collage-card, .rsvp-card, .rsvp-summary, .map-card, .map-details, .footer-names, .footer-quote, .footer-address, .footer-copy, .art-editorial-card, .art-editorial-image, .art-editorial-copy, .art-signature, .quote-card, .luxury-divider",
          {
            clearProps: "all",
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
          }
        );
        gsap.set(".cinematic-intro", { display: "none" });
        return;
      }

      const studioEase = "power3.out";

      const introTimeline = gsap.timeline();

      introTimeline
        .fromTo(
          ".intro-mark",
          {
            opacity: 0,
            scale: 0.86,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".ring-draw",
          { strokeDashoffset: 295.3 },
          {
            strokeDashoffset: 0,
            duration: 2.2,
            ease: "power1.inOut",
          },
          "-=0.2"
        )
        .to(
          ".intro-mark",
          {
            opacity: 0,
            scale: 1.08,
            filter: "blur(8px)",
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => {
              if (window.triggerIntroFireworks) {
                window.triggerIntroFireworks();
              }
            },
          },
          "+=0.15"
        )
        .to(
          ".intro-veil-left",
          {
            xPercent: -102,
            skewX: -2,
            duration: 1.25,
            ease: "power3.inOut",
          },
          "-=0.2"
        )
        .to(
          ".intro-veil-right",
          {
            xPercent: 102,
            skewX: 2,
            duration: 1.25,
            ease: "power3.inOut",
          },
          "<"
        )
        .set(".cinematic-intro", {
          display: "none",
        });

      const heroTimeline = gsap.timeline({
        delay: 3.55,
        defaults: {
          ease: studioEase,
        },
      });

      heroTimeline
        .fromTo(
          ".hero-bg",
          { opacity: 0, scale: 1.12 },
          { opacity: 0.16, scale: 1.08, duration: 2.4, ease: "none" }
        )
        .fromTo(
          ".hero-panel",
          { opacity: 0, y: 110, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.35,
            stagger: 0.16,
          },
          "-=1.7"
        )
        .fromTo(
          ".hero .line-reveal",
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.08,
          },
          "-=0.75"
        )
        .fromTo(
          ".countdown-card",
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.72,
            stagger: 0.07,
          },
          "-=0.45"
        );

      const appear = ({
        selector,
        trigger,
        y = 70,
        x = 0,
        scale = 1,
        duration = 0.95,
        stagger = 0.08,
        start = "top 86%",
      }) => {
        const elements = gsap.utils.toArray(selector);
        if (!elements.length) return;

        gsap.fromTo(
          elements,
          { opacity: 0, y, x, scale },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration,
            stagger,
            ease: studioEase,
            scrollTrigger: {
              trigger: trigger || elements[0],
              start,
              toggleActions: "play none none none",
            },
          }
        );
      };

      appear({
        selector:
          ".section-heading.reveal, .invitation-card, .art-editorial-card",
        y: 80,
        duration: 1,
        stagger: 0.08,
      });

      appear({
        selector: ".luxury-divider",
        y: 36,
        duration: 0.85,
        stagger: 0.08,
        start: "top 92%",
      });

      gsap.fromTo(
        ".couple-card:first-child",
        { opacity: 0, x: -70, y: 44 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.1,
          ease: studioEase,
          scrollTrigger: {
            trigger: ".couple-grid",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".couple-card:last-child",
        { opacity: 0, x: 70, y: 44 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.1,
          delay: 0.14,
          ease: studioEase,
          scrollTrigger: {
            trigger: ".couple-grid",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".center-heart",
        { opacity: 0, scale: 0.55, rotate: -14 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.85,
          delay: 0.42,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: ".couple-grid",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      appear({
        selector: ".venue-img-wrap, .venue-panel",
        trigger: ".venue-card",
        y: 90,
        stagger: 0.18,
        start: "top 82%",
      });

      appear({
        selector: ".timeline-item",
        trigger: ".timeline-wrap",
        y: 70,
        stagger: 0.16,
        start: "top 82%",
      });

      gsap.fromTo(
        ".timeline-progress",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-wrap",
            start: "top 72%",
            end: "bottom 62%",
            scrub: true,
          },
        }
      );

      gsap.utils.toArray(".masonry-item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: studioEase,
            scrollTrigger: {
              trigger: item,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      appear({
        selector:
          ".rsvp-card, .rsvp-summary, .map-card, .map-details",
        y: 90,
        stagger: 0.14,
        start: "top 84%",
      });

      appear({
        selector:
          ".footer-ornament, .footer-small, .footer-names, .footer-divider, .footer-quote, .footer-address, .footer-copy",
        trigger: ".footer",
        y: 60,
        stagger: 0.12,
        start: "top 90%",
      });

      gsap.to(".scroll-jewel-progress", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".artist-wedding-page",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.to(".hero-bg", {
        yPercent: 13,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".venue-img-wrap img", {
        scale: 1.08,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".venue-card",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".art-editorial-image img", {
        scale: 1.08,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".art-editorial-card",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".art-signature",
        {
          opacity: 0,
          y: 26,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".art-editorial-card",
            start: "top 72%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".quote-card p",
        {
          opacity: 0,
          y: 36,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".quote-card",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.to(".quote-mark", {
        y: -18,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-ornament.one", {
        y: -18,
        rotate: 6,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-ornament.two", {
        y: 20,
        rotate: -7,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-monogram", {
        y: -10,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".beam-one", {
        xPercent: 16,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".beam-two", {
        xPercent: -14,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-gallery-title", {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray(".magnetic").forEach((button) => {
        const onMove = (event) => {
          const rect = button.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;

          gsap.to(button, {
            x: x * 0.18,
            y: y * 0.18,
            duration: 0.32,
            ease: "power2.out",
          });
        };

        const onLeave = () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.45,
            ease: "elastic.out(1, 0.35)",
          });
        };

        button.addEventListener("mousemove", onMove);
        button.addEventListener("mouseleave", onLeave);
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, [lang]);

  useEffect(() => {
    if (getReducedMotionPreference()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".masonry-item",
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.05,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory]);

  useEffect(() => {
    return () => {
      if (!audioRef.current) return;
      audioRef.current.pause();
      audioRef.current.src = "";
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      try {
        audioRef.current.src = MUSIC_FALLBACK_URL;
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };



  const handleRsvpSubmit = (event) => {
    event.preventDefault();

    const savedRsvps = JSON.parse(localStorage.getItem("wedding_rsvps") || "[]");
    const newRsvp = {
      ...rsvpData,
      date: new Date().toLocaleDateString("en-GB"),
    };

    localStorage.setItem(
      "wedding_rsvps",
      JSON.stringify([newRsvp, ...savedRsvps])
    );

    setRsvpData({
      name: "",
      guests: "1",
      attendance: "attending",
      message: "",
    });

    setIsRsvpSubmitted(true);
    window.setTimeout(() => setIsRsvpSubmitted(false), 4000);
  };

  const renderCalendar = () => {
    const paddingCount = 2;
    const totalDays = 30;
    const cells = [];

    t.daysAbbr.forEach((day, index) => {
      cells.push(
        <div key={`header-${index}`} className="calendar-day-header">
          {day}
        </div>
      );
    });

    for (let i = 0; i < paddingCount; i += 1) {
      cells.push(<div key={`pad-${i}`} className="calendar-day-cell" />);
    }

    for (let day = 1; day <= totalDays; day += 1) {
      const isWeddingDay = day === 13;

      cells.push(
        <div
          key={`day-${day}`}
          className={`calendar-day-cell ${isWeddingDay ? "calendar-day-circled" : ""
            }`}
        >
          {day}
        </div>
      );
    }

    return (
      <div className="calendar-card line-reveal">
        <div className="calendar-month-name">
          {t.september} {t.year2026}
        </div>
        <div className="calendar-grid">{cells}</div>
      </div>
    );
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (event) => {
    event.stopPropagation();
    setLightboxIndex((current) =>
      current === filteredGalleryImages.length - 1 ? 0 : current + 1
    );
  };

  const prevImage = (event) => {
    event.stopPropagation();
    setLightboxIndex((current) =>
      current === 0 ? filteredGalleryImages.length - 1 : current - 1
    );
  };

  const countdownValues = [
    countdown.days,
    countdown.hours,
    countdown.minutes,
    countdown.seconds,
  ];

  return (
    <div ref={containerRef} className="artist-wedding-page">
      <div className="cinematic-intro" aria-hidden="true">
        <div className="intro-veil intro-veil-left" />
        <div className="intro-veil intro-veil-right" />
        <div className="intro-mark">
          <svg className="intro-mark-ring" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ead6ad" />
                <stop offset="50%" stopColor="#c79b3b" />
                <stop offset="100%" stopColor="#8f6723" />
              </linearGradient>
            </defs>
            <circle
              className="ring-track"
              cx="50"
              cy="50"
              r="47"
              fill="transparent"
              stroke="rgba(234, 214, 173, 0.12)"
              strokeWidth="2.5"
            />
            <circle
              className="ring-draw"
              cx="50"
              cy="50"
              r="47"
              fill="transparent"
              stroke="url(#gold-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="295.3"
              strokeDashoffset="295.3"
            />
          </svg>
          <span className="monogram-text">
            <span className="left-char">{monogramParts.left}</span>
            <span className="dot-char">{monogramParts.dot}</span>
            <span className="right-char">{monogramParts.right}</span>
          </span>
          <small>{art.artLine}</small>
        </div>
      </div>

      <canvas ref={canvasRef} className="wedding-canvas" />
      <div className="scroll-jewel" aria-hidden="true">
        <span className="scroll-jewel-progress" />
      </div>
      <div className="cursor-aura" aria-hidden="true" />



      <Flower2 size={64} className="floating-ornament one" aria-hidden="true" />
      <Sparkles size={58} className="floating-ornament two" aria-hidden="true" />

      <div className="page-layer">
        <div className="floating-controls">
          <div className="language-switcher-pill" aria-label="Language switcher">
            <button
              type="button"
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              English
            </button>
            <button
              type="button"
              className={lang === "ml" ? "active" : ""}
              onClick={() => setLang("ml")}
            >
              മലയാളം
            </button>
          </div>

          <button
            type="button"
            className={`music-toggle magnetic ${isPlaying ? "playing" : ""}`}
            onClick={togglePlay}
            aria-label="Toggle background music"
          >
            {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
        </div>

        <audio ref={audioRef} src={weddingMusic} loop preload="auto" />

        <nav className="luxury-nav" aria-label="Wedding sections">
          <button type="button" onClick={() => scrollToSection("couple")}>
            Couple
          </button>
          <button type="button" onClick={() => scrollToSection("story")}>
            Story
          </button>
          <button type="button" onClick={() => scrollToSection("venue")}>
            Venue
          </button>
          <button type="button" onClick={() => scrollToSection("gallery")}>
            Gallery
          </button>
          <button type="button" onClick={() => scrollToSection("rsvp")}>
            RSVP
          </button>
        </nav>

        <header className="hero">
          <img src={heroBg} alt="Wedding resort" className="hero-bg" />
          <div className="hero-light-beam beam-one" aria-hidden="true" />
          <div className="hero-light-beam beam-two" aria-hidden="true" />

          <div className="hero-art-frame" aria-hidden="true">
            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            <span className="corner corner-bl" />
            <span className="corner corner-br" />
          </div>

          <div className="hero-monogram line-reveal" aria-hidden="true">
            <span>{art.monogram}</span>
          </div>

          <div className="hero-shell">
            <div className="hero-panel hero-date-panel">
              <div className="eyebrow line-reveal">{t.saveTheDate}</div>

              <div className="script-title line-reveal">
                Save
                <span>The</span>
                Date
              </div>

              <div className="gold-line line-reveal" />

              {renderCalendar()}

              <div className="line-reveal" style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
                <button
                  type="button"
                  className="ghost-button magnetic"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(234, 214, 173, 0.3)",
                    color: "var(--champagne)",
                    padding: "8px 16px",
                    fontSize: "10px",
                    borderRadius: "999px",
                  }}
                  onClick={handleSaveToCalendar}
                >
                  <CalendarIcon size={12} />
                  {t.saveToCalendar}
                </button>
              </div>

              <div className="hero-mini-names line-reveal">
                <h3 style={{ color: "#ffffff" }}>{lang === "en" ? "Muhammad Fayas" : "മുഹമ്മദ് ഫയാസ്"}</h3>
                <div className="amp">&</div>
                <h3 style={{ color: "#ffffff" }}>
                  {lang === "en" ? "Keerthi Anilkumar" : "കീർത്തി അനിൽകുമാർ"}
                </h3>
              </div>
            </div>

            <div className="hero-panel hero-content-panel">
              <div className="content-top line-reveal">
                <div className="eyebrow">{t.wedding}</div>

                <div className="hero-date-large">
                  13 <span>{t.sep} 2026</span>
                </div>

                <div className="weekday">{t.sunday}</div>
              </div>

              <div className="couple-avatar-row line-reveal">
                <img src={groomPhoto} alt={t.groomName} className="avatar-img" />
                <div className="avatar-heart">
                  <Heart size={18} fill="currentColor" />
                </div>
                <img src={bridePhoto} alt={t.brideName} className="avatar-img" />
              </div>

              <h1 className="hero-names line-reveal">
                Fayas
                <span>and</span>
                Keerthi
              </h1>

              <p className="hero-subcopy line-reveal">
                {t.togetherWithFamilies}, {t.heartilyInvites.toLowerCase()} to
                celebrate a beautiful beginning by the serene backwaters of
                Kappil.
              </p>

              <div className="editorial-ribbon line-reveal">
                <Feather size={15} />
                <span>{art.artLine}</span>
                <Feather size={15} />
              </div>

              <div className="countdown-grid" aria-label="Wedding countdown">
                {countdownValues.map((value, index) => (
                  <div className="countdown-card" key={t.countdown[index]}>
                    <span
                      className="countdown-number"
                      ref={(node) => {
                        countdownRefs.current[index] = node;
                      }}
                    >
                      {String(value).padStart(2, "0")}
                    </span>
                    <span className="countdown-label">{t.countdown[index]}</span>
                  </div>
                ))}
              </div>

              <div className="hero-actions line-reveal">
                <button
                  type="button"
                  className="primary-button magnetic"
                  onClick={() => scrollToSection("couple")}
                >
                  <Sparkles size={15} />
                  {t.exploreBtn}
                </button>

                <button
                  type="button"
                  className="ghost-button magnetic"
                  onClick={() => scrollToSection("rsvp")}
                >
                  <CheckCircle2 size={15} />
                  RSVP
                </button>

                <button
                  type="button"
                  className="ghost-button magnetic"
                  onClick={handleSaveToCalendar}
                >
                  <CalendarIcon size={15} />
                  {t.saveToCalendar}
                </button>

                <button
                  type="button"
                  className="ghost-button magnetic"
                  onClick={handleShareInvitation}
                >
                  <Share2 size={15} />
                  {copiedLink ? t.copied : t.shareBtn}
                </button>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section id="couple" className="section">
            <div className="section-inner">
              <div className="section-heading reveal">
                <div className="section-kicker">
                  <Flower2 size={15} />
                  {t.saveTheDate}
                </div>
                <h2 className="section-title">{t.happyCoupleTitle}</h2>
                <p className="section-copy">{t.happyCoupleSubtitle}</p>
              </div>

              <div className="couple-grid">
                <article className="couple-card reveal">
                  <div className="couple-photo-wrap">
                    <span className="portrait-corner portrait-corner-tl" />
                    <span className="portrait-corner portrait-corner-br" />
                    <img src={groomPhoto} alt={t.groomName} />
                  </div>
                  <div className="couple-info">
                    <span className="role-pill">{t.groomTitle}</span>
                    <h3 className="couple-name">{t.groomName}</h3>
                    <p className="couple-meta">
                      <strong>{t.groomParents}</strong>
                      <br />
                      {t.groomHome}
                    </p>
                    <a href="tel:9995384667" className="phone-link">
                      <Phone size={14} />
                      {t.callGroom}: 9995384667
                    </a>
                  </div>
                </article>

                <div className="couple-center reveal">
                  <div className="center-heart">
                    <Heart size={26} fill="currentColor" />
                  </div>
                </div>

                <article className="couple-card reveal">
                  <div className="couple-photo-wrap">
                    <span className="portrait-corner portrait-corner-tl" />
                    <span className="portrait-corner portrait-corner-br" />
                    <img src={bridePhoto} alt={t.brideName} />
                  </div>
                  <div className="couple-info">
                    <span className="role-pill">{t.brideTitle}</span>
                    <h3 className="couple-name">{t.brideName}</h3>
                    <p className="couple-meta">
                      <strong>{t.brideParents}</strong>
                      <br />
                      {t.brideHome}
                      <br />
                      {t.brideExtra}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <LuxuryDivider label={art.monogram} />

          <section className="section invitation-section">
            <div className="section-inner">
              <article className="invitation-card reveal">
                <div className="section-kicker" style={{ justifyContent: "center" }}>
                  <Heart size={14} fill="currentColor" />
                  {t.saveTheDate}
                </div>

                <h2 className="invite-title">{t.invitationTitle}</h2>
                <p className="invite-text">{t.inviteText}</p>
                <div className="gold-line" />
                <p className="invite-details">{t.inviteDetails}</p>

                <div className="family-row">
                  <div className="family-box">
                    <div className="family-title">{t.groomSide}</div>
                    <div className="family-name">{t.groomSideFamily}</div>
                  </div>

                  <div className="family-box">
                    <div className="family-title">{t.brideSide}</div>
                    <div className="family-name">{t.brideSideFamily}</div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <LuxuryDivider label={art.monogram} />

          <section id="story" className="section art-editorial-section">
            <div className="section-inner">
              <div className="art-editorial-card reveal">
                <div className="art-editorial-image">
                  <img src={heroBg} alt="Romantic wedding atmosphere" />
                </div>

                <div className="art-editorial-copy">
                  <div className="section-kicker">
                    <Gem size={15} />
                    The Story
                  </div>

                  <h2 className="section-title">{art.editorialTitle}</h2>

                  <p className="art-large-copy">{art.editorialCopy}</p>

                  <div className="art-signature">
                    <span>{art.monogram}</span>
                    <small>{art.closingSmall}</small>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <LuxuryDivider label={art.monogram} />

          <section id="venue" className="section">
            <div className="section-inner">
              <div className="venue-card reveal">
                <div className="venue-img-wrap">
                  <img src={resortPhoto} alt="Serene Lake Resort" />
                </div>

                <div className="venue-panel">
                  <div className="section-kicker">
                    <MapPin size={15} />
                    {t.venueTitle}
                  </div>

                  <h2 className="venue-name">
                    {lang === "en"
                      ? "Serene Lake Resort"
                      : "സെറീൻ ലേക്ക് റിസോർട്ട്"}
                  </h2>

                  <p className="venue-address">
                    {lang === "en"
                      ? "Edava Parayil Kappil Rd, PO, Edava, Kerala 695311, India"
                      : "എടവ പറയിൽ കാപ്പിൽ റോഡ്, പി.ഒ, എടവ, കേരളം 695311"}
                  </p>

                  <div className="info-grid">
                    <div className="info-card">
                      <div className="info-icon">
                        <CalendarIcon size={20} />
                      </div>
                      <div>
                        <div className="info-label">{t.on}</div>
                        <div className="info-value">{t.dateStringFormatted}</div>
                      </div>
                    </div>

                    <div className="info-card">
                      <div className="info-icon">
                        <Clock size={20} />
                      </div>
                      <div>
                        <div className="info-label">{t.ceremonyTime}</div>
                        <div className="info-value">{t.muhurthamTime}</div>
                      </div>
                    </div>

                    <div className="info-card">
                      <div className="info-icon">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div className="info-label">{t.venueLocation}</div>
                        <div className="info-value">{t.lakesideResort}</div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://share.google/XJDjMzsVDy1ivyNee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-button magnetic"
                  >
                    <Navigation size={15} />
                    {t.openMap}
                  </a>
                </div>
              </div>
            </div>
          </section>

          <LuxuryDivider label={art.monogram} />

          <section className="section">
            <div className="section-inner">
              <div className="section-heading reveal">
                <div className="section-kicker">
                  <Clock size={15} />
                  {lang === "en" ? "Celebration" : "ആഘോഷം"}
                </div>
                <h2 className="section-title">{t.scheduleTitle}</h2>
                <p className="section-copy">{t.scheduleSubtitle}</p>
              </div>

              <div className="timeline-wrap">
                <div className="timeline-line" aria-hidden="true">
                  <div className="timeline-progress" />
                </div>

                {timelineItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      className="timeline-item"
                      key={`${item.time}-${item.title}`}
                    >
                      <span className="timeline-dot" aria-hidden="true" />
                      <div className="timeline-time">{item.time}</div>
                      <h3 className="timeline-title">
                        <Icon size={17} /> {item.title}
                      </h3>
                      <p className="timeline-copy">{item.copy}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <LuxuryDivider label={art.monogram} />

          <section id="gallery" className="section gallery-section">
            <div className="section-inner">
              <div className="section-heading reveal">
                <div className="section-kicker">
                  <Maximize2 size={15} />
                  Memories
                </div>

                <h2 className="section-title">{t.galleryTitle}</h2>

                <p className="section-copy">{t.gallerySubtitle}</p>
              </div>

              <div className="gallery-tabs reveal">
                <button
                  type="button"
                  className={`gallery-tab-btn magnetic ${activeCategory === "all" ? "active" : ""}`}
                  onClick={() => setActiveCategory("all")}
                >
                  {t.galleryAll || "All"}
                </button>
                <button
                  type="button"
                  className={`gallery-tab-btn magnetic ${activeCategory === "couple" ? "active" : ""}`}
                  onClick={() => setActiveCategory("couple")}
                >
                  {t.galleryCouple || "Couple"}
                </button>
                <button
                  type="button"
                  className={`gallery-tab-btn magnetic ${activeCategory === "venue" ? "active" : ""}`}
                  onClick={() => setActiveCategory("venue")}
                >
                  {t.galleryVenue || "Venue"}
                </button>
                <button
                  type="button"
                  className={`gallery-tab-btn magnetic ${activeCategory === "celebration" ? "active" : ""}`}
                  onClick={() => setActiveCategory("celebration")}
                >
                  {t.galleryMoments || "Celebration"}
                </button>
              </div>

              <div className="modern-gallery-masonry modern-masonry-grid">
                {filteredGalleryItems.map((item, index) => (
                  <button
                    key={`${item.src}-${index}`}
                    type="button"
                    className="masonry-item"
                    onClick={() => setLightboxIndex(index)}
                  >
                    <img src={item.src} alt={item.title} loading="lazy" />
                    <div className="masonry-item-info">
                      <h4>{item.title}</h4>
                      <p>{item.category}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <LuxuryDivider label={art.monogram} />

          <section id="rsvp" className="section rsvp-section">
            <div className="section-inner">
              <div className="section-heading reveal">
                <div className="section-kicker">
                  <CheckCircle2 size={15} />
                  RSVP
                </div>
                <h2 className="section-title">{t.rsvpTitle}</h2>
                <p className="section-copy">{t.rsvpSubtitle}</p>
              </div>

              <div className="rsvp-grid">
                <div className="rsvp-card">
                  <h3 className="card-title">{t.rsvpTitle}</h3>

                  <form onSubmit={handleRsvpSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="rsvp-name">
                        {t.rsvpName}
                      </label>
                      <input
                        id="rsvp-name"
                        className="form-input"
                        type="text"
                        required
                        value={rsvpData.name}
                        onChange={(event) =>
                          setRsvpData({ ...rsvpData, name: event.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="rsvp-guests">
                        {t.rsvpGuests}
                      </label>
                      <input
                        id="rsvp-guests"
                        className="form-input"
                        type="number"
                        min="1"
                        max="20"
                        value={rsvpData.guests}
                        onChange={(event) =>
                          setRsvpData({ ...rsvpData, guests: event.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="rsvp-attendance">
                        {t.rsvpAttendance}
                      </label>
                      <select
                        id="rsvp-attendance"
                        className="form-select"
                        value={rsvpData.attendance}
                        onChange={(event) =>
                          setRsvpData({
                            ...rsvpData,
                            attendance: event.target.value,
                          })
                        }
                      >
                        <option value="attending">{t.attending}</option>
                        <option value="not-attending">{t.notAttending}</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="rsvp-message">
                        {t.rsvpMessage}
                      </label>
                      <textarea
                        id="rsvp-message"
                        className="form-textarea"
                        value={rsvpData.message}
                        onChange={(event) =>
                          setRsvpData({ ...rsvpData, message: event.target.value })
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      className="gold-button magnetic"
                      style={{ width: "100%" }}
                    >
                      <Send size={15} />
                      {t.rsvpSend}
                    </button>

                    {isRsvpSubmitted && (
                      <div className="success-message">{t.rsvpThanks}</div>
                    )}
                  </form>
                </div>

                <aside className="rsvp-summary">
                  <h3 className="card-title">{t.rsvpNoteTitle}</h3>

                  <div className="rsvp-mini-grid">
                    <div className="rsvp-mini-card">
                      <div className="rsvp-mini-icon">
                        <Gift size={19} />
                      </div>
                      <div>
                        <h4>{t.togetherWithFamilies}</h4>
                        <p>{t.rsvpNote}</p>
                      </div>
                    </div>

                    <div className="rsvp-mini-card">
                      <div className="rsvp-mini-icon">
                        <CalendarIcon size={19} />
                      </div>
                      <div>
                        <h4>{t.dateStringFormatted}</h4>
                        <p>{t.muhurthamTime}</p>
                      </div>
                    </div>

                    <div className="rsvp-mini-card">
                      <div className="rsvp-mini-icon">
                        <Music2 size={19} />
                      </div>
                      <div>
                        <h4>{lang === "en" ? "Celebration" : "ആഘോഷം"}</h4>
                        <p>{t.inviteDetails}</p>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <LuxuryDivider label={art.monogram} />

          <section className="section map-section">
            <div className="section-inner">
              <div className="section-heading reveal">
                <div className="section-kicker">
                  <MapPin size={15} />
                  Location
                </div>
                <h2 className="section-title">{t.mapTitle}</h2>
                <p className="section-copy">{t.mapSubtitle}</p>
              </div>

              <div className="map-grid">
                <div className="map-card">
                  <iframe
                    title="Serene Lake Resort Map"
                    className="map-frame"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Serene%20Lake%20Resort%20Kappil%20Edava%20Kerala&output=embed"
                  />
                </div>

                <div className="map-details">
                  <div className="section-kicker">
                    <Navigation size={15} />
                    {t.venueLocation}
                  </div>

                  <h3 className="venue-name">
                    {lang === "en"
                      ? "Serene Lake Resort"
                      : "സെറീൻ ലേക്ക് റിസോർട്ട്"}
                  </h3>

                  <p className="venue-address">
                    {lang === "en"
                      ? "Edava Parayil Kappil Rd, PO, Edava, Kerala 695311, India"
                      : "എടവ പറയിൽ കാപ്പിൽ റോഡ്, പി.ഒ, എടവ, കേരളം 695311"}
                  </p>

                  <p className="section-copy" style={{ marginLeft: 0 }}>
                    {t.mapHelp}
                  </p>

                  <a
                    href="https://share.google/XJDjMzsVDy1ivyNee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-button magnetic"
                    style={{ alignSelf: "flex-start", marginTop: 22 }}
                  >
                    <Navigation size={15} />
                    {t.openMap}
                  </a>
                </div>
              </div>
            </div>
          </section>

          <LuxuryDivider label={art.monogram} />

          <section className="section quote-section">
            <div className="section-inner">
              <div className="quote-card reveal">
                <div className="quote-mark">“</div>
                <p>{art.quote}</p>
                <span>{art.monogram}</span>
              </div>
            </div>
          </section>


        </main>

        <footer className="footer">
          <div className="footer-ornament" aria-hidden="true">
            <Crown size={26} />
          </div>

          <p className="footer-small">{art.closingSmall}</p>

          <h2 className="footer-names">
            {lang === "en"
              ? "Muhammad Fayas & Keerthi"
              : "മുഹമ്മദ് ഫയാസ് & കീർത്തി"}
          </h2>

          <div className="footer-divider">
            <span />
            <Heart size={15} fill="currentColor" />
            <span />
          </div>

          <p className="footer-quote">{t.footerQuote}</p>
          <div className="footer-address">{t.footerAddress}</div>

          <div style={{ marginTop: "24px", marginBottom: "16px" }}>
            <a 
              href="#trired"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 24px",
                borderRadius: "999px",
                border: "1px solid rgba(234, 214, 173, 0.35)",
                background: "rgba(255, 255, 255, 0.05)",
                color: "var(--champagne)",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "all 0.3s ease"
              }}
              className="footer-contact-btn magnetic"
            >
              <Sparkles size={13} /> Contact Us / Partner With Us
            </a>
          </div>

          <div className="footer-copy">{t.footerCopyright}</div>
          <div className="footer-copy" style={{ marginTop: "12px", opacity: 0.8 }}>
            made with{" "}
            <a
              href="#trired"
              style={{
                color: "var(--champagne)",
                textDecoration: "none",
                fontWeight: 600,
                borderBottom: "1px solid rgba(234, 214, 173, 0.4)",
                transition: "color 0.25s ease, border-color 0.25s ease"
              }}
              className="studio-link"
            >
              trired global venture studio
            </a>
          </div>
        </footer>

        {lightboxIndex !== null && (
          <div className="lightbox-modal" onClick={closeLightbox}>
            <button
              type="button"
              className="lightbox-button lightbox-close"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              className="lightbox-button lightbox-prev"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <img
              src={filteredGalleryImages[lightboxIndex]}
              alt={`Wedding large memory ${lightboxIndex + 1}`}
              className="lightbox-img"
              onClick={(event) => event.stopPropagation()}
            />

            <button
              type="button"
              className="lightbox-button lightbox-next"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export {
  KeralaWeddingTemplate as AllTemplates,
  KeralaWeddingTemplate as ClassicTemplate,
  KeralaWeddingTemplate as FloralTemplate,
  KeralaWeddingTemplate as ModernTemplate,
  KeralaWeddingTemplate as ArabicTemplate,
  KeralaWeddingTemplate as TraditionalTemplate,
};   