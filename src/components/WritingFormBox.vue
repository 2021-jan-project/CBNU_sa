<template>
  <div class="form-card">
    <div class="form-header">
      <div class="profile-avatar-wrapper">
        <img src="../images/user-default.png" alt="avatar" class="profile-avatar" />
      </div>
      <div class="profile-content">
        <h6 class="profile-name">Torry Han</h6>
        <p class="profile-grade">admin</p>
      </div>
    </div>
    <form class="form-content-wrapper">
      <div class="form-content">
        <div class="editor" @click="contentFocus">
          <editor-menu-bar
            v-if="swMenubar"
            :editor="editor"
            v-slot="{ commands, isActive, getMarkAttrs }"
          >
            <div class="menubar">
              <button
                class="menubar__button"
                @click.prevent="showLinkMenu(getMarkAttrs('link'))"
                :class="{ 'is-active': isActive.link() }"
              >
                <font-awesome-icon :icon="['fas', 'link']" />
              </button>
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.bold() }"
                @click.prevent="commands.bold"
              >
                <font-awesome-icon :icon="['fas', 'bold']" />
              </button>
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.italic() }"
                @click.prevent="commands.italic"
              >
                <font-awesome-icon :icon="['fas', 'italic']" />
              </button>
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.strike() }"
                @click.prevent="commands.strike"
              >
                <font-awesome-icon :icon="['fas', 'strikethrough']" />
              </button>
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.underline() }"
                @click.prevent="commands.underline"
              >
                <font-awesome-icon :icon="['fas', 'underline']" />
              </button>
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.code() }"
                @click.prevent="commands.code"
              >
                <font-awesome-icon :icon="['fas', 'code']" />
              </button>
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.code_block() }"
                @click.prevent="commands.code_block"
              >
                <font-awesome-icon :icon="['fas', 'file-code']" />
              </button>
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.paragraph() }"
                @click.prevent="commands.paragraph"
              >
                <font-awesome-icon :icon="['fas', 'paragraph']" />
              </button>
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                @click.prevent="commands.heading({ level: 1 })"
              >
                H1
              </button>
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                @click.prevent="commands.heading({ level: 2 })"
              >
                H2
              </button>
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                @click.prevent="commands.heading({ level: 3 })"
              >
                H3
              </button>
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.bullet_list() }"
                @click.prevent="commands.bullet_list"
              >
                <font-awesome-icon :icon="['fas', 'list-ul']" />
              </button>
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.ordered_list() }"
                @click.prevent="commands.ordered_list"
              >
                <font-awesome-icon :icon="['fas', 'list-ol']" />
              </button>
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.blockquote() }"
                @click.prevent="commands.blockquote"
              >
                <font-awesome-icon :icon="['fas', 'quote-left']" />
              </button>
              <button class="menubar__button" @click.prevent="commands.horizontal_rule">
                <font-awesome-icon :icon="['fas', 'window-minimize']" />
              </button>
              <button class="menubar__button" @click.prevent="commands.undo">
                <font-awesome-icon :icon="['fas', 'undo']" />
              </button>
              <button class="menubar__button" @click.prevent="commands.redo">
                <font-awesome-icon :icon="['fas', 'redo']" />
              </button>
            </div>
          </editor-menu-bar>
          <editor-content class="editor__content" :editor="editor" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  CodeBlockHighlight,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from "tiptap-extensions";

import bash from "highlight.js/lib/languages/bash";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import python from "highlight.js/lib/languages/python";
import c from "highlight.js/lib/languages/c";
import cpp from "highlight.js/lib/languages/cpp";
import csharp from "highlight.js/lib/languages/csharp";
import asciidoc from "highlight.js/lib/languages/asciidoc";
import apache from "highlight.js/lib/languages/apache";
import armasm from "highlight.js/lib/languages/armasm";
import dos from "highlight.js/lib/languages/dos";
import django from "highlight.js/lib/languages/django";
import markdown from "highlight.js/lib/languages/markdown";
import excel from "highlight.js/lib/languages/excel";
import go from "highlight.js/lib/languages/go";
import java from "highlight.js/lib/languages/java";
import json from "highlight.js/lib/languages/json";
import php from "highlight.js/lib/languages/php";
import scss from "highlight.js/lib/languages/scss";
import sql from "highlight.js/lib/languages/sql";
import swift from "highlight.js/lib/languages/swift";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLink,
  faBold,
  faItalic,
  faStrikethrough,
  faUnderline,
  faCode,
  faFileCode,
  faParagraph,
  faListUl,
  faListOl,
  faQuoteLeft,
  faWindowMinimize,
  faUndo,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { library as faLibrary } from "@fortawesome/fontawesome-svg-core";

