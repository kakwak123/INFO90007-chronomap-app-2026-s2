import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { Btn, Field, P, Screen } from '@/ui/kit';
import { C } from '@/ui/theme';

export default function Create() {
  return (
    <Screen title="Create a session" footer={<Btn label="Create" onPress={() => router.replace('/lobby')} />}>
      <Field label="Date and time *" value="Today, 2:30 PM" icon="calendar-outline" />
      <View style={{ gap: 6 }}>
        <Field label="Location *" value="Royal Melbourne Hospital, Parkville" icon="location-outline" />
        <Text style={{ color: C.ink, fontSize: 13, fontWeight: '700' }}>Use my current location</Text>
      </View>
      <Field label="Duration" value="5 minutes" icon="chevron-down" />
      <P style={{ fontSize: 13 }}>
        A shorter window keeps lighting and moving objects consistent. A longer window collects more photos and coverage.
      </P>
      <P style={{ fontSize: 13 }}>You'll get a 4-letter code and a QR code to share with people at the location.</P>
    </Screen>
  );
}
