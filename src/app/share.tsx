import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { Btn, Card, H, Label, P, Screen } from '@/ui/kit';
import { C } from '@/ui/theme';

const APPS = [
  { name: 'Facebook', icon: 'logo-facebook' },
  { name: 'X', icon: 'logo-twitter' },
  { name: 'Instagram', icon: 'logo-instagram' },
  { name: 'WhatsApp', icon: 'logo-whatsapp' },
] as const;

export default function Share() {
  return (
    <Screen title="Share to Social Media" footer={<Btn label="Copy link" icon="link-outline" />}>
      <Label>Post preview</Label>
      <Card style={{ gap: 12 }}>
        <View style={{ height: 150, borderRadius: 10, backgroundColor: C.placeholder, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="cube-outline" size={64} color={C.textDim} />
        </View>
        <H style={{ fontSize: 18 }}>I helped create this!</H>
        <P style={{ fontSize: 14 }}>Royal Melbourne Hospital Precinct, captured with 3 others on ChronoMap 3D.</P>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Ionicons name="link-outline" size={16} color={C.ink} />
          <Text style={{ color: C.ink, fontSize: 13, textDecorationLine: 'underline' }}>https://link.chronomap.app/3d/merf</Text>
        </View>
      </Card>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: C.surface, borderRadius: 10, borderWidth: 1, borderColor: C.border, padding: 14 }}>
        <Text style={{ color: C.text, fontSize: 15 }}>Include my contributor name</Text>
        <View style={{ width: 44, height: 26, borderRadius: 13, backgroundColor: C.ink, padding: 3, alignItems: 'flex-end' }}>
          <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: C.surface }} />
        </View>
      </View>
      <Label>Share via</Label>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {APPS.map((a) => (
          <View key={a.name} style={{ alignItems: 'center', gap: 6 }}>
            <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: C.surface, borderWidth: 1.5, borderColor: C.ink, alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name={a.icon} size={26} color={C.ink} />
            </View>
            <Text style={{ color: C.textDim, fontSize: 12 }}>{a.name}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
}
