import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { Avatar, type IconName } from '@/ui/kit';
import { CALL_LINES, MEMBERS } from '@/ui/mock';
import { C } from '@/ui/theme';

// Visual-only group voice call shown on top of the capture screen.
// No audio is sent. The timer, speaker captions and buttons are simulated.
export function CallBar() {
  const [joined, setJoined] = useState(true);
  const [muted, setMuted] = useState(false);
  const [speakerOn, setSpeakerOn] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (!joined) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [joined]);

  useEffect(() => {
    if (!joined) return;
    const t = setInterval(() => setLine((l) => (l + 1) % CALL_LINES.length), 4000);
    return () => clearInterval(t);
  }, [joined]);

  if (!joined) {
    return (
      <Pressable
        onPress={() => {
          setSeconds(0);
          setJoined(true);
        }}
        style={({ pressed }) => [bar, { justifyContent: 'center', opacity: pressed ? 0.7 : 1 }]}>
        <Ionicons name="call" size={18} color={C.ink} />
        <Text style={{ color: C.text, fontWeight: '700', fontSize: 14 }}>Rejoin team call</Text>
      </Pressable>
    );
  }

  const others = MEMBERS.filter((m) => !m.you);
  const current = CALL_LINES[line];
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  return (
    <View style={bar}>
      <View style={{ flexDirection: 'row' }}>
        {others.map((m, i) => (
          <View key={m.name} style={{ marginLeft: i === 0 ? 0 : -12, borderRadius: 999, borderWidth: m.name === current.name ? 2 : 0, borderColor: C.ink }}>
            <Avatar initial={m.initial} size={30} filled={m.name === current.name} />
          </View>
        ))}
      </View>

      <View style={{ flex: 1, gap: 2 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: C.ink }} />
          <Text style={{ color: C.text, fontWeight: '700', fontSize: 13 }}>Team call</Text>
          <Text style={{ color: C.textDim, fontSize: 12, fontVariant: ['tabular-nums'] }}>
            {mm}:{ss}
          </Text>
        </View>
        <Text numberOfLines={1} style={{ color: C.textDim, fontSize: 12 }}>
          {current.name}: “{current.text}”
        </Text>
      </View>

      <CallBtn icon={muted ? 'mic-off' : 'mic'} active={muted} onPress={() => setMuted((m) => !m)} />
      <CallBtn icon={speakerOn ? 'volume-high' : 'volume-mute'} active={!speakerOn} onPress={() => setSpeakerOn((s) => !s)} />
      <CallBtn icon="call" filled onPress={() => setJoined(false)} rotate />
    </View>
  );
}

function CallBtn({
  icon,
  onPress,
  active,
  filled,
  rotate,
}: {
  icon: IconName;
  onPress: () => void;
  active?: boolean;
  filled?: boolean;
  rotate?: boolean;
}) {
  const dark = filled || active;
  return (
    <Pressable
      onPress={onPress}
      hitSlop={6}
      style={({ pressed }) => ({
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: dark ? C.ink : C.surface,
        borderWidth: 1.5,
        borderColor: C.ink,
        opacity: pressed ? 0.7 : 1,
      })}>
      <Ionicons name={icon} size={17} color={dark ? C.onInk : C.ink} style={rotate ? { transform: [{ rotate: '135deg' }] } : undefined} />
    </Pressable>
  );
}

const bar = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 8,
  marginHorizontal: 12,
  marginBottom: 10,
  paddingHorizontal: 10,
  paddingVertical: 8,
  borderRadius: 14,
  backgroundColor: C.surface,
  borderWidth: 1.5,
  borderColor: C.ink,
};
