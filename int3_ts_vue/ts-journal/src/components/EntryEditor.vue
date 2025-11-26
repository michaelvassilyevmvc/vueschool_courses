<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import { computed, ref } from "vue";
import type Emoji from "@/types/Emoji";
import type Entry from "@/types/Entry";

// data
const body = ref("");
const emoji = ref<Emoji | null>(null);
const charCount = computed<number>(() => body.value.length);
const maxCount = 280;

// methods
const handleTextInput = (e: Event) => {
  const textarea = e.target as HTMLTextAreaElement;
  if (textarea.value.length <= maxCount) {
    body.value = textarea.value;
  } else {
    body.value = textarea.value = textarea.value.substring(0, maxCount);
  }
};

// events
defineEmits<{
  (e: "@create", entry: Entry): void;
}>();
</script>
<template>
  <form
    class="entry-form"
    @submit.prevent="
      $emit('@create', {
        createdAt: new Date(),
        id: Math.random(),
        userId: 1,
        body,
        emoji,
      })
    "
  >
    <textarea
      :value="body"
      placeholder="New Journal Entry for danielkelly_io"
      @keyup="handleTextInput"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxCount }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
