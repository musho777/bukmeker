import React, { useCallback, useMemo, forwardRef} from 'react';
import { View,StyleSheet } from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
export const BootomModal = forwardRef(({children},ref) =>{

    const snapPoints = useMemo(() => ['30%'], []);
    const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        animatedIndex={{
          value: 1,
        }}
        opacity={0.85}
      />
    ), [])
    return (
      <View style={styles.container}>
        <BottomSheetModal
          ref={ref}
          index={0}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
        >
          {children}
        </BottomSheetModal>
      </View>
    );
  });
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
    },
   
  });
  