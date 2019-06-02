<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <div>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    ></quill-editor>
    <button @click="get">拿</button>
    <button @click="send">送出</button>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
import Quill from "quill";
import $ from "jquery";

export default {
  name: "quill",
  components: {
    quillEditor
  },
  data() {
    return {
      content: "",
      editorOption: {
        // some quill options
      }
    };
  },
  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
    get() {
      this.$axios
        .get("http://127.0.0.1:3000/api/quill", {
          params: {
            ID: 41
          }
        })
        .then(res => {
          console.log(res);
          this.content = res.data.content;
        })
        .catch(err => {
          console.error(err);
        });
    },
    send() {
      this.$axios
        .post("http://127.0.0.1:3000/api/quill", { content: this.content })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  }
};
</script>