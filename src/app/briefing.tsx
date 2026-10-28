import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { Avatar, Btn, Card, Label, LegendDot, Pill, Radar, Screen } from '@/ui/kit';
import { HOST_DOTS, HOST_PEOPLE, STATIONS } from '@/ui/mock';
import { C } from '@/ui/theme';

/**
 * Host briefing — the screen that gives the host role actual powers.
 * A2 feedback: "Who is the host? Is this person just there monitoring the entire session?"
 */
export default function Briefing() {
  return (
    <Screen
      title="Royal Melbourne Hospital"
      subtitle="Briefing · you are host"
      footer={
        <>
          <Btn label="Send assignments & start 5:00" onPress={() => router.replace('/capture')} />
          <Btn label="Open voice channel" icon="mic-outline" variant="secondary" />
        </>
      }>
      <Card tone="amber" style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <Ionicons name="radio-outline" size={20} color={C.amber} />
        <Text style={{ color: C.text, fontSize: 13, flex: 1 }}>Tap a thin sector, then a person, to post them there.</Text>
      </Card>

      <View style={{ alignItems: 'center' }}>
        <Radar size={200} dots={HOST_DOTS} people={HOST_PEOPLE} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 18 }}>
        <LegendDot color={C.success} text="Covered" />
        <LegendDot color={C.borderStrong} text="Thin — assign" hollow />
        <LegendDot color={C.amber} text="Host" />
      </View>

      <Label>Stations</Label>
      {STATIONS.map((p) => (
        <Card key={p.handle} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 10 }}>
          <Avatar initial={p.initial} size={30} tone={p.host ? 'amber' : p.you ? 'filled' : 'default'} />
          <Text style={{ color: C.text, fontWeight: '700', fontSize: 15, flex: 1 }}>{p.handle}</Text>
          <Pill text={p.station} tone={p.tone} />
          <Ionicons name="chevron-forward" size={18} color={C.textDim} />
        </Card>
      ))}
    </Screen>
  );
}
