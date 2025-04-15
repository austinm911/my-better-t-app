import { Container } from "@/components/container";
import { trpc } from "@/utils/trpc";
import { useQuery } from "@tanstack/react-query";
import { ScrollView, Text, View } from "react-native";

export default function Home() {
	const healthCheck = useQuery(trpc.healthCheck.queryOptions());

	return (
		<Container>
			<ScrollView className="flex-1 py-4">
				<Text className="mb-6 font-bold font-mono text-2xl text-foreground">
					BETTER T STACK
				</Text>

				<View className="rounded-lg border border-foreground p-4">
					<Text className="mb-2 font-medium text-foreground">API Status</Text>
					<View className="flex-row items-center gap-2">
						<View
							className={`h-2.5 w-2.5 rounded-full ${
								healthCheck.data ? "bg-green-500" : "bg-red-500"
							}`}
						/>
						<Text className="text-foreground text-sm">
							{healthCheck.isLoading
								? "Checking..."
								: healthCheck.data
									? "Connected"
									: "Disconnected"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</Container>
	);
}
