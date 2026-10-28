import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { Card, H, Label, P, Screen } from '@/ui/kit';
import { C, R } from '@/ui/theme';

/** Every screen, reachable in one tap — the shot list for the A3 demo video. */
const SCREENS: { route: string; label: string }[] = [
  { route: '/', label: '01 · Onboarding' },
  { route: '/home', label: '02–04 · Home (Nearby / Requests / Events)' },
  { route: '/request-detail', label: '05 · Request detail' },
  { route: '/notifications', label: '06 · Notifications' },
  { route: '/rules', label: '07 · Rules & safety' },
  { route: '/create', label: '08 · Create a session' },
  { route: '/rally', label: '09 · Rally — quorum' },
  { route: '/briefing', label: '10 · Briefing — host' },
  { route: '/station', label: '11 · Briefing — your station' },
  { route: '/conflict', label: '12 · Two groups, one landmark' },
  { route: '/capture', label: '13 · Capture' },
  { route: '/coverage', label: '14 · Coverage — participant' },
  { route: '/coverage-host', label: '15 · Coverage — host' },
  { route: '/callouts', label: '16 · Quick callouts' },
  { route: '/processing', label: '17 · Processing' },
  { route: '/results', label: '18 · Results' },
  { route: '/share', label: '19 · Share' },
  { route: '/profile', label: '20 · Profile' },
  { route: '/landmark', label: '21 · Landmark archive' },
  { route: '/report', label: '22 · Report & block' },
];

export default function About() {
  return (
    <Screen title="About ChronoMap 3D">
      <H>Heritage, kept by whoever shows up</H>
      <P>
        ChronoMap 3D turns a group of phones into one distributed camera. People who happen to be at the same place — usually
        strangers — are organised into a short, co-located capture window, and the result is a 3D model nobody could have made
        alone.
      </P>
      <Card style={{ gap: 6 }}>
        <P style={{ fontSize: 14 }}>
          Reconstruction needs many overlapping photos from different viewpoints. Redundancy is also what lets the system ignore
          passers-by and parked cars that appear in only a few frames.
        </P>
      </Card>
      <Card tone="ink" style={{ gap: 6 }}>
        <P style={{ fontSize: 14, color: C.text }}>
          A landmark is never finished. Each season, weather and light needs its own session, so the archive only fills in if a
          crowd keeps returning.
        </P>
      </Card>

      <Label>All screens</Label>
      <Text style={{ color: C.textDim, fontSize: 12 }}>Prototype navigation — every screen in the high-fidelity set.</Text>
      <View style={{ gap: 8 }}>
        {SCREENS.map((s) => (
          <Pressable
            key={s.label}
            onPress={() => router.push(s.route as '/home')}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: C.surface, borderWidth: 1, borderColor: C.border, borderRadius: R.sm + 2, paddingHorizontal: 14, paddingVertical: 12 }}>
            <Text style={{ color: C.text, fontSize: 14, flex: 1 }}>{s.label}</Text>
            <Ionicons name="chevron-forward" size={16} color={C.textDim} />
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}
