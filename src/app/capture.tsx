import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { type IconName } from '@/ui/kit';
import { C, R } from '@/ui/theme';

function SideBtn({ icon, label, onPress }: { icon: IconName; label: string; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} style={{ alignItems: 'center', gap: 5, width: 72 }}>
      <View style={{ width: 50, height: 50, borderRadius: R.md, backgroundColor: 'rgba(255,255,255,0.16)', alignItems: 'center', justifyContent: 'center' }}>
        <Ionicons name={icon} size={24} color={C.onInk} />
      </View>
      <Text style={{ color: C.onInk, fontSize: 12 }}>{label}</Text>
    </Pressable>
  );
}

export default function Capture() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: C.text, paddingTop: insets.top }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10 }}>
        <Pressable onPress={() => router.replace('/home')} hitSlop={12}>
          <Ionicons name="close" size={26} color={C.onInk} />
        </Pressable>
        <View style={{ flex: 1 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: 'rgba(255,255,255,0.16)', paddingHorizontal: 12, paddingVertical: 5, borderRadius: R.pill }}>
          <Ionicons name="time-outline" size={15} color={C.onInk} />
          <Text style={{ color: C.onInk, fontSize: 12, fontWeight: '600' }}>Window 3:42</Text>
        </View>
        <View style={{ flex: 1 }} />
        <Ionicons name="flash-off-outline" size={22} color={C.onInk} />
      </View>

      <View style={{ flex: 1, marginHorizontal: 12, borderRadius: R.lg, backgroundColor: '#3A3E46', padding: 14, overflow: 'hidden' }}>
        {/* The host's assignment stays visible for the whole window. */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, alignSelf: 'flex-start', backgroundColor: C.amber, paddingHorizontal: 12, paddingVertical: 7, borderRadius: R.sm + 2 }}>
          <Ionicons name="navigate" size={16} color={C.onInk} />
          <Text style={{ color: C.onInk, fontSize: 11, fontWeight: '800', letterSpacing: 1 }}>YOU: NORTH-EAST ARCH</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
          <Ionicons name="cube-outline" size={110} color="rgba(255,255,255,0.45)" />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: C.surface, paddingHorizontal: 12, paddingVertical: 8, borderRadius: R.sm + 2 }}>
            <Ionicons name="people-outline" size={16} color={C.ink} />
            <Text style={{ color: C.text, fontSize: 12, fontWeight: '600' }}>@dhiraj_s has this angle - try the pillar</Text>
          </View>
        </View>

        <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, textAlign: 'center' }}>
          Keep the arch filling the frame. Move a few steps between shots.
        </Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingVertical: 16 }}>
        <SideBtn icon="radio-outline" label="Coverage" onPress={() => router.push('/coverage')} />
        <Pressable
          onPress={() => router.replace('/processing')}
          style={{ width: 82, height: 82, borderRadius: 41, borderWidth: 4, borderColor: C.onInk, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 62, height: 62, borderRadius: 31, backgroundColor: C.onInk }} />
        </Pressable>
        <SideBtn icon="chatbubble-ellipses-outline" label="Callout" onPress={() => router.push('/callouts')} />
      </View>

      <Text style={{ color: 'rgba(255,255,255,0.75)', textAlign: 'center', fontSize: 12, paddingBottom: Math.max(insets.bottom, 14) }}>
        4 capturing · 128 photos · your 31
      </Text>
    </View>
  );
}
