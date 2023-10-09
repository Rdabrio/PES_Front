import { StyleSheet, Text, View } from 'react-native'
import Main from './src/components/Main.jsx'
import { NativeRouter } from 'react-router-native'

export default function App() {
  return (
    <NativeRouter>
      <Main></Main>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
