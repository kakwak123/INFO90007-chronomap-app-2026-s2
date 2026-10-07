import { router } from 'expo-router';

import { Btn, Card, H, P, Screen } from '@/ui/kit';

export default function About() {
  return (
    <Screen title="About ChronoMap 3D">
      <H style={{ fontSize: 22 }}>Freezing time for open-source heritage</H>
      <P>
        ChronoMap 3D turns a group of phones into one distributed 3D camera. People at a place photograph it within a short window, so the result is close to a single frozen moment. The models are an open, community-built record of places that matter, like local history, public infrastructure and accessible routes.
      </P>
      <Card style={{ gap: 6 }}>
        <P style={{ fontSize: 14 }}>
          3D reconstruction works best with many overlapping photos from different viewpoints. Redundancy also lets the system ignore passers-by and parked cars that appear in only a few frames.
        </P>
      </Card>
      <Btn label="Replay the tutorial" variant="secondary" onPress={() => router.push('/')} />
      <Btn label="Community rules & safety" variant="secondary" onPress={() => router.push({ pathname: '/rules', params: { next: '/home' } })} />
      <P style={{ fontSize: 12 }}>Organisations and open-data partners will be linked here.</P>
    </Screen>
  );
}
