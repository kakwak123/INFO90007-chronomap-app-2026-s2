import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { Btn, Field, Note, Screen } from '@/ui/kit';
import { C } from '@/ui/theme';

export default function Create() {
  return (
    <Screen title="Create a session" subtitle="You will be the host" footer={<Btn label="Open the rally" onPress={() => router.replace('/rally')} />}>
      <Field label="Location" value="Royal Melbourne Hospital" icon="location-outline" />
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
        <Ionicons name="navigate-outline" size={14} color={C.ink} />
        <Text style={{ color: C.ink, fontSize: 13, fontWeight: '700' }}>Use my current location</Text>
      </View>
      <Field label="Target" value="Bluestone arch, east entrance" icon="chevron-down" />
      <Field label="Condition to capture" value="Golden hour" icon="partly-sunny-outline" />
      <Field label="Minimum people (quorum)" value="4 people on site" icon="chevron-down" />
      <Field label="Capture window" value="5 minutes" icon="chevron-down" />

      {/* The answer to "what if people are too far away, and there's a time limit?" */}
      <Note icon="time-outline" title="The clock starts when you do">
        Gathering is untimed. The 5 minute window only begins once quorum is met and you press start, so nobody is racing across
        the site against the timer.
      </Note>
      <Note icon="qr-code-outline" title="Recruiting strangers">
        You get a 4-letter code and a QR poster. Anyone inside the radius can also see this session under Nearby.
      </Note>
    </Screen>
  );
}
