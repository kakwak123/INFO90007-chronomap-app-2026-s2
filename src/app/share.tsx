import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { Btn, Card, H2, Label, Screen, Toggle, type IconName } from '@/ui/kit';
import { C, R } from '@/ui/theme';

const APPS: { name: string; icon: IconName }[] = [
  { name: 'Instagram', icon: 'logo-instagram' },
  { name: 'WhatsApp', icon: 'logo-whatsapp' },
  { name: 'Link', icon: 'link-outline' },
  { name: 'QR', icon: 'qr-code-outline' },
];

const OPTIONS = [
  { label: 'Include my contributor name', on: true },
  { label: 'Credit the other 3 contributors', on: true },
  { label: 'Allow reuse under CC BY-SA', on: false },
];

export default function Share() {
  return (
    <Screen title="Share" subtitle="Royal Melbourne Hospital" footer={<Btn label="Copy link" icon="link-outline" />}>
      <Label>Post preview</Label>
      <Card style={{ gap: 12 }}>
        <View style={{ height: 150, borderRadius: R.sm + 2, backgroundColor: C.placeholder, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="cube-outline" size={58} color={C.textDim} />
        </View>
        <H2>I helped build this</H2>
        <Text style={{ color: C.textDim, fontSize: 13, lineHeight: 19 }}>
          Royal Melbourne Hospital at golden hour, captured with 3 strangers in a 5 minute window.
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Ionicons name="link-outline" size={16} color={C.ink} />
          <Text style={{ color: C.ink, fontSize: 13, textDecorationLine: 'underline' }}>link.chronomap.app/3d/merf</Text>
        </View>
      </Card>

      {OPTIONS.map((o) => (
        <View
          key={o.label}
          style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: C.surface, borderRadius: R.md, borderWidth: 1, borderColor: C.border, padding: 14 }}>
          <Text style={{ color: C.text, fontSize: 15, flex: 1 }}>{o.label}</Text>
          <Toggle on={o.on} />
        </View>
      ))}

      <Label>Share via</Label>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {APPS.map((a) => (
          <View key={a.name} style={{ alignItems: 'center', gap: 6 }}>
            <View style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: C.surface, borderWidth: 1.5, borderColor: C.ink, alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name={a.icon} size={24} color={C.ink} />
            </View>
            <Text style={{ color: C.textDim, fontSize: 12 }}>{a.name}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
}
