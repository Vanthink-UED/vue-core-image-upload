<template>
<aside>
    <h4> 类目 </h4>

    
    <ul>
        <li v-for="item in list" :key="item.name">
            <a :href="item.url">{{item.name}}</a>
        </li>
    </ul>
</aside>

</template>

<script>
import { routers } from '../lib/constants';
export default {
  data() {
    return {
      list: routers
    }

  }

}

</script>
