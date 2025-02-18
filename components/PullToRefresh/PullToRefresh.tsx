import React from "react";
import { RefreshControl, ScrollView } from "react-native";

const PullToRefresh = ({
  children,
  refreshing,
  onRefresh,
}: {
  children: React.ReactNode;
  refreshing: boolean;
  onRefresh: () => void;
}) => {
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {children}
    </ScrollView>
  );
};

export default PullToRefresh;
