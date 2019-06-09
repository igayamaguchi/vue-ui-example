<template>
  <div>
    <card
      :article="article"
      image="https://via.placeholder.com/300x200"
      title="タイトル">
      <template #default="s">
        <p :class="s.item.style">{{ s.item.body }}</p>
      </template>
    </card>
  </div>
</template>

<script>
import Card from '@/components/card/Card'

export default {
  name: 'CardPage',
  components: { Card },
  data() {
    return {
      article: {
        title: 'タイトル',
        body: 'テキスト',
      },
    }
  },
}
</script>
