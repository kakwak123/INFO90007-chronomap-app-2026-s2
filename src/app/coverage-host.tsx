import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { Avatar, Btn, Card, Label, Radar, Screen, Stat } from '@/ui/kit';
import { HOST_DOTS, HOST_PEOPLE, NUDGES } from '@/ui/mock';
import { C, R } from '@/ui/theme';

/** The host's live view during the window: who is idle, who is duplicating, and a way to fix it. */
export default function CoverageHost() {
  return (
    <Screen
      title="Coverage · host"
      subtitle="Window 3:42 remaining"
      footer={
        <>
          <Pressable
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, height: 52, borderRadius: R.md, backgroundColor: C.amber }}>
            <Ionicons name="mic" size={20} color={C.onInk} />
            <Text style={{ color: C.onInk, fontSize: 16, fontWeight: '700' }}>Hold to talk to all 4</Text>
          </Pressable>
          <Btn label="End window early" variant="secondary" onPress={() => router.replace('/processing')} />
        </>
      }>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Stat value="128" label="photos" />
        <Stat value="4" label="capturing" />
        <Stat value="68%" label="covered" />
      </View>

      <View style={{ alignItems: 'center' }}>
        <Radar size={190} dots={HOST_DOTS} people={HOST_PEOPLE} />
      </View>

      <Label>Needs a nudge</Label>
      {NUDGES.map((n) => (
        <Card key={n.handle} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 10 }}>
          <Avatar initial={n.initial} size={30} />
          <View style={{ flex: 1, gap: 1 }}>
            <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{n.handle}</Text>
            <Text style={{ color: C.textDim, fontSize: 12 }}>{n.detail}</Text>
          </View>
          <Btn label={n.action} small />
        </Card>
      ))}
    </Screen>
  );
}
