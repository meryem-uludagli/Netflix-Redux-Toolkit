import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../theme/colors';

const Downloads = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Downloads</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.circle}>
          <Text style={styles.icon}>↓</Text>
        </View>
        <Text style={styles.title}>No Downloads</Text>
        <Text style={styles.subtitle}>Your downloads will appear here</Text>

        {/* Download Info */}
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Smart Downloads</Text>
          <Text style={styles.infoText}>
            We'll download episodes of your shows when you're on Wi-Fi
          </Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsText}>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Storage Info */}
        <View style={styles.storageInfo}>
          <Text style={styles.storageText}>
            Free Storage: <Text style={styles.storageHighlight}>32.5 GB</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  header: {
    padding: 16,
    marginTop: 10,
  },
  headerText: {
    color: colors.textColor,
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 40,
    color: colors.textColor,
  },
  title: {
    color: colors.textColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#999',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  infoBox: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 8,
    width: '100%',
    marginBottom: 20,
  },
  infoTitle: {
    color: colors.textColor,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoText: {
    color: '#999',
    fontSize: 14,
    marginBottom: 15,
  },
  settingsButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.btnColor,
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  settingsText: {
    color: colors.btnColor,
    fontSize: 14,
    fontWeight: '500',
  },
  storageInfo: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 8,
    width: '100%',
  },
  storageText: {
    color: '#999',
    fontSize: 14,
  },
  storageHighlight: {
    color: colors.textColor,
    fontWeight: 'bold',
  },
});

export default Downloads;
