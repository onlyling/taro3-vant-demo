import { Component } from 'react';
import { View, Text, Navigator } from '@tarojs/components';
import './index.less';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>

        <View>
          <Navigator url="/pages/button/button">Button 按钮</Navigator>
        </View>
      </View>
    );
  }
}
