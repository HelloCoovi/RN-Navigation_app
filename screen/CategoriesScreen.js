import { View, Text, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemDate) => renderCategoryItem(itemDate)}
      keyExtractor={(item) => item.id}
    />
  );
}

export default CategoriesScreen;
