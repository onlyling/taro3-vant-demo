declare namespace JSX {
  interface IntrinsicElements {
    'van-button': {
      children?: React.ReactNode;

      /**
       * 标识符
       */
      id?: string;

      /**
       * 按钮类型，可选值为 primary info warning danger
       * @default 'default'
       */
      type?: 'primary' | 'info' | 'warning' | 'danger' | 'default';

      /**
       * 按钮尺寸，可选值为 normal large small mini
       * @default 'normal'
       */
      size?: 'normal' | 'large' | 'small' | 'mini';

      /**
       * 按钮颜色，支持传入linear-gradient渐变色
       */
      color?: string;

      /**
       * 左侧图标名称或图片链接，可选值见 Icon 组件
       */
      icon?: string;

      /**
       * 图标类名前缀，同 Icon 组件的 class-prefix 属性
       * @default 'van-icon'
       */
      classPrefix?: string;

      /**
       * 是否为朴素按钮
       * @default false
       */
      plain?: boolean;

      /**
       * 是否为块级元素
       * @default false
       */
      block?: boolean;

      /**
       * 是否为圆形按钮
       * @default false
       */
      round?: boolean;

      /**
       * 是否为方形按钮
       * @default false
       */
      square?: boolean;

      /**
       * 是否禁用按钮
       * @default false
       */
      disabled?: boolean;

      /**
       * 是否使用 0.5px 边框
       * @default false
       */
      hairline?: boolean;

      /**
       * 是否显示为加载状态
       */
      loading?: boolean;

      /**
       * 加载状态提示文字
       */
      loadingText?: string;

      /**
       * 加载状态图标类型，可选值为 spinner
       * @default 'circular'
       */
      loadingType?: 'spinner' | 'circular';

      /**
       * 加载图标大小
       * @default '20px'
       */
      loadingSize?: string;

      /**
       * 自定义样式
       */
      customStyle?: string;

      /**
       * 微信开放能力，具体支持可参考 微信官方文档
       */
      openType?: string;

      /**
       * 打开 APP 时，向 APP 传递的参数
       */
      appParameter?: string;

      /**
       * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文
       * @default 'en'
       */
      lang?: 'zh_CN' | 'zh_TW' | 'en';

      /**
       * 会话来源
       */
      sessionFrom?: string;

      /**
       * 客服消息子商户 id
       */
      businessId?: string;

      /**
       * 会话内消息卡片标题
       * @default `当前标题`
       */
      sendMessageTitle?: string;

      /**
       * 会话内消息卡片点击跳转小程序路径
       * @default `当前分享路径`
       */
      sendMessagePath?: string;

      /**
       * sendMessageImg
       * @default `截图`
       */
      sendMessageImg?: string;

      /**
       * 显示会话内消息卡片
       * @default false
       */
      showMessageCard?: boolean;

      /**
       * 按钮 dataset，open-type 为 share 时，可在 onShareAppMessage 事件的 event.target.dataset.detail 中看到传入的值
       */
      dataset?: any;

      /**
       * 用于 form 组件，可选值为submit reset，点击分别会触发 form 组件的 submit/reset 事件
       */
      formType?: 'submit' | 'reset';

      /**
       * 根节点样式类
       * @description Vant 中默认添加一个 externalClasses 'custom-class'
       * @description vant-weapp/dist/common/component.js#24
       */
      customClass?: string;

      /**
       * 加载图标样式类
       */
      loadingClass?: string;
    };
  }
}
