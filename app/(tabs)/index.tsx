import {Text, View} from "react-native";
import {Link} from "expo-router";


import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
    return (


        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-7xl font-sans-extrabold">
                Home
            </Text>
            <Link href="/onboarding" className="mt-4 rounded p-4 bg-primary text-white font-sans-bold">ONBARDING</Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded p-4 bg-primary text-white font-sans-bold">SIGN IN</Link>
            <Link href="/(auth)/sign-up" className="mt-4 rounded p-4 bg-primary text-white font-sans-bold" >SIGN UP</Link>


        </SafeAreaView>
    );
}