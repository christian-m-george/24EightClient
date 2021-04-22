import React from 'react';
import { SafeAreaView, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        container: {
            flex: 1,
            backgroundColor: "grey",
            alignItems: "center",
            justifyContent: "center",
          }
    }
})


export default WelcomeScreen;