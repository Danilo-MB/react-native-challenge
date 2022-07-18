import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet } from 'react-native';
import {
  Button,
  ButtonText,
  ButtonWrapper,
  ModalView,
  TextWrapper,
  Title,
  Wrapper,
  Location,
} from './styled';
import LocationIcon from '../Icons/Location';
import Loading from '../Loading';

const Prompt = ({ location }) => {

  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    setModalVisible(true);
  }, []);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      >
      <Wrapper>
        <ModalView
          width='65%'
          style={styles.modalView}
          visible={modalVisible}>
          <TextWrapper>
            <Title>
              Wecome to Weather App
            </Title>
            <LocationIcon color='gray' width={24} height={24} />
            <Location>
              {location}
            </Location>
          </TextWrapper>
          <ButtonWrapper>
            <Button onPress={() => setModalVisible(false)}>
              <ButtonText>
                Go to app
              </ButtonText>
            </Button>
          </ButtonWrapper>
        </ModalView>
      </Wrapper>
    </Modal>
  );
};

export default Prompt;

const styles = StyleSheet.create({
  modalView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
