/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';
import hoacuc from '../../assests/img/hoacuc.png';
import ChatShop from '../../components/ChatShop';
import ChatUser from '../../components/ChatUser';
import ChatAction from '../../redux/ChatRedux/action';
import { Navigation } from 'react-native-navigation';
const { width, height } = Dimensions.get('window');
const _ = require('lodash');

const index = (props) => {
  const scrollViewRef = useRef();
  const [ContentTest, setContentTest] = useState('');
  const [Chat, setChatRealtime] = useState(useSelector((state) => state.chat.responseProductChat));
  const chatUser = useSelector((state) => state.chat.responseProductChat);
  console.log(chatUser);
  const dispatch = useDispatch();

  var data = [];
  if (chatUser) {
    data = chatUser;
  }
  const insertMessage = () => {
    const dataChat = {
      id_user: 2,
      id_admin: 9,
      content: ContentTest,
    };
    dispatch(ChatAction.getInsertChat(dataChat, onInsertSuccess));
  };
  const dataChat = {
    id_user: 2,
    id_admin: 9,
  };
  const onInsertSuccess = () => {
    const dataChat = {
      id_user: 2,
      id_admin: 9,
    };
    dispatch(ChatAction.getChat(dataChat, onSuccessChat));
  };
  const onSuccessChat = () => {};
  // useEffect(() => {
  //   setChatRealtime(chatUser);
  // }, [chatUser, dispatch]);
  const backProfile = () => {
    Navigation.pop(props.componentId);
  };
  return (
    <View style={styles.contain}>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backLogin} onPress={() => backProfile()}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Tin nhắn</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={styles.layoutContent}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        <View style={styles.layoutDay}>
          <Text style={styles.txtTime}>Hôm nay, 10:20 AM</Text>
        </View>
        {!_.isEmpty(data) ? (
          chatUser.map((item, index) => {
            return (
              <View key={index}>
                {(() => {
                  if (item.id_role == 0) {
                    return <ChatUser content={item.content} />;
                  } else {
                    return <ChatShop content={item.content} />;
                  }
                })()}
              </View>
            );
          })
        ) : (
          <View />
        )}
        {/* {Chat.map((item, index) => {
          return (
            <View key={index}>
              {(() => {
                if (item.id_role == 0) {
                  return <ChatUser content={item.content} />;
                } else {
                  return <ChatShop content={item.content} />;
                }
              })()}
            </View>
          );
        })} */}
        <View style={styles.layoutSpace} />
      </ScrollView>
      {/* <ScrollView> */}
      <View style={styles.layoutInput}>
        <TextInput
          style={styles.ipEnter}
          onChangeText={(text) => setContentTest(text)}
          placeholder="Nhập nội dung ..."
        />
        <Icon style={styles.iconMic} name="microphone" size={20} color="#8ac02a" />
        <TouchableOpacity style={styles.iconPlus} onPress={() => insertMessage()}>
          <Icon name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  layoutTop: {
    backgroundColor: '#fff',
    height: 65,
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
    padding: 30,
    paddingTop: 15,
    zIndex: 0,
    borderTopColor: '#e7eaeb',
    borderTopWidth: 1,
    // height: width - 300,
  },
  layoutDay: {
    alignItems: 'center',
  },
  txtTime: {
    padding: 10,
    backgroundColor: '#fff',
    width: 150,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  layoutSpace: {
    height: 50,
  },
  layoutMesShop: {
    flexDirection: 'row',
    marginTop: 20,
    width: 220,
  },
  iconAvatar: {
    width: 25,
    height: 25,
    padding: 30,
    backgroundColor: '#e7eaeb',
    borderRadius: 100,
  },
  iconCircle: {
    position: 'absolute',
    top: 45,
    left: 45,
  },
  txtMesShop: {
    marginLeft: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  layoutMesUser: {
    marginTop: 20,
    flexDirection: 'column',
  },
  layoutRowUserTxt: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  txtMesUser: {
    width: 220,
    marginLeft: 20,
    backgroundColor: '#FF8C00',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  imgSend: {
    width: 220,
    height: 200,
  },
  layoutInput: {
    margin: 30,
    marginTop: 0,
    marginBottom: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  ipEnter: {
    paddingLeft: 0,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  iconMic: {
    top: -35,
    left: -110,
    zIndex: 100,
    color: '#8ac02a',
  },
  iconPlus: {
    width: 50,
    height: 50,
    backgroundColor: '#8ac02a',
    borderRadius: 40,
    top: -72,
    left: 135,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
