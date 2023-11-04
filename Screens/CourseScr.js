import React from "react";
import { FlatList, Text, View , StyleSheet, Image, TouchableOpacity, Pressable} from "react-native";

const course = [
  {
    id: "1",
    title: "Web Development",
    image: require("/Users/ayushpriyadarshi/Desktop/Alemeno/AlemenoApp/Screens/WebDev.jpeg"),
    description:
      "Are you ready to embark on a journey into the exciting world of web development? Our Web Development Masterclass course is your gateway to becoming a proficient web developer. Whether you're a beginner with no prior coding experience or an experienced programmer looking to expand your skills, this course has something for everyone. ",
    course1: "html",
    course2: "css",
    course3: "javascript",
    price: 5000,
  },
  {
    id: "2",
      title: "Java Script",
    image: require("/Users/ayushpriyadarshi/Desktop/Alemeno/AlemenoApp/Screens/maxresdefault.jpeg"),
    description:
      "Master the heart of the web with our JavaScript Essentials course. Whether you're new to programming or looking to enhance your skills, this course equips you with the fundamentals of JavaScript, the language that powers interactive and dynamic web experiences. ",
    course1: "JavaScript",
    course2: "Algorithm",
    course3: "Data Structure",
    price: 1000,
  },
  {
    id: "3",
    title: "React Native",
    image: require("/Users/ayushpriyadarshi/Desktop/Alemeno/AlemenoApp/Screens/REACT.png"),
    description:
      "Unlock the power of cross-platform mobile app development with our React Native Mobile App Development course. Whether you're an aspiring mobile app developer or a seasoned programmer looking to expand your horizons, this course equips you with the skills to create stunning, high-performance mobile applications. ",

    price: 1000,
    instructor: 'John Doe',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
  },
  
];

const CourseScr = ({navigation}) => {
    const renderCourseCard = ({ item }) => (
        <View style={styles.courseContainer}>
          <Image style={styles.cardImage} source={item.image} resizeMode="contain" />
          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          
          <View style={styles.buttonContainer}>
      <Pressable
        style={styles.buttonStyle} 
        activeOpacity={0.6}  
          onPress={() =>
                navigation.navigate("CourseDetails", {
                  courseId: item.id,
                })
              }>
        <Text style={styles.buttonText}>Course Details</Text>
      </Pressable>
    </View>
    
        </View>
        
      );
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={course}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCourseCard}
      />
    </View>
  );
};
export default CourseScr

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 5,
        backgroundColor:"black"
      },
      courseContainer: {
        padding: 25,
        backgroundColor: "#171717",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30,
      },
      cardImage: {
        width: "100 ",
        marginTop:-200
       
      },
      mainHeader: {
        fontSize: 22,
        color: "#344055",
        textTransform: "uppercase",
        paddingBottom: 15,
        textAlign: "center",
        marginTop:-160
      },
      description: {
        textAlign: "left",
        paddingBottom: 15,
        lineHeight: 20,
        fontSize: 16,
        color: "#7d7d7d",
      },
      buttonStyle: {
        backgroundColor: "#808080",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      },
      buttonText: {
        fontSize: 20,
        color: "#eee",
        textTransform: "capitalize",
      },
    });
