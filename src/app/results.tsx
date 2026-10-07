import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { Avatar, Btn, Card, Label, Pill, Screen } from '@/ui/kit';
import { SCORES } from '@/ui/mock';
import { C } from '@/ui/theme';

export default function Results() {
  return (
    <Screen
      back={false}
      title="Your ChronoMap is Ready!"
      subtitle="Royal Melbourne Hospital Precinct"
      footer={
        <>
          <Btn label="Share to Social" icon="share-outline" onPress={() => router.push('/share')} />
          <Btn label="View Interactive Model" icon="cube-outline" variant="secondary" />
          <Btn label="Done" variant="ghost" onPress={() => router.replace('/home')} />
        </>
      }>
      <View style={{ height: 210, borderRadius: 14, backgroundColor: C.placeholder, alignItems: 'center', justifyContent: 'center' }}>
        <Ionicons name="cube-outline" size={100} color={C.textDim} />
        <Text style={{ color: C.text, fontWeight: '700', marginTop: 6 }}>3D Model Preview</Text>
        <Text style={{ color: C.textDim, fontSize: 12 }}>Drag to rotate</Text>
      </View>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        {[['128', 'Photos'], ['4', 'People'], ['5:00', 'Window']].map(([v, l]) => (
          <Card key={l} style={{ flex: 1, alignItems: 'center', paddingVertical: 12 }}>
            <Text style={{ color: C.text, fontSize: 20, fontWeight: '800' }}>{v}</Text>
            <Text style={{ color: C.textDim, fontSize: 12 }}>{l}</Text>
          </Card>
        ))}
      </View>

      <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
        <Pill text="Contributor" />
        <Pill text="Host" filled />
        <View style={{ flex: 1 }} />
        {SCORES.map((m) => (
          <Avatar key={m.name} initial={m.initial} size={30} />
        ))}
      </View>

      <Label>Contribution scores</Label>
      <View style={{ gap: 10 }}>
        {SCORES.map((m) => (
          <Card key={m.name} style={{ gap: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Avatar initial={m.initial} filled={m.badge === 'Host'} />
              <View style={{ flex: 1 }}>
                <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{m.name}</Text>
                <Text style={{ color: C.textDim, fontSize: 12 }}>
                  {m.photos} photos · {m.badge}
                </Text>
              </View>
              <Text style={{ color: C.text, fontWeight: '800', fontSize: 18 }}>{m.score}</Text>
            </View>
            <View style={{ height: 6, borderRadius: 3, backgroundColor: C.surfaceAlt }}>
              <View style={{ width: `${m.score}%`, height: 6, borderRadius: 3, backgroundColor: C.ink }} />
            </View>
          </Card>
        ))}
      </View>
      <Text style={{ color: C.textDim, fontSize: 12, textAlign: 'center' }}>
        Scores reflect how many photos you took and how unique they were. Each location can be revisited in other seasons and light.
      </Text>
    </Screen>
  );
}
