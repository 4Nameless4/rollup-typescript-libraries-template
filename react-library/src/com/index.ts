import style from "./style.module.css";

export default function render(props: { entry: string }): string {
  const test = style.text_widget1;
  const sa = JSON.stringify(props);
  return (sa + test).replace(new RegExp(`${test}$`), "");
}
