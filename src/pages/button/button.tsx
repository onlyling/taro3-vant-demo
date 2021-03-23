import React from 'react';
import { View, Text, Block } from '@tarojs/components';

import './button.less';

const VanButton: React.FC = () => {
  return (
    <Block>
      <Text>Button 按钮</Text>

      <View>
        <Text>按钮类型</Text>
      </View>

      <View>
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
      </View>

      <View>
        <Text>朴素按钮</Text>
      </View>

      <View>
        <van-button plain type="primary">
          朴素按钮
        </van-button>
        <van-button plain type="info">
          朴素按钮
        </van-button>
      </View>

      <View>
        <Text>细边框</Text>
      </View>

      <View>
        <van-button plain hairline type="primary">
          细边框按钮
        </van-button>
        <van-button plain hairline type="info">
          细边框按钮
        </van-button>
      </View>

      <View>
        <Text>禁用状态</Text>
      </View>

      <View>
        <van-button disabled type="primary">
          禁用状态
        </van-button>
        <van-button disabled type="info">
          禁用状态
        </van-button>
      </View>

      <View>
        <Text>加载状态</Text>
      </View>

      <View>
        <van-button loading type="primary" />
        <van-button loading type="primary" loadingType="spinner" />
        <van-button loading type="info" loadingText="加载中..." />
      </View>

      <View>
        <Text>按钮形状</Text>
      </View>

      <View>
        <van-button square type="primary">
          方形按钮
        </van-button>
        <van-button round type="info">
          圆形按钮
        </van-button>
      </View>

      <View>
        <Text>图标按钮</Text>
      </View>

      <View>
        <van-button icon="star-o" type="primary" />
        <van-button icon="star-o" type="primary">
          按钮
        </van-button>
        <van-button icon="https://img.yzcdn.cn/vant/logo.png" type="info">
          按钮
        </van-button>
      </View>

      <View>
        <Text>按钮尺寸</Text>
      </View>

      <View>
        <van-button type="primary" size="large">
          大号按钮
        </van-button>
        <van-button type="primary" size="normal">
          普通按钮
        </van-button>
        <van-button type="primary" size="small">
          小型按钮
        </van-button>
        <van-button type="primary" size="mini">
          迷你按钮
        </van-button>
      </View>

      <View>
        <Text>块级元素</Text>
      </View>

      <View>
        <van-button type="primary" block>
          块级元素
        </van-button>
      </View>

      <View>
        <Text>自定义颜色</Text>
      </View>

      <View>
        <van-button color="#7232dd">单色按钮</van-button>
        <van-button color="#7232dd" plain>
          单色按钮
        </van-button>
        <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</van-button>
      </View>

      <View>
        <Text>外部样式类</Text>
      </View>

      <View>
        <van-button type="primary" customClass="custom-class">
          主要按钮
        </van-button>
        <van-button loading type="primary" loadingClass="custom-class">
          主要按钮
        </van-button>
      </View>
    </Block>
  );
};

export default VanButton;
