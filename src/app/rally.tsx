import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { Avatar, Bar, Btn, Card, Label, Pill, Screen } from '@/ui/kit';
import { ON_SITE, ON_THE_WAY } from '@/ui/mock';
import { C, R } from '@/ui/theme';

/**
 * The quorum gate. This screen is the crowdsourcing argument made visual: the session is not a
 * group of friends who arrived together, it is strangers accumulating until there are enough of
 * them — and the capture clock does not exist yet.
 */
export default function Rally() {
  const onSite = ON_SITE.length;
  const needed = 4;

  return (
    <Screen
      title="Melbourne Museum"
      subtitle="Rally forming · golden hour"
      footer={
        <>
          <Btn label={`Start capture — needs ${needed} on site`} disabled onPress={() => router.replace('/briefing')} />
          <Btn label="Share rally link" icon="share-outline" variant="secondary" onPress={() => router.push('/share')} />
        </>
      }>
      <Card style={{ gap: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Text style={{ color: C.text, fontSize: 30, fontWeight: '800', letterSpacing: -0.6 }}>
            {onSite} of {needed}
          </Text>
          <Text style={{ color: C.textDim, fontSize: 15 }}>on site</Text>
          <View style={{ flex: 1 }} />
          <Pill text="Expires 12:04" tone="live" />
        </View>
        <Bar pct={onSite / needed} />
        <Text style={{ color: C.textDim, fontSize: 13, lineHeight: 19 }}>
          Capture begins when {needed} people are inside the radius. Nobody is on a clock until then.
        </Text>
      </Card>

      <View style={{ height: 96, borderRadius: R.lg - 2, backgroundColor: C.inkSoft, alignItems: 'center', justifyContent: 'center', gap: 6 }}>
        <Ionicons name="location" size={30} color={C.ink} />
        <Text style={{ color: C.ink, fontSize: 12, fontWeight: '600' }}>Everyone must be inside an 80 m radius</Text>
      </View>

      <Label>On site · ready</Label>
      {ON_SITE.map((p) => (
        <Card key={p.handle} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Avatar initial={p.initial} size={34} tone={p.host ? 'amber' : 'filled'} />
          <View style={{ flex: 1, gap: 2 }}>
            <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{p.handle}</Text>
            <Text style={{ color: C.textDim, fontSize: 13 }}>{p.detail}</Text>
          </View>
          <Ionicons name="checkmark-circle" size={22} color={C.success} />
        </Card>
      ))}

      <Label>On the way</Label>
      {ON_THE_WAY.map((p) => (
        <Card key={p.handle} style={{ flexDirection: 'row', alignItems: 'center', gap: 12, opacity: 0.65 }}>
          <Avatar initial={p.initial} size={34} />
          <View style={{ flex: 1, gap: 2 }}>
            <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{p.handle}</Text>
            <Text style={{ color: C.textDim, fontSize: 13 }}>{p.detail}</Text>
          </View>
          <Ionicons name="walk-outline" size={22} color={C.textDim} />
        </Card>
      ))}
    </Screen>
  );
}
