import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { Avatar, Btn, Card, Label, Note, Pill, Screen } from '@/ui/kit';
import { MEMBERS } from '@/ui/mock';
import { C } from '@/ui/theme';

export default function Lobby() {
  return (
    <Screen
      title="Royal Melbourne Hospital"
      subtitle="Session lobby"
      footer={
        <>
          <Btn label="Start session" icon="play" onPress={() => router.replace('/capture')} />
          <Btn label="Share session" icon="share-outline" variant="secondary" onPress={() => router.push('/share')} />
        </>
      }>
      <Card style={{ alignItems: 'center', gap: 12, paddingVertical: 20 }}>
        <Label>Session code</Label>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          {'MERF'.split('').map((c, i) => (
            <View key={i} style={{ width: 54, height: 64, borderRadius: 10, backgroundColor: C.bg, borderWidth: 1.5, borderColor: C.ink, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: C.ink, fontSize: 30, fontWeight: '800' }}>{c}</Text>
            </View>
          ))}
        </View>
        <View style={{ width: 92, height: 92, borderRadius: 8, backgroundColor: C.placeholder, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="qr-code" size={70} color={C.ink} />
        </View>
        <Text style={{ color: C.textDim, fontSize: 12 }}>Scan the QR or enter the code to join</Text>
      </Card>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Label>In the lobby · {MEMBERS.length}</Label>
        <Pill text="Window: 5 min" />
      </View>
      <View style={{ gap: 8 }}>
        {MEMBERS.map((m) => (
          <Card key={m.name} style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10 }}>
            <Avatar initial={m.initial} filled={m.you} />
            <Text style={{ color: C.text, fontSize: 16, fontWeight: '600', flex: 1 }}>
              {m.name}
              {m.you ? ' (You)' : ''}
            </Text>
            {m.host ? <Pill text="Host" filled /> : <Ionicons name="checkmark-circle-outline" size={22} color={C.ink} />}
          </Card>
        ))}
      </View>
      <Note icon="walk-outline" title="Stay safe">
        Watch for traffic and other people while you move around the site.
      </Note>
    </Screen>
  );
}
