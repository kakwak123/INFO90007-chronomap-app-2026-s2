import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';

import { Btn, H, P, Screen } from '@/ui/kit';
import { C, R } from '@/ui/theme';

const STEPS = [
  {
    icon: 'people-outline',
    title: 'Gather at a landmark',
    body: 'Join people who are already at the same place - usually strangers. Find a live session nearby, scan the on-site QR code, or enter a four-letter code.',
  },
  {
    icon: 'navigate-outline',
    title: 'Take a station',
    body: 'The host reads a live coverage radar and posts each person to a side nobody has. You get told where to stand, so four phones behave like one camera rig.',
  },
  {
    icon: 'camera-outline',
    title: 'Capture in one window',
    body: 'Gathering is untimed. Once enough people are on site the host starts a five minute window, so every photo lands in near-identical light.',
  },
  {
    icon: 'cube-outline',
    title: 'Keep your souvenir',
    body: 'Photos become a 3D model. Every contributor is credited - and the landmark stays open, because it is not finished until every season and light is captured.',
  },
] as const;

export default function Welcome() {
  const [i, setI] = useState(0);
  const step = STEPS[i];
  const last = i === STEPS.length - 1;
  return (
    <Screen
      back={false}
      scroll={false}
      right={<Btn label="Skip" variant="ghost" small onPress={() => router.replace('/home')} />}
      footer={<Btn label={last ? 'Get started' : 'Next'} onPress={() => (last ? router.replace('/home') : setI(i + 1))} />}>
      <Text style={{ color: C.textDim, fontWeight: '700', letterSpacing: 1, fontSize: 11 }}>HOW CHRONOMAP WORKS</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20 }}>
        <View style={{ width: '100%', height: 240, borderRadius: R.lg + 2, backgroundColor: C.inkSoft, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name={step.icon} size={92} color={C.ink} />
        </View>
        <H style={{ textAlign: 'center' }}>{step.title}</H>
        <P style={{ textAlign: 'center' }}>{step.body}</P>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {STEPS.map((_, k) => (
            <View key={k} style={{ width: k === i ? 24 : 8, height: 8, borderRadius: 4, backgroundColor: k === i ? C.ink : C.borderStrong }} />
          ))}
        </View>
      </View>
    </Screen>
  );
}
