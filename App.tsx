import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "AnHoai1", age: 20 },
    { id: 2, name: "AnHoai2", age: 20 },
    { id: 3, name: "AnHoai3", age: 20 },
    { id: 4, name: "AnHoai4", age: 20 },
    { id: 5, name: "AnHoai5", age: 20 },
    { id: 6, name: "AnHoai6", age: 20 },
    { id: 7, name: "AnHoai7", age: 20 },
    { id: 8, name: "AnHoai8", age: 20 },
    { id: 9, name: "AnHoai9", age: 20 },
    { id: 10, name: "AnHoai10", age: 20 },
  ]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Hello Hoài An With Android</Text>
      <ScrollView>
        {students.map(item => (
          <View
            key={item.id}
            style={{
              padding: 30,
              backgroundColor: "blue",
              marginBottom: 30,
            }}
          >
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
});
