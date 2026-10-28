import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { C, R } from './theme';

export type IconName = React.ComponentProps<typeof Ionicons>['name'];

export type Tone = 'outline' | 'filled' | 'accent' | 'live' | 'good';

const TONES: Record<Tone, { bg?: string; fg: string; border?: string }> = {
  outline: { fg: C.text, border: C.borderStrong },
  filled: { bg: C.ink, fg: C.onInk },
  accent: { bg: C.amberSoft, fg: C.amber },
  live: { bg: C.liveSoft, fg: C.live },
  good: { bg: C.successSoft, fg: C.success },
};

export function Screen({
  title,
  subtitle,
  back = true,
  scroll = true,
  dark = false,
  footer,
  nav,
  right,
  children,
}: {
  title?: string;
  subtitle?: string;
  back?: boolean;
  scroll?: boolean;
  dark?: boolean;
  footer?: React.ReactNode;
  /** Rendered flush to the bottom edge, outside the footer's padding. For NavBar. */
  nav?: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  const insets = useSafeAreaInsets();
  const fg = dark ? C.onInk : C.text;
  const body = scroll ? (
    <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 24, gap: 14 }} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  ) : (
    <View style={{ flex: 1, padding: 20, gap: 14 }}>{children}</View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: dark ? C.text : C.bg, paddingTop: insets.top }}>
      {(title || back || right) && (
        <View style={s.header}>
          {back ? (
            <Pressable onPress={() => router.back()} hitSlop={12} style={s.iconBtn}>
              <Ionicons name="arrow-back" size={22} color={fg} />
            </Pressable>
          ) : (
            <View style={s.iconBtn} />
          )}
          <View style={{ flex: 1 }}>
            {title ? <Text style={[s.headerTitle, { color: fg }]}>{title}</Text> : null}
            {subtitle ? <Text style={[s.headerSub, { color: dark ? C.borderStrong : C.textDim }]}>{subtitle}</Text> : null}
          </View>
          {right ?? <View style={s.iconBtn} />}
        </View>
      )}
      <View style={{ flex: 1 }}>{body}</View>
      {footer ? <View style={{ padding: 20, paddingBottom: nav ? 12 : Math.max(insets.bottom, 16), gap: 10 }}>{footer}</View> : null}
      {nav}
      {!footer && !nav ? <View style={{ height: insets.bottom }} /> : null}
    </View>
  );
}

export function Btn({
  label,
  onPress,
  icon,
  variant = 'primary',
  style,
  small,
  disabled,
}: {
  label: string;
  onPress?: () => void;
  icon?: IconName;
  variant?: 'primary' | 'secondary' | 'ghost' | 'amber';
  style?: StyleProp<ViewStyle>;
  small?: boolean;
  disabled?: boolean;
}) {
  const primary = variant === 'primary';
  const amber = variant === 'amber';
  const fg = primary || amber ? C.onInk : variant === 'ghost' ? C.textDim : C.ink;
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      style={({ pressed }) => [
        s.btn,
        small && { height: 36, borderRadius: R.sm, paddingHorizontal: 14 },
        primary && { backgroundColor: C.ink },
        amber && { backgroundColor: C.amber },
        variant === 'secondary' && { backgroundColor: C.surface, borderWidth: 1.5, borderColor: C.ink },
        { opacity: disabled ? 0.35 : pressed ? 0.7 : 1 },
        style,
      ]}>
      {icon ? <Ionicons name={icon} size={small ? 15 : 18} color={fg} /> : null}
      <Text style={[s.btnText, { color: fg }, small && { fontSize: 13 }]}>{label}</Text>
    </Pressable>
  );
}

export function Card({ children, style, tone }: { children: React.ReactNode; style?: StyleProp<ViewStyle>; tone?: 'amber' | 'ink' | 'live' | 'good' | 'alt' }) {
  const bg =
    tone === 'amber' ? C.amberSoft : tone === 'ink' ? C.inkSoft : tone === 'live' ? C.liveSoft : tone === 'good' ? C.successSoft : tone === 'alt' ? C.surfaceAlt : C.surface;
  return <View style={[s.card, { backgroundColor: bg }, tone ? { borderColor: 'transparent' } : null, style]}>{children}</View>;
}

export function H({ children, style }: { children: React.ReactNode; style?: TextStyle }) {
  return <Text style={[{ color: C.text, fontSize: 24, fontWeight: '800', letterSpacing: -0.4 }, style]}>{children}</Text>;
}

export function H2({ children, style }: { children: React.ReactNode; style?: TextStyle }) {
  return <Text style={[{ color: C.text, fontSize: 19, fontWeight: '700', letterSpacing: -0.2 }, style]}>{children}</Text>;
}

