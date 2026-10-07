import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { Btn, Card, H, Note, P, Screen } from '@/ui/kit';
import { C } from '@/ui/theme';

const STEPS = [
  { label: 'Uploaded 128 photos', state: 'done' },
  { label: 'Quality checks', state: 'done' },
  { label: 'Blurring faces and licence plates', state: 'done' },
  { label: 'Reconstructing 3D model', state: 'active' },
] as const;

export default function Processing() {
  return (
    <Screen
      back={false}
      title="Session complete"
      scroll
      footer={<Btn label="Preview result" onPress={() => router.replace('/results')} />}>
      <View style={{ alignItems: 'center', gap: 10, paddingTop: 10 }}>
        <View style={{ width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: C.ink, alignItems: 'center', justifyContent: 'center', backgroundColor: C.surface }}>
          <Ionicons name="cube-outline" size={56} color={C.ink} />
        </View>
        <H style={{ fontSize: 22 }}>Building your ChronoMap</H>
        <P style={{ textAlign: 'center' }}>You can close the app. We'll let you know when it's ready.</P>
      </View>
      <View style={{ height: 8, borderRadius: 4, backgroundColor: C.surfaceAlt }}>
        <View style={{ width: '62%', height: 8, borderRadius: 4, backgroundColor: C.ink }} />
      </View>
      <Card style={{ gap: 14 }}>
        {STEPS.map((s) => (
          <View key={s.label} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Ionicons name={s.state === 'done' ? 'checkmark-circle' : 'ellipse-outline'} size={22} color={s.state === 'done' ? C.ink : C.textDim} />
            <Text style={{ color: s.state === 'done' ? C.text : C.textDim, fontSize: 15, fontWeight: s.state === 'active' ? '700' : '400' }}>{s.label}</Text>
          </View>
        ))}
      </Card>
      <Note icon="wifi-outline" title="Needs a connection">
        Photos are sent to a server to be stitched into 3D, so keep an internet connection until the upload finishes.
      </Note>
    </Screen>
  );
}
