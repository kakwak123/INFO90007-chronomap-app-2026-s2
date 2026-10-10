import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CallBar } from '@/components/call-bar';
import { C } from '@/ui/theme';

function Corner({ style }: { style: object }) {
  return <View style={[{ position: 'absolute', width: 30, height: 30, borderColor: C.ink }, style]} />;
}

export default function Capture() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: C.bg, paddingTop: insets.top }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 10 }}>
        <Pressable onPress={() => router.replace('/home')} hitSlop={12}>
          <Ionicons name="close" size={26} color={C.text} />
        </Pressable>
        <Text style={{ color: C.text, fontWeight: '700', fontSize: 14 }}>Session ends in 3:42</Text>
        <Ionicons name="flash-off-outline" size={22} color={C.text} />
      </View>

      <CallBar />

      <View style={{ flex: 1, marginHorizontal: 12, borderRadius: 14, backgroundColor: C.placeholder, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <Corner style={{ top: 14, left: 14, borderTopWidth: 3, borderLeftWidth: 3 }} />
        <Corner style={{ top: 14, right: 14, borderTopWidth: 3, borderRightWidth: 3 }} />
        <Corner style={{ bottom: 14, left: 14, borderBottomWidth: 3, borderLeftWidth: 3 }} />
        <Corner style={{ bottom: 14, right: 14, borderBottomWidth: 3, borderRightWidth: 3 }} />
        <Ionicons name="business-outline" size={130} color={C.textDim} />
        <View style={{ position: 'absolute', top: 56, backgroundColor: C.surface, borderWidth: 1.5, borderColor: C.ink, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10 }}>
          <Text style={{ color: C.text, fontSize: 12, fontWeight: '700' }}>East side needs more photos</Text>
        </View>
        <Text style={{ position: 'absolute', bottom: 48, color: C.text, fontSize: 13 }}>Take photos from different angles</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingVertical: 14 }}>
        <Pressable onPress={() => router.push('/coverage')} style={{ alignItems: 'center', gap: 4, width: 72 }}>
          <View style={{ width: 48, height: 48, borderRadius: 10, backgroundColor: C.surface, borderWidth: 1.5, borderColor: C.ink, alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name="radio-outline" size={24} color={C.ink} />
          </View>
          <Text style={{ color: C.textDim, fontSize: 11 }}>Coverage</Text>
        </Pressable>
        <View style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 4, borderColor: C.ink, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 62, height: 62, borderRadius: 31, backgroundColor: C.ink }} />
        </View>
        <Pressable onPress={() => router.replace('/processing')} style={{ alignItems: 'center', gap: 4, width: 72 }}>
          <View style={{ width: 48, height: 48, borderRadius: 10, backgroundColor: C.surface, borderWidth: 1.5, borderColor: C.ink, alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name="stop" size={20} color={C.ink} />
          </View>
          <Text style={{ color: C.textDim, fontSize: 11 }}>End</Text>
        </Pressable>
      </View>
      <Text style={{ color: C.textDim, textAlign: 'center', fontSize: 13, paddingBottom: Math.max(insets.bottom, 12) }}>
        4 people capturing · 128 photos
      </Text>
    </View>
  );
}
