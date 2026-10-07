import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { Avatar, Btn, Note, Pill, Screen } from '@/ui/kit';
import { MEMBERS } from '@/ui/mock';
import { C } from '@/ui/theme';

const SIZE = 280;
const R = SIZE / 2;
// angle in degrees (0 = north, clockwise), ring 0..1, covered?
const DOTS = [
  { a: 0, r: 0.8, ok: true },
  { a: 55, r: 0.8, ok: true },
  { a: 100, r: 0.8, ok: false },
  { a: 150, r: 0.55, ok: true },
  { a: 215, r: 0.8, ok: true },
  { a: 290, r: 0.8, ok: false },
];

export default function Coverage() {
  const [who, setWho] = useState(0);
  return (
    <Screen
      title="Coverage Guide"
      footer={
        <>
          <Btn label="Back to Camera" variant="secondary" onPress={() => router.back()} />
          <Text style={{ color: C.textDim, textAlign: 'center', fontSize: 12 }}>Session ends in 3:42</Text>
        </>
      }>
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
        {MEMBERS.map((m, i) => (
          <Pressable key={m.name} onPress={() => setWho(i)}>
            <Avatar initial={m.initial} filled={who === i} size={38} />
          </Pressable>
        ))}
      </View>
      <View style={{ alignItems: 'center' }}>
        <Pill text="Fewer photos on this side →" />
      </View>

      <View style={{ alignItems: 'center', marginVertical: 4 }}>
        <View style={{ width: SIZE, height: SIZE, alignItems: 'center', justifyContent: 'center' }}>
          {[1, 0.66, 0.33].map((k) => (
            <View key={k} style={{ position: 'absolute', width: SIZE * k, height: SIZE * k, borderRadius: R * k, borderWidth: 1, borderColor: C.border, backgroundColor: k === 1 ? C.surface : 'transparent' }} />
          ))}
          <Text style={{ position: 'absolute', top: 6, color: C.textDim, fontSize: 11, fontWeight: '700' }}>N</Text>
          <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: C.ink, borderWidth: 3, borderColor: C.surface }} />
          {DOTS.map((d, i) => {
            const rad = (d.a * Math.PI) / 180;
            return (
              <View
                key={i}
                style={{
                  position: 'absolute',
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  backgroundColor: d.ok ? C.ink : C.surface,
                  borderWidth: 2,
                  borderColor: C.ink,
                  transform: [{ translateX: Math.sin(rad) * R * d.r }, { translateY: -Math.cos(rad) * R * d.r }],
                }}
              />
            );
          })}
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 22 }}>
        <Legend filled text="Well covered" />
        <Legend text="Try photos here" />
      </View>
      <Note icon="chatbubble-ellipses-outline" title="Tell each other">
        This is a guide, not proof of coverage. Call out thin sides to the group so someone can move across and fill them in.
      </Note>
    </Screen>
  );
}

function Legend({ filled, text }: { filled?: boolean; text: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
      <View style={{ width: 12, height: 12, borderRadius: 6, borderWidth: 2, borderColor: C.ink, backgroundColor: filled ? C.ink : C.surface }} />
      <Text style={{ color: C.textDim, fontSize: 12 }}>{text}</Text>
    </View>
  );
}
