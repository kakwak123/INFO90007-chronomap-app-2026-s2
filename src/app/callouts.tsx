import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { H2 } from '@/ui/kit';
import { CALLOUTS } from '@/ui/mock';
import { C, R } from '@/ui/theme';

/**
 * Canned, one-tap messages.
 *
 * The honest problem with a co-located session full of strangers is that most people will not
 * speak up to people they have not met. Designing around that — rather than assuming everyone
 * chats freely — is what keeps the collaboration claim credible.
 */
export default function Callouts() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: C.text, paddingTop: insets.top }}>
      <Pressable onPress={() => router.back()} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        <Ionicons name="camera-outline" size={72} color="rgba(255,255,255,0.25)" />
        <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>Capture paused while the sheet is open</Text>
      </Pressable>

      <View style={{ backgroundColor: C.surface, borderTopLeftRadius: R.xl, borderTopRightRadius: R.xl, padding: 20, paddingBottom: Math.max(insets.bottom, 20), gap: 12 }}>
        <View style={{ alignSelf: 'center', width: 44, height: 5, borderRadius: 3, backgroundColor: C.borderStrong }} />
        <H2>Send a quick callout</H2>
        <Text style={{ color: C.textDim, fontSize: 13, lineHeight: 19 }}>
          Goes to everyone in the session. Most people will not speak up to strangers mid-capture — tap instead.
        </Text>

        {CALLOUTS.map((c) => (
          <Pressable
            key={c.text}
            onPress={() => router.back()}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 14, paddingVertical: 11, borderRadius: R.md, backgroundColor: C.bg, borderWidth: 1, borderColor: C.border }}>
            <Ionicons name={c.icon} size={20} color={C.ink} />
            <Text style={{ color: C.text, fontSize: 15, flex: 1 }}>{c.text}</Text>
            <Ionicons name="send-outline" size={18} color={C.textDim} />
          </Pressable>
        ))}

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, height: 50, borderRadius: R.md, backgroundColor: C.surfaceAlt }}>
          <Ionicons name="mic-outline" size={20} color={C.text} />
          <Text style={{ color: C.text, fontSize: 16, fontWeight: '700' }}>Or hold to talk</Text>
        </View>
      </View>
    </View>
  );
}
