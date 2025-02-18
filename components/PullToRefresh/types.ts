import { ScrollViewProps,ViewStyle } from "react-native";

export interface PullToRefreshProps extends ScrollViewProps {
onRefresh: () => void;
refreshing: boolean;
children: React.ReactNode;
style?: ViewStyle;
}