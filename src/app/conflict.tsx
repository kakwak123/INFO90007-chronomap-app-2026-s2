import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { Btn, Card, P, Pill, Screen, type IconName, type Tone } from '@/ui/kit';
import { C } from '@/ui/theme';

/**
 * A2 feedback: "how is it decided if there are multiple groups taking pictures on [the same
 * landmark]?" - a question the report had no answer to. This is the answer.
 */
const OPTIONS: { icon: IconName; title: string; sub: string; body: string; tag: string; tone: Tone; best?: boolean }[] = [
  {
    icon: 'people-outline',
    title: 'Join their session',
    sub: 'Recommended · 3 people, 3:10 left',
    body: 'Your photos merge into one reconstruction. The coverage radar rebalances the moment you arrive.',
    tag: 'Best coverage',
    tone: 'good',
    best: true,
  },
  {
    icon: 'partly-sunny-outline',
    title: 'Capture a different condition',
    sub: 'Nobody has captured this at night',
    body: 'Same landmark, a condition the archive is still missing. Opens a fresh rally for later.',
    tag: 'Fills a gap',
    tone: 'accent',
  },
  {
    icon: 'time-outline',
    title: 'Queue yours for 3:10',
    sub: 'Starts when theirs closes',
    body: 'Use this only if your group wants a different target.',
    tag: 'Waits',
    tone: 'outline',
  },
];

export default function Conflict() {
  return (
    <Screen
      title="Heads up"
      subtitle="Flinders Street Station"
      footer={
        <>
          <Btn label="Join @kira's session" onPress={() => router.replace('/rally')} />
          <Btn label="Start a separate session anyway" variant="ghost" />
        </>
      }>
      <Card tone="live" style={{ flexDirection: 'row', gap: 12 }}>
        <Ionicons name="warning" size={24} color={C.live} />
        <View style={{ flex: 1, gap: 3 }}>
          <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>Another group is already capturing here</Text>
          <Text style={{ color: C.textDim, fontSize: 13, lineHeight: 19 }}>
            @kira opened a session 2 minutes ago for the same facade, in the same light.
          </Text>
        </View>
      </Card>

      <P>Two overlapping windows split the crowd and produce two thin models instead of one good one.</P>

      {OPTIONS.map((o) => (
        <Card key={o.title} style={[{ gap: 8 }, o.best ? { borderColor: C.ink, borderWidth: 2 } : null]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Ionicons name={o.icon} size={20} color={C.ink} />
            <View style={{ flex: 1, gap: 1 }}>
              <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{o.title}</Text>
              <Text style={{ color: C.textDim, fontSize: 12 }}>{o.sub}</Text>
            </View>
            <Pill text={o.tag} tone={o.tone} />
          </View>
          <Text style={{ color: C.textDim, fontSize: 13, lineHeight: 19 }}>{o.body}</Text>
        </Card>
      ))}
    </Screen>
  );
}
