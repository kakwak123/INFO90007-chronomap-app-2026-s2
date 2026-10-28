import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import { Btn, Note, P, Screen } from '@/ui/kit';
import { C } from '@/ui/theme';

export default function Rules() {
  const { next } = useLocalSearchParams<{ next?: string }>();
  return (
    <Screen
      title="Before you start"
      subtitle="Community rules & safety"
      footer={<Btn label="I agree and continue" onPress={() => router.replace((next ?? '/rally') as '/rally')} />}>
      <P>
        ChronoMap 3D is a community record of public places. These apply every time you host or join a session, and to everyone in
        it — including people you have never met.
      </P>
      <Note icon="walk-outline" title="Mind your surroundings">
        Stay aware of traffic and other people. Never step onto roads or into restricted areas for a better angle.
      </Note>
      <Note icon="eye-off-outline" title="Respect privacy">
        Do not target people or private property. Faces and licence plates are detected and blurred before reconstruction.
      </Note>
      <Note icon="people-outline" title="Treat strangers well">
        Sessions mix people who have not met. Harassment removes you from the platform. You can report or block anyone, mid-session.
      </Note>
      <Note icon="location-outline" title="Be on site">
        Sessions verify your location. You cannot join a capture window from outside the landmark radius.
      </Note>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Ionicons name="checkbox" size={24} color={C.ink} />
        <Text style={{ color: C.text, flex: 1, fontSize: 14 }}>I have read and agree to the community rules.</Text>
      </View>
    </Screen>
  );
}
