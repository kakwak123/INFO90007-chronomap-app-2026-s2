import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, View } from 'react-native';

import { Avatar, Btn, LegendDot, Note, Pill, Radar, Screen } from '@/ui/kit';
import { COVERAGE_DOTS } from '@/ui/mock';
import { C } from '@/ui/theme';

const PEOPLE = [
  { i: 'M', tone: 'amber' as const },
  { i: 'J', tone: 'filled' as const },
  { i: 'D', tone: 'default' as const },
  { i: 'A', tone: 'default' as const },
];

export default function Coverage() {
  const [who, setWho] = useState(1);
  return (
    <Screen
      title="Coverage guide"
      subtitle="Window 3:42 remaining"
      footer={<Btn label="Back to camera" onPress={() => router.back()} />}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
        {PEOPLE.map((p, i) => (
          <Pressable key={p.i} onPress={() => setWho(i)}>
            <Avatar initial={p.i} size={38} tone={i === who ? 'filled' : p.tone} />
          </Pressable>
        ))}
      </View>

      <View style={{ alignItems: 'center' }}>
        <Pill text="Fewer photos on the west side" tone="accent" />
      </View>

      <View style={{ alignItems: 'center' }}>
        <Radar size={230} dots={COVERAGE_DOTS} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 22 }}>
        <LegendDot color={C.success} text="Well covered" />
        <LegendDot color={C.borderStrong} text="Try photos here" hollow />
      </View>

      <Note icon="chatbubble-ellipses-outline" title="This is a guide, not proof">
        Positions are estimated from your phones. Call a thin side out to the group so somebody can walk across and fill it.
      </Note>
    </Screen>
  );
}
