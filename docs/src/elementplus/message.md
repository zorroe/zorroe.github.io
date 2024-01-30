# Message

## 配置项

```javascript
export const messageProps = buildProps({
  /**
   * @自定义类名
   */
  customClass: {
    type: String,
    default: messageDefaults.customClass,  // ''
  },
  /**
   * @文字是否居中
   */
  center: {
    type: Boolean,
    default: messageDefaults.center,  // false
  },
  /**
   * @是否将message属性作为HTML片段处理
   */
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: messageDefaults.dangerouslyUseHTMLString,  // false
  },
  /**
   * @显示时间，单位为毫秒。设为0则不会自动关闭
   */
  duration: {
    type: Number,
    default: messageDefaults.duration,  // 3000
  },
  /**
   * @自定义图标，该属性会覆盖`type`的图标
   */
  icon: {
    type: iconPropType,
    default: messageDefaults.icon,  // undefined
  },
  /**
   * @message的dom id
   */
  id: {
    type: String,
    default: messageDefaults.id,  //  ''
  },
  /**
   * @消息文字
   */
  message: {
    type: definePropType<string | VNode | (() => VNode)>([
      String,
      Object,
      Function,
    ]),
    default: messageDefaults.message,  // ''
  },
  /**
   * @关闭时的回调函数，参数为被关闭的message实例
   */
  onClose: {
    type: definePropType<() => void>(Function),
    required: false,
  },
  /**
   * @是否显示关闭按钮
   */
  showClose: {
    type: Boolean,
    default: messageDefaults.showClose,  // false
  },
  /**
   * @消息类型
   */
  type: {
    type: String,
    values: messageTypes,
    default: messageDefaults.type,   // info
  },
  /**
   * @Message距离窗口顶部的偏移量
   */
  offset: {
    type: Number,
    default: messageDefaults.offset,  // 16
  },
  /**
   * @description input box size
   */
  zIndex: {
    type: Number,
    default: messageDefaults.zIndex,  // 0
  },
  /**
   * @description merge messages with the same content, type of VNode message is not supported
   */
  grouping: {
    type: Boolean,
    default: messageDefaults.grouping,   // false
  },
  /**
   * @description The number of repetitions, similar to badge, is used as the initial number when used with `grouping`
   */
  repeatNum: {
    type: Number,
    default: messageDefaults.repeatNum,  // 1
  },
} as const)
```

## 方法

1. `normalizeOptions`：根据传入的params返回message的配置项

   ```typescript
   const normalizeOptions = (params?: MessageParams) => {
     const options: MessageOptions =
       !params || isString(params) || isVNode(params) || isFunction(params)
         ? { message: params }
         : params
     
     const normalized = {
       ...messageDefaults,
       ...options,
     }
   
     if (!normalized.appendTo) {
       normalized.appendTo = document.body
     } else if (isString(normalized.appendTo)) {
       let appendTo = document.querySelector<HTMLElement>(normalized.appendTo)
   
       // should fallback to default value with a warning
       if (!isElement(appendTo)) {
         debugWarn(
           'ElMessage',
           'the appendTo option is not an HTMLElement. Falling back to document.body.'
         )
         appendTo = document.body
       }
   
       normalized.appendTo = appendTo
     }
   
     return normalized as MessageParamsNormalized
   }
   ```

2. `createMessage`

   ```typescript
   const createMessage = (
     { appendTo, ...options }: MessageParamsNormalized,
     context?: AppContext | null
   ): MessageContext => {
     const id = `message_${seed++}`  // 前面定义 let seed = 1
     const userOnClose = options.onClose
   
     const container = document.createElement('div')
   
     const props = {
       ...options,
       // now the zIndex will be used inside the message.vue component instead of here.
       // zIndex: nextIndex() + options.zIndex
       id,
       onClose: () => {
         userOnClose?.()
         closeMessage(instance)
       },
   
       // clean message element preventing mem leak
       onDestroy: () => {
         // since the element is destroy, then the VNode should be collected by GC as well
         // we do not want cause any mem leak because we have returned vm as a reference to users
         // so that we manually set it to false.
         render(null, container)
       },
     }
     const vnode = createVNode(
       MessageConstructor,
       props,
       isFunction(props.message) || isVNode(props.message)
         ? {
             default: isFunction(props.message)
               ? props.message
               : () => props.message,
           }
         : null
     )
     vnode.appContext = context || message._context
   
     render(vnode, container)
     // instances will remove this item when close function gets called. So we do not need to worry about it.
     appendTo.appendChild(container.firstElementChild!)
   
     const vm = vnode.component!
   
     const handler: MessageHandler = {
       // instead of calling the onClose function directly, setting this value so that we can have the full lifecycle
       // for out component, so that all closing steps will not be skipped.
       close: () => {
         vm.exposed!.visible.value = false
       },
     }
   
     const instance: MessageContext = {
       id,
       vnode,
       vm,
       handler,
       props: (vnode.component as any).props,
     }
   
     return instance
   }
   ```

   