import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { Avatar, Btn, Card, Label, Pill, Screen, Stat } from '@/ui/kit';
import { C, R } from '@/ui/theme';

const THREAD = [
  { i: 'M', handle: '@mapfox', dist: '400 m away', msg: 'The west beds are best lit around 6pm - worth timing a rally for then.' },
  { i: 'Y', handle: '@yongen', dist: '1.1 km away', msg: 'I can bring a second phone so we hit quorum faster.' },
];

export default function RequestDetail() {
  return (
    <Screen
      title="Royal Botanic Gardens"
      subtitle="Capture request"
      footer={
        <>
          <Btn label="I want this captured" icon="thumbs-up-outline" onPress={() => router.push('/rally')} />
          <Btn label="Start a rally here" variant="secondary" onPress={() => router.push('/create')} />
        </>
      }>
      <View style={{ height: 130, borderRadius: R.lg - 2, backgroundColor: C.placeholder, alignItems: 'center', justifyContent: 'center' }}>
        <Ionicons name="image-outline" size={48} color={C.textDim} />
      </View>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Stat value="14" label="want this" />
        <Stat value="1" label="capture" />
        <Stat value="2.1 km" label="away" />
      </View>

      <Label>Conditions still needed</Label>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        <Pill text="Spring ✓" tone="good" />
        {['Summer', 'Golden hour', 'Rain', 'Night'].map((c) => (
          <Pill key={c} text={c} tone="accent" />
        ))}
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Label>Nearby discussion</Label>
        <View style={{ flex: 1 }} />
        <Text style={{ color: C.textDim, fontSize: 12 }}>Sorted by distance</Text>
      </View>
      {THREAD.map((t) => (
        <Card key={t.handle} style={{ flexDirection: 'row', gap: 12 }}>
          <Avatar initial={t.i} size={34} />
          <View style={{ flex: 1, gap: 3 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{t.handle}</Text>
              <Text style={{ color: C.textDim, fontSize: 12 }}>{t.dist}</Text>
            </View>
            <Text style={{ color: C.textDim, fontSize: 13, lineHeight: 19 }}>{t.msg}</Text>
          </View>
        </Card>
      ))}
    </Screen>
  );
}
