import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Pressable } from 'react-native';

const courseDetails = {
  id: "3",
  title: "React Native",
  image: require("/Users/ayushpriyadarshi/Desktop/Alemeno/AlemenoApp/Screens/REACT.png"),
  description:
    "Unlock the power of cross-platform mobile app development with our React Native Mobile App Development course. Whether you're an aspiring mobile app developer or a seasoned programmer looking to expand your horizons, this course equips you with the skills to create stunning, high-performance mobile applications.",
  price: 1000,
  instructor: 'John Doe',
  schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
  location: 'Online',
  prerequisites: 'Basic JavaScript knowledge, Familiarity with React',
  syllabus: [
    {
      week: 1,
      topic: 'Introduction to React Native',
      content: 'Overview of React Native, setting up your development environment.'
    },
    {
      week: 2,
      topic: 'Building Your First App',
      content: 'Creating a simple mobile app using React Native components.'
    },
   
  ],
};

const CourseDetailsScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={courseDetails.image} style={styles.image} />
      <Text style={styles.title}>{courseDetails.title}</Text>
      <Text style={styles.description}>{courseDetails.description}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsLabel}>Price:</Text>
        <Text style={styles.detailsText}>${courseDetails.price}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsLabel}>Instructor:</Text>
        <Text style={styles.detailsText}>{courseDetails.instructor}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsLabel}>Schedule:</Text>
        <Text style={styles.detailsText}>{courseDetails.schedule}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsLabel}>Location:</Text>
        <Text style={styles.detailsText}>{courseDetails.location}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsLabel}>Prerequisites:</Text>
        <Text style={styles.detailsText}>{courseDetails.prerequisites}</Text>
      </View>
      <Text style={styles.sectionTitle}>Syllabus:</Text>
      {courseDetails.syllabus.map((item) => (
        <View style={styles.syllabusItem} key={item.week}>
          <Text style={styles.weekLabel}>Week {item.week}:</Text>
          <Text style={styles.topicLabel}>{item.topic}</Text>
          <Text style={styles.contentText}>{item.content}</Text>

        </View>
      ))}
                <View style={styles.enrollContainer}>
        <Pressable style={styles.enrollButton} onPress={()=> navigation.navigate("Enroll")}>
          <Text style={styles.enrollButtonText}>Enroll Now</Text>
        </Pressable>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 16,
  },
  description: {
    fontSize: 18,
    margin: 16,
    color: '#333',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  detailsLabel: {
    fontSize: 18,
    color: '#666',
  },
  detailsText: {
    fontSize: 18,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  syllabusItem: {
    padding: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  weekLabel: {
    fontSize: 18,
    color: '#333',
  },
  topicLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  contentText: {
    fontSize: 18,
    color: '#666',
  },
  enrollContainer: {
    alignItems: 'center',
    margin: 16,
  },
  enrollButton: {
    backgroundColor: '#FF5733', 
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  enrollButtonText: {
    fontSize: 20,
    color: '#fff',
  },
});
export default CourseDetailsScreen;
