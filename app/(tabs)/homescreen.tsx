import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
            <Image     
              source={require('../../assets/logo/splash.png')}
          style={styles.headerIcon}
        />
        <Text style={styles.headerTitle}>
          <Text style={styles.headerSubtitle}>Layanan </Text>Bengkel
        </Text>
      </View>

      {/* Menu Grid */}
      <View style={styles.menuContainer}>
        <MenuItem title="Pilih Layanan Bengkel" icon="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" />
        <MenuItem title="Riwayat" icon="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" />
        <MenuItem title="Laporan" icon="https://cdn-icons-png.flaticon.com/512/1828/1828559.png" />
        <MenuItem title="Pelanggan" icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
        <MenuItem title="Mekanik" icon="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" />
        <MenuItem title="Security" icon="https://cdn-icons-png.flaticon.com/512/1041/1041883.png" />
      </View>

      {/* Promo Section */}
      <View style={styles.promoContainer}>
        <Image
          source={require('../../assets/logo/bengkel.jpg')}
          style={styles.promoImage}
        />
        <View style={styles.promoContent}>
          <Text style={styles.promoTitle}>7 Strategi Efektif Pengelolaan Bengkel Motor</Text>
          <TouchableOpacity style={styles.promoButton}>
            <Text style={styles.promoButtonText}>Baca Selengkapnya</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <BottomNavItem title="Beranda" icon="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" />
        <BottomNavItem title="Notifikasi" icon="https://cdn-icons-png.flaticon.com/512/484/484167.png" />
        <BottomNavItem title="Pengaturan" icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
      </View>
    </ScrollView>
  );
}

function MenuItem({ title, icon }) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuIconContainer}>
        <Image source={{ uri: icon }} style={styles.menuIcon} />
      </View>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );
}

function BottomNavItem({ title, icon }) {
  return (
    <TouchableOpacity style={styles.bottomNavItem}>
      <Image source={{ uri: icon }} style={styles.bottomNavIcon} />
      <Text style={styles.bottomNavText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FF8800',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  headerIcon: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontWeight: 'normal',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
  menuItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuIconContainer: {
    backgroundColor: '#FF8800',
    padding: 15,
    borderRadius: 10,
    marginBottom: 5,
  },
  menuIcon: {
    width: 40,
    height: 40,
  },
  menuText: {
    fontSize: 12,
    textAlign: 'center',
  },
  promoContainer: {
    backgroundColor: '#F9F9F9',
    margin: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  promoImage: {
    width: '100%',
    height: 150,
  },
  promoContent: {
    padding: 15,
  },
  promoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  promoButton: {
    backgroundColor: '#EAEAEA',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  promoButtonText: {
    fontSize: 12,
    color: '#007BFF',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#EAEAEA',
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  bottomNavText: {
    fontSize: 12,
    textAlign: 'center',
  },
});
