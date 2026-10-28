import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { Btn, Card, Label, NavBar, Pill, Screen, type IconName } from '@/ui/kit';
import { C } from '@/ui/theme';

const EARLIER: { icon: IconName; title: string; body: string; when: string }[] = [
  { icon: 'cube-outline', title: 'Your Royal Melbourne Hospital model is ready', body: '3 contributors · 128 photos', when: '2 h ago' },
  { icon: 'chatbubble-ellipses-outline', title: '@mapfox replied to your capture request', body: '“The west beds are best lit around 6pm”', when: '5 h ago' },
  { icon: 'ribbon-outline', title: 'You earned the Golden Hour badge', body: 'Captured 3 landmarks at sunrise', when: 'Yesterday' },
  { icon: 'people-outline', title: '@dhiraj_s joined a rally you started', body: 'State Library Victoria', when: 'Yesterday' },
];

export default function Notifications() {
  return (
    <Screen title="Notifications" nav={<NavBar active={0} />}>
      <Label>Happening now</Label>

      {/* The rally ping: distributed demand turning into a co-located session. */}
      <Card tone="amber" style={{ gap: 10 }}>
        <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
          <Ionicons name="notifications" size={24} color={C.amber} />
          <View style={{ flex: 1, gap: 3 }}>
            <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>A rally is forming at Melbourne Museum</Text>
            <Text style={{ color: C.textDim, fontSize: 13, lineHeight: 19 }}>
              4 people nearby want this captured. Capture starts once 4 are on site.
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Pill text="2 of 4 joined" tone="live" />
          <Text style={{ color: C.textDim, fontSize: 12 }}>expires in 12 min</Text>
          <View style={{ flex: 1 }} />
          <Btn label="Join rally" small onPress={() => router.push('/rally')} />
        </View>
      </Card>

      <Card tone="ink" style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        <Ionicons name="location" size={24} color={C.ink} />
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>You&apos;re at Flinders Street Station</Text>
          <Text style={{ color: C.textDim, fontSize: 13 }}>Nobody has captured this in summer</Text>
        </View>
        <Btn label="Host" small onPress={() => router.push('/create')} />
      </Card>

      <Label>Earlier</Label>
      {EARLIER.map((n) => (
        <Card key={n.title} style={{ flexDirection: 'row', gap: 12 }}>
          <Ionicons name={n.icon} size={22} color={C.textDim} />
          <View style={{ flex: 1, gap: 2 }}>
            <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{n.title}</Text>
            <Text style={{ color: C.textDim, fontSize: 13 }}>{n.body}</Text>
            <Text style={{ color: C.textDim, fontSize: 12 }}>{n.when}</Text>
          </View>
        </Card>
      ))}
    </Screen>
  );
}
