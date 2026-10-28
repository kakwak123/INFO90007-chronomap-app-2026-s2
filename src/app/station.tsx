import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { Avatar, Btn, Card, H2, Note, Radar, Screen } from '@/ui/kit';
import { STATION_DOTS } from '@/ui/mock';
import { C } from '@/ui/theme';

/** What the host's assignment looks like from the other side. */
export default function Station() {
  return (
    <Screen
      title="Royal Melbourne Hospital"
      subtitle="Briefing · 4 on site"
      footer={<Btn label="I'm in position" onPress={() => router.replace('/capture')} />}>
      <Card tone="amber" style={{ gap: 8, paddingVertical: 18 }}>
        <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
          <Ionicons name="navigate" size={30} color={C.amber} />
          <View style={{ flex: 1, gap: 2 }}>
            <H2>You: the north-east arch</H2>
            <Text style={{ color: C.textDim, fontSize: 13 }}>15 m away · walk to the marked spot</Text>
          </View>
        </View>
        <Text style={{ color: C.textDim, fontSize: 13, lineHeight: 19 }}>
          @mapfox posted you here because nobody is covering that side. Stay roughly on your spot for the whole window.
        </Text>
      </Card>

      <View style={{ alignItems: 'center' }}>
        <Radar size={200} dots={STATION_DOTS} />
      </View>

      <Card style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Avatar initial="M" size={34} tone="amber" />
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>@mapfox is hosting</Text>
          <Text style={{ color: C.textDim, fontSize: 13 }}>12 captures · joined 2024</Text>
        </View>
        <Ionicons name="mic-outline" size={22} color={C.ink} />
      </Card>

      {/* Designing around stranger awkwardness rather than assuming it away. */}
      <Note icon="chatbubble-ellipses-outline" title="You do not have to talk">
        If speaking up with strangers feels awkward, send a one-tap callout instead. The host can also move you without a word.
      </Note>
    </Screen>
  );
}
