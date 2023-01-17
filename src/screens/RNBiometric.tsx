import {StyleSheet, View, Alert} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import React, {useEffect, useCallback, useState, useMemo} from 'react';

const PAYLOAD_SALT = 'heyLove'; // from .env

export const RNBiometric = () => {
  const [biometricData, setBiometricData] = useState({
    available: false,
    signature: '',
    biometryType: '',
  });

  const rnBiometrics = useMemo(() => new ReactNativeBiometrics(), []);

  const isAvailableBiometric = useCallback(async () => {
    try {
      const {biometryType, available} = await rnBiometrics.isSensorAvailable();

      if (biometryType && available) {
        const {success, signature} = await rnBiometrics.createSignature({
          promptMessage: 'Log In',
          payload: PAYLOAD_SALT,
        });

        if (success && signature) {
          setBiometricData({
            signature,
            available,
            biometryType,
          });

          Alert.alert('Signature generated success', `${signature}`);
        }
      }
    } catch (error) {
      throw error;
    }
  }, [rnBiometrics]);

  useEffect(() => {
    isAvailableBiometric();
  }, [isAvailableBiometric]);

  const biometric = useCallback(async () => {
    try {
      const {success, signature} = await rnBiometrics.createSignature({
        promptMessage: 'Log In',
        payload: PAYLOAD_SALT,
      });

      if (success && signature) {
        setBiometricData(prev => ({
          ...prev,
          signature,
        }));
        Alert.alert('Signature generated success', `${signature}`);
      }
    } catch (error) {
      throw error;
    }
  }, [rnBiometrics]);

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
