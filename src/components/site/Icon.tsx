"use client";

import {
  Siren,
  HeartPulse,
  Radar,
  Cctv,
  ShieldCheck,
  BadgeCheck,
  Fingerprint,
  Crown,
  Megaphone,
  Tent,
  Radio,
  Store,
  HeartHandshake,
  MapPin,
  Handshake,
  Facebook,
  Instagram,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Check,
  Quote,
  Award,
  Clock,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  siren: Siren,
  "heart-pulse": HeartPulse,
  radar: Radar,
  cctv: Cctv,
  "shield-check": ShieldCheck,
  "badge-check": BadgeCheck,
  fingerprint: Fingerprint,
  crown: Crown,
  megaphone: Megaphone,
  tent: Tent,
  radio: Radio,
  store: Store,
  "shield-heart": HeartHandshake,
  "map-pin": MapPin,
  handshake: Handshake,
  facebook: Facebook,
  instagram: Instagram,
  phone: Phone,
  mail: Mail,
  whatsapp: MessageCircle,
  "arrow-right": ArrowRight,
  check: Check,
  quote: Quote,
  award: Award,
  clock: Clock,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.8,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name] ?? ShieldCheck;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
