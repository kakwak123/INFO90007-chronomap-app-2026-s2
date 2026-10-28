import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { Bar, Btn, Card, Label, P, Pill, Screen } from '@/ui/kit';
import { CONDITIONS } from '@/ui/mock';
import { C, R } from '@/ui/theme';

/**
 * The archive view - what makes the "Chrono" in ChronoMap do any work.
 *
 * It is also the structural reason the task needs a crowd: each condition requires its own
 * synchronised, co-located session, so no single group can ever finish a landmark alone.
 */
export default function Landmark() {
  const done = CONDITIONS.filter((c) => c.done).length;
  const total = 6;

  return (
    <Screen
      title="Royal Melbourne Hospital"
      subtitle="Parkville · 3 captures"
      footer={
        <>
          <Btn label="Request a rain capture" onPress={() => router.push('/request-detail')} />
          <Btn label="Compare the two models" variant="secondary" />
        </>
      }>
      <View style={{ height: 140, borderRadius: R.lg - 2, backgroundColor: C.placeholder, alignItems: 'center', justifyContent: 'center', gap: 6 }}>
        <Ionicons name="cube-outline" size={58} color={C.textDim} />
        <Text style={{ color: C.textDim, fontSize: 12 }}>Latest model · golden hour, Oct 2026</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Label>Archive completeness</Label>
        <View style={{ flex: 1 }} />
        <Pill text={`${done} of ${total}`} tone="accent" />
      </View>
      <Bar pct={done / total} color={C.amber} />
      <P style={{ fontSize: 13 }}>
        A place is never “done”. Each condition needs its own synchronised session - which is why no single group can finish a
        landmark alone.
      </P>

      <Label>Conditions</Label>
      {CONDITIONS.map((c) => (
        <Card key={c.name} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 11 }}>
          <Ionicons name={c.icon} size={20} color={c.done ? C.success : C.amber} />
          <View style={{ flex: 1, gap: 1 }}>
            <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{c.name}</Text>
            <Text style={{ color: C.textDim, fontSize: 12 }}>{c.detail}</Text>
          </View>
          <Pill text={c.done ? '✓' : 'Open'} tone={c.done ? 'good' : 'accent'} />
        </Card>
      ))}
    </Screen>
  );
}
