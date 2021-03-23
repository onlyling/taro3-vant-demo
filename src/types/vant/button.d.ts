declare namespace JSX {
  interface IntrinsicElements {
    'van-button': {
      children?: React.ReactChild;

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
      'class-prefix'?: string;

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
      'loading-text'?: string;

      /**
       * 加载状态图标类型，可选值为 spinner
       * @default 'circular'
       */
      'loading-type'?: 'spinner' | 'circular';

      /**
       * 加载图标大小
       * @default '20px'
       */
      'loading-size'?: string;

      /**
       * 自定义样式
       */
      'custom-style'?: string;

      /**
       * 微信开放能力，具体支持可参考 微信官方文档
       */
      'open-type'?: string;

      /**
       * 打开 APP 时，向 APP 传递的参数
       */
      'app-parameter'?: string;

      /**
       * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文
       * @default 'en'
       */
      lang?: 'zh_CN' | 'zh_TW' | 'en';

      /**
       * 会话来源
       */
      'session-from'?: string;

      /**
       * 客服消息子商户 id
       */
      'business-id'?: string;

      /**
       * 会话内消息卡片标题
       * @default `当前标题`
       */
      'send-message-title'?: string;

      /**
       * 会话内消息卡片点击跳转小程序路径
       * @default `当前分享路径`
       */
      'send-message-path'?: string;

      /**
       * sendMessageImg
       * @default `截图`
       */
      'send-message-img'?: string;

      /**
       * 显示会话内消息卡片
       * @default false
       */
      'show-message-card'?: boolean;

      /**
       * 按钮 dataset，open-type 为 share 时，可在 onShareAppMessage 事件的 event.target.dataset.detail 中看到传入的值
       */
      dataset?: any;

      /**
       * 用于 form 组件，可选值为submit reset，点击分别会触发 form 组件的 submit/reset 事件
       */
      'form-type'?: 'submit' | 'reset';
    };
  }
}
