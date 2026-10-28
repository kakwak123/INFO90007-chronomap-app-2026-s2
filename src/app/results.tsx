import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { Avatar, Bar, Btn, Card, Label, Screen, Stat } from '@/ui/kit';
import { SCORES } from '@/ui/mock';
import { C, R } from '@/ui/theme';

export default function Results() {
  return (
    <Screen
      back={false}
      title="Your ChronoMap is ready"
      subtitle="Royal Melbourne Hospital · golden hour"
      footer={
        <>
          <Btn label="Share this model" icon="share-outline" onPress={() => router.push('/share')} />
          <Btn label="Open interactive model" icon="cube-outline" variant="secondary" onPress={() => router.push('/landmark')} />
          <Btn label="Done" variant="ghost" onPress={() => router.replace('/home')} />
        </>
      }>
      <View style={{ height: 165, borderRadius: R.lg - 2, backgroundColor: C.placeholder, alignItems: 'center', justifyContent: 'center', gap: 6 }}>
        <Ionicons name="cube-outline" size={70} color={C.textDim} />
        <Text style={{ color: C.textDim, fontSize: 12 }}>Drag to rotate</Text>
      </View>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Stat value="128" label="photos" />
        <Stat value="4" label="people" />
        <Stat value="5:00" label="window" />
      </View>

      {/* Ties the session back to the archive — the reason to come back. */}
      <Card tone="good" style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Ionicons name="partly-sunny-outline" size={20} color={C.success} />
        <Text style={{ color: C.text, fontSize: 13, flex: 1 }}>Golden hour added — this landmark now has 2 of 6 conditions.</Text>
      </Card>

      <Label>Contribution scores</Label>
      {SCORES.map((m) => (
        <Card key={m.handle} style={{ gap: 8, paddingVertical: 11 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Avatar initial={m.initial} size={30} tone={m.host ? 'amber' : 'filled'} />
            <View style={{ flex: 1, gap: 1 }}>
              <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{m.handle}</Text>
              <Text style={{ color: C.textDim, fontSize: 12 }}>
                {m.photos} photos · {m.badge}
              </Text>
            </View>
            <Text style={{ color: C.text, fontWeight: '800', fontSize: 20 }}>{m.score}</Text>
          </View>
          <Bar pct={m.score / 100} />
        </Card>
      ))}

      <Text style={{ color: C.textDim, fontSize: 12, textAlign: 'center' }}>
        Score weights how much new surface your photos added, not how many you took.
      </Text>
    </Screen>
  );
}
