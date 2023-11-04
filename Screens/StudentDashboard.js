import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const coursesData = [
  {
    id: 1,
    name: 'Web Development Fundamentals',
    instructor: 'John Doe',
    image: require('/Users/ayushpriyadarshi/Desktop/Alemeno/AlemenoApp/Screens/WebDev.jpeg'),
    progress: 0.6, // Replace with the actual progress (0 to 1)
    dueDate: '2023-12-15', // Replace with the actual due date
  },
  {
    id: 2,
    name: 'JavaScript Mastery',
    instructor: 'Jane Smith',
    image: require('/Users/ayushpriyadarshi/Desktop/Alemeno/AlemenoApp/Screens/maxresdefault.jpeg'),
    progress: 0.4, // Replace with the actual progress (0 to 1)
    dueDate: '2023-11-30', // Replace with the actual due date
  },
  // Add more course entries here
];

const formatProgress = (progress) => {
  return `${Math.floor(progress * 100)}%`;
};

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

const StudentDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Courses</Text>
      <FlatList
        data={coursesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.courseContainer}>
            <Image source={item.image} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseName}>{item.name}</Text>
              <Text style={styles.instructor}>Instructor: {item.instructor}</Text>
              <Text style={styles.dueDate}>Due Date: {formatDate(item.dueDate)}</Text>
              <View style={styles.progressBarContainer}>
                <ProgressBar
                  progress={item.progress}
                  width={200}
                  height={10}
                  color="#FF5733"
                  style={styles.progressBar}
                />
                <Text style={styles.progressText}>
                  {formatProgress(item.progress)}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  courseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  courseImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  courseInfo: {
    marginLeft: 20,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  instructor: {
    fontSize: 16,
    color: 'gray',
  },
  dueDate: {
    fontSize: 16,
    color: 'gray',
  },
  progressBarContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
  },
  progressText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default StudentDashboard;


