import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { Bar, Btn, Card, H, Note, P, Screen } from '@/ui/kit';
import { C } from '@/ui/theme';

const STEPS = [
  { label: 'Uploaded 128 photos from 4 people', done: true },
  { label: 'Quality and overlap checks', done: true },
  { label: 'Blurring faces and licence plates', done: true },
  { label: 'Reconstructing the 3D model', done: false },
  { label: 'Scoring each contribution', done: false },
];

export default function Processing() {
  return (
    <Screen
      back={false}
      title="Session complete"
      subtitle="Royal Melbourne Hospital"
      footer={<Btn label="Preview result" onPress={() => router.replace('/results')} />}>
      <View style={{ alignItems: 'center', gap: 10, paddingTop: 12 }}>
        <View style={{ width: 124, height: 124, borderRadius: 62, borderWidth: 3, borderColor: C.ink, backgroundColor: C.inkSoft, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="cube-outline" size={58} color={C.ink} />
        </View>
        <H>Building your ChronoMap</H>
        <P style={{ textAlign: 'center' }}>You can close the app — we will notify you.</P>
      </View>

      <Bar pct={0.62} />

      <Card style={{ gap: 14 }}>
        {STEPS.map((s) => (
          <View key={s.label} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Ionicons name={s.done ? 'checkmark-circle' : 'time-outline'} size={20} color={s.done ? C.success : C.textDim} />
            <Text style={{ color: s.done ? C.text : C.textDim, fontSize: 15, flex: 1 }}>{s.label}</Text>
          </View>
        ))}
      </Card>

      <Note icon="shield-checkmark-outline" title="Privacy pass runs before reconstruction">
        Faces and plates are removed from the source photos, not just the final model. Photos centred on people are discarded
        entirely.
      </Note>
    </Screen>
  );
}
