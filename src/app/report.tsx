import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { Avatar, Btn, Card, Label, Note, P, Screen } from '@/ui/kit';
import { REPORT_REASONS } from '@/ui/mock';
import { C, R } from '@/ui/theme';

/** Stranger collaboration without a safety route is a hole; this closes it. */
export default function Report() {
  const selected = 0;
  return (
    <Screen
      title="Report @kira"
      subtitle="Flinders Street Station session"
      footer={
        <>
          <Btn label="Submit report" onPress={() => router.back()} />
          <Btn label="Block without reporting" variant="secondary" onPress={() => router.back()} />
        </>
      }>
      <Card style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Avatar initial="K" size={40} />
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={{ color: C.text, fontWeight: '700', fontSize: 15 }}>@kira</Text>
          <Text style={{ color: C.textDim, fontSize: 12 }}>In this session · 2 captures total</Text>
        </View>
      </Card>

      <P style={{ fontSize: 13 }}>
        Reports are reviewed by moderators. Blocking takes effect immediately and you will never be matched into a session with
        this person again.
      </P>

      <Label>What happened?</Label>
      {REPORT_REASONS.map((r, i) => {
        const on = i === selected;
        return (
          <Pressable
            key={r.label}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
              paddingHorizontal: 14,
              paddingVertical: 12,
              borderRadius: R.md,
              backgroundColor: on ? C.liveSoft : C.surface,
              borderWidth: on ? 2 : 1,
              borderColor: on ? C.live : C.border,
            }}>
            <Ionicons name={r.icon} size={20} color={on ? C.live : C.textDim} />
            <Text style={{ color: C.text, fontSize: 15, flex: 1 }}>{r.label}</Text>
            {on ? <Ionicons name="checkmark-circle" size={20} color={C.live} /> : null}
          </Pressable>
        );
      })}

      <Note icon="shield-checkmark-outline" title="The session keeps running">
        Reporting does not end the capture for everyone else. Their photos are quarantined pending review, not deleted from the
        group&apos;s work.
      </Note>
    </Screen>
  );
}
