import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { C } from './theme';

export type IconName = React.ComponentProps<typeof Ionicons>['name'];

export function Screen({
  title,
  subtitle,
  back = true,
  scroll = true,
  footer,
  right,
  children,
}: {
  title?: string;
  subtitle?: string;
  back?: boolean;
  scroll?: boolean;
  footer?: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  const insets = useSafeAreaInsets();
  const body = scroll ? (
    <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 24, gap: 16 }} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  ) : (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>{children}</View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: C.bg, paddingTop: insets.top }}>
      {(title || back || right) && (
        <View style={s.header}>
          {back ? (
            <Pressable onPress={() => router.back()} hitSlop={12} style={s.iconBtn}>
              <Ionicons name="arrow-back" size={22} color={C.text} />
            </Pressable>
          ) : (
            <View style={s.iconBtn} />
          )}
          <View style={{ flex: 1 }}>
            {title ? <Text style={s.headerTitle}>{title}</Text> : null}
            {subtitle ? <Text style={s.headerSub}>{subtitle}</Text> : null}
          </View>
          {right ?? <View style={s.iconBtn} />}
        </View>
      )}
      <View style={{ flex: 1 }}>{body}</View>
      {footer ? (
        <View style={{ padding: 20, paddingBottom: Math.max(insets.bottom, 16), gap: 10 }}>{footer}</View>
      ) : (
        <View style={{ height: insets.bottom }} />
      )}
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
}: {
  label: string;
  onPress?: () => void;
  icon?: IconName;
  variant?: 'primary' | 'secondary' | 'ghost';
  style?: ViewStyle;
  small?: boolean;
}) {
  const primary = variant === 'primary';
  const fg = primary ? C.onInk : C.text;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        s.btn,
        small && { height: 36, borderRadius: 8, paddingHorizontal: 14 },
        primary && { backgroundColor: C.ink },
        variant === 'secondary' && { backgroundColor: C.surface, borderWidth: 1.5, borderColor: C.ink },
        { opacity: pressed ? 0.7 : 1 },
        style,
      ]}>
      {icon ? <Ionicons name={icon} size={small ? 15 : 18} color={fg} /> : null}
      <Text style={[s.btnText, { color: fg }, small && { fontSize: 13 }]}>{label}</Text>
    </Pressable>
  );
}

export function Card({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[s.card, style]}>{children}</View>;
}

export function H({ children, style }: { children: React.ReactNode; style?: TextStyle }) {
  return <Text style={[{ color: C.text, fontSize: 26, fontWeight: '800' }, style]}>{children}</Text>;
}

export function P({ children, style }: { children: React.ReactNode; style?: TextStyle }) {
  return <Text style={[{ color: C.textDim, fontSize: 15, lineHeight: 22 }, style]}>{children}</Text>;
}

export function Label({ children }: { children: React.ReactNode }) {
  return <Text style={s.label}>{children}</Text>;
}

export function Avatar({ initial, size = 34, filled = false }: { initial: string; size?: number; filled?: boolean }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: filled ? C.ink : C.surface,
        borderWidth: 1.5,
        borderColor: C.ink,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ color: filled ? C.onInk : C.ink, fontWeight: '800', fontSize: size * 0.4 }}>{initial}</Text>
    </View>
  );
}

export function Pill({ text, filled }: { text: string; filled?: boolean }) {
  return (
    <View style={[s.pill, filled && { backgroundColor: C.ink }]}>
      <Text style={{ color: filled ? C.onInk : C.text, fontSize: 12, fontWeight: '700' }}>{text}</Text>
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

export function Thumb({ size = 46, icon = 'image-outline' }: { size?: number; icon?: IconName }) {
  return (
    <View style={{ width: size, height: size, borderRadius: 8, backgroundColor: C.placeholder, alignItems: 'center', justifyContent: 'center' }}>
      <Ionicons name={icon} size={size * 0.45} color={C.textDim} />
    </View>
  );
}

export function Note({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  return (
    <Card style={{ flexDirection: 'row', gap: 12, backgroundColor: C.surfaceAlt, borderColor: C.border }}>
      <Ionicons name={icon} size={22} color={C.text} />
      <View style={{ flex: 1, gap: 2 }}>
        <Text style={{ color: C.text, fontWeight: '700', fontSize: 14 }}>{title}</Text>
        <Text style={{ color: C.textDim, fontSize: 13, lineHeight: 19 }}>{children}</Text>
      </View>
    </Card>
  );
}

const s = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8, gap: 4 },
  iconBtn: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { color: C.text, fontSize: 17, fontWeight: '700', textAlign: 'center' },
  headerSub: { color: C.textDim, fontSize: 12, textAlign: 'center' },
  btn: { flexDirection: 'row', gap: 8, height: 52, borderRadius: 12, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18 },
  btnText: { fontSize: 16, fontWeight: '700' },
  card: { backgroundColor: C.surface, borderRadius: 14, borderWidth: 1, borderColor: C.border, padding: 14 },
  label: { color: C.textDim, fontSize: 12, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase' },
  pill: { borderWidth: 1.5, borderColor: C.ink, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 3 },
  field: { flexDirection: 'row', alignItems: 'center', backgroundColor: C.surface, borderWidth: 1, borderColor: C.border, borderRadius: 10, paddingHorizontal: 14, height: 50 },
});