faLibrary.add(
  faLink,
  faBold,
  faItalic,
  faStrikethrough,
  faUnderline,
  faCode,
  faFileCode,
  faParagraph,
  faListUl,
  faListOl,
  faQuoteLeft,
  faWindowMinimize,
  faUndo,
  faRedo,
);

export default {
  props: {
    boardName: String,
  },
  data() {
    return {
      editor: null,
      swMenubar: true,
      linkUrl: null,
      linkMenuIsActive: false,
    };
  },
  components: {
    FontAwesomeIcon,
    EditorContent,
    EditorMenuBar,
  },
  methods: {
    showLinkMenu(attrs) {
      this.linkUrl = attrs.href;
      this.linkMenuIsActive = true;
      this.$nextTick(() => {
        this.$refs.linkInput.focus();
      });
    },
    hideLinkMenu() {
      this.linkUrl = null;
      this.linkMenuIsActive = false;
    },
    setLinkUrl(command, url) {
      command({ href: url, target: "_blank" });
      this.hideLinkMenu();
    },
    contentFocus() {
      if (event.target.className == "editor__content") {
        event.target.firstChild.focus();
      }
    },
  },
  mounted: function() {
    this.editor = new Editor({
      editable: true,
      extensions: [
        new Blockquote(),
        new BulletList(),
        new CodeBlock(),
        new CodeBlockHighlight({
          languages: {
            bash,
            javascript,
            css,
            xml,
            python,
            c,
            cpp,
            csharp,
            asciidoc,
            apache,
            armasm,
            dos,
            django,
            markdown,
            excel,
            go,
            java,
            json,
            php,
            scss,
            sql,
            swift,
          },
        }),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new Link({ rel: "", target: "_blank" }),
        new HorizontalRule(),
        new ListItem(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Bold(),
        new Code(),
        new Italic(),
        new Strike(),
        new Underline(),
        new History(),
      ],
      content: "",
      onUpdate: ({ getHTML }) => {
        this.$emit("editorContent", getHTML());
      },
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style lang="scss" scoped>
@each $theme in $themes {
  &.#{map-get($theme, "name")} {
    @each $sidebar in $sidebars {
      &.#{map-get($sidebar, "name")} {
        margin: 0;
        font-size: 1rem;
        box-sizing: border-box;

        .form-card {
          border: none;
          margin-bottom: 2rem;
          box-shadow: $shadow2;
          background-color: map-get($map: $theme, $key: "content-bg");
          background-clip: border-box;
          border-radius: 0.428rem;
          transition: all 0.3s ease-in-out;
          position: relative;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          padding: 1.5rem;

          .form-header {
            display: flex;
            align-items: flex-start;
            box-sizing: border-box;

            .profile-avatar-wrapper {
              margin-right: 0.75rem;
              display: flex;
              align-self: flex-start;
              box-sizing: border-box;
              width: 38px;
              height: 38px;
              text-align: center;
              border-radius: 50%;
              user-select: none;

              .profile-avatar {
                width: 100%;
                height: 100%;
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                object-fit: cover;
                user-select: none;
              }
            }

            .profile-content {
              color: map-get($map: $theme, $key: "font-light");
              letter-spacing: 0.1rem;

              .profile-name {
                margin-bottom: 0.2rem;
                margin-top: 0;
                font-size: 1rem;
                font-weight: 400;
              }

              .profile-grade {
                margin: 0;
                line-height: 1.3rem;
                box-sizing: border-box;
                font-size: 0.8rem;
                font-weight: 300;
              }
            }
          }

          .form-content-wrapper {
            margin-top: 1.5rem;
            box-sizing: border-box;

            .form-content {
              margin-right: -1rem;
              margin-left: -1rem;
              display: flex;
              flex-wrap: wrap;
              box-sizing: border-box;

              .editor {
                position: relative;
                padding: 1rem;
                color: map-get($map: $theme, $key: "font");
                min-width: 100%;
                min-height: 300px;
                max-height: calc(100% - 3.5rem);
                border: 1px solid map-get($map: $theme, $key: "border");
                border-radius: 0.357rem;

                .menubar button {
                  color: map-get($map: $theme, $key: "font");

                  &:hover {
                    background-color: rgba(map-get($theme, "color1"), 0.2);
                  }
                }

                &__content {
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  width: 100%;
                  padding: 1.5rem;
                  height: 100%;
                  overflow: auto;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
