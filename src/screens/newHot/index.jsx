import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../../theme/colors';
import {Notification, PlayCircle, Timer1} from 'iconsax-react-native';

const NewHot = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New & Hot</Text>
        <TouchableOpacity>
          <Notification size={24} color={colors.textColor} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}>
          <TouchableOpacity
            style={[styles.categoryButton, styles.activeCategory]}>
            <Text style={styles.categoryText}>🍿 Coming Soon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>🔥 Everyone's Watching</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>🌟 Top 10 Movies</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Top Picks */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Timer1 size={22} color={colors.btnColor} />
            <Text style={styles.sectionTitle}>Coming This Week</Text>
          </View>

          <View style={styles.movieCard}>
            <Image
              source={require('../../assets/images/film.jpg')}
              style={styles.movieImage}
            />
            <View style={styles.movieInfo}>
              <Text style={styles.movieTitle}>Rebel Moon</Text>
              <Text style={styles.releaseDate}>Coming December 23</Text>
              <TouchableOpacity style={styles.playButton}>
                <PlayCircle size={20} color={colors.textColor} />
                <Text style={styles.playButtonText}>Play Trailer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* New Releases */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>✨ New Releases</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map(item => (
              <TouchableOpacity key={item} style={styles.horizontalCard}>
                <Image
                  source={require('../../assets/images/film.jpg')}
                  style={styles.horizontalImage}
                />
                <View style={styles.horizontalInfo}>
                  <Text style={styles.horizontalTitle}>Movie Title {item}</Text>
                  <Text style={styles.horizontalDate}>Just Added</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Trending Now */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>🔥 Trending Now</Text>
          </View>

          <View style={styles.movieCard}>
            <Image
              source={require('../../assets/images/start.jpeg')}
              style={styles.movieImage}
            />
            <View style={styles.movieInfo}>
              <Text style={styles.movieTitle}>Berlin</Text>
              <Text style={styles.description}>
                Back to his golden age before the events of "Money Heist"...
              </Text>
              <TouchableOpacity style={styles.playButton}>
                <PlayCircle size={20} color={colors.textColor} />
                <Text style={styles.playButtonText}>More Info</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Worth the Wait */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>⏳ Worth the Wait</Text>
          </View>
          <View style={styles.comingSoonCard}>
            <View style={styles.dateTag}>
              <Text style={styles.dateText}>DEC</Text>
              <Text style={styles.dayText}>25</Text>
            </View>
            <Image
              source={require('../../assets/images/start.jpeg')}
              style={styles.comingSoonImage}
            />
            <View style={styles.comingSoonOverlay}>
              <Text style={styles.comingSoonTitle}>Big Movie Title</Text>
              <TouchableOpacity style={styles.reminderButton}>
                <Text style={styles.reminderText}>Set Reminder</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    color: colors.textColor,
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  sectionTitle: {
    color: colors.textColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieCard: {
    backgroundColor: '#222',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  movieImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  movieInfo: {
    padding: 16,
  },
  movieTitle: {
    color: colors.textColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  releaseDate: {
    color: '#999',
    fontSize: 14,
    marginBottom: 12,
  },
  description: {
    color: '#999',
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.btnColor,
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
    gap: 8,
  },
  playButtonText: {
    color: colors.textColor,
    fontSize: 14,
    fontWeight: '500',
  },
  categories: {
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#333',
    borderRadius: 20,
    marginRight: 10,
  },
  activeCategory: {
    backgroundColor: colors.btnColor,
  },
  categoryText: {
    color: colors.textColor,
    fontSize: 14,
    fontWeight: '500',
  },
  horizontalCard: {
    width: 140,
    marginRight: 12,
  },
  horizontalImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  horizontalInfo: {
    padding: 8,
  },
  horizontalTitle: {
    color: colors.textColor,
    fontSize: 14,
    fontWeight: 'bold',
  },
  horizontalDate: {
    color: '#999',
    fontSize: 12,
    marginTop: 4,
  },
  comingSoonCard: {
    position: 'relative',
    height: 250,
    borderRadius: 12,
    overflow: 'hidden',
  },
  dateTag: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 8,
    borderRadius: 6,
    zIndex: 1,
  },
  dateText: {
    color: colors.textColor,
    fontSize: 12,
    textAlign: 'center',
  },
  dayText: {
    color: colors.textColor,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  comingSoonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  comingSoonOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  comingSoonTitle: {
    color: colors.textColor,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reminderButton: {
    backgroundColor: colors.btnColor,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  reminderText: {
    color: colors.textColor,
    fontSize: 12,
    fontWeight: '500',
  },
});

export default NewHot;
