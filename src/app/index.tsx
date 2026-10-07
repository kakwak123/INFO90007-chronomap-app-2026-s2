import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';

import { Btn, H, P, Screen } from '@/ui/kit';
import { C } from '@/ui/theme';

const STEPS = [
  { icon: 'people-outline', title: 'Gather at a landmark', body: 'Join or host a session with people who are at the same place. Find one nearby, scan an on-site QR code or enter a 4-letter code.' },
  { icon: 'camera-outline', title: 'Capture in one window', body: 'The host starts a short capture window. Everyone photographs the landmark from different angles at about the same time, so the scene is close to a single frozen instant.' },
  { icon: 'radio-outline', title: 'Cover every side', body: 'The coverage guide shows roughly where photos were taken and which sides look thin, so the group can fill the gaps together.' },
  { icon: 'cube-outline', title: 'Keep your 3D souvenir', body: 'Photos are stitched into a 3D model. Every contributor is credited, and you can share it. Heritage, kept by the community.' },
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
      <Text style={{ color: C.textDim, fontWeight: '700', letterSpacing: 1 }}>HOW CHRONOMAP WORKS</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20 }}>
        <View style={{ width: 200, height: 200, borderRadius: 16, backgroundColor: C.placeholder, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name={step.icon} size={84} color={C.textDim} />
        </View>
        <H style={{ textAlign: 'center' }}>{step.title}</H>
        <P style={{ textAlign: 'center', paddingHorizontal: 8 }}>{step.body}</P>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {STEPS.map((_, k) => (
            <View key={k} style={{ width: k === i ? 22 : 8, height: 8, borderRadius: 4, backgroundColor: k === i ? C.ink : C.border }} />
          ))}
        </View>
      </View>
    </Screen>
  );
}
