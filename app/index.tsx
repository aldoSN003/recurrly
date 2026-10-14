
import {Text, View} from "react-native";
import {Link} from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-success">
                Welcome to Nativewind!
            </Text>
            <Link href="/onboarding" className="mt-4 rounded p-4 bg-primary text-white">ONBARDING</Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded p-4 bg-primary text-white">SIGN IN</Link>
            <Link href="/(auth)/sign-up" className="mt-4 rounded p-4 bg-primary text-white">SIGN UP</Link>

            <Link href="/subscriptions/spotify" className="mt-4 rounded p-4 bg-primary text-white">SPOTIFY SUBS</Link>
            <Link href={{
                pathname:"/subscriptions/[id]",
                params:{id:"claude"}
            }} className="mt-4 rounded p-4 bg-primary text-white">Claude subs</Link>
        </View>
    );
}