export function P({ children, style }: { children: React.ReactNode; style?: TextStyle }) {
  return <Text style={[{ color: C.textDim, fontSize: 15, lineHeight: 22 }, style]}>{children}</Text>;
}

export function Label({ children }: { children: React.ReactNode }) {
  return <Text style={s.label}>{children}</Text>;
}

export function Avatar({
  initial,
  size = 34,
  filled = false,
  tone,
}: {
  initial: string;
  size?: number;
  filled?: boolean;
  tone?: 'default' | 'filled' | 'amber';
}) {
  const t = tone ?? (filled ? 'filled' : 'default');
  const bg = t === 'amber' ? C.amber : t === 'filled' ? C.ink : C.surface;
  const fg = t === 'default' ? C.ink : C.onInk;
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: bg,
        borderWidth: 1.5,
        borderColor: t === 'default' ? C.ink : bg,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ color: fg, fontWeight: '800', fontSize: size * 0.4 }}>{initial}</Text>
    </View>
  );
}

export function Pill({ text, filled, tone }: { text: string; filled?: boolean; tone?: Tone }) {
  const t = TONES[tone ?? (filled ? 'filled' : 'outline')];
  return (
    <View
      style={[
        s.pill,
        { backgroundColor: t.bg ?? 'transparent', borderColor: t.border ?? 'transparent', borderWidth: t.border ? 1 : 0 },
      ]}>
      <Text style={{ color: t.fg, fontSize: 12, fontWeight: '700' }}>{text}</Text>
    </View>
  );
}

export function Field({ label, value, icon }: { label: string; value: string; icon?: IconName }) {
  return (
    <View style={{ gap: 6 }}>
      <Label>{label}</Label>
      <View style={s.field}>
        <Text style={{ color: C.text, fontSize: 16, flex: 1 }}>{value}</Text>
        {icon ? <Ionicons name={icon} size={18} color={C.textDim} /> : null}
      </View>
    </View>
  );
}

export function Thumb({ size = 44, icon = 'image-outline', tone }: { size?: number; icon?: IconName; tone?: 'ink' | 'amber' }) {
  const bg = tone === 'ink' ? C.inkSoft : tone === 'amber' ? C.amberSoft : C.placeholder;
  const fg = tone === 'ink' ? C.ink : tone === 'amber' ? C.amber : C.textDim;
  return (
    <View style={{ width: size, height: size, borderRadius: R.sm, backgroundColor: bg, alignItems: 'center', justifyContent: 'center' }}>
      <Ionicons name={icon} size={size * 0.45} color={fg} />
    </View>
  );
}

export function Note({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  return (
    <Card tone="alt" style={{ flexDirection: 'row', gap: 12 }}>
      <Ionicons name={icon} size={22} color={C.text} />
      <View style={{ flex: 1, gap: 2 }}>
        <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{title}</Text>
        <Text style={{ color: C.textDim, fontSize: 13, lineHeight: 19 }}>{children}</Text>
      </View>
    </Card>
  );
}

/** Horizontal segmented control, used for the Nearby / Requests / Events switch. */
export function Tabs<T extends string>({ tabs, value, onChange }: { tabs: { key: T; label: string }[]; value: T; onChange: (k: T) => void }) {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: C.surfaceAlt, borderRadius: R.sm + 2, padding: 3 }}>
      {tabs.map((t) => {
        const on = t.key === value;
        return (
          <Pressable
            key={t.key}
            onPress={() => onChange(t.key)}
            style={{ flex: 1, paddingVertical: 8, borderRadius: R.sm, alignItems: 'center', backgroundColor: on ? C.surface : 'transparent' }}>
            <Text style={{ color: on ? C.text : C.textDim, fontWeight: '700', fontSize: 13 }}>{t.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <Card style={{ flex: 1, alignItems: 'center', paddingVertical: 10, paddingHorizontal: 6 }}>
      <Text style={{ color: C.text, fontSize: 22, fontWeight: '800' }}>{value}</Text>
      <Text style={{ color: C.textDim, fontSize: 12 }}>{label}</Text>
    </Card>
  );
}

export function Bar({ pct, color = C.ink }: { pct: number; color?: string }) {
  return (
    <View style={{ height: 8, borderRadius: 4, backgroundColor: C.surfaceAlt, overflow: 'hidden' }}>
      <View style={{ width: `${Math.max(0, Math.min(1, pct)) * 100}%`, height: 8, borderRadius: 4, backgroundColor: color }} />
    </View>
  );
}

export type Dot = { a: number; r: number; s: 'ok' | 'thin' | 'me' };
export type Who = { a: number; r: number; i: string; host?: boolean };

/**
 * Coverage radar. Angles are degrees clockwise from north, radii are 0..1 of the outer ring.
 * Deliberately approximate - see the "this is a guide, not proof" note on the coverage screen.
 */
export function Radar({ size = 230, dots = [], people = [] }: { size?: number; dots?: Dot[]; people?: Who[] }) {
  const rad = size / 2;
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      {[1, 0.66, 0.33].map((k) => (
        <View
          key={k}
          style={{
            position: 'absolute',
            width: size * k,
            height: size * k,
            borderRadius: (size * k) / 2,
            borderWidth: 1,
            borderColor: C.border,
            backgroundColor: k === 1 ? C.surface : 'transparent',
          }}
        />
      ))}
      <Text style={{ position: 'absolute', top: 6, color: C.textDim, fontSize: 11, fontWeight: '700' }}>N</Text>
      <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: C.ink }} />
      {dots.map((d, i) => {
        const t = (d.a * Math.PI) / 180;
        const col = d.s === 'ok' ? C.success : d.s === 'me' ? C.amber : C.surface;
        const brd = d.s === 'ok' ? C.success : d.s === 'me' ? C.amber : C.borderStrong;
        const sz = d.s === 'me' ? 18 : 15;
        return (
          <View
            key={i}
            style={{
              position: 'absolute',
              width: sz,
              height: sz,
              borderRadius: sz / 2,
              backgroundColor: col,
              borderWidth: 2,
              borderColor: brd,
              transform: [{ translateX: Math.sin(t) * rad * d.r }, { translateY: -Math.cos(t) * rad * d.r }],
            }}
          />
        );
      })}
      {people.map((p, i) => {
        const t = (p.a * Math.PI) / 180;
        return (
          <View
            key={`p${i}`}
            style={{ position: 'absolute', transform: [{ translateX: Math.sin(t) * rad * p.r }, { translateY: -Math.cos(t) * rad * p.r }] }}>
            <Avatar initial={p.i} size={30} tone={p.host ? 'amber' : 'filled'} />
          </View>
        );
      })}
    </View>
  );
}

