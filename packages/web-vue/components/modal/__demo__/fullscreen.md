```yaml
title:
  zh-CN: 全屏
  en-US: Fullscreen
```

## zh-CN

开启 `fullscreen` 属性，可以让对话框占满整个容器。

---

## en-US

Enable the `fullscreen` property to make the dialog fill the entire container.

---

```vue
<template>
  <a-button @click="handleClick">Open Modal</a-button>
  <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel" fullscreen>
    <template #title>
      Title
    </template>
    <div>You can cusstomize modal body text by the current situation. This modal will be closed immediately once you press the OK button.</div>
  </a-modal>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    handleClick() {
      this.visible = true;
    },
    handleOk() {
      this.visible = false;
    },
    handleCancel() {
      this.visible = false;
    },
  }
};
</script>
```
