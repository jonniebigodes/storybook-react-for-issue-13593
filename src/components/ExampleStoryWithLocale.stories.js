import React from "react";
import Boop from "./Boop";
export default {
  component: Boop,
  title: "Task",
};
const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "es":
      return "Hola!";
    case "fr":
      return "Bonjour!";
    case "kr":
      return "안녕하세요!";
    case "zh":
      return "你好!";
    default:
      return "Hello!";
  }
};
// current docs implementation
export const StoryWithLocale = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return <>{caption}</>;
};
//
// example story with a component (could have been another randome element)
export const StoryWithLocaleAndComponent = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return <Boop locale={caption} />;
};
