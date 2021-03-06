import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { pushScreen } from '../../navigation/pushScreen';
import { Navigation } from 'react-native-navigation';
const choose = (props) => {
  console.log(props.data.male);
  const backProfile = () => {
    Navigation.pop(props.componentId);
  };
  const onToInterested = (data) => {
    var dataRecomment = props.data;
    Object.assign(dataRecomment, data);
    console.log(dataRecomment);
    pushScreen(props.componentId, 'Color', dataRecomment, '', false, 'chevron-left', false);
  };
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backLogin} onPress={() => backProfile()}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Sở thích</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.layoutContent}>
        <TouchableOpacity
          style={[styles.layoutItem, { borderTopColor: '#e7eaeb', borderTopWidth: 1 }]}
          onPress={() =>
            onToInterested({ '18-22t': '1', '22-35t': '0', '35-55t': '0', '55-70t': '0' })
          }
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>trên 16 tuổi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.layoutItem}
          onPress={() =>
            onToInterested({ '18-22t': '0', '22-35t': '1', '35-55t': '0', '55-70t': '0' })
          }
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>22 - 35 tuổi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.layoutItem}
          onPress={() =>
            onToInterested({ '18-22t': '0', '22-35t': '0', '35-55t': '1', '55-70t': '0' })
          }
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>36 - 55 tuổi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.layoutItem}
          onPress={() =>
            onToInterested({ '18-22t': '0', '22-35t': '0', '35-55t': '0', '55-70t': '1' })
          }
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>55 - 70 tuổi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default choose;

const styles = StyleSheet.create({
  layoutTop: {
    backgroundColor: '#fff',
    height: 60,
  },
  container: {
    margin: 20,
  },
  backLogin: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  txtBack: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  layoutContent: {
    backgroundColor: '#fff',
    paddingTop: 20,
    height: 750,
    borderTopColor: '#e7eaeb',
    borderTopWidth: 1,
  },
  layoutItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomColor: '#e7eaeb',
    borderBottomWidth: 1,
  },
  txtCategory: {
    marginLeft: 20,
  },
});
