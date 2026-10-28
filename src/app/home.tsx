import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { Avatar, Btn, Card, H, Label, NavBar, Pill, Screen, Tabs, Thumb } from '@/ui/kit';
import { EVENTS, REQUESTS, SESSIONS } from '@/ui/mock';
import { C, R } from '@/ui/theme';

type Tab = 'nearby' | 'requests' | 'events';
const TABS: { key: Tab; label: string }[] = [
  { key: 'nearby', label: 'Nearby' },
  { key: 'requests', label: 'Requests' },
  { key: 'events', label: 'Events' },
];

const toRules = (next: string) => router.push({ pathname: '/rules', params: { next } });

export default function Home() {
  const [tab, setTab] = useState<Tab>('nearby');
  const navIndex = tab === 'nearby' ? 0 : tab === 'requests' ? 1 : 2;

  return (
    <Screen back={false} nav={<NavBar active={navIndex} />}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <H>ChronoMap 3D</H>
        <View style={{ flex: 1 }} />
        <Pressable onPress={() => router.push('/notifications')} hitSlop={10}>
          <Ionicons name="notifications-outline" size={22} color={C.text} />
        </Pressable>
        <Pressable onPress={() => router.push('/about')} hitSlop={10}>
          <Ionicons name="information-circle-outline" size={22} color={C.text} />
        </Pressable>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: C.surface, borderWidth: 1, borderColor: C.border, borderRadius: R.sm + 2, paddingHorizontal: 14, height: 48 }}>
        <Ionicons name="search" size={18} color={C.textDim} />
        <Text style={{ color: C.textDim, fontSize: 15 }}>Search landmarks…</Text>
      </View>

      {/* The crowd, made visible. This is the first thing the demo video shows. */}
      <Card tone="amber" style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        <Ionicons name="people" size={26} color={C.amber} />
        <View style={{ flex: 1 }}>
          <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>3 people are here right now</Text>
          <Text style={{ color: C.textDim, fontSize: 13, marginTop: 2 }}>2 of them want the bluestone arch captured</Text>
        </View>
        <Btn label="Host" small onPress={() => toRules('/create')} />
      </Card>

      <Tabs tabs={TABS} value={tab} onChange={setTab} />

      {tab === 'nearby' && (
        <>
          <Label>Live near you</Label>
          {SESSIONS.map((x) => (
            <Card key={x.id} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Thumb />
              <View style={{ flex: 1, gap: 2 }}>
                <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{x.name}</Text>
                <Text style={{ color: C.textDim, fontSize: 13 }}>{x.detail}</Text>
              </View>
              <Pill text={x.tag} tone={x.tone} />
              <Btn label="Join" small variant="secondary" onPress={() => toRules('/rally')} />
            </Card>
          ))}
          <Card style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Ionicons name="qr-code-outline" size={20} color={C.textDim} />
            <Text style={{ color: C.textDim, fontSize: 13, flex: 1 }}>Have a 4-letter code or QR?</Text>
            <Btn label="Enter" small onPress={() => toRules('/rally')} />
          </Card>
        </>
      )}

      {tab === 'requests' && (
        <>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Label>Places the community wants</Label>
            <View style={{ flex: 1 }} />
            <Text style={{ color: C.textDim, fontSize: 12 }}>Nearest first</Text>
          </View>
          {REQUESTS.map((r) => (
            <Card key={r.id} style={{ gap: 10 }}>
              <Pressable onPress={() => router.push('/request-detail')} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Thumb icon="location-outline" />
                <View style={{ flex: 1, gap: 2 }}>
                  <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{r.name}</Text>
                  <Text style={{ color: C.textDim, fontSize: 13 }}>{r.detail}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color={C.textDim} />
              </Pressable>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Pill text={r.needs} tone="accent" />
                <Ionicons name="thumbs-up-outline" size={14} color={C.textDim} />
                <Text style={{ color: C.textDim, fontSize: 12 }}>{r.votes} want this</Text>
                <View style={{ flex: 1 }} />
                <Btn label="I'm in" small variant="secondary" />
              </View>
            </Card>
          ))}
        </>
      )}

      {tab === 'events' && (
        <>
          <Label>Planned visits you can join</Label>
          {EVENTS.map((e) => (
            <Card key={e.id} style={{ gap: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Thumb icon="calendar-outline" />
                <View style={{ flex: 1, gap: 2 }}>
                  <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>{e.name}</Text>
                  <Text style={{ color: C.textDim, fontSize: 13 }}>{e.when}</Text>
                  <Text style={{ color: C.textDim, fontSize: 13 }}>{e.who}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Pill text={e.cond} tone="accent" />
                <View style={{ flexDirection: 'row' }}>
                  {['M', 'D', 'A'].map((i, k) => (
                    <View key={i} style={{ marginLeft: k === 0 ? 0 : -8 }}>
                      <Avatar initial={i} size={26} />
                    </View>
                  ))}
                </View>
                <View style={{ flex: 1 }} />
                <Btn label="I'm in" small />
              </View>
            </Card>
          ))}
          <Btn label="Plan a visit" icon="add" variant="secondary" onPress={() => toRules('/create')} />
        </>
      )}
    </Screen>
  );
}
