
let routers = [
  {
    name: 'Home',
    cn_name: '首页',
  },
  {
    name: 'Get Started',
    cn_name: '快速开始',
  }
]

for (const item of routers) {
  item.url = item['name'].toLowerCase();
}
console.log(routers);
export  {
    routers
}