export function LegendDot({ color, text, hollow }: { color: string; text: string; hollow?: boolean }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
      <View style={{ width: 11, height: 11, borderRadius: 6, backgroundColor: hollow ? C.surface : color, borderWidth: 2, borderColor: color }} />
      <Text style={{ color: C.textDim, fontSize: 12 }}>{text}</Text>
    </View>
  );
}

export function Toggle({ on }: { on: boolean }) {
  return (
    <View style={{ width: 46, height: 27, borderRadius: 14, backgroundColor: on ? C.ink : C.surfaceAlt, padding: 3, alignItems: on ? 'flex-end' : 'flex-start' }}>
      <View style={{ width: 21, height: 21, borderRadius: 11, backgroundColor: C.surface }} />
    </View>
  );
}

const NAV: { icon: IconName; label: string; href: string }[] = [
  { icon: 'compass-outline', label: 'Explore', href: '/home' },
  { icon: 'location-outline', label: 'Requests', href: '/home' },
  { icon: 'calendar-outline', label: 'Events', href: '/home' },
  { icon: 'person-outline', label: 'Profile', href: '/profile' },
];

export function NavBar({ active }: { active: number }) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: Math.max(insets.bottom, 10),
        backgroundColor: C.surface,
        borderTopWidth: 1,
        borderTopColor: C.border,
      }}>
      {NAV.map((n, i) => {
        const col = i === active ? C.ink : C.textDim;
        return (
          <Pressable
            key={n.label}
            onPress={() => router.push(n.href as '/home')}
            style={{ flex: 1, alignItems: 'center', gap: 5 }}>
            <Ionicons name={n.icon} size={22} color={col} />
            <Text style={{ color: col, fontSize: 12, fontWeight: '700' }}>{n.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const s = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8, gap: 4 },
  iconBtn: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 17, fontWeight: '700', textAlign: 'center' },
  headerSub: { fontSize: 12, textAlign: 'center' },
  btn: { flexDirection: 'row', gap: 8, height: 52, borderRadius: R.md, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18 },
  btnText: { fontSize: 16, fontWeight: '700' },
  card: { backgroundColor: C.surface, borderRadius: R.lg - 2, borderWidth: 1, borderColor: C.border, padding: 14 },
  label: { color: C.textDim, fontSize: 11, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase' },
  pill: { borderRadius: R.pill, paddingHorizontal: 10, paddingVertical: 4 },
  field: { flexDirection: 'row', alignItems: 'center', backgroundColor: C.surface, borderWidth: 1, borderColor: C.border, borderRadius: R.sm + 2, paddingHorizontal: 14, height: 50 },
});
