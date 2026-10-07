import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { Btn, Card, H, Label, P, Pill, Screen, Thumb } from '@/ui/kit';
import { EVENTS, REQUESTS, SESSIONS } from '@/ui/mock';
import { C } from '@/ui/theme';

type Tab = 'nearby' | 'requests' | 'events';
const TABS: { key: Tab; label: string }[] = [
  { key: 'nearby', label: 'Nearby' },
  { key: 'requests', label: 'Requests' },
  { key: 'events', label: 'Events' },
];

const toRules = (next: string) => router.push({ pathname: '/rules', params: { next } });

export default function Home() {
  const [tab, setTab] = useState<Tab>('nearby');
  return (
    <Screen
      back={false}
      right={
        <Pressable onPress={() => router.push('/about')} hitSlop={12} style={{ width: 36, height: 36, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="information-circle-outline" size={26} color={C.text} />
        </Pressable>
      }
      footer={
        <>
          <Btn label="Scan QR to Join" icon="qr-code-outline" variant="secondary" onPress={() => toRules('/lobby')} />
          <Pressable onPress={() => setTab('events')}>
            <Text style={{ color: C.textDim, textAlign: 'center', fontSize: 13 }}>or join a scheduled session</Text>
          </Pressable>
        </>
      }>
      <View style={{ gap: 2 }}>
        <H>ChronoMap 3D</H>
        <P>Find a session near you</P>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: C.surface, borderWidth: 1, borderColor: C.border, borderRadius: 10, paddingHorizontal: 14, height: 48 }}>
        <Ionicons name="search" size={18} color={C.textDim} />
        <Text style={{ color: C.textDim, fontSize: 15 }}>Search landmarks…</Text>
      </View>

      {/* Targeted request: location detected, prompt to host */}
      <Card style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        <Ionicons name="location" size={26} color={C.ink} />
        <View style={{ flex: 1 }}>
          <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>Are you at Royal Melbourne Hospital?</Text>
          <Text style={{ color: C.textDim, fontSize: 13, marginTop: 2 }}>Host a session for this spot.</Text>
        </View>
        <Btn label="Host" small onPress={() => toRules('/create')} />
      </Card>

      <View style={{ flexDirection: 'row', backgroundColor: C.surfaceAlt, borderRadius: 10, padding: 3 }}>
        {TABS.map((t) => (
          <Pressable key={t.key} onPress={() => setTab(t.key)} style={{ flex: 1, paddingVertical: 8, borderRadius: 8, alignItems: 'center', backgroundColor: tab === t.key ? C.surface : 'transparent' }}>
            <Text style={{ color: tab === t.key ? C.text : C.textDim, fontWeight: '700', fontSize: 13 }}>{t.label}</Text>
          </Pressable>
        ))}
      </View>

      {tab === 'nearby' && (
        <>
          <Label>Nearby sessions</Label>
          <View style={{ gap: 10 }}>
            {SESSIONS.map((x) => (
              <Card key={x.id} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Thumb />
                <View style={{ flex: 1, gap: 2 }}>
                  <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{x.name}</Text>
                  <Text style={{ color: C.textDim, fontSize: 13 }}>
                    {x.people} people · {x.status}
                  </Text>
                </View>
                <Btn label="Join" small variant="secondary" onPress={() => toRules('/lobby')} />
              </Card>
            ))}
          </View>
          <Card style={{ gap: 10 }}>
            <Label>Join via code</Label>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              {[0, 1, 2, 3].map((k) => (
                <View key={k} style={{ flex: 1, height: 48, borderRadius: 8, borderWidth: 1, borderColor: C.border, backgroundColor: C.bg }} />
              ))}
              <Btn label="Enter" small onPress={() => toRules('/lobby')} />
            </View>
          </Card>
        </>
      )}

      {tab === 'requests' && (
        <>
          <Label>Places that need capturing</Label>
          <View style={{ gap: 10 }}>
            {REQUESTS.map((r) => (
              <Card key={r.id} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Thumb icon="location-outline" />
                <View style={{ flex: 1, gap: 2 }}>
                  <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{r.name}</Text>
                  <Text style={{ color: C.textDim, fontSize: 13 }}>{r.note}</Text>
                  <View style={{ flexDirection: 'row', marginTop: 4 }}>
                    <Pill text={r.needs} />
                  </View>
                </View>
                <Btn label="Plan" small variant="secondary" onPress={() => toRules('/create')} />
              </Card>
            ))}
          </View>
        </>
      )}

      {tab === 'events' && (
        <>
          <Label>Planned visits</Label>
          <View style={{ gap: 10 }}>
            {EVENTS.map((e) => (
              <Card key={e.id} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Thumb icon="calendar-outline" />
                <View style={{ flex: 1, gap: 2 }}>
                  <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{e.name}</Text>
                  <Text style={{ color: C.textDim, fontSize: 13 }}>{e.when}</Text>
                  <Text style={{ color: C.textDim, fontSize: 13 }}>
                    {e.going} going · hosted by {e.host}
                  </Text>
                </View>
                <Btn label="I'm in" small variant="secondary" />
              </Card>
            ))}
          </View>
          <Btn label="Plan a visit" icon="add" variant="secondary" onPress={() => toRules('/create')} />
        </>
      )}
    </Screen>
  );
}
