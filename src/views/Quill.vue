<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <div class="quill">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
      class="quill-editor"
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
var toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video"],
  ["clean"] // remove formatting button
];
export default {
  name: "quill",
  components: {
    quillEditor
  },
  data() {
    return {
      content: "<p>a</p><p>b</p><p>c</p><p>b</p><p>e</p><p>f</p>",
      editorOption: {
        modules: {
          toolbar: {
            container: toolbarOptions, // Selector for toolbar container
            handlers: { image: this.selectLocalImage }
          }
        }
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
        .get("http://sicxxx.com/api/xxxooo", {
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
    },
    selectLocalImage() {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.click();

      // Listen upload local image and save to server
      input.onchange = () => {
        const file = input.files[0];

        // file type is only image.
        if (/^image\//.test(file.type)) {
          this.saveToServer(file);
        } else {
          console.warn("You could only upload images.");
        }
      };
    },
    saveToServer(file) {
      console.log(file);
      const fd = new FormData();
      fd.append("image", file);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://127.0.0.1:3000/api/image", true);
      xhr.onload = () => {
        if (xhr.status === 200) {
          // this is callback data: url
          // const url = JSON.parse(xhr.responseText).data;
          this.insertToEditor();
        }
      };
      xhr.send(fd);
    },
    insertToEditor(url) {
      // push image url to rich editor.
      const range = this.editor.getSelection();
      this.editor.insertEmbed(
        range.index,
        "image",
        "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn"
      );
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

<style lang="scss">
.quill {
  width: 800px;
  margin: 0 auto;
}
.quill-editor {
  margin-bottom: 15px;
}
button {
  margin-right: 5px;
}
</style>