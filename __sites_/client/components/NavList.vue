<template>
<aside>
    <h4>类目</h4>
    <ul>
        <li v-for="item in list" :key="item.name">
          <a :href="item.url" :class="{'active': item.url == url}" @click="setUrl(item.url)">{{item.name}}</a>
        </li>
    </ul>
</aside>

</template>

<script>
import { routers } from '../lib/constants';
import vendor from '../lib/vendor';

const lan = vendor.getLocalData('lan') || 'cn';

for(var item of routers) {
  item.url = '#/' + lan + '/' + item.url;
  if (lan !== 'en') {
    item.name = item.cn_name;
  }
}

export default {
  data() {
    return {
      list: routers,
      url: location.hash,
    }

  },

  methods: {
    setUrl(url) {
      this.url = url;
      const $aside = document.querySelector('aside');
      $aside.className = '';
    },

  }

}

</script>
