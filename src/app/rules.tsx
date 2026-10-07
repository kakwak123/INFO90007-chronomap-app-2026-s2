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
      footer={<Btn label="I agree and continue" onPress={() => router.replace((next ?? '/lobby') as '/lobby')} />}>
      <P>ChronoMap 3D is a community record of public places. Please follow these guidelines every time you create or join a session.</P>
      <Note icon="walk-outline" title="Mind your safety">
        Stay aware of your surroundings. Don't wander onto roads or into restricted areas to get a better angle.
      </Note>
      <Note icon="eye-off-outline" title="Respect privacy">
        Don't target people or private property. Faces and licence plates are automatically detected and blurred, and removed from the model where possible.
      </Note>
      <Note icon="people-outline" title="Don't obstruct others">
        Keep footpaths, entrances and ramps clear while you capture.
      </Note>
      <Note icon="location-outline" title="Be on site">
        Sessions need you to be at the location, and an internet connection to sync and upload photos.
      </Note>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Ionicons name="checkbox" size={24} color={C.ink} />
        <Text style={{ color: C.text, flex: 1, fontSize: 14 }}>I have read and agree to the community rules.</Text>
      </View>
    </Screen>
  );
}
