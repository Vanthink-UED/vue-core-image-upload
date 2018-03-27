
let routers = [
  {
    name: 'Home',
    cn_name: '首页',
  },
  {
    name: 'Get Started',
    cn_name: '快速开始',
  },
  {
    name: 'Props',
    cn_name: '基本属性'
  },
  {
    name: 'Events',
    cn_name: '响应事件'
  },
  {
    name: 'Custom Component',
    cn_name: '自定义组件'
  },
  {
    name: 'Crop Image',
    cn_name: '裁剪图片'
  },
  {
    name: 'Resize Image',
    cn_name: '调整图片'
  },
  {
    name: 'Multiple File',
    cn_name: '上传多文件'
  },
  {
    name: 'Compress Image',
    cn_name: '压缩图片'
  },
  {
    name: 'Post Data',
    cn_name: '向服务端发送数据'
  },
  {
    name: 'Others',
    cn_name: '其他 & 问题反馈'
  }
]

for (const item of routers) {
  item.url = item['name'].toLowerCase().replace(/\s+/g, '-');
}
export  {
    routers
}
