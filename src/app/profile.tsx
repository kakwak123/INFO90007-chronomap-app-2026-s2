import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { Avatar, H, Label, NavBar, Note, Pill, Screen, Stat } from '@/ui/kit';
import { BADGES, SOUVENIRS } from '@/ui/mock';
import { C, R } from '@/ui/theme';

/**
 * A2 feedback, verbatim: "So there's a profile for users? The final iteration should contain
 * these, especially if it's outlined as important features of the product."
 *
 * Reputation is load-bearing here rather than decorative - it is what makes a stranger worth
 * standing next to, and it is the app's answer to "why would I come back".
 */
export default function Profile() {
  return (
    <Screen title="@you" subtitle="Joined March 2026" nav={<NavBar active={3} />}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
        <Avatar initial="J" size={62} tone="filled" />
        <View style={{ flex: 1, gap: 6 }}>
          <H>John K.</H>
          <View style={{ flexDirection: 'row', gap: 6 }}>
            <Pill text="Trusted host" tone="good" />
            <Pill text="14 sessions" tone="outline" />
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Stat value="14" label="sessions" />
        <Stat value="9" label="hosted" />
        <Stat value="512" label="photos" />
        <Stat value="4.9" label="rating" />
      </View>

      <Note icon="shield-checkmark-outline" title="Why reputation matters here">
        You are joining sessions with strangers. A visible history of real contributions is what makes a stranger worth standing
        next to for five minutes.
      </Note>

      <Label>Badges</Label>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        {BADGES.map((b) => (
          <Pill key={b.label} text={b.label} tone={b.tone} />
        ))}
      </View>

      <Label>Your souvenirs</Label>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        {SOUVENIRS.map((s) => (
          <View key={s.name} style={{ flex: 1, gap: 6 }}>
            <View style={{ height: 86, borderRadius: R.sm + 2, backgroundColor: C.placeholder, alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="cube-outline" size={32} color={C.textDim} />
            </View>
            <Text style={{ color: C.text, fontSize: 12, fontWeight: '600' }}>{s.name}</Text>
            <Text style={{ color: C.textDim, fontSize: 12 }}>{s.cond}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
}